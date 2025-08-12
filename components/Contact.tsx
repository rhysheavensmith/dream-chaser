"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/95" />
      
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
            Let's Create
            <span className="block text-accent mt-2">Something Together</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 font-cinzel">
                  Get In Touch
                </h3>
                <p className="text-foreground/70 mb-8">
                  Whether you're looking to collaborate on a project, discuss a role, or bring a script to life, 
                  I'm always interested in exploring new creative opportunities.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "contact@dreamchaserproductions.com" },
                  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                  { icon: MapPin, label: "Location", value: "Los Angeles, California" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="flex items-center space-x-4 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="p-3 border border-border/50 rounded-lg bg-gradient-to-br from-background to-background/50"
                    >
                      <item.icon className="w-6 h-6 text-accent" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-foreground/60 uppercase tracking-wider">{item.label}</p>
                      <p className="text-foreground group-hover:text-accent transition-colors">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg focus:outline-none focus:border-accent focus:shadow-[0_0_0_1px_rgba(212,175,55,0.2)] transition-all text-foreground placeholder:text-foreground/50"
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg focus:outline-none focus:border-accent focus:shadow-[0_0_0_1px_rgba(212,175,55,0.2)] transition-all text-foreground placeholder:text-foreground/50"
                    />
                  </motion.div>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg focus:outline-none focus:border-accent focus:shadow-[0_0_0_1px_rgba(212,175,55,0.2)] transition-all text-foreground placeholder:text-foreground/50"
                  />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <textarea
                    placeholder="Your Message"
                    rows={6}
                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg focus:outline-none focus:border-accent focus:shadow-[0_0_0_1px_rgba(212,175,55,0.2)] transition-all text-foreground placeholder:text-foreground/50 resize-none"
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 bg-accent text-background font-bold uppercase tracking-wider rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center space-x-2 group"
                >
                  <span>Send Message</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Send className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                  </motion.div>
                </motion.button>
              </form>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 text-center border-t border-border/30 pt-12"
          >
            <p className="text-foreground/60 mb-4">Follow the journey</p>
            <div className="flex justify-center space-x-6">
              {["Instagram", "Twitter", "LinkedIn", "IMDb"].map((social, index) => (
                <motion.a
                  key={social}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="text-foreground/70 hover:text-accent transition-colors uppercase tracking-wider text-sm"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}