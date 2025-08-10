"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Play, Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DownloadSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="download" ref={ref} className="py-16 md:py-24 bg-black text-white text-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-current" />
              ))}
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-cinzel-decorative text-yellow-400 mb-8 animate-pulse-glow"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Embark on Your Journey
          </motion.h2>

          <motion.p
            className="text-lg font-cormorant-garamond max-w-3xl mx-auto mb-12 opacity-80"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The world of Aether Machina awaits. Download the game now and begin your adventure through time and
            innovation.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button
              asChild
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-10 rounded-full text-xl glow-yellow"
            >
              <Link href="/download">Download Aether Machina</Link>
            </Button>

            <Link
              href="/join"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 group font-cinzel"
            >
              <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
              Play Free
            </Link>
          </motion.div>

          <motion.p
            className="text-sm mt-6 opacity-60 font-cormorant"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.6 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Free to play • Available on PC, Mac & Mobile
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
