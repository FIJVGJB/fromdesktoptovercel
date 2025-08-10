import Image from "next/image"

export default function GameplaySection() {
  return (
    <section id="gameplay" className="relative py-16 md:py-24 bg-dark-gray text-white overflow-hidden parchment-bg">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-cinzel-decorative text-yellow-400 text-center mb-12 animate-pulse-glow">
          Master the Aether, Control the Battlefield
        </h2>
        <p className="text-lg font-cormorant-garamond text-center max-w-3xl mx-auto mb-16">
          Aether Machina offers a dynamic gameplay experience where strategic thinking and precise execution are key.
          Engage in thrilling battles across time-distorted landscapes.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg glow-yellow">
            <Image
              src="/leonardo-mechanical-collage-0.jpeg"
              alt="Intricate Mechanical Designs"
              fill
              className="object-cover sepia"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-cinzel-decorative text-yellow-400">Intricate Mechanics</h3>
            <p className="text-lg font-cormorant-garamond leading-relaxed">
              Dive deep into a combat system that rewards mastery of unique mechanical abilities and temporal spells.
              Each champion's kit is designed to offer complex synergies and counter-play opportunities.
            </p>
            <p className="text-lg font-cormorant-garamond leading-relaxed">
              Utilize clockwork devices, deploy automated turrets, and manipulate the flow of time to outmaneuver your
              opponents. The battlefield is a canvas for your ingenuity.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center flex-col-reverse md:flex-row-reverse">
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg glow-yellow">
            <Image
              src="/time-distorted-battlefield.png"
              alt="Time Distorted Battlefield"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-cinzel-decorative text-yellow-400">Temporal Distortions</h3>
            <p className="text-lg font-cormorant-garamond leading-relaxed">
              Experience dynamic battlegrounds where temporal anomalies can shift the terrain, alter abilities, and
              create unpredictable challenges. Adaptability is key to victory.
            </p>
            <p className="text-lg font-cormorant-garamond leading-relaxed">
              These distortions are not just visual; they actively impact gameplay, forcing players to constantly
              re-evaluate their strategies and make split-second decisions.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-3xl font-cinzel-decorative text-yellow-400 mb-6">Watch the Aether in Action</h3>
          <div className="relative w-full max-w-4xl mx-auto h-[300px] md:h-[500px] rounded-lg overflow-hidden shadow-xl glow-yellow">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/placeholder.mp4"
              loop
              muted
              autoPlay
              playsInline
              controls
            >
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 video-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
