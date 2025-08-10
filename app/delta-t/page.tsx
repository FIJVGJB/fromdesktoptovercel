"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Clock, Zap, Shield, Sword } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function DeltaTPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section */}
      <HeroSection />

      {/* Lore Introduction */}
      <LoreSection />

      {/* Timeline */}
      <TimelineSection />

      {/* Factions */}
      <FactionsSection />

      {/* Cutscene Section */}
      <CutsceneSection />

      {/* Lore Page */}
      <LorePage />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/placeholder.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      {/* Leonardo's Background Sketch */}
      <motion.div
        className="absolute top-20 right-10 opacity-15"
        animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
      >
        <Image
          src="/leonardo-mechanical-collage-3.jpeg"
          alt="Leonardo's Temporal Studies"
          width={300}
          height={400}
          className="sepia"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
          <h1 className="font-cinzel font-black text-5xl md:text-7xl mb-6 leading-tight">
            The World of <span className="text-yellow-400 animate-pulse-glow whitespace-nowrap">AETHER MACHINA</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed font-cormorant italic">
            Where time itself becomes the ultimate invention
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function LoreSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gray-900/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/20 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-cinzel font-bold text-3xl md:text-4xl mb-8">The Temporal Fracture</h2>
            <div className="space-y-6 text-gray-300 leading-relaxed font-cormorant">
              <p>
                In the Renaissance era of 1452, Master Leonardo da Vinci discovered the Delta T phenomenon—a mystical
                anomaly that allows manipulation of time itself through mechanical innovation and divine proportion.
              </p>
              <p>
                The Temporal Fracture created pockets of reality where time flows differently, where masters can slow
                their enemies, accelerate their movements, or even glimpse moments into the future through Leonardo's
                ingenious temporal mechanisms.
              </p>
              <p>
                Now, champions from across Renaissance Italy gather in these fractured arenas, each wielding unique
                temporal abilities derived from Leonardo's revolutionary studies in the ultimate test of skill,
                strategy, and mastery over time itself.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border-2 border-yellow-400/30">
              {/* Updated Image Source and Size */}
              <Image
                src="/historical-city-map.jpeg"
                alt="Historical City Map of Imola"
                width={600}
                height={500}
                className="w-full h-auto sepia"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TimelineSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const characterOrigins = [
    {
      year: "1452",
      character: "Leonardo",
      title: "The Master Inventor",
      description:
        "Leonardo da Vinci discovers the temporal mechanics through his studies of perpetual motion, becoming the first to harness time's flow through mechanical innovation",
      icon: Clock,
      image: "/leonardo-flying-machine.jpeg",
    },
    {
      year: "1465",
      character: "Fortezza",
      title: "The Temporal Guardian",
      description:
        "A master architect and military engineer who creates the first temporal fortifications, using time manipulation to protect Renaissance city-states",
      icon: Shield,
      image: "/historical-city-map.jpeg",
    },
    {
      year: "1478",
      character: "Ombra",
      title: "Born from Shadow",
      description:
        "A mysterious figure emerging from Leonardo's experimental time chamber, wielding shadow and temporal phase abilities beyond mortal comprehension",
      icon: Zap,
      image: "/cozy-village-sketch.jpeg",
    },
    {
      year: "1485",
      character: "Luce",
      title: "The Healing Light",
      description:
        "A Renaissance physician and alchemist who discovers temporal healing through the study of light and optics, mastering the art of reversing time's wounds",
      icon: Sword,
      image: "/vintage-shop-sketch-0.jpeg",
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel font-bold text-3xl md:text-4xl mb-6">Origins of the Masters</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-cormorant italic">
            Discover how each master gained their temporal powers through Renaissance innovation
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 to-yellow-600" />

          <div className="space-y-8">
            {characterOrigins.map((origin, index) => (
              <motion.div
                key={origin.character}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} -mb-4`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-yellow-400/50 transition-colors group parchment-bg">
                    {/* Character Image */}
                    <div className="mb-4 overflow-hidden rounded-lg border-2 border-yellow-400/20">
                      <Image
                        src={origin.image || "/placeholder.svg"}
                        alt={origin.character}
                        width={300}
                        height={200}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500 sepia"
                      />
                    </div>

                    <div
                      className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                    >
                      <origin.icon className="h-6 w-6 text-yellow-400" />
                      <span className="font-cinzel font-bold text-yellow-400 text-lg">{origin.year}</span>
                    </div>

                    <div className={`${index % 2 === 0 ? "text-left" : "text-right"}`}>
                      <h3 className="font-cinzel font-bold text-2xl mb-1 text-yellow-400 group-hover:text-yellow-300 transition-colors">
                        {origin.character}
                      </h3>
                      <h4 className="font-cormorant font-bold text-lg mb-3 text-white italic">{origin.title}</h4>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed font-cormorant">
                        {origin.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10 w-6 h-6 bg-yellow-400 rounded-full border-4 border-black shadow-lg">
                  <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-20" />
                </div>

                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FactionsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const factions = [
    {
      name: "Chronos Collective",
      description: "Masters of time acceleration and battlefield control",
      image: "/leonardo-perpetual-motion.jpeg",
      color: "from-blue-500 to-cyan-400",
    },
    {
      name: "Temporal Guardians",
      description: "Defenders who manipulate time to protect their allies",
      image: "/leonardo-mechanical-collage-2.jpeg",
      color: "from-yellow-500 to-orange-400",
    },
    {
      name: "Shadow Weavers",
      description: "Assassins who use time distortion for deadly strikes",
      image: "/leonardo-mechanical-collage-1.jpeg",
      color: "from-purple-500 to-pink-400",
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel font-bold text-3xl md:text-4xl mb-6">Factions of Aether Machina</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-cormorant">
            Choose your allegiance and master their unique temporal abilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {factions.map((faction, index) => (
            <motion.div
              key={faction.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-gray-900/50 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 border border-yellow-400/20 hover:border-yellow-400/50"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={faction.image || "/placeholder.svg"}
                  alt={faction.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover sepia group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${faction.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="font-cinzel font-bold text-xl mb-3 group-hover:text-yellow-400 transition-colors">
                  {faction.name}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors font-cormorant">
                  {faction.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-400/50 rounded-2xl transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CutsceneSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-cinzel font-bold text-3xl md:text-4xl mb-6">Experience the Story</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-cormorant">
            Immerse yourself in the cinematic world of Aether Machina
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden bg-gray-900/50 border border-gray-800"
        >
          <div className="aspect-video relative">
            <video controls poster="/leonardo-mechanical-collage-3.jpeg" className="w-full h-full object-cover">
              <source src="/placeholder.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Custom Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors group cursor-pointer">
              <div className="w-20 h-20 bg-yellow-400/90 rounded-full flex items-center justify-center group-hover:bg-yellow-400 transition-colors group-hover:scale-110 transform duration-300">
                <div className="w-0 h-0 border-l-8 border-l-black border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1" />
              </div>
            </div>
          </div>

          <div className="p-6">
            <h3 className="font-cinzel font-bold text-xl mb-2">Aether Machina: Origins Trailer</h3>
            <p className="text-gray-400 font-cormorant">
              Witness the birth of the temporal arena and the rise of the first champions
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function LorePage() {
  const loreSections = [
    {
      title: "The Genesis of Aether",
      image: "/leonardo-mechanical-collage-1.jpeg",
      description:
        "Explore the origins of Aether, the mystical energy that permeates the world and fuels both ancient magic and advanced machinery. Discover how it was first harnessed and its profound impact on civilization.",
    },
    {
      title: "The Clockwork Renaissance",
      image: "/leonardo-perpetual-motion.jpeg",
      description:
        "Delve into the era of unprecedented innovation where brilliant minds fused arcane knowledge with intricate clockwork mechanisms, leading to the creation of wondrous devices and the rise of powerful factions.",
    },
    {
      title: "Temporal Fractures",
      image: "/temporal-fracture-new-image.png", // Using the new image provided
      description:
        "Uncover the mysteries behind the temporal distortions that plague the land. Learn about their causes, effects, and the brave Chronomancers who seek to mend or exploit them.",
    },
    {
      title: "The Great Machina Wars",
      image: "/futuristic-battlefield-time.png",
      description:
        "Relive the epic conflicts that reshaped the world, as factions clashed over control of Aether resources and temporal technology. Witness the rise and fall of empires in a war that transcended time itself.",
    },
    {
      title: "Ancient Constructs",
      image: "/leonardo-mechanical-collage-2.jpeg",
      description:
        "Investigate the enigmatic ancient constructs, remnants of a forgotten civilization that mastered Aether long before the Renaissance. What secrets do they hold, and what power do they still possess?",
    },
    {
      title: "The Aether Weavers",
      image: "/futuristic-time-mages.png",
      description:
        "Learn about the secretive order of Aether Weavers, guardians of the balance between magic and technology. Their ancient rituals and profound understanding of Aether are crucial to the world's survival.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-cinzel-decorative text-yellow-400 text-center mb-12 animate-pulse-glow">
          The Lore of Aether Machina
        </h1>
        <p className="text-xl md:text-2xl font-cormorant-garamond text-center max-w-4xl mx-auto mb-16">
          Journey through the rich history and intricate world of Aether Machina, where every gear turn and temporal
          shift tells a story.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {loreSections.map((section, index) => (
            <Card key={index} className="bg-dark-gray border-yellow-500/30 glow-yellow flex flex-col">
              <CardHeader className="p-0">
                <div className="relative w-full h-64 overflow-hidden rounded-t-lg">
                  <Image
                    src={section.image || "/placeholder.svg"}
                    alt={section.title}
                    fill
                    className="object-cover sepia"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex flex-col flex-grow">
                <CardTitle className="text-2xl font-cinzel-decorative text-yellow-400 mb-3">{section.title}</CardTitle>
                <p className="text-md font-cormorant-garamond text-white flex-grow">{section.description}</p>
                <Link href="#" className="mt-4 text-yellow-400 hover:underline font-cormorant-garamond self-start">
                  Read More
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
