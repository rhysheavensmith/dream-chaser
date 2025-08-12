"use client"

import { Award } from "lucide-react"

const scripts = [
  { title: "The Great Beer Boycott", status: "Quarter-finalist" },
  { title: "Tandoori Apocalypse", status: "Semi-finalist" },
  { title: "Hellion Rising", status: "Quarter-finalist" }
]

export default function CompetitionRecognition() {
  return (
    <div className="py-20 md:py-32 bg-gradient-to-b from-background/90 to-background">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-accent/10 via-background/80 to-background/60 border-2 border-accent/40 rounded-lg p-12 relative overflow-hidden max-w-6xl mx-auto">
          <div className="absolute top-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
          
          <h3 className="text-3xl md:text-4xl font-bold mb-10 text-center relative z-10 font-cinzel">
            <span className="text-accent">Competition</span> Recognition
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            {scripts.map((script, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 border-2 border-accent/50 rounded-lg bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-sm shadow-lg"
              >
                <Award className="w-12 h-12 text-accent mb-4" />
                <h4 className="font-bold text-lg text-foreground mb-2 font-cinzel">
                  {script.title}
                </h4>
                <p className="text-accent font-semibold uppercase tracking-wider text-sm">{script.status}</p>
                <div className="mt-4 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}