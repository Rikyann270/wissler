"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  MapPin, 
  Gauge, 
  Thermometer, 
  Search, 
  Satellite, 
  Truck, 
  Ship, 
  Plane, 
  FileText, 
  CheckCircle2, 
  Clock, 
  Loader2, 
  Compass, 
  Activity, 
  ArrowRight 
} from "lucide-react";

// Service types supported
export type ServiceType = "road" | "sea-air" | "customs" | "special";

interface TrackerData {
  trackingId: string;
  serviceType: ServiceType;
  title: string;
  origin: string;
  transit: string;
  destination: string;
  progressPercent: number;
  speedUnit: string;
  speedBase: number;
  tempBase: number;
  tempLabel: string;
  auxLabel: string;
  auxBase: number;
  auxUnit: string;
  latBase: number;
  lngBase: number;
  milestones: { label: string; time: string; status: "completed" | "active" | "pending" }[];
}

// Custom mock datasets for the 4 core service types
const DEFAULT_DATASETS: Record<ServiceType, TrackerData> = {
  road: {
    trackingId: "WS-7402-ROAD",
    serviceType: "road",
    title: "FTL Euro-Express Transport",
    origin: "Rotterdam Port (NL)",
    transit: "Frankfurt Hub (DE)",
    destination: "Munich Terminal (DE)",
    progressPercent: 68.214,
    speedUnit: "km/h",
    speedBase: 82.5,
    tempBase: 4.2,
    tempLabel: "Cold Chain Temp",
    auxLabel: "Shock Level",
    auxBase: 0.02,
    auxUnit: "G",
    latBase: 50.1109,
    lngBase: 8.6821,
    milestones: [
      { label: "Rotterdam Hub Dispatched", time: "Dec 10, 08:30", status: "completed" },
      { label: "Border Crossing Clear", time: "Dec 10, 14:15", status: "completed" },
      { label: "Frankfurt Hub Transit", time: "Dec 11, 02:40", status: "active" },
      { label: "Munich Terminal Arrival", time: "Dec 11, 16:30", status: "pending" }
    ]
  },
  "sea-air": {
    trackingId: "WS-8340-AIR",
    serviceType: "sea-air",
    title: "Global Sea-Air Intermodal",
    origin: "Shanghai Cargo Hub (CN)",
    transit: "Dubai Port Terminal (AE)",
    destination: "Hamburg Hub (DE)",
    progressPercent: 45.891,
    speedUnit: "km/h",
    speedBase: 842.0,
    tempBase: 18.5,
    tempLabel: "Cargo Bay Temp",
    auxLabel: "Altitude",
    auxBase: 10800,
    auxUnit: "m",
    latBase: 25.2048,
    lngBase: 55.2708,
    milestones: [
      { label: "Shanghai Port Departure", time: "Dec 08, 22:00", status: "completed" },
      { label: "Dubai Transfer Completed", time: "Dec 10, 04:30", status: "completed" },
      { label: "Air Transit Flight LH-92", time: "Dec 11, 09:15", status: "active" },
      { label: "Hamburg Cargo Arrival", time: "Dec 11, 23:45", status: "pending" }
    ]
  },
  customs: {
    trackingId: "WS-2041-CUST",
    serviceType: "customs",
    title: "European Customs Clearance",
    origin: "London Gateway (UK)",
    transit: "Calais Border Control (FR)",
    destination: "Paris Distribution (FR)",
    progressPercent: 88.512,
    speedUnit: "pts",
    speedBase: 99.8,
    tempBase: 21.0,
    tempLabel: "Document Accuracy",
    auxLabel: "Duty Rate Applied",
    auxBase: 4.2,
    auxUnit: "%",
    latBase: 50.9513,
    lngBase: 1.8587,
    milestones: [
      { label: "Declaration Pre-Lodged", time: "Dec 10, 09:00", status: "completed" },
      { label: "Screener Assessment Pass", time: "Dec 10, 10:30", status: "completed" },
      { label: "Calais Customs Release", time: "Dec 10, 14:00", status: "active" },
      { label: "Final Gate Exit & Clearance", time: "Dec 10, 15:30", status: "pending" }
    ]
  },
  special: {
    trackingId: "WS-9021-SPEC",
    serviceType: "special",
    title: "High-Value Pharma Cargo",
    origin: "Zurich BioHub (CH)",
    transit: "JFK Airport (US)",
    destination: "Boston Clinical Center (US)",
    progressPercent: 54.195,
    speedUnit: "km/h",
    speedBase: 865.0,
    tempBase: -78.4,
    tempLabel: "Dry-Ice Cryo Temp",
    auxLabel: "G-Force Shield",
    auxBase: 1.01,
    auxUnit: "G",
    latBase: 42.3601,
    lngBase: -71.0589,
    milestones: [
      { label: "Zurich Pharma Secure Load", time: "Dec 10, 01:00", status: "completed" },
      { label: "Zurich Airport Cryo Prep", time: "Dec 10, 04:30", status: "completed" },
      { label: "Transatlantic Flight Cargo Bay", time: "Dec 10, 11:15", status: "active" },
      { label: "Boston Delivery Reception", time: "Dec 10, 17:00", status: "pending" }
    ]
  }
};

export const HeroTracker: React.FC<{ serviceType: ServiceType }> = ({ serviceType }) => {
  const [activeTab, setActiveTab] = useState<"route" | "telemetry" | "search">("route");
  const [currentData, setCurrentData] = useState<TrackerData>(DEFAULT_DATASETS[serviceType]);
  
  // Interactive form search states
  const [queryInput, setQueryInput] = useState("");
  const [loadingState, setLoadingState] = useState(false);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  
  // Real-time micro-fluctuations (satellite telemetry simulation)
  const [realtimeProgress, setRealtimeProgress] = useState(currentData.progressPercent);
  const [realtimeSpeed, setRealtimeSpeed] = useState(currentData.speedBase);
  const [realtimeTemp, setRealtimeTemp] = useState(currentData.tempBase);
  const [realtimeAux, setRealtimeAux] = useState(currentData.auxBase);
  const [realtimeLat, setRealtimeLat] = useState(currentData.latBase);
  const [realtimeLng, setRealtimeLng] = useState(currentData.lngBase);
  
  // Countdown timer for next checkpoint (seconds ticking)
  const [countdownSeconds, setCountdownSeconds] = useState(4839);

  // Sync state whenever the core dataset changes (e.g. when selected service changes or user queries)
  useEffect(() => {
    setRealtimeProgress(currentData.progressPercent);
    setRealtimeSpeed(currentData.speedBase);
    setRealtimeTemp(currentData.tempBase);
    setRealtimeAux(currentData.auxBase);
    setRealtimeLat(currentData.latBase);
    setRealtimeLng(currentData.lngBase);
    setCountdownSeconds(Math.floor(Math.random() * 5000) + 2000);
  }, [currentData]);

  // Live updates interval (e.g., coordinates shift, progress increments, speed fluctuates)
  useEffect(() => {
    const timer = setInterval(() => {
      // 1. Increment progress slightly to simulate high-frequency tracking
      setRealtimeProgress(prev => {
        if (prev >= 100) return 0;
        return Number((prev + 0.0007).toFixed(6));
      });

      // 2. Ticking countdown timer
      setCountdownSeconds(prev => (prev > 0 ? prev - 1 : 3600));

      // 3. Fluctuating physical sensors
      setRealtimeSpeed(prev => {
        const delta = (Math.random() - 0.5) * (currentData.serviceType === "sea-air" ? 4.0 : 0.8);
        return Number((prev + delta).toFixed(1));
      });

      setRealtimeTemp(prev => {
        const delta = (Math.random() - 0.5) * 0.08;
        return Number((prev + delta).toFixed(2));
      });

      setRealtimeAux(prev => {
        if (currentData.auxLabel === "Altitude") {
          const delta = (Math.random() - 0.5) * 8;
          return Math.round(prev + delta);
        } else if (currentData.auxLabel === "Shock Level") {
          const rand = Math.random();
          return rand > 0.95 ? 0.15 : 0.02; // occasional small shock bump
        } else if (currentData.auxLabel === "G-Force Shield") {
          const delta = (Math.random() - 0.5) * 0.02;
          return Number((prev + delta).toFixed(2));
        }
        return prev;
      });

      // 4. Coordinates shift microdecimals
      setRealtimeLat(prev => prev + (Math.random() - 0.5) * 0.0001);
      setRealtimeLng(prev => prev + (Math.random() - 0.5) * 0.0001);

    }, 800);

    return () => clearInterval(timer);
  }, [currentData]);

  // Function to handle tracking ID inquiry
  const handleTrackingSearch = (idToSearch: string) => {
    if (!idToSearch.trim()) return;
    
    setLoadingState(true);
    setConsoleLogs([]);
    setActiveTab("search");

    const cleanId = idToSearch.trim().toUpperCase();

    // Custom terminal logs effect
    const logs = [
      `📡 WISSLER SPACELINK: CONNECTING TO SATELLITE NODE-9X...`,
      `📡 HANDSHAKE OK. PINGING VEHICLE TRANSPONDER [${cleanId}]...`,
      `🔍 RECEIVING PARITY TELEMETRY STREAM...`,
      `🟢 DECRYPTION SUCCESSFUL. ESTABLISHING HIGH-FREQUENCY TERMINAL CHANNEL.`
    ];

    let currentLogIndex = 0;
    const logInterval = setInterval(() => {
      if (currentLogIndex < logs.length) {
        setConsoleLogs(prev => [...prev, logs[currentLogIndex]]);
        currentLogIndex++;
      } else {
        clearInterval(logInterval);
        
        // Find existing mock dataset or dynamically construct one based on search query
        let matchedData: TrackerData;
        
        const lowerId = cleanId.toLowerCase();
        if (lowerId.includes("road") || lowerId.includes("7402")) {
          matchedData = DEFAULT_DATASETS.road;
        } else if (lowerId.includes("air") || lowerId.includes("sea") || lowerId.includes("8340")) {
          matchedData = DEFAULT_DATASETS["sea-air"];
        } else if (lowerId.includes("cust") || lowerId.includes("2041")) {
          matchedData = DEFAULT_DATASETS.customs;
        } else if (lowerId.includes("spec") || lowerId.includes("9021")) {
          matchedData = DEFAULT_DATASETS.special;
        } else {
          // Dynamic procedural generator so ANY search query works and generates customized data!
          const hashCode = cleanId.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
          const dynamicServiceTypes: ServiceType[] = ["road", "sea-air", "customs", "special"];
          const generatedService = dynamicServiceTypes[hashCode % 4];
          
          matchedData = {
            trackingId: cleanId,
            serviceType: generatedService,
            title: `Custom ${generatedService.toUpperCase()} Cargo Route`,
            origin: "Munich Cargo Hub (DE)",
            transit: "Brussels Crossing Terminal (BE)",
            destination: "London Gateway Hub (UK)",
            progressPercent: Number((30 + (hashCode % 55)).toFixed(3)),
            speedUnit: generatedService === "sea-air" ? "km/h" : "km/h",
            speedBase: generatedService === "sea-air" ? 820.0 : 85.0,
            tempBase: generatedService === "special" ? -18.5 : 5.4,
            tempLabel: generatedService === "special" ? "Cryo Core Temp" : "Container Temp",
            auxLabel: generatedService === "special" ? "Vibration Dampener" : "Shock Level",
            auxBase: 0.01,
            auxUnit: "G",
            latBase: 50.8503 + (hashCode % 10) / 100,
            lngBase: 4.3517 + (hashCode % 10) / 100,
            milestones: [
              { label: "Dispatched from Origin Hub", time: "Dec 10, 04:30", status: "completed" },
              { label: "Bilateral Customs Clearance", time: "Dec 10, 11:20", status: "completed" },
              { label: "In Route (Active Highway)", time: "Dec 11, 01:00", status: "active" },
              { label: "Awaiting Distribution Depot", time: "Dec 11, 19:30", status: "pending" }
            ]
          };
        }

        setCurrentData(matchedData);
        setLoadingState(false);
      }
    }, 450);
  };

  // Helper to format countdown timer seconds
  const formatTime = (secs: number) => {
    const hours = Math.floor(secs / 3600);
    const minutes = Math.floor((secs % 3600) / 60);
    const seconds = secs % 60;
    return `${hours.toString().padStart(2, "0")}h ${minutes.toString().padStart(2, "0")}m ${seconds.toString().padStart(2, "0")}s`;
  };

  // Icon mapping helper
  const renderServiceIcon = (type: ServiceType) => {
    switch (type) {
      case "road":
        return <Truck className="w-5 h-5 text-accent animate-pulse" />;
      case "sea-air":
        return <Plane className="w-5 h-5 text-accent animate-pulse" />;
      case "customs":
        return <FileText className="w-5 h-5 text-accent animate-pulse" />;
      case "special":
        return <Activity className="w-5 h-5 text-accent animate-pulse" />;
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-black/45 border border-white/10 rounded-lg backdrop-blur-md overflow-hidden p-6 md:p-8 select-none shadow-2xl">
      {/* Glow highlight background effects */}
      <div className="absolute -top-16 -right-16 w-32 h-32 bg-accent/20 rounded-full blur-[60px] pointer-events-none"></div>
      <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-accent/10 rounded-full blur-[60px] pointer-events-none"></div>

      {/* Top Banner: Status Header */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 mb-5 gap-2">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[2px] text-accent flex items-center gap-1.5 font-mono">
            <Satellite className="w-3.5 h-3.5" /> Orbit Link: Stable
          </span>
        </div>
        <div className="flex items-center gap-2 text-white/50 text-[10px] sm:text-xs uppercase tracking-[2px]">
          {renderServiceIcon(currentData.serviceType)}
          <span className="font-semibold text-white/80 font-sans">{currentData.title}</span>
        </div>
      </div>

      {/* Main interactive Tab Selector */}
      <div className="relative z-10 grid grid-cols-3 gap-2 mb-5">
        <button
          onClick={() => setActiveTab("route")}
          className={`flex items-center justify-center gap-2 py-2 px-1 text-[11px] sm:text-xs font-bold uppercase tracking-[1px] border rounded transition-all duration-300 ${
            activeTab === "route"
              ? "bg-accent/15 border-accent text-accent shadow-lg shadow-accent/5"
              : "border-white/5 bg-white/5 text-white/60 hover:text-white hover:bg-white/10"
          }`}
        >
          <Compass className="w-3.5 h-3.5" />
          <span>Route Map</span>
        </button>
        <button
          onClick={() => setActiveTab("telemetry")}
          className={`flex items-center justify-center gap-2 py-2 px-1 text-[11px] sm:text-xs font-bold uppercase tracking-[1px] border rounded transition-all duration-300 ${
            activeTab === "telemetry"
              ? "bg-accent/15 border-accent text-accent shadow-lg shadow-accent/5"
              : "border-white/5 bg-white/5 text-white/60 hover:text-white hover:bg-white/10"
          }`}
        >
          <Gauge className="w-3.5 h-3.5" />
          <span>Telemetry</span>
        </button>
        <button
          onClick={() => setActiveTab("search")}
          className={`flex items-center justify-center gap-2 py-2 px-1 text-[11px] sm:text-xs font-bold uppercase tracking-[1px] border rounded transition-all duration-300 ${
            activeTab === "search"
              ? "bg-accent/15 border-accent text-accent shadow-lg shadow-accent/5"
              : "border-white/5 bg-white/5 text-white/60 hover:text-white hover:bg-white/10"
          }`}
        >
          <Search className="w-3.5 h-3.5" />
          <span>Scan ID</span>
        </button>
      </div>

      {/* Dynamic Console Display panels */}
      <div className="relative z-10 flex-1 min-h-[220px] flex flex-col justify-center">
        
        {/* Tab 1: Interactive route map */}
        {activeTab === "route" && (
          <div className="w-full h-full flex flex-col justify-between py-2 space-y-4">
            
            {/* Live Progress percentage count */}
            <div className="flex justify-between items-baseline">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[2px] text-white/50 block">High-Frequency Transit Progress</span>
                <span className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-white tabular-nums">
                  {realtimeProgress.toFixed(4)}
                  <span className="text-accent text-lg font-light ml-1">%</span>
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono uppercase tracking-[2px] text-white/50 block">Next Milestone ETA</span>
                <span className="text-sm font-mono font-semibold text-accent/90 tabular-nums">
                  {formatTime(countdownSeconds)}
                </span>
              </div>
            </div>

            {/* SVG Visual Node Map */}
            <div className="relative w-full py-4 flex flex-col justify-center">
              <div className="flex justify-between items-center relative z-10 px-1">
                {/* Node 1: Origin */}
                <div className="flex flex-col items-center">
                  <div className="w-5 h-5 rounded-full bg-accent border-4 border-black flex items-center justify-center shadow-lg shadow-accent/50 z-20"></div>
                  <span className="text-[9px] uppercase tracking-wide text-white/70 font-semibold mt-2 text-center max-w-[80px] line-clamp-1">
                    {currentData.origin.split(" ")[0]}
                  </span>
                </div>

                {/* Node 2: Transit */}
                <div className="flex flex-col items-center">
                  <div className={`w-5 h-5 rounded-full border-4 border-black flex items-center justify-center shadow-lg z-20 transition-all ${
                    realtimeProgress >= 50 ? "bg-accent shadow-accent/30" : "bg-white/20 border-white/5"
                  }`}></div>
                  <span className="text-[9px] uppercase tracking-wide text-white/60 font-semibold mt-2 text-center max-w-[80px] line-clamp-1">
                    {currentData.transit.split(" ")[0]}
                  </span>
                </div>

                {/* Node 3: Destination */}
                <div className="flex flex-col items-center">
                  <div className={`w-5 h-5 rounded-full border-4 border-black flex items-center justify-center shadow-lg z-20 transition-all ${
                    realtimeProgress >= 99.9 ? "bg-accent shadow-accent/30" : "bg-white/10 border-white/5"
                  }`}></div>
                  <span className="text-[9px] uppercase tracking-wide text-white/40 mt-2 text-center max-w-[80px] line-clamp-1">
                    {currentData.destination.split(" ")[0]}
                  </span>
                </div>
              </div>

              {/* Progress Line connectors */}
              <div className="absolute left-6 right-6 top-[18px] h-[2px] bg-white/10 -z-10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-accent to-accent-light shadow-lg transition-all duration-300 ease-out"
                  style={{ width: `${realtimeProgress}%` }}
                ></div>
              </div>

              {/* Animated Vehicle Icon sliding on the track */}
              <div 
                className="absolute -z-10 top-[8px] transform -translate-x-1/2 transition-all duration-300 ease-out hidden sm:block"
                style={{ left: `calc(24px + (${realtimeProgress}% * 0.88))` }}
              >
                <div className="bg-accent text-black rounded-full p-1 border border-black shadow-md shadow-accent/30 scale-90 animate-bounce">
                  {currentData.serviceType === "road" && <Truck className="w-3.5 h-3.5" />}
                  {currentData.serviceType === "sea-air" && <Plane className="w-3.5 h-3.5" />}
                  {currentData.serviceType === "customs" && <FileText className="w-3.5 h-3.5" />}
                  {currentData.serviceType === "special" && <Activity className="w-3.5 h-3.5" />}
                </div>
              </div>
            </div>

            {/* Path description summary */}
            <div className="bg-white/5 rounded p-3 border border-white/5 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span className="text-white/60 uppercase tracking-wider font-mono text-[10px]">Location:</span>
                <span className="text-white/90 font-medium">{currentData.origin.split(" (")[0]} ➔ {currentData.destination.split(" (")[0]}</span>
              </div>
              <span className="text-white/40 text-[9px] font-mono uppercase font-bold tracking-widest bg-white/5 px-2 py-0.5 rounded">
                {currentData.trackingId}
              </span>
            </div>
          </div>
        )}

        {/* Tab 2: Satellite Telemetry sensory output */}
        {activeTab === "telemetry" && (
          <div className="grid grid-cols-2 gap-4 py-2">
            
            {/* Speed Sensor Card */}
            <div className="bg-white/5 border border-white/5 hover:border-white/15 p-3 rounded flex flex-col justify-between transition-all duration-300">
              <span className="text-[10px] font-mono uppercase tracking-[1.5px] text-white/50 flex items-center gap-1.5">
                <Gauge className="w-3.5 h-3.5 text-accent" /> Active Speed
              </span>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-2xl font-bold font-mono text-white tabular-nums">{realtimeSpeed}</span>
                <span className="text-[10px] text-accent/80 font-mono uppercase font-bold">{currentData.speedUnit}</span>
              </div>
            </div>

            {/* Temperature Cold Chain Sensor */}
            <div className="bg-white/5 border border-white/5 hover:border-white/15 p-3 rounded flex flex-col justify-between transition-all duration-300">
              <span className="text-[10px] font-mono uppercase tracking-[1.5px] text-white/50 flex items-center gap-1.5">
                <Thermometer className="w-3.5 h-3.5 text-accent" /> {currentData.tempLabel}
              </span>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-2xl font-bold font-mono text-white tabular-nums">{realtimeTemp}</span>
                <span className="text-[10px] text-accent/80 font-mono uppercase font-bold">°C</span>
                <span className="ml-auto text-[8px] bg-accent/20 text-accent font-bold px-1.5 py-0.5 rounded font-mono">SAFE</span>
              </div>
            </div>

            {/* Coordinates / GPS Positioning */}
            <div className="bg-white/5 border border-white/5 hover:border-white/15 p-3 rounded flex flex-col justify-between transition-all duration-300">
              <span className="text-[10px] font-mono uppercase tracking-[1.5px] text-white/50 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-accent" /> Coordinates
              </span>
              <div className="mt-3 flex flex-col text-[11px] font-mono font-medium text-white/90 leading-tight">
                <span className="tabular-nums">LAT: {realtimeLat.toFixed(5)}° N</span>
                <span className="tabular-nums">LNG: {realtimeLng.toFixed(5)}° E</span>
              </div>
            </div>

            {/* Secondary/Auxiliary Sensor metrics depending on type */}
            <div className="bg-white/5 border border-white/5 hover:border-white/15 p-3 rounded flex flex-col justify-between transition-all duration-300">
              <span className="text-[10px] font-mono uppercase tracking-[1.5px] text-white/50 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-accent" /> {currentData.auxLabel}
              </span>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-2xl font-bold font-mono text-white tabular-nums">{realtimeAux}</span>
                <span className="text-[10px] text-accent/80 font-mono uppercase font-bold">{currentData.auxUnit}</span>
              </div>
            </div>

          </div>
        )}

        {/* Tab 3: Interactive Search Console & Scanner */}
        {activeTab === "search" && (
          <div className="w-full h-full flex flex-col justify-between py-1 space-y-4">
            
            {/* Terminal logs when searching */}
            {loadingState ? (
              <div className="flex-1 bg-black/60 p-4 border border-white/5 rounded font-mono text-[9px] text-accent/90 h-[140px] flex flex-col justify-center space-y-2 select-text overflow-hidden">
                <div className="flex items-center gap-2 mb-2 border-b border-white/15 pb-1">
                  <Loader2 className="w-3 h-3 text-accent animate-spin" />
                  <span className="font-bold uppercase tracking-wider text-white/80">Satellite Transponder Handshake...</span>
                </div>
                {consoleLogs.map((log, index) => (
                  <div key={index} className="animate-fade-in truncate">
                    {log}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex-1 flex flex-col space-y-3 justify-center">
                
                {/* Text search form */}
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleTrackingSearch(queryInput);
                  }}
                  className="flex gap-2"
                >
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/40" />
                    <input
                      type="text"
                      value={queryInput}
                      onChange={(e) => setQueryInput(e.target.value)}
                      placeholder="Enter Transponder ID (e.g. WS-7402)..."
                      className="w-full bg-white/5 hover:bg-white/10 focus:bg-black/40 border border-white/10 focus:border-accent text-xs rounded-md pl-10 pr-4 py-2.5 text-white placeholder-white/30 focus:outline-none transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-accent hover:bg-accent-light text-black font-bold uppercase tracking-[1px] text-[10px] px-5 py-2.5 rounded-md flex items-center gap-1.5 cursor-pointer shadow-lg shadow-accent/10 transition-colors"
                  >
                    Locate
                  </button>
                </form>

                {/* Hot Quick Links Suggestion for demo testing */}
                <div className="space-y-2">
                  <span className="text-[9px] font-mono uppercase tracking-[1px] text-white/40 block">Hot Transponders (Click to Load):</span>
                  <div className="flex flex-wrap gap-1.5">
                    {Object.values(DEFAULT_DATASETS).map((ds) => (
                      <button
                        key={ds.trackingId}
                        type="button"
                        onClick={() => {
                          setQueryInput(ds.trackingId);
                          handleTrackingSearch(ds.trackingId);
                        }}
                        className="bg-white/5 hover:bg-white/10 hover:text-white border border-white/5 text-[9px] font-mono px-2 py-1 rounded text-white/60 transition-all cursor-pointer"
                      >
                        {ds.trackingId}
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* Current package info summary footer */}
            <div className="text-[10px] font-mono text-white/40 flex items-center justify-between border-t border-white/5 pt-3">
              <span>ACTIVE CONSOLE ID:</span>
              <span className="text-white/80 font-bold uppercase tracking-wider">{currentData.trackingId}</span>
            </div>
          </div>
        )}

      </div>

      {/* Interactive Bottom Footer: Active Milestones ticker */}
      <div className="relative z-10 border-t border-white/10 pt-4 mt-5">
        <div className="flex items-center justify-between text-[10px] font-mono text-white/40 mb-2 uppercase">
          <span>Operational Milestones</span>
          <span className="text-accent/90">{Math.round(realtimeProgress)}% Journey Complete</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-left">
          {currentData.milestones.map((milestone, idx) => (
            <div 
              key={idx} 
              className={`p-2 rounded border border-white/5 flex flex-col justify-between ${
                milestone.status === "completed" 
                  ? "bg-accent/5 border-accent/10" 
                  : milestone.status === "active"
                    ? "bg-white/5 border-accent/30"
                    : "opacity-40"
              }`}
            >
              <span className="text-[9px] font-bold text-white line-clamp-1 leading-tight mb-1">
                {milestone.label}
              </span>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-[8px] font-mono text-white/50">{milestone.time}</span>
                {milestone.status === "completed" && <CheckCircle2 className="w-2.5 h-2.5 text-accent" />}
                {milestone.status === "active" && <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping"></span>}
                {milestone.status === "pending" && <Clock className="w-2.5 h-2.5 text-white/30" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
