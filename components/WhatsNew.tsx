"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Sparkles, BookOpen, Calendar } from "lucide-react"

export default function WhatsNew() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="whats-new" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-background/90 via-background to-background/90">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-accent/5 to-transparent" />
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "linear-gradient(45deg, transparent 30%, rgba(212, 175, 55, 0.03) 50%, transparent 70%)",
            backgroundSize: "200% 200%",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header with sparkle effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-8 h-8 text-accent" />
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-bold mx-6 font-cinzel text-accent">
                What's New
              </h2>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-8 h-8 text-accent" />
              </motion.div>
            </div>
            <p className="text-xl md:text-2xl text-foreground/70 font-merriweather italic">
              An Unforgettable Journey Awaits
            </p>
          </motion.div>

          {/* Main content area */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Book cover */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-accent/30 to-accent/20 rounded-lg blur-2xl" />
                
                {/* Book frame */}
                <div className="relative bg-gradient-to-br from-background via-background/95 to-background border-2 border-accent/30 rounded-lg p-8 shadow-2xl">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/5 to-transparent rounded-lg" />
                  
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-xl bg-background">
                    <Image
                      src="/images/gallery/coming-soon.jpeg"
                      alt="Coming Soon - Barry Duffield's new book"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                    
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-accent/60" />
                    <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-accent/60" />
                    <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-accent/60" />
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-accent/60" />
                  </div>
                  
                  {/* "New Release" badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="absolute -top-4 -right-4 bg-accent text-background px-4 py-2 rounded-full font-bold uppercase tracking-wider text-sm shadow-lg"
                  >
                    Coming Soon
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Book details */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-4xl md:text-5xl font-bold mb-3 font-cinzel">
                  Barry Duffield
                </h3>
                <div className="flex items-center space-x-3 text-accent mb-6">
                  <BookOpen className="w-5 h-5" />
                  <span className="text-lg font-semibold uppercase tracking-wider">Autobiography</span>
                  <Calendar className="w-5 h-5" />
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/50 to-transparent" />
                <blockquote className="pl-8 space-y-4">
                  <p className="text-xl md:text-2xl text-foreground/90 font-merriweather italic leading-relaxed">
                    "Journey from the streets of the UK in the 60s, to the wild bush of the Northern Territory in Australia in the 70s, to the Hollywood red carpet in the 2000s, to the COVID-19 vaccine injury that almost ended it all."
                  </p>
                  <p className="text-2xl md:text-3xl text-accent font-bold font-cinzel">
                    A journey of persistence
                  </p>
                </blockquote>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="space-y-4 pt-6"
              >
                <p className="text-lg text-foreground/80 leading-relaxed">
                  From humble beginnings on the streets of 1960s Britain to the rugged landscapes of Australia's Northern Territory, Barry Duffield's life reads like a screenplay waiting to be filmed. This autobiography chronicles an extraordinary journey through military service, Hollywood stardom, and a near-fatal health crisis that tested every ounce of his legendary persistence.
                </p>
                
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Experience the raw, unfiltered story of the man behind DreamChaser Productions—a testament to the power of dreams, determination, and the unbreakable human spirit.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-wrap gap-4 pt-6"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-accent text-background font-bold uppercase tracking-wider rounded-lg hover:bg-accent/90 transition-all shadow-lg text-lg"
                >
                  Pre-Order Now
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-accent text-accent font-bold uppercase tracking-wider rounded-lg hover:bg-accent/10 transition-all"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom decorative element */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}