"use client"
import { motion } from "framer-motion";
import { Container } from "@/app/ui/layout/containers";
import { textComponents } from "@/app/ui/typography";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Text`.
 */
export type TextProps = SliceComponentProps<Content.TextSlice>;

/**
 * Component for "Text" Slices.
 */
const Text = ({ slice }: TextProps): JSX.Element => {

  
  return (
    <Container>
      {slice.variation === "default" && (
        <motion.div 
          key={`${slice.id}-${slice.variation}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -200px 0px" }}
          className="col-span-full xl:col-start-4 xl:col-span-7 xl:columns-2 gap-x-4"
        >
          <PrismicRichText field={slice.primary.text} components={textComponents} />
        </motion.div>
      )}
      {slice.variation === "fullSpanText" && (
        <motion.div 
          key={`${slice.id}-${slice.variation}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -200px 0px" }}
          className="col-span-full xl:col-start-4 xl:col-span-7"
        >
          <PrismicRichText field={slice.primary.text} components={textComponents} />
        </motion.div>
      )}
      
    </Container>
  );
};

export default Text;
