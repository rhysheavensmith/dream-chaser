"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsVideoLoaded(true);
    };

    if (video.readyState >= 3) {
      setIsVideoLoaded(true);
    } else {
      video.addEventListener("canplaythrough", handleCanPlay);
    }

    return () => {
      video.removeEventListener("canplaythrough", handleCanPlay);
    };
  }, []);

  return (
    <>
      {!isVideoLoaded && <LoadingSpinner />}
      
      <section className="relative h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.webm" type="video/webm" />
        </video>

      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/80" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-cinzel"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="block text-foreground"
          >
            From Script,
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="block text-accent mt-2"
          >
            To Spotlight.
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-xl md:text-2xl lg:text-3xl text-foreground/90 mt-6 max-w-3xl font-merriweather"
        >
          <span className="inline-block mx-2">Actor.</span>
          <span className="inline-block mx-2">Writer.</span>
          <span className="inline-block mx-2">Producer.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => {
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="text-sm uppercase tracking-widest text-foreground/70 mb-2 group-hover:text-accent transition-colors">
              Scroll
            </span>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="border-2 border-foreground/30 rounded-full p-2 group-hover:border-accent transition-colors"
            >
              <ChevronDown className="w-6 h-6 text-foreground/70 group-hover:text-accent transition-colors" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1 left-1 w-24 h-24 border-t-2 border-l-2 border-accent/60" />
        <div className="absolute top-1 right-1 w-24 h-24 border-t-2 border-r-2 border-accent/60" />
        <div className="absolute bottom-1 left-1 w-24 h-24 border-b-2 border-l-2 border-accent/60" />
        <div className="absolute bottom-1 right-1 w-24 h-24 border-b-2 border-r-2 border-accent/60" />
      </div>
    </section>
    </>
  );
}
