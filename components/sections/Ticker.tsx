interface TickerProps {
  items: string[]
}

export function Ticker({ items }: TickerProps) {
  // Double the items to create a seamless loop
  const duplicatedItems = [...items, ...items]

  return (
    <div className="w-full bg-primary py-8 overflow-hidden flex items-center border-y border-white/10">
      <div className="flex whitespace-nowrap animate-marquee w-max">
        {duplicatedItems.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center mx-8"
          >
            <span className="text-white text-xl font-bold uppercase tracking-[3px]">
              {item}
            </span>
            <span className="mx-8 text-accent/50 text-xl font-bold">•</span>
          </div>
        ))}
      </div>
    </div>
  )
}
