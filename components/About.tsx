"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-12 text-center font-cinzel"
          >
            The Story Behind
            <span className="block text-accent mt-2">The Dreamer</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 order-2 md:order-1"
            >
              <p className="text-lg leading-relaxed text-foreground/80">
                From a young RAF police dog handler in Darwin to a global storyteller, Barry's journey proves 
                that dreams are only limited by the courage to pursue them. He filmed his first commercial 
                while still serving with the Royal Australian Air Force in 1988.
              </p>
              <p className="text-lg leading-relaxed text-foreground/80">
                By 1997 he had traded his uniform for a film set, graduating from the South Seas Film & 
                Television School with an NZQA in multi-camera and drama directing & screenwriting.
              </p>
              <p className="text-lg leading-relaxed text-foreground/80">
                Barry went on to carve a niche as a powerful character actor—best known for his work in 
                Spartacus—while building a parallel career as a writer and director. The founding of 
                DreamChaser Productions represents his belief that storytelling heals, inspires and connects us. 
                Every script, novel, graphic novel and performance is crafted with the same dedication to 
                excellence, authenticity and heart.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative order-1 md:order-2"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                <div className="absolute inset-0 border-2 border-accent/30 rounded-lg z-20" />
                <Image
                  src="/images/hero/bio-headshot.avif"
                  alt="Barry - Founder of DreamChaser Productions"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: "1988", label: "First Commercial" },
              { number: "1997", label: "Film School Graduate" },
              { number: "2010-2013", label: "Spartacus • Starring Role" },
              { number: "∞", label: "Stories to Tell" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 border border-border/50 rounded-lg bg-gradient-to-br from-background to-background/50 backdrop-blur-sm shadow-[inset_0_1px_0_0_rgba(212,175,55,0.1)]"
              >
                <h4 className="text-2xl md:text-3xl font-bold text-accent mb-2 font-cinzel">
                  {stat.number}
                </h4>
                <p className="text-foreground/70 uppercase tracking-widest text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}