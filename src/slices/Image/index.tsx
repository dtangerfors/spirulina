"use client"
import { motion } from "framer-motion";
import { Container } from "@/app/ui/layout/containers";
import { Content, asText } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Image`.
 */
export type ImageProps = SliceComponentProps<Content.ImageSlice>;

/**
 * Component for "Image" Slices.
 */
const Image = ({ slice }: ImageProps): JSX.Element => {
  return (
    <Container>
      <motion.figure 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -200px 0px" }}
        className="col-span-full max-xl:-mr-4 xl:col-start-4 xl:col-span-9"
      >
        <PrismicNextImage field={slice.primary.image} />
        <p className="text-sm text-black">{slice.primary.image.alt}</p>
      </motion.figure>
    </Container>
  );
};

export default Image;
