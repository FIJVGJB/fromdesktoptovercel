"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/leonardo-mechanical-collage-3.jpeg"
        alt="Aether Machina Hero Background"
        fill
        priority
        className="object-cover sepia"
        sizes="100vw"
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center p-4">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-cinzel-decorative text-yellow-400 mb-4 animate-pulse-glow"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Aether Machina
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl font-cormorant-garamond text-white max-w-3xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Unravel the secrets of time and machinery in a world where Renaissance ingenuity meets arcane power.
          </motion.p>

          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Button
              asChild
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full text-lg glow-yellow"
            >
              <Link href="/join">Join the Chronicle</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black font-bold py-3 px-8 rounded-full text-lg glow-yellow bg-transparent"
            >
              <Link href="/delta-t">Explore the Lore</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Leonardo's Drawings - Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 opacity-30"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
      >
        <Image
          src="/leonardo-perpetual-motion.jpeg"
          alt="Leonardo's Perpetual Motion Machine Sketch"
          width={120}
          height={120}
          className="sepia"
        />
      </motion.div>

      <motion.div
        className="absolute top-40 right-20 opacity-25"
        animate={{ y: [0, -30, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
      >
        <Image
          src="/leonardo-mechanical-collage-1.jpeg"
          alt="Leonardo's Mechanical Collage"
          width={100}
          height={100}
          className="sepia"
        />
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-20 opacity-20"
        animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 4 }}
      >
        <Image
          src="/leonardo-mechanical-collage-2.jpeg"
          alt="Leonardo's Mechanical Collage with Globe"
          width={80}
          height={80}
          className="sepia"
        />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <motion.div
            className="w-1 h-3 bg-yellow-400 rounded-full mt-2"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
