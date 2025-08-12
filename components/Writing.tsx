"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { BookOpen, Scroll, PenTool, ShoppingCart } from "lucide-react"
import Image from "next/image"
import CompetitionRecognition from "./CompetitionRecognition"

const books = [
  {
    title: "Deadman's Land",
    type: "WWII + Werewolves Graphic Novel",
    description: "Adapted from Barry's screenplay, this blood-soaked werewolf saga was hailed as \"the graphic novel of 2014\" by Spartacus co-producer Charles Knight. Sir Richard Taylor of Weta described it as \"an inventive, blood-soaked horror show begging to be made into a live-action film.\"",
    achievements: [
      "Quarterfinalist - Final Draft Big Break (2013)",
      "Quarterfinalist - Scriptapalooza (2014)",
      "Multiple competition recognitions",
      "Praised by industry peers"
    ],
    icon: Scroll,
    image: "/images/hero/deadmans-land.jpg",
    amazonLink: "https://www.amazon.com/Deadmans-Land-Stephen-Stern/dp/1500995061/ref=sr_1_1?crid=2RVRUPVGVZLP8&keywords=deadman%27s+land&qid=1659330631&sprefix=%2Caps%2C210&sr=8-1"
  },
  {
    title: "Tandoori Apocalypse",
    type: "Graphic Novel/Series",
    description: "A reluctant hero navigates a vampire-ruled world in this long-running IP. The Bombay Rounding volume showcases Barry's ability to blend horror with cultural elements, creating a unique narrative that has captured readers' imaginations.",
    achievements: [
      "Published graphic novel series",
      "Available on Amazon",
      "Featured in press interviews",
      "Established franchise IP"
    ],
    icon: BookOpen,
    image: "/images/hero/tandoori-apocalypse.jpg",
    amazonLink: "https://www.amazon.com/Tandoori-Apocalypse-Bombay-Rounding/dp/1508484392/ref=sr_1_1?s=books&ie=UTF8&qid=1425450857&sr=1-1&keywords=tandoori+apocalypse"
  }
]

export default function Writing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <>
      <section id="writing" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-background to-background/90">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-12 text-center font-cinzel"
            >
              Scripts From
              <span className="block text-accent mt-2">The Typewriter</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-4xl mx-auto mb-16 space-y-4"
            >
              <p className="text-lg text-foreground/80 leading-relaxed">
                Barry's writing has been celebrated by top competitions and industry leaders. His screenplays have 
                placed in the International Screenwriters Association, Screencraft and Filmmatic competitions multiple times.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Beyond original works, Barry's reputation as a script doctor continues to grow. Colleagues praise his 
                ability to breathe life into characters, refine structure and sharpen dialogue. Producers and writers 
                note that his rewrites not only elevate the material but often get projects noticed by industry decision-makers.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {books.map((book, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -50 : 50, y: 30 }}
                  animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: index === 0 ? -50 : 50, y: 30 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.4 + index * 0.2,
                    ease: "easeOut"
                  }}
                  className="group"
                >
                  <div className="relative bg-gradient-to-br from-background to-background/50 border border-border/50 rounded-lg overflow-hidden h-full backdrop-blur-sm shadow-[0_1px_3px_0_rgba(212,175,55,0.1)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="grid md:grid-cols-[200px_1fr] gap-6 p-8">
                      <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-accent/20">
                        <Image
                          src={book.image}
                          alt={`${book.title} cover`}
                          fill
                          className="object-cover"
                          sizes="200px"
                        />
                      </div>
                      
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-2 font-cinzel">
                          {book.title}
                        </h3>
                        
                        <p className="text-accent/80 text-sm uppercase tracking-wider mb-4">
                          {book.type}
                        </p>
                        
                        <p className="text-foreground/70 mb-6 text-sm leading-relaxed">
                          {book.description}
                        </p>

                        <div className="space-y-2 mb-6">
                          {book.achievements.map((achievement, achievementIndex) => (
                            <motion.div
                              key={achievementIndex}
                              initial={{ opacity: 0, x: -30 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                              transition={{ 
                                duration: 0.4, 
                                delay: 0.6 + (index * 0.2) + (achievementIndex * 0.08),
                                ease: "easeOut"
                              }}
                              className="flex items-start space-x-2"
                            >
                              <div className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                              <span className="text-sm text-foreground/60">{achievement}</span>
                            </motion.div>
                          ))}
                        </div>

                        <motion.a
                          href={book.amazonLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center space-x-2 px-6 py-3 bg-accent text-background font-bold uppercase tracking-wider rounded-lg hover:bg-accent/90 transition-colors"
                        >
                          <ShoppingCart className="w-5 h-5" />
                          <span>Buy Now</span>
                        </motion.a>
                      </div>
                    </div>

                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 flex items-center justify-center space-x-4"
            >
              <PenTool className="w-6 h-6 text-accent" />
              <p className="text-xl text-foreground/70 italic text-center">
                "Script Doctor • Storyteller • Dream Weaver"
              </p>
              <PenTool className="w-6 h-6 text-accent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CompetitionRecognition />
    </>
  )
}