import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function PartnerCarousel({ partners, direction = 'ltr' }) {
  const containerRef = useRef(null)
  const trackRef = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const speed = 1 // px per frame
    let animationFrame

    const animate = () => {
      setOffset(prev => {
        const track = trackRef.current
        if (!track) return prev

        const totalWidth = track.scrollWidth / 2
        let newOffset = direction === 'rtl' ? prev - speed : prev + speed

        // Reset loop when halfway scrolled
        if (Math.abs(newOffset) >= totalWidth) {
          newOffset = 0
        }

        return newOffset
      })

      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [direction])

  const allPartners = [...partners, ...partners]

  return (
    <div ref={containerRef} className="overflow-hidden relative w-full">
      <div
        ref={trackRef}
        className="flex whitespace-nowrap"
        style={{
          transform: `translateX(${direction === 'rtl' ? offset : -offset}px)`,
          transition: 'transform 0.01s linear',
        }}
      >
        {allPartners.map((partner, index) => (
          <div
            key={index}
            className="p-6 flex flex-col items-center text-center min-w-[200px] mx-2 shrink-0"
          >
            <div className="h-20 flex items-center justify-center mb-4">
              <Image
                src={partner}
                alt={`Partner ${index}`}
                width={160}
                height={80}
                className="max-h-16 w-auto object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
