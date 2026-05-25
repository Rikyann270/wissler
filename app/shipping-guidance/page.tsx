"use client"

import React, { useState, useMemo } from "react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ContactBanner } from "@/components/sections/ContactBanner"
import { Button } from "@/components/ui/Button"
import { SectionHeading } from "@/components/ui/SectionHeading"
import {
  Calculator,
  Layers,
  HelpCircle,
  FileText,
  Check,
  ArrowRight,
  Info,
  Download,
  Scale,
  Ship,
  ChevronRight,
  Sparkles,
  Gauge
} from "lucide-react"

// Types for Incoterms
interface IncotermStage {
  name: string
  payer: "seller" | "buyer" | "shared"
}

interface Incoterm {
  code: string
  fullName: string
  desc: string
  riskTransfer: string
  stages: IncotermStage[]
  tip: string
}

// Incoterms 2020 Data
const INCOTERMS_DATA: Incoterm[] = [
  {
    code: "EXW",
    fullName: "Ex Works",
    desc: "The seller makes the goods available at their premises. The buyer bears all risk and transportation costs from that point onward.",
    riskTransfer: "At seller's warehouse/factory floor.",
    tip: "Easiest for the seller, but places extreme administrative and custom-clearance burdens on international buyers.",
    stages: [
      { name: "Packaging", payer: "seller" },
      { name: "Origin Loading", payer: "buyer" },
      { name: "Export Clearance", payer: "buyer" },
      { name: "Main Carriage", payer: "buyer" },
      { name: "Import Clearance", payer: "buyer" },
      { name: "Duties & Taxes", payer: "buyer" },
      { name: "Final Delivery", payer: "buyer" }
    ]
  },
  {
    code: "FOB",
    fullName: "Free On Board",
    desc: "The seller delivers the goods on board the vessel nominated by the buyer at the named port of shipment. Risk transfers once loaded.",
    riskTransfer: "When goods are loaded safely onto the shipping vessel at the origin port.",
    tip: "Highly popular for maritime container shipments. Buyer retains control of ocean freight pricing.",
    stages: [
      { name: "Packaging", payer: "seller" },
      { name: "Origin Loading", payer: "seller" },
      { name: "Export Clearance", payer: "seller" },
      { name: "Main Carriage", payer: "buyer" },
      { name: "Import Clearance", payer: "buyer" },
      { name: "Duties & Taxes", payer: "buyer" },
      { name: "Final Delivery", payer: "buyer" }
    ]
  },
  {
    code: "CFR",
    fullName: "Cost and Freight",
    desc: "Seller pays to transport goods to the destination port, but risk transfers to the buyer as soon as the goods are loaded at origin.",
    riskTransfer: "At the origin port, immediately upon vessel boarding (before transport begins).",
    tip: "Buyer should arrange separate marine insurance, as seller carries no insurance obligation during the voyage.",
    stages: [
      { name: "Packaging", payer: "seller" },
      { name: "Origin Loading", payer: "seller" },
      { name: "Export Clearance", payer: "seller" },
      { name: "Main Carriage", payer: "seller" },
      { name: "Import Clearance", payer: "buyer" },
      { name: "Duties & Taxes", payer: "buyer" },
      { name: "Final Delivery", payer: "buyer" }
    ]
  },
  {
    code: "CIF",
    fullName: "Cost, Insurance & Freight",
    desc: "Seller pays ocean carriage and arranges minimum insurance cover to the destination port. Risk transfers at loading.",
    riskTransfer: "At origin port upon boarding the vessel. Seller pays freight and insurance up to the destination port.",
    tip: "Equivalent to CFR but mandates marine insurance. A safe standard for standard commercial transactions.",
    stages: [
      { name: "Packaging", payer: "seller" },
      { name: "Origin Loading", payer: "seller" },
      { name: "Export Clearance", payer: "seller" },
      { name: "Main Carriage", payer: "seller" },
      { name: "Import Clearance", payer: "buyer" },
      { name: "Duties & Taxes", payer: "buyer" },
      { name: "Final Delivery", payer: "buyer" }
    ]
  },
  {
    code: "DAP",
    fullName: "Delivered At Place",
    desc: "Seller arranges transport to the buyer's named destination, ready for unloading. Buyer pays import customs and duties.",
    riskTransfer: "At named destination address, before unloading of goods.",
    tip: "Seller takes on the logistics chain risks up to the destination door, but avoids complex foreign import customs procedures.",
    stages: [
      { name: "Packaging", payer: "seller" },
      { name: "Origin Loading", payer: "seller" },
      { name: "Export Clearance", payer: "seller" },
      { name: "Main Carriage", payer: "seller" },
      { name: "Import Clearance", payer: "buyer" },
      { name: "Duties & Taxes", payer: "buyer" },
      { name: "Final Delivery", payer: "seller" }
    ]
  },
  {
    code: "DDP",
    fullName: "Delivered Duty Paid",
    desc: "Seller assumes maximum obligation, taking responsibility for shipping, export/import clearance, and all taxes/duties to buyer's door.",
    riskTransfer: "At buyer's door, fully customs-cleared and ready for unloading.",
    tip: "Maximum convenience for buyer, but highly risky for sellers due to complex local tax regulations (like VAT/GST).",
    stages: [
      { name: "Packaging", payer: "seller" },
      { name: "Origin Loading", payer: "seller" },
      { name: "Export Clearance", payer: "seller" },
      { name: "Main Carriage", payer: "seller" },
      { name: "Import Clearance", payer: "seller" },
      { name: "Duties & Taxes", payer: "seller" },
      { name: "Final Delivery", payer: "seller" }
    ]
  }
]

// Container Types Data
interface ContainerSpec {
  id: string
  name: string
  extDims: string
  intDims: string
  payload: string
  volume: string
  idealFor: string
  maxVolumeVal: number
  maxPayloadVal: number
  maxPalletsVal: number
}

const CONTAINER_SPECS: ContainerSpec[] = [
  {
    id: "20ft",
    name: "20' Standard Dry",
    extDims: "6.06m x 2.44m x 2.59m",
    intDims: "5.90m x 2.35m x 2.39m",
    payload: "28,200 kg (62,170 lbs)",
    volume: "33.2 m³ (1,172 cu ft)",
    idealFor: "Heavy, dense cargo (minerals, paper, machinery, steel coils) where volume is not the limiting factor.",
    maxVolumeVal: 33.2,
    maxPayloadVal: 28200,
    maxPalletsVal: 11
  },
  {
    id: "40ft",
    name: "40' Standard Dry",
    extDims: "12.19m x 2.44m x 2.59m",
    intDims: "12.03m x 2.35m x 2.39m",
    payload: "26,600 kg (58,640 lbs)",
    volume: "67.7 m³ (2,390 cu ft)",
    idealFor: "General consumer goods, apparel, electronics, and voluminous cargo that requires container length.",
    maxVolumeVal: 67.7,
    maxPayloadVal: 26600,
    maxPalletsVal: 24
  },
  {
    id: "40fthc",
    name: "40' High Cube Dry",
    extDims: "12.19m x 2.44m x 2.89m",
    intDims: "12.03m x 2.35m x 2.69m",
    payload: "26,500 kg (58,420 lbs)",
    volume: "76.2 m³ (2,691 cu ft)",
    idealFor: "Tall cargo, light voluminous items, furniture, and custom packing projects needing extra overhead height (1ft extra).",
    maxVolumeVal: 76.2,
    maxPayloadVal: 26500,
    maxPalletsVal: 28
  },
  {
    id: "20ftref",
    name: "20' Refrigerated (Reefer)",
    extDims: "6.06m x 2.44m x 2.59m",
    intDims: "5.44m x 2.29m x 2.27m",
    payload: "27,200 kg (59,970 lbs)",
    volume: "28.3 m³ (1,000 cu ft)",
    idealFor: "Perishables, seafood, meat, pharmaceuticals, and temperature-sensitive chemicals requiring strict thermal cooling (-30°C to +30°C).",
    maxVolumeVal: 28.3,
    maxPayloadVal: 27200,
    maxPalletsVal: 10
  }
]

const CONTAINER_COLORS: Record<string, { base: string; dark: string; accent: string; label: string }> = {
  "20ft": { base: "#f68132", dark: "#b85412", accent: "#ffa05e", label: "WISSLER" },
  "40ft": { base: "#f68132", dark: "#9e4307", accent: "#ffb480", label: "WISSLER" },
  "40fthc": { base: "#f68132", dark: "#b85412", accent: "#ffaa6e", label: "WISSLER HC" },
  "20ftref": { base: "#f68132", dark: "#9e4307", accent: "#67e8f9", label: "REEFER" },
}


export default function ShippingGuidancePage() {
  // Volumetric Weight Calculator States
  const [calcMode, setCalcMode] = useState<"air" | "sea" | "road">("air")
  const [length, setLength] = useState<number>(120)
  const [width, setWidth] = useState<number>(80)
  const [height, setHeight] = useState<number>(160)
  const [quantity, setQuantity] = useState<number>(1)
  const [actualWeight, setActualWeight] = useState<number>(150)

  // Incoterms States
  const [activeIncoterm, setActiveIncoterm] = useState<string>("FOB")

  // Container Spec States
  const [activeContainer, setActiveContainer] = useState<string>("20ft")

  // Interactive 3D Container States
  const [containerRotation, setContainerRotation] = useState({ x: -12, y: -20 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [containerViewMode, setContainerViewMode] = useState<"standard" | "exploded" | "cargo">("standard")
  const [palletCount, setPalletCount] = useState<number>(6)
  // Container color theme
  const containerColor = useMemo(() => CONTAINER_COLORS[activeContainer] || CONTAINER_COLORS["20ft"], [activeContainer])

  // Corrugated steel CSS texture pattern
  const corrugatedBg = (color: string, darkColor: string) => ({
    background: `repeating-linear-gradient(
      0deg,
      ${color} 0px,
      ${darkColor} 2px,
      ${color} 4px,
      ${color} 6px
    )`,
  })

  const handleContainerMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStart({ x: e.clientX, y: e.clientY })
  }

  const handleContainerMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const dx = e.clientX - dragStart.x
    const dy = e.clientY - dragStart.y
    setContainerRotation((prev) => ({
      x: Math.max(-60, Math.min(60, prev.x - dy * 0.5)),
      y: prev.y + dx * 0.5
    }))
    setDragStart({ x: e.clientX, y: e.clientY })
  }

  const handleContainerMouseUp = () => {
    setIsDragging(false)
  }

  // Mobile Touch Controls
  const handleContainerTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true)
      setDragStart({ x: e.touches[0].clientX, y: e.touches[0].clientY })
    }
  }

  const handleContainerTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return
    const dx = e.touches[0].clientX - dragStart.x
    const dy = e.touches[0].clientY - dragStart.y
    setContainerRotation((prev) => ({
      x: Math.max(-60, Math.min(60, prev.x - dy * 0.5)),
      y: prev.y + dx * 0.5
    }))
    setDragStart({ x: e.touches[0].clientX, y: e.touches[0].clientY })
  }

  // Checklist States
  const [activeChecklist, setActiveChecklist] = useState<number>(0)

  // Guidance Request Form States
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false)
  const [formType, setFormType] = useState<string>("general")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    details: ""
  })

  // Calculation variables
  const volumeCbm = ((length * width * height) / 1000000) * quantity
  const divisor = calcMode === "air" ? 5000 : calcMode === "road" ? 3000 : 1000
  const volumetricWeight = ((length * width * height) / divisor) * quantity
  const totalActualWeight = actualWeight * quantity
  const chargeableWeight = Math.max(volumetricWeight, totalActualWeight)

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <>
      <Navbar transparent={true} />

      <main className="flex-1 bg-primary text-white">

        {/* Sleek Dark Hero Section */}
        <section className="relative min-h-[70vh] flex items-center pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">

          {/* Background Visual Grid & Accent Spots */}
          <div className="absolute inset-0 z-0">
            <img
              src="./home/post_processing.jpg"
              alt="Logistics guidance hub"
              className="w-full h-full object-cover opacity-50 "
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary to-primary"></div>
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
          </div>

          <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-[1280px]">

            {/* 2-column layout */}
            <div className="flex flex-col lg:flex-row items-center gap-12">

              {/* LEFT: Text */}
              <div className="max-w-3xl lg:w-1/2">
                <h1 className="text-5xl md:text-7xl lg:text-[80px] font-bold leading-[1.05] tracking-tight mb-8">
                  Shipping <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">Guidance</span> Hub
                </h1>

                <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
                  Demystifying international logistics. Calculate volumetric weight, master Incoterms 2020 rules, plan container loads, and request specialist advisory guides for secure global transit.
                </p>
              </div>
              {/* RIGHT: Video */}
              <div className="lg:w-1/2 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md lg:max-w-lg">

                  <video
                    className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="./home/2150690127.jpg"
                  >
                    <source src="./home/Business_Meeting_Office_1280x720.mp4" type="video/mp4" />

                    {/* Fallback image if video can't load */}
                    <img
                      src="./home/2150690127.jpg"
                      alt="Logistics advisor"
                      className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                    />
                  </video>

                  {/* Optional glow effect */}
                  <div className="absolute -inset-4 bg-accent/10 blur-3xl rounded-full -z-10"></div>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* Dynamic Calculator & Incoterms Matrix Section */}
        <section className="py-24 bg-primary-light/40 border-y border-white/5 relative z-10">
          <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

              {/* Volumetric Weight Calculator Widget */}
              <div className="lg:col-span-6 bg-primary/80 border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl"></div>

                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Volumetric Calculator</h3>
                    <p className="text-xs text-white/60">Identify your shipment's billable chargeable weight</p>
                  </div>
                </div>

                {/* Mode Selector */}
                <div className="grid grid-cols-3 gap-2 bg-white/5 p-1 rounded-full mb-8 border border-white/5">
                  {(["air", "sea", "road"] as const).map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setCalcMode(mode)}
                      className={`py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${calcMode === mode ? "bg-accent text-primary shadow-lg" : "text-white/60 hover:text-white"}`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>

                <div className="space-y-6">
                  {/* Package Dimensions Inputs */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-white/60">Length (cm)</label>
                      <input
                        type="number"
                        value={length}
                        onChange={(e) => setLength(Number(e.target.value))}
                        className="bg-white/5 border border-white/10 rounded-lg p-3 text-white text-center focus:border-accent focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-white/60">Width (cm)</label>
                      <input
                        type="number"
                        value={width}
                        onChange={(e) => setWidth(Number(e.target.value))}
                        className="bg-white/5 border border-white/10 rounded-lg p-3 text-white text-center focus:border-accent focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-white/60">Height (cm)</label>
                      <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(Number(e.target.value))}
                        className="bg-white/5 border border-white/10 rounded-lg p-3 text-white text-center focus:border-accent focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Quantity & Actual Weight Inputs */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-white/60">Quantity</label>
                      <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="bg-white/5 border border-white/10 rounded-lg p-3 text-white text-center focus:border-accent focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-white/60">Actual Weight / Unit (kg)</label>
                      <input
                        type="number"
                        value={actualWeight}
                        onChange={(e) => setActualWeight(Number(e.target.value))}
                        className="bg-white/5 border border-white/10 rounded-lg p-3 text-white text-center focus:border-accent focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Calculation Output Panel */}
                <div className="mt-8 border-t border-white/10 pt-8 space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/60">Total Volume:</span>
                    <span className="font-bold text-white">{volumeCbm.toFixed(3)} CBM</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/60">Volumetric Weight ({calcMode === "air" ? "1:5000" : calcMode === "road" ? "1:3000" : "1:1000"}):</span>
                    <span className="font-bold text-accent">{volumetricWeight.toFixed(2)} kg</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/60">Total Actual Weight:</span>
                    <span className="font-bold text-white">{totalActualWeight.toFixed(2)} kg</span>
                  </div>

                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 mt-6 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <Scale className="w-5 h-5 text-accent" />
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-accent">Chargeable Weight</h4>
                        <p className="text-[10px] text-white/60">Higher of volumetric & actual weight</p>
                      </div>
                    </div>
                    <span className="text-3xl font-black text-white">{chargeableWeight.toFixed(1)} kg</span>
                  </div>
                </div>

              </div>

              {/* Incoterms 2020 Matrix */}
              <div className="lg:col-span-6 space-y-8">
                <div>
                  <SectionHeading
                    title="Incoterms 2020 Matrix"
                    subtitle="Understand who bears cost, responsibility, and risk at each segment of your cargo transit."
                    align="left"
                    className="mb-6"
                  />
                </div>

                {/* Incoterms Tabs */}
                <div className="flex flex-wrap gap-2">
                  {INCOTERMS_DATA.map((incoterm) => (
                    <button
                      key={incoterm.code}
                      onClick={() => setActiveIncoterm(incoterm.code)}
                      className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-all ${activeIncoterm === incoterm.code
                        ? "bg-white text-primary border-white"
                        : "border-white/10 text-white hover:border-white/30"
                        }`}
                    >
                      {incoterm.code}
                    </button>
                  ))}
                </div>

                {/* Selected Incoterm Details */}
                {INCOTERMS_DATA.filter((i) => i.code === activeIncoterm).map((incoterm) => (
                  <div key={incoterm.code} className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6 backdrop-blur-sm animate-[fadeIn_0.5s_ease-out]">
                    <div className="flex justify-between items-start border-b border-white/10 pb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-white flex items-center gap-3">
                          <span className="text-accent">{incoterm.code}</span>
                          <span className="text-white/60 text-sm font-medium">({incoterm.fullName})</span>
                        </h4>
                      </div>
                      <div className="text-[10px] bg-accent/20 text-accent font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                        Risk Transfer Point
                      </div>
                    </div>

                    <p className="text-sm text-white/80 leading-relaxed">{incoterm.desc}</p>

                    <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex gap-3 items-start">
                      <Info className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <div className="text-xs leading-relaxed">
                        <strong className="text-white">Pro-tip:</strong> <span className="text-white/70">{incoterm.tip}</span>
                      </div>
                    </div>

                    {/* Stage Pipeline chart */}
                    <div>
                      <h5 className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-4">Cost Distribution Flow</h5>
                      <div className="space-y-3">
                        <div className="grid grid-cols-7 gap-1 text-[9px] font-bold text-white/40 uppercase tracking-wider text-center">
                          {incoterm.stages.map((stage, idx) => (
                            <span key={idx} className="truncate px-0.5">{stage.name}</span>
                          ))}
                        </div>
                        <div className="grid grid-cols-7 gap-1 h-3 rounded-full overflow-hidden bg-white/5">
                          {incoterm.stages.map((stage, idx) => (
                            <div
                              key={idx}
                              className={`h-full border-r border-primary/50 last:border-0 ${stage.payer === "seller"
                                ? "bg-accent"
                                : "bg-white/20"
                                }`}
                              title={`${stage.name}: paid by ${stage.payer.toUpperCase()}`}
                            />
                          ))}
                        </div>
                        <div className="flex justify-between items-center text-[10px] text-white/50 pt-2 px-1">
                          <span className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-accent inline-block"></span>
                            Seller Pays / Arranges
                          </span>
                          <span className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block"></span>
                            Buyer Pays / Arranges
                          </span>
                        </div>
                      </div>
                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>
        </section>

        {/* Container Specs Selector Hub */}
        <section className="py-24 bg-primary relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 max-w-[1280px] relative z-10">

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <h4 className="text-xs font-bold uppercase tracking-[2px] text-accent">Equipment Guide</h4>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-white">Container Specification Hub</h2>
              </div>
              <p className="text-mid max-w-sm text-lg font-light leading-relaxed">
                Finding the perfect capacity matches. Compare standard configurations to design efficient container loading schemes.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Specs Details Panel */}
              <div className="lg:col-span-5 space-y-8">
                <div className="flex flex-col gap-2">
                  {CONTAINER_SPECS.map((spec) => (
                    <button
                      key={spec.id}
                      onClick={() => setActiveContainer(spec.id)}
                      className={`flex justify-between items-center p-6 rounded-xl border transition-all text-left group ${activeContainer === spec.id
                        ? "bg-white/10 border-white/20 shadow-xl"
                        : "border-white/5 bg-transparent hover:bg-white/5 hover:border-white/10"
                        }`}
                    >
                      <div>
                        <h4 className={`font-bold transition-colors ${activeContainer === spec.id ? "text-accent text-lg" : "text-white text-base"}`}>
                          {spec.name}
                        </h4>
                        <span className="text-[10px] text-white/50 tracking-wide">Volume: {spec.volume}</span>
                      </div>
                      <ChevronRight className={`w-5 h-5 text-white/40 transition-transform ${activeContainer === spec.id ? "text-accent translate-x-2" : "group-hover:translate-x-1"}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Graphical Spec Visualizer Block */}
              <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden backdrop-blur-md">

                {/* Interaction Controls */}
                <div className="flex flex-wrap justify-between items-center gap-4 border-b border-white/10 pb-6 mb-6">
                  <div className="flex gap-2">
                    {(["standard", "exploded", "cargo"] as const).map((mode) => (
                      <button
                        key={mode}
                        onClick={() => setContainerViewMode(mode)}
                        type="button"
                        className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider border transition-all ${containerViewMode === mode
                          ? "bg-accent border-accent text-primary"
                          : "border-white/10 text-white/70 hover:border-white/30 hover:text-white"
                          }`}
                      >
                        {mode === "standard" ? "Standard Box" : mode === "exploded" ? "Exploded View" : "Load Cargo"}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setContainerRotation({ x: -12, y: -20 })}
                    type="button"
                    className="text-[10px] font-bold uppercase tracking-wider text-white/50 hover:text-white transition-colors"
                  >
                    Reset Camera
                  </button>
                </div>

                {CONTAINER_SPECS.filter((c) => c.id === activeContainer).map((spec) => (
                  <div key={spec.id} className="space-y-8 animate-[fadeIn_0.5s_ease-out]">

                    {/* Photorealistic 3D Container Visualizer — Instant Load, Zero Dependencies */}
                    <div className="relative w-full h-[340px] md:h-[420px] rounded-xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center"
                      style={{ background: "radial-gradient(ellipse at 50% 120%, rgba(255,255,255,0.03) 0%, #070707 70%)" }}
                    >
                      {/* Interactive orbit surface */}
                      <div
                        className="w-full h-full flex flex-col items-center justify-center relative cursor-grab active:cursor-grabbing select-none"
                        onMouseDown={handleContainerMouseDown}
                        onMouseMove={handleContainerMouseMove}
                        onMouseUp={handleContainerMouseUp}
                        onMouseLeave={handleContainerMouseUp}
                        onTouchStart={handleContainerTouchStart}
                        onTouchMove={handleContainerTouchMove}
                        onTouchEnd={handleContainerMouseUp}
                      >
                        {/* Ambient floor reflection */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[340px] h-[80px] rounded-full pointer-events-none"
                          style={{ background: `radial-gradient(ellipse, ${containerColor.base}18 0%, transparent 70%)`, filter: "blur(12px)" }}
                        />

                        {/* Ground plane shadow */}
                        <div className="absolute bottom-[60px] md:bottom-[72px] left-1/2 -translate-x-1/2 w-[260px] h-[20px] rounded-full pointer-events-none opacity-60"
                          style={{ background: "radial-gradient(ellipse, rgba(0,0,0,0.7) 0%, transparent 70%)", filter: "blur(6px)" }}
                        />

                        {/* Container type badge */}
                        <div className="absolute top-4 left-4 inline-flex items-center gap-2 font-bold text-[9px] uppercase px-3 py-1.5 rounded-full pointer-events-none z-20"
                          style={{ background: `${containerColor.base}30`, border: `1px solid ${containerColor.base}50`, color: containerColor.accent }}
                        >
                          <Ship className="w-3 h-3" /> {spec.name}
                        </div>

                        {/* ISO container code */}
                        <div className="absolute top-4 right-4 text-[9px] font-mono font-bold uppercase px-3 py-1.5 rounded-full pointer-events-none z-20"
                          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.4)" }}
                        >
                          ISO 668 · {spec.id.toUpperCase()}
                        </div>

                        {/* Drag instruction */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[9px] font-bold uppercase tracking-widest text-white/25 flex items-center gap-2 pointer-events-none z-20">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 9l-3 3 3 3" /><path d="M9 5l3-3 3 3" /><path d="M15 19l-3 3-3-3" /><path d="M19 9l3 3-3 3" /><line x1="2" y1="12" x2="22" y2="12" /><line x1="12" y1="2" x2="12" y2="22" /></svg>
                          Drag to orbit
                        </div>

                        {/* 3D PERSPECTIVE STAGE */}
                        <div className="relative flex items-center justify-center" style={{ perspective: "900px", perspectiveOrigin: "50% 45%" }}>
                          <div
                            className="relative"
                            style={{
                              width: spec.id.startsWith("40") ? "300px" : "220px",
                              height: spec.id === "40fthc" ? "130px" : "110px",
                              transformStyle: "preserve-3d",
                              transform: `rotateX(${containerRotation.x}deg) rotateY(${containerRotation.y}deg)`,
                              transition: isDragging ? "none" : "transform 0.5s cubic-bezier(0.1, 0.8, 0.2, 1)"
                            }}
                          >
                            {/* ===== FRONT FACE / DOORS ===== */}
                            {containerViewMode === "cargo" ? (
                              <>
                                {/* Left Door */}
                                <div
                                  className="absolute top-0 bottom-0 left-0 flex items-center justify-center transition-all duration-700"
                                  style={{
                                    width: "50%",
                                    transformOrigin: "left center",
                                    transform: `translateZ(40px) rotateY(-115deg)`,
                                    backfaceVisibility: "hidden",
                                    ...corrugatedBg(containerColor.base, containerColor.dark),
                                    borderLeft: `3px solid ${containerColor.dark}`,
                                    borderTop: `2px solid ${containerColor.dark}`,
                                    borderBottom: `2px solid ${containerColor.dark}`,
                                    boxShadow: `inset -8px 0 16px rgba(0,0,0,0.4), 4px 0 20px rgba(0,0,0,0.5)`,
                                  }}
                                >
                                  {/* Lock rod */}
                                  <div className="absolute right-[6px] top-[10%] bottom-[10%] w-[2px] rounded-full" style={{ background: `linear-gradient(180deg, #888 0%, #555 50%, #888 100%)` }} />
                                  <div className="absolute right-[3px] top-[30%] w-[8px] h-[8px] rounded-full border border-white/20" style={{ background: "#666" }} />
                                  <div className="absolute right-[3px] top-[60%] w-[8px] h-[8px] rounded-full border border-white/20" style={{ background: "#666" }} />
                                  <span className="text-[7px] font-black uppercase tracking-wider opacity-60 -rotate-90" style={{ color: containerColor.accent }}>Open</span>
                                </div>
                                {/* Right Door */}
                                <div
                                  className="absolute top-0 bottom-0 right-0 flex items-center justify-center transition-all duration-700"
                                  style={{
                                    width: "50%",
                                    transformOrigin: "right center",
                                    transform: `translateZ(40px) rotateY(115deg)`,
                                    backfaceVisibility: "hidden",
                                    ...corrugatedBg(containerColor.base, containerColor.dark),
                                    borderRight: `3px solid ${containerColor.dark}`,
                                    borderTop: `2px solid ${containerColor.dark}`,
                                    borderBottom: `2px solid ${containerColor.dark}`,
                                    boxShadow: `inset 8px 0 16px rgba(0,0,0,0.4), -4px 0 20px rgba(0,0,0,0.5)`,
                                  }}
                                >
                                  {/* Lock rod */}
                                  <div className="absolute left-[6px] top-[10%] bottom-[10%] w-[2px] rounded-full" style={{ background: `linear-gradient(180deg, #888 0%, #555 50%, #888 100%)` }} />
                                  <div className="absolute left-[3px] top-[30%] w-[8px] h-[8px] rounded-full border border-white/20" style={{ background: "#666" }} />
                                  <div className="absolute left-[3px] top-[60%] w-[8px] h-[8px] rounded-full border border-white/20" style={{ background: "#666" }} />
                                  <span className="text-[7px] font-black uppercase tracking-wider opacity-60 rotate-90" style={{ color: containerColor.accent }}>Open</span>
                                </div>
                              </>
                            ) : (
                              /* FRONT WALL — Closed with corrugated steel + ISO markings */
                              <div
                                className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 overflow-hidden"
                                style={{
                                  transform: `translateZ(${containerViewMode === "exploded" ? "80px" : "40px"})`,
                                  backfaceVisibility: "hidden",
                                  ...corrugatedBg(containerColor.base, containerColor.dark),
                                  borderTop: `2px solid ${containerColor.dark}`,
                                  borderBottom: `2px solid ${containerColor.dark}`,
                                  boxShadow: `inset 0 0 30px rgba(0,0,0,0.3), 0 0 20px rgba(0,0,0,0.4)`,
                                }}
                              >
                                {/* Door seam line */}
                                <div className="absolute top-0 bottom-0 left-1/2 w-[1px]" style={{ background: `${containerColor.dark}` }} />
                                {/* Lock rods (left door) */}
                                <div className="absolute left-[48%] top-[15%] bottom-[15%] w-[2px] rounded-full" style={{ background: `linear-gradient(180deg, #777 0%, #444 50%, #777 100%)` }} />
                                <div className="absolute left-[47%] top-[35%] w-[6px] h-[6px] rounded-full" style={{ background: "#555", border: "1px solid #777" }} />
                                <div className="absolute left-[47%] top-[58%] w-[6px] h-[6px] rounded-full" style={{ background: "#555", border: "1px solid #777" }} />
                                {/* Lock rods (right door) */}
                                <div className="absolute right-[48%] top-[15%] bottom-[15%] w-[2px] rounded-full" style={{ background: `linear-gradient(180deg, #777 0%, #444 50%, #777 100%)` }} />
                                {/* Container label */}
                                <span className="text-[10px] font-black uppercase tracking-[4px] opacity-50 mt-1" style={{ color: "#fff" }}>{containerColor.label}</span>
                                <span className="text-[7px] font-bold tracking-widest opacity-30 mt-0.5" style={{ color: "#fff" }}>{spec.id.toUpperCase()}</span>
                                {/* Corner castings */}
                                <div className="absolute top-0 left-0 w-[10px] h-[10px]" style={{ background: "#444", borderRight: "1px solid #555", borderBottom: "1px solid #555" }} />
                                <div className="absolute top-0 right-0 w-[10px] h-[10px]" style={{ background: "#444", borderLeft: "1px solid #555", borderBottom: "1px solid #555" }} />
                                <div className="absolute bottom-0 left-0 w-[10px] h-[10px]" style={{ background: "#444", borderRight: "1px solid #555", borderTop: "1px solid #555" }} />
                                <div className="absolute bottom-0 right-0 w-[10px] h-[10px]" style={{ background: "#444", borderLeft: "1px solid #555", borderTop: "1px solid #555" }} />
                              </div>
                            )}

                            {/* ===== BACK FACE ===== */}
                            <div
                              className="absolute inset-0 flex items-center justify-center transition-all duration-700 overflow-hidden"
                              style={{
                                transform: `translateZ(${containerViewMode === "exploded" ? "-80px" : "-40px"}) rotateY(180deg)`,
                                ...corrugatedBg(containerColor.dark, `${containerColor.dark}dd`),
                                boxShadow: `inset 0 0 30px rgba(0,0,0,0.5)`,
                                borderTop: `2px solid ${containerColor.dark}`,
                                borderBottom: `2px solid ${containerColor.dark}`,
                              }}
                            >
                              <span className="text-[9px] font-black uppercase tracking-[3px] opacity-30" style={{ color: "#fff" }}>{containerColor.label}</span>
                              {/* Corner castings */}
                              <div className="absolute top-0 left-0 w-[10px] h-[10px]" style={{ background: "#444", borderRight: "1px solid #555", borderBottom: "1px solid #555" }} />
                              <div className="absolute top-0 right-0 w-[10px] h-[10px]" style={{ background: "#444", borderLeft: "1px solid #555", borderBottom: "1px solid #555" }} />
                              <div className="absolute bottom-0 left-0 w-[10px] h-[10px]" style={{ background: "#444", borderRight: "1px solid #555", borderTop: "1px solid #555" }} />
                              <div className="absolute bottom-0 right-0 w-[10px] h-[10px]" style={{ background: "#444", borderLeft: "1px solid #555", borderTop: "1px solid #555" }} />
                            </div>

                            {/* ===== TOP FACE ===== */}
                            <div
                              className="absolute left-0 right-0 transition-all duration-700"
                              style={{
                                height: "80px",
                                top: 0,
                                transformOrigin: "top",
                                transform: `rotateX(90deg) translateZ(${containerViewMode === "exploded" ? "80px" : "40px"})`,
                                background: `linear-gradient(180deg, ${containerColor.base}ee 0%, ${containerColor.dark}cc 100%)`,
                                borderLeft: `2px solid ${containerColor.dark}`,
                                borderRight: `2px solid ${containerColor.dark}`,
                                boxShadow: "inset 0 0 20px rgba(0,0,0,0.25)",
                              }}
                            >
                              {/* Top corrugation (horizontal) */}
                              <div className="absolute inset-0" style={{ background: `repeating-linear-gradient(90deg, transparent 0px, rgba(0,0,0,0.08) 2px, transparent 4px, transparent 8px)` }} />
                            </div>

                            {/* ===== BOTTOM FACE ===== */}
                            <div
                              className="absolute left-0 right-0 transition-all duration-700"
                              style={{
                                height: "80px",
                                bottom: 0,
                                transformOrigin: "bottom",
                                transform: `rotateX(-90deg) translateZ(${containerViewMode === "exploded" ? "80px" : "40px"})`,
                                background: `linear-gradient(0deg, ${containerColor.dark} 0%, ${containerColor.dark}cc 100%)`,
                                borderLeft: `2px solid ${containerColor.dark}`,
                                borderRight: `2px solid ${containerColor.dark}`,
                                boxShadow: "inset 0 0 20px rgba(0,0,0,0.5)",
                              }}
                            >
                              {/* Cross-member beams */}
                              <div className="absolute inset-0" style={{ background: `repeating-linear-gradient(90deg, transparent 0px, rgba(0,0,0,0.15) 1px, transparent 2px, transparent 18px)` }} />
                            </div>

                            {/* ===== LEFT SIDE FACE ===== */}
                            <div
                              className="absolute top-0 bottom-0 transition-all duration-700 overflow-hidden"
                              style={{
                                width: "80px",
                                left: 0,
                                transformOrigin: "left",
                                transform: `rotateY(-90deg) translateZ(${containerViewMode === "exploded" ? "80px" : "0px"})`,
                                ...corrugatedBg(`${containerColor.base}dd`, `${containerColor.dark}cc`),
                                borderTop: `2px solid ${containerColor.dark}`,
                                borderBottom: `2px solid ${containerColor.dark}`,
                                boxShadow: `inset 6px 0 20px rgba(0,0,0,0.35)`,
                              }}
                            >
                              {/* Sticker label */}
                              <div className="absolute top-3 left-3 px-1.5 py-0.5 text-[5px] font-bold uppercase tracking-widest rounded" style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)" }}>TARE: 2,200 KG</div>
                              <div className="absolute bottom-3 right-3 px-1.5 py-0.5 text-[5px] font-bold uppercase tracking-widest rounded" style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)" }}>MAX GROSS: {(spec.maxPayloadVal + 2200).toLocaleString()} KG</div>
                              {/* Corner castings */}
                              <div className="absolute top-0 left-0 w-[8px] h-[8px]" style={{ background: "#444" }} />
                              <div className="absolute top-0 right-0 w-[8px] h-[8px]" style={{ background: "#444" }} />
                              <div className="absolute bottom-0 left-0 w-[8px] h-[8px]" style={{ background: "#444" }} />
                              <div className="absolute bottom-0 right-0 w-[8px] h-[8px]" style={{ background: "#444" }} />
                            </div>

                            {/* ===== RIGHT SIDE FACE ===== */}
                            <div
                              className="absolute top-0 bottom-0 transition-all duration-700 overflow-hidden"
                              style={{
                                width: "80px",
                                right: 0,
                                transformOrigin: "right",
                                transform: `rotateY(90deg) translateZ(${containerViewMode === "exploded" ? (spec.id.startsWith("40") ? "300px" : "220px") : (spec.id.startsWith("40") ? "220px" : "140px")})`,
                                ...corrugatedBg(`${containerColor.base}cc`, `${containerColor.dark}bb`),
                                borderTop: `2px solid ${containerColor.dark}`,
                                borderBottom: `2px solid ${containerColor.dark}`,
                                boxShadow: `inset -6px 0 20px rgba(0,0,0,0.35), -4px 0 16px rgba(0,0,0,0.3)`,
                              }}
                            >
                              {/* CSC safety plate */}
                              <div className="absolute top-2 left-2 w-[28px] h-[18px] rounded-sm flex items-center justify-center" style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}>
                                <span className="text-[4px] font-black text-white/50 uppercase">CSC</span>
                              </div>
                              {/* Side markings */}
                              <div className="absolute bottom-3 left-3 px-1.5 py-0.5 text-[5px] font-bold uppercase tracking-widest rounded" style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)" }}>VOL: {spec.volume.split(" (")[0]}</div>
                              {/* Corner castings */}
                              <div className="absolute top-0 left-0 w-[8px] h-[8px]" style={{ background: "#444" }} />
                              <div className="absolute top-0 right-0 w-[8px] h-[8px]" style={{ background: "#444" }} />
                              <div className="absolute bottom-0 left-0 w-[8px] h-[8px]" style={{ background: "#444" }} />
                              <div className="absolute bottom-0 right-0 w-[8px] h-[8px]" style={{ background: "#444" }} />
                            </div>

                            {/* ===== REEFER COOLING FX ===== */}
                            {spec.id === "20ftref" && (
                              <div
                                className="absolute inset-0 pointer-events-none animate-pulse"
                                style={{
                                  transform: "translateZ(0px)",
                                  boxShadow: "0 0 40px rgba(6,182,212,0.15) inset, 0 0 80px rgba(6,182,212,0.08)",
                                  border: "1px solid rgba(36, 177, 95, 0.36)",
                                  borderRadius: "2px",
                                }}
                              >
                                <div className="absolute top-[-8px] left-1/2 -translate-x-1/2 text-[6px] font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/90 px-2.5 py-1 border border-cyan-500/30 rounded-full whitespace-nowrap" style={{ transformStyle: "preserve-3d" }}>
                                  ❄ Active Cooling: -20°C
                                </div>
                              </div>
                            )}

                            {/* ===== EXPLODED BLUEPRINT DIMENSION LABELS ===== */}
                            {containerViewMode === "exploded" && (
                              <div className="absolute inset-0 pointer-events-none" style={{ transformStyle: "preserve-3d" }}>
                                <div className="absolute text-[8px] font-bold bg-black/90 px-2 py-1 rounded-md whitespace-nowrap shadow-xl" style={{ color: containerColor.accent, border: `1px solid ${containerColor.base}40`, transform: `translate3d(${spec.id.startsWith("40") ? "90px" : "60px"}, ${spec.id === "40fthc" ? "150px" : "130px"}, 0px)` }}>
                                  ↔ Length: {spec.intDims.split(" x ")[0]}
                                </div>
                                <div className="absolute text-[8px] font-bold bg-black/90 px-2 py-1 rounded-md whitespace-nowrap shadow-xl" style={{ color: containerColor.accent, border: `1px solid ${containerColor.base}40`, transform: `translate3d(${spec.id.startsWith("40") ? "300px" : "220px"}, 40px, 0px) rotateY(90deg)` }}>
                                  ↕ Width: {spec.intDims.split(" x ")[1]}
                                </div>
                                <div className="absolute text-[8px] font-bold bg-black/90 px-2 py-1 rounded-md whitespace-nowrap shadow-xl" style={{ color: containerColor.accent, border: `1px solid ${containerColor.base}40`, transform: "translate3d(-26px, 40px, 0px) rotateZ(90deg)" }}>
                                  ↕ Height: {spec.intDims.split(" x ")[2]}
                                </div>
                              </div>
                            )}

                            {/* ===== INNER CARGO PALLETS ===== */}
                            {containerViewMode === "cargo" && (
                              <div className="absolute inset-0 transition-all duration-700" style={{ transformStyle: "preserve-3d", transform: "translateZ(0px)" }}>
                                {Array.from({ length: Math.min(palletCount, spec.maxPalletsVal * 2) }).map((_, i) => {
                                  const cols = spec.id.startsWith("40") ? 8 : 5
                                  const col = i % cols
                                  const row = Math.floor((i % (cols * 2)) / cols)
                                  const stack = Math.floor(i / (cols * 2))
                                  const boxW = spec.id.startsWith("40") ? 30 : 34
                                  const posX = col * (boxW + 4) + 12
                                  const posY = (spec.id === "40fthc" ? 78 : 62) - stack * 28
                                  const posZ = row * 30 - 14
                                  const loadPct = (palletCount * 1.5) / spec.maxVolumeVal
                                  return (
                                    <div
                                      key={i}
                                      className="absolute flex items-center justify-center text-[6px] font-black uppercase transition-all duration-300"
                                      style={{
                                        width: `${boxW}px`,
                                        height: "24px",
                                        transformStyle: "preserve-3d",
                                        transform: `translate3d(${posX}px, ${posY}px, ${posZ}px)`,
                                        background: loadPct > 1 ? "linear-gradient(135deg, #dc2626 0%, #991b1b 100%)" : `linear-gradient(135deg, ${containerColor.accent} 0%, ${containerColor.base} 100%)`,
                                        border: `1px solid ${loadPct > 1 ? "#fca5a5" : containerColor.accent}50`,
                                        borderRadius: "2px",
                                        boxShadow: "0 3px 8px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.2)",
                                        color: loadPct > 1 ? "#fecaca" : "#000",
                                      }}
                                    >
                                      <span className="opacity-80">{i + 1}</span>
                                    </div>
                                  )
                                })}
                              </div>
                            )}

                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pallet Cargo Loader Slider */}
                    <div className="bg-white/5 border border-white/5 p-6 rounded-xl space-y-6">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                            <Layers className="w-5 h-5 text-accent animate-pulse" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Interactive Pallet Cargo Loader</h4>
                            <p className="text-[10px] text-white/50">Simulate loading Euro-pallets into {spec.name}</p>
                          </div>
                        </div>
                        <span className="text-2xl font-black text-accent bg-accent/10 px-4 py-1.5 border border-accent/20 rounded-xl self-end sm:self-auto">
                          {palletCount} <span className="text-[10px] font-bold text-white/60">Pallets</span>
                        </span>
                      </div>

                      <input
                        type="range"
                        min="0"
                        max={spec.maxPalletsVal * 2}
                        value={palletCount}
                        onChange={(e) => {
                          setPalletCount(Number(e.target.value))
                          setContainerViewMode("cargo") // Auto toggle cargo mode to show loading!
                        }}
                        className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent"
                      />

                      {/* Load Metrics */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/5">
                        {/* Space Usage Meter */}
                        <div className="space-y-2">
                          <div className="flex justify-between text-[10px] font-bold uppercase text-white/60">
                            <span>Cargo Space / Volume</span>
                            <span className={((palletCount * 1.5) / spec.maxVolumeVal * 100) > 100 ? "text-red-400" : "text-white"}>
                              {((palletCount * 1.5) / spec.maxVolumeVal * 100).toFixed(0)}% ({(palletCount * 1.5).toFixed(1)} / {spec.maxVolumeVal} m³)
                            </span>
                          </div>
                          <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                            <div
                              className={`h-full transition-all duration-500 ${(palletCount * 1.5) > spec.maxVolumeVal ? "bg-red-500" : "bg-accent"
                                }`}
                              style={{ width: `${Math.min(100, (palletCount * 1.5) / spec.maxVolumeVal * 100)}%` }}
                            />
                          </div>
                          {(palletCount * 1.5) > spec.maxVolumeVal && (
                            <p className="text-[9px] font-bold text-red-400 uppercase tracking-widest animate-pulse">✦ Warning: Exceeds Volume Capacity!</p>
                          )}
                        </div>

                        {/* Weight Usage Meter */}
                        <div className="space-y-2">
                          <div className="flex justify-between text-[10px] font-bold uppercase text-white/60">
                            <span>Cargo Weight / Payload</span>
                            <span className={((palletCount * 1200) / spec.maxPayloadVal * 100) > 100 ? "text-red-400" : "text-white"}>
                              {((palletCount * 1200) / spec.maxPayloadVal * 100).toFixed(0)}% ({(palletCount * 1200).toLocaleString()} / {spec.maxPayloadVal.toLocaleString()} kg)
                            </span>
                          </div>
                          <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                            <div
                              className={`h-full transition-all duration-500 ${(palletCount * 1200) > spec.maxPayloadVal ? "bg-red-500" : "bg-accent"
                                }`}
                              style={{ width: `${Math.min(100, (palletCount * 1200) / spec.maxPayloadVal * 100)}%` }}
                            />
                          </div>
                          {(palletCount * 1200) > spec.maxPayloadVal && (
                            <p className="text-[9px] font-bold text-red-400 uppercase tracking-widest animate-pulse">✦ Warning: Exceeds Weight Payload!</p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-white/50 tracking-widest block mb-1">Ext. Dims</span>
                        <span className="text-sm font-semibold text-white">{spec.extDims.split(" x ")[0]}L</span>
                      </div>
                      <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-white/50 tracking-widest block mb-1">Int. Dims</span>
                        <span className="text-sm font-semibold text-white">{spec.intDims}</span>
                      </div>
                      <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-white/50 tracking-widest block mb-1">Max Payload</span>
                        <span className="text-sm font-semibold text-accent">{spec.payload.split(" (")[0]}</span>
                      </div>
                      <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-white/50 tracking-widest block mb-1">Capacity</span>
                        <span className="text-sm font-semibold text-white">{spec.volume.split(" (")[0]}</span>
                      </div>
                    </div>

                    <div className="border-t border-white/10 pt-6">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2">Ideal Application</h4>
                      <p className="text-sm text-white/70 leading-relaxed">{spec.idealFor}</p>
                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>
        </section>

        {/* Customs & Documentation Accordion Checklist */}
        <section className="py-24 bg-primary-light/30 border-y border-white/5 relative z-10">
          <div className="container mx-auto px-4 md:px-8 max-w-[900px]">

            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4">
                <FileText className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Essential Documentation Checklist</h2>
              <p className="text-mid text-lg max-w-xl mx-auto font-light leading-relaxed">
                Avoid costly border holds. Review the standard documentation requirements necessary for seamless customs clearance.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Commercial Invoice",
                  subtitle: "Standard transaction record outlining value and contents",
                  desc: "The primary custom declaration document. It must detail the seller, buyer, full item descriptions, Harmonized System (HS) codes, unit value, total value, currency, and the chosen transaction Incoterm.",
                  tip: "Mismatches in item values between the commercial invoice and customs entry are the leading cause of international cargo delays and inspections.",
                  fileSize: "PDF (184 KB)"
                },
                {
                  title: "Packing List",
                  subtitle: "Detailed itemized breakdown of container loads",
                  desc: "A highly itemized log outlining the package dimensions, weights, quantities, shipping marks, and packing types. Customs officers reference this list directly to match specific physical pallets in container checks.",
                  tip: "Ensure all units and package marks align exactly with what's loaded; discrepancies can trigger costly physical tailboard audits.",
                  fileSize: "XLS (120 KB)"
                },
                {
                  title: "Bill of Lading (B/L) / Air Waybill (AWB)",
                  subtitle: "Legally binding carriage contract and title certificate",
                  desc: "Acts as a formal receipt of shipment and a contract of carriage between the shipper and carrier. For maritime freight, the Bill of Lading represents document of title; for air freight, the Air Waybill serves as dispatch proof.",
                  tip: "Never lose an original physical B/L. Cargo cannot be legally released without it unless a Telex/Express release has been pre-arranged.",
                  fileSize: "PDF (292 KB)"
                },
                {
                  title: "Certificate of Origin (C/O)",
                  subtitle: "Official declaration of product manufacture location",
                  desc: "Certifies the specific country where your products were processed or fully manufactured. It determines tariff schedules, duties, and eligibility for preferential trade agreements (e.g. UK-EU trade treaties).",
                  tip: "A correctly signed preferential C/O can reduce import duties from double digits straight to 0% in eligible partner nations.",
                  fileSize: "PDF (156 KB)"
                }
              ].map((doc, idx) => {
                const isOpen = activeChecklist === idx
                return (
                  <div
                    key={idx}
                    className={`border rounded-xl transition-all duration-300 ${isOpen
                      ? "bg-white/5 border-white/20 shadow-xl"
                      : "border-white/5 bg-transparent hover:bg-white/5"
                      }`}
                  >
                    <button
                      onClick={() => setActiveChecklist(isOpen ? -1 : idx)}
                      className="w-full flex justify-between items-center p-6 text-left"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${isOpen ? "bg-accent border-accent text-primary" : "border-white/20 text-white/60"}`}>
                          {isOpen ? <Check className="w-4 h-4 font-bold" /> : <span className="text-xs font-bold">{idx + 1}</span>}
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-base md:text-lg">{doc.title}</h4>
                          <p className="text-xs text-white/50 leading-relaxed">{doc.subtitle}</p>
                        </div>
                      </div>
                      <ChevronRight className={`w-5 h-5 text-white/40 transition-transform ${isOpen ? "rotate-90 text-accent" : ""}`} />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-2 border-t border-white/5 space-y-4 animate-[fadeIn_0.4s_ease-out]">
                        <p className="text-sm text-white/70 leading-relaxed">{doc.desc}</p>

                        <div className="bg-accent/5 p-4 rounded-xl border border-accent/20 flex gap-3 items-start">
                          <Gauge className="w-4 h-4 text-accent shrink-0 mt-0.5 animate-pulse" />
                          <span className="text-xs text-white/70">
                            <strong className="text-white">Expert Advice:</strong> {doc.tip}
                          </span>
                        </div>

                        <div className="flex justify-between items-center pt-2">
                          <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold">{doc.fileSize}</span>
                          <button className="flex items-center gap-2 text-xs font-bold text-accent hover:text-white uppercase tracking-wider transition-colors">
                            <Download className="w-4 h-4" /> Download Template
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

          </div>
        </section>

        {/* Guidance Request / Expert Advisory Form */}
        <section className="py-24 bg-primary relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 max-w-[1280px] relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

              {/* Form Info Left */}
              <div className="lg:col-span-5 space-y-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <h4 className="text-xs font-bold uppercase tracking-[2px] text-accent">Expert Consulting</h4>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                  Stuck with complex cargo rules?
                </h2>
                <p className="text-white/70 text-lg leading-relaxed font-light">
                  Submit details of your active shipping bottlenecks, oversized dimensions, or customs clearance obstacles. Our global advisory desk reviews your submission to provide tailor-made compliance briefs.
                </p>

                <div className="space-y-4 text-sm text-white/60">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span>No-obligation initial compliance audits</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span>Assistance with customs commodity codes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span>Multi-modal freight optimization paths</span>
                  </div>
                </div>
              </div>

              {/* Form Card Right */}
              <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden backdrop-blur-md">

                {formSubmitted ? (
                  <div className="text-center py-12 space-y-6 animate-[fadeIn_0.5s_ease-out]">
                    <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Guidance Request Logged</h3>
                    <p className="text-white/70 max-w-sm mx-auto leading-relaxed text-sm">
                      Thank you, <strong className="text-white">{formData.name}</strong>. Our European operations & customs desk will review your inquiry regarding <strong className="text-accent">{formType === "general" ? "General Advice" : formType === "customs" ? "Customs Compliance" : formType === "oversized" ? "Oversized Routing" : "First-time Import"}</strong> and email a preliminary brief within 2 hours.
                    </p>
                    <Button variant="outline" size="sm" onClick={() => setFormSubmitted(false)}>
                      Submit Another Inquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Request Advisory Brief</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="relative group">
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={handleFormChange}
                          className="peer w-full h-10 bg-transparent border-b-2 border-white/10 text-white focus:border-accent focus:outline-none transition-colors pt-2 placeholder-transparent"
                          placeholder="Your Name *"
                          required
                        />
                        <label htmlFor="name" className="absolute left-0 -top-3 text-[10px] font-bold text-white/50 uppercase tracking-widest peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:font-medium peer-focus:-top-3 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-accent transition-all cursor-text">Full Name *</label>
                      </div>

                      <div className="relative group">
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          className="peer w-full h-10 bg-transparent border-b-2 border-white/10 text-white focus:border-accent focus:outline-none transition-colors pt-2 placeholder-transparent"
                          placeholder="Email Address *"
                          required
                        />
                        <label htmlFor="email" className="absolute left-0 -top-3 text-[10px] font-bold text-white/50 uppercase tracking-widest peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:font-medium peer-focus:-top-3 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-accent transition-all cursor-text">Email Address *</label>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="relative group">
                        <input
                          type="text"
                          id="company"
                          value={formData.company}
                          onChange={handleFormChange}
                          className="peer w-full h-10 bg-transparent border-b-2 border-white/10 text-white focus:border-accent focus:outline-none transition-colors pt-2 placeholder-transparent"
                          placeholder="Company Name"
                        />
                        <label htmlFor="company" className="absolute left-0 -top-3 text-[10px] font-bold text-white/50 uppercase tracking-widest peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:font-medium peer-focus:-top-3 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-accent transition-all cursor-text">Company Name</label>
                      </div>

                      <div className="relative group">
                        <label htmlFor="formType" className="block text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1">Advisory Topic *</label>
                        <select
                          id="formType"
                          value={formType}
                          onChange={(e) => setFormType(e.target.value)}
                          className="w-full h-10 bg-transparent border-b-2 border-white/10 text-white focus:border-accent focus:outline-none cursor-pointer rounded-none"
                          required
                        >
                          <option value="general" className="bg-primary text-white">General Shipping Advice</option>
                          <option value="customs" className="bg-primary text-white">Customs & Commodity Codes</option>
                          <option value="oversized" className="bg-primary text-white">Oversized & Special Cargo Routing</option>
                          <option value="firsttime" className="bg-primary text-white">First-time Exporter Support</option>
                        </select>
                      </div>
                    </div>

                    <div className="relative group pt-2">
                      <label htmlFor="details" className="block text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1">Detail your Challenge *</label>
                      <textarea
                        id="details"
                        rows={3}
                        value={formData.details}
                        onChange={handleFormChange}
                        className="w-full bg-transparent border-b-2 border-white/10 text-white focus:border-accent focus:outline-none transition-colors resize-none py-2"
                        placeholder="Please supply weights, sizes, locations, or standard concerns..."
                        required
                      ></textarea>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto px-12 group">
                        <span className="flex items-center gap-2">
                          Submit to Advisory Desk
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Button>
                    </div>

                  </form>
                )}

              </div>

            </div>
          </div>
        </section>

        <ContactBanner />
      </main>

      <Footer />
    </>
  )
}
