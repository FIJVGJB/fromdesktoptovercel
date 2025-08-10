import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const champions = [
  {
    name: "The Chronomancer",
    image: "/futuristic-time-mage.png",
    description: "Master of temporal manipulation, bending time to his will.",
  },
  {
    name: "The Gearsmith",
    image: "/armored-tank-character.png",
    description: "A mechanical marvel, armored and precise in every strike.",
  },
  {
    name: "The Aether Weaver",
    image: "/energy-healer.png",
    description: "Channels raw Aether for healing and devastating energy blasts.",
  },
  {
    name: "The Clockwork Assassin",
    image: "/cyberpunk-assassin.png",
    description: "Silent and deadly, a master of stealth and intricate traps.",
  },
]

export default function ChampionsSection() {
  return (
    <section id="champions" className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-cinzel-decorative text-yellow-400 text-center mb-12 animate-pulse-glow">
          Architects of Time and Steel
        </h2>
        <p className="text-lg font-cormorant-garamond text-center max-w-3xl mx-auto mb-16">
          Meet the diverse heroes who wield the power of Aether and advanced machinery. Each champion brings a unique
          blend of skills and a compelling backstory to the unfolding saga.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {champions.map((champion, index) => (
            <Card key={index} className="bg-dark-gray border-yellow-500/30 glow-yellow">
              <CardHeader className="p-0">
                <div className="relative w-full h-64 overflow-hidden rounded-t-lg">
                  <Image
                    src={champion.image || "/placeholder.svg"}
                    alt={champion.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 text-center">
                <CardTitle className="text-2xl font-cinzel-decorative text-yellow-400 mb-2">{champion.name}</CardTitle>
                <p className="text-md font-cormorant-garamond text-white">{champion.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
