"use client"
import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { useScroll, useTransform, motion } from "framer-motion";
import { RefObject, useRef } from "react";

export function HeroImage({image}: {image: ImageField}) {

  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "120vh"]);

  return (
    <div className="h-full overflow-hidden">
      <motion.div style={{y}} className="relative h-full">
        <PrismicNextImage field={image} className="w-full h-full object-cover" quality={95}/>
      </motion.div>

    </div>
  )
}