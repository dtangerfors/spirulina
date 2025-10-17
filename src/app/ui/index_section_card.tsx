"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { CaseDocument } from "../../../prismicio-types";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { asText } from "@prismicio/client";
import { Container } from "./layout/containers";
import Link from "next/link";

export default function IndexSectionCard({
  item,
}: {
  item: CaseDocument;
}) {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <article>
      <Container className="pt-20 pb-10 lg:pt-80 lg:pb-40 p-4 !-mx-4">
        <div className="col-span-full xl:col-span-3">   
        {item.data.isComing && (
            <span className="relative font-sans-condensed font-normal text-sm uppercase leading-none pt-1 pb-1.5 px-3 rounded-3xl border-black border-[1.5px]">Coming soon</span>
          )}
        </div>
        <div className="col-span-full xl:col-span-7">
          <h2 className="text-4xl xl:text-6xl text-black text-balance">
            <Link href={`${item.url}`}>
              <span className="inline font-display font-normal uppercase tracking-tight">{asText(item.data.title)}. </span>
              <span className="inline font-serif font-normal italic text-[1.05em]">{asText(item.data.subtitle)}</span>
            </Link>
          </h2>
        </div>
      </Container>

      <div
        ref={container}
        className="relative flex items-center justify-center h-[70vh] lg:h-screen overflow-hidden max-lg:-mx-4"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="absolute lg:fixed top-[-10vh] left-0 h-[70vh] lg:h-[120vh] w-full">
          <motion.div style={{ y }} className="relative w-full h-full">
            <PrismicNextImage
              field={item.data.hero_image}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        <Link href={`${item.url}`} className="absolute size-full inset-0"/>
      </div>
    </article>
  );
}
