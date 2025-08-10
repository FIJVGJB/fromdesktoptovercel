"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const leonardoStudies = [
    {
      title: "Temporal Mechanics",
      description:
        "Master Leonardo's studies on perpetual motion and time flow through mechanical precision and divine proportion",
      drawing: "/leonardo-perpetual-motion.jpeg",
      explanation:
        "Leonardo's intricate gear mechanisms form the foundation of temporal manipulation, allowing masters to control the flow of time through mechanical precision and understanding of natural forces.",
    },
    {
      title: "Sacred Geometry",
      description:
        "Divine proportions and mathematical harmony unlock the secrets of temporal balance and spatial manipulation",
      drawing: "/leonardo-mechanical-collage-2.jpeg",
      explanation:
        "Through the study of perfect proportions and geometric relationships, Leonardo discovered how mathematical harmony governs the flow of time itself, enabling precise temporal control.",
    },
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-16 md:py-24 bg-dark-gray text-white overflow-hidden parchment-bg"
    >
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-cinzel-decorative text-yellow-400 text-center mb-12 animate-pulse-glow">
          The World of Aether Machina
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg font-cormorant-garamond leading-relaxed">
              In a realm where the gears of innovation intertwine with the threads of destiny, Aether Machina invites
              you to a unique experience. Discover a world shaped by brilliant inventors, mystical alchemists, and
              powerful temporal anomalies.
            </p>
            <p className="text-lg font-cormorant-garamond leading-relaxed">
              Our story unfolds in a Renaissance-inspired era, where the pursuit of knowledge and the mastery of
              intricate clockwork mechanisms have led to unforeseen advancements and perilous discoveries. Ancient
              secrets and futuristic technologies collide, creating a landscape ripe for adventure and conflict.
            </p>
            <p className="text-lg font-cormorant-garamond leading-relaxed">
              Join factions, forge alliances, and delve into the mysteries of the Aether, a pervasive energy that fuels
              both miraculous inventions and devastating temporal distortions. Your journey will shape the very fabric
              of time.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg glow-yellow">
            <Image
              src="/historical-city-map.jpeg"
              alt="Historical City Map"
              fill
              className="object-cover sepia"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Leonardo's Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-24">
          {leonardoStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="group bg-black/30 rounded-xl p-4 border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300"
            >
              {/* Drawing */}
              <div className="mb-3 overflow-hidden rounded-lg border border-yellow-400/20">
                <Image
                  src={study.drawing || "/placeholder.svg"}
                  alt={study.title}
                  width={250}
                  height={120}
                  className="w-full h-24 object-cover sepia group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div>
                <h3 className="font-cinzel font-semibold text-lg mb-2 group-hover:text-yellow-400 transition-colors">
                  {study.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors mb-2 font-cormorant text-justify text-sm">
                  {study.description}
                </p>
                <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors font-cormorant italic text-justify">
                  {study.explanation}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
