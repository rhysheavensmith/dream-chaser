"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { X } from "lucide-react"
import Image from "next/image"

const galleryItems = [
  { 
    id: 1, 
    title: "Spartacus Combat", 
    category: "Action", 
    aspect: "wide",
    image: "/images/gallery/spartacus-combat.avif"
  },
  { 
    id: 2, 
    title: "Spartacus Portrait", 
    category: "Character", 
    aspect: "tall",
    image: "/images/gallery/spartacus-headshot.avif"
  },
  { 
    id: 3, 
    title: "Ash Williams Tribute", 
    category: "Horror Icon", 
    aspect: "square",
    image: "/images/gallery/ash-evil-dead.avif"
  },
  { 
    id: 4, 
    title: "Villain Role", 
    category: "Drama", 
    aspect: "square",
    image: "/images/gallery/villain-role.avif"
  },
  { 
    id: 5, 
    title: "Mr. Burns", 
    category: "Comedy", 
    aspect: "tall",
    image: "/images/gallery/gallery-burns.avif"
  }
]

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null)

  return (
    <section id="gallery" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-background/90 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-12 text-center font-cinzel"
          >
            Captured
            <span className="block text-accent mt-2">Moments</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={`relative group cursor-pointer overflow-hidden rounded-lg ${
                  item.aspect === "tall" ? "row-span-2" : 
                  item.aspect === "wide" ? "col-span-2" : ""
                }`}
                onClick={() => setSelectedImage(item)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                  
                  <motion.div
                    className="absolute inset-0 bg-accent/10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-lg md:text-xl font-bold text-foreground mb-1 font-cinzel">
                        {item.title}
                      </h3>
                      <p className="text-accent/80 text-sm uppercase tracking-wider">
                        {item.category}
                      </p>
                    </motion.div>
                  </div>

                  <motion.div
                    className="absolute inset-0 border-2 border-accent/30 shadow-[inset_0_0_20px_rgba(212,175,55,0.1)]"
                    initial={{ scale: 1.1, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-foreground/70 hover:text-foreground transition-colors z-10"
            >
              <X size={32} />
            </button>
            
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent">
                <h3 className="text-3xl font-bold text-foreground mb-2 font-cinzel">
                  {selectedImage.title}
                </h3>
                <p className="text-accent uppercase tracking-widest">
                  {selectedImage.category}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}