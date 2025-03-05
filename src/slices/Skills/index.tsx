"use client"
import { motion } from "framer-motion";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Container } from "@/app/ui/layout/containers";
import { asText } from "@prismicio/client";

/**
 * Props for `Skills`.
 */
export type SkillsProps = SliceComponentProps<Content.SkillsSlice>;

/**
 * Component for "Skills" Slices.
 */
const Skills = ({ slice }: SkillsProps): JSX.Element => {
  return (
    <Container>
      <div className="col-span-full xl:col-span-3 xl:sticky top-9 self-start mb-2">
        <h2>{asText(slice.primary.title)}</h2>
      </div>
      <div className="col-span-full xl:col-start-4 xl:col-span-7">
        <motion.ul 
          key={slice.id}
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -200px 0px" }}
        >
          {slice.items.map((item, i) => {
            return (
              <li 
                key={`${slice.id}-${i}`} className="relative font-sans-condensed font-normal text-sm uppercase leading-none pt-1 pb-1.5 px-3 rounded-3xl border-black border-[1.5px]">
                {item.skill}
              </li>
            )
          })}
        </motion.ul>
      </div>
    </Container>
  );
};

export default Skills;
