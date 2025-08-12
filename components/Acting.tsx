"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Film, Sword, Users, Drama } from "lucide-react";
import Image from "next/image";

const roles = [
  {
    title: "Lugo",
    production: "Spartacus",
    type: "Action",
    description: "Freed German slave turned rebel.",
    icon: Sword,
  },
  {
    title: "Simon Wilbury",
    production: "The Brokenwood Mysteries",
    type: "Drama",
    description: "Circus strongman - not too bright",
    icon: Film,
  },
  {
    title: "Boston",
    production: "Pumpkin Eater",
    type: "Short Film",
    description: "A pavlova western gunslinger",
    icon: Users,
  },
  {
    title: "Maximus",
    production: "Young Hercules",
    type: "TV Series",
    description: "A villain played opposite young Ryan Gosling",
    icon: Drama,
  },
];

export default function Acting() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="acting" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background to-background/90" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-12 text-center font-cinzel"
          >
            Characters
            <span className="block text-accent mt-2">Come Alive</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl mx-auto mb-12 space-y-4"
          >
            <p className="text-lg text-foreground/80 leading-relaxed text-center">
              Versatility is Barry's hallmark. On screen he transforms into
              gladiators, warlords, outlaws and tender fathers. The acting
              gallery reveals everything from his muscular portrayal of Lugo in
              Spartacus to comedic cameos and intense indie-film roles.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed text-center">
              Whether delivering a guttural battle cry or a quiet, contemplative
              line, Barry's presence commands the frame. His lifelong love of
              martial arts and bodybuilding infuses each performance with
              physical authenticity, while his study of character psychology
              ensures emotional depth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative order-2 md:order-1"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                <div className="absolute inset-0 border-2 border-accent/30 rounded-lg z-20" />
                <Image
                  src="/images/hero/Barry-Duffield-Lugo.jpg"
                  alt="Barry as Lugo in Spartacus"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <h3 className="text-3xl font-bold text-foreground mb-2 font-cinzel"
                  >
                    Lugo
                  </h3>
                  <p className="text-accent font-semibold">Spartacus</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6 order-1 md:order-2"
            >
              {roles.map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
                  }
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="group relative"
                >
                  <div className="flex items-start space-x-4 p-6 border border-border/30 rounded-lg bg-gradient-to-r from-background/80 to-background/40 backdrop-blur-sm shadow-[inset_0_1px_0_0_rgba(212,175,55,0.05)]">
                    <div>
                      <role.icon className="w-10 h-10 text-accent mt-1" />
                    </div>

                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-foreground mb-1 font-cinzel"
                      >
                        {role.title}
                      </h4>
                      <p className="text-accent/80 text-sm uppercase tracking-wider mb-2">
                        {role.type}
                      </p>
                      <p className="text-foreground/70 text-sm">
                        {role.description}
                      </p>
                      <p className="text-foreground/50 text-xs mt-2">
                        {role.production}
                      </p>
                    </div>
                  </div>

                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-transparent"
                    initial={{ scaleY: 0 }}
                    whileHover={{ scaleY: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center p-12 border border-border/30 rounded-lg bg-gradient-to-br from-background/60 to-background/20 backdrop-blur-sm"
          >
            <blockquote className="text-2xl text-foreground/80 italic mb-4">
              "Physical authenticity meets emotional depth in every performance"
            </blockquote>
            <p className="text-accent uppercase tracking-widest text-sm">
              Martial Arts • Bodybuilding • Character Psychology
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
