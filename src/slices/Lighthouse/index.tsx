"use client"
import { motion } from "framer-motion";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Container } from "@/app/ui/layout/containers";
import { textComponents } from "@/app/ui/typography";

/**
 * Props for `Lighthouse`.
 */
export type LighthouseProps = SliceComponentProps<Content.LighthouseSlice>;

/**
 * Component for "Lighthouse" Slices.
 */
const Lighthouse = ({ slice }: LighthouseProps): JSX.Element => {
  return (
    <Container>
      <div className="col-span-full xl:col-start-4 xl:col-span-7">
        <motion.div 
          key={`${slice.id}-${slice.variation}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -200px 0px" }}
        >
          <PrismicRichText field={slice.primary.title} components={textComponents} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <figure className="flex flex-col items-center justify-center p-4 gap-4">
              <div 
                style={{
                  "--progress": `${slice.primary.performance}%`
                } as React.CSSProperties}
                className="donut-chart" role="progressbar" aria-live="polite" aria-valuenow={slice.primary.performance as number}></div>
              <figcaption className="text-base font-normal text-black">Performance</figcaption>
            </figure>

            <figure className="flex flex-col items-center justify-center p-4 gap-4">
              <div 
                style={{
                  "--progress": `${slice.primary.accessibility}%`
                } as React.CSSProperties}
                className="donut-chart" role="progressbar" aria-live="polite" aria-valuenow={slice.primary.accessibility as number}></div>
              <figcaption className="text-base font-normal text-black">Accessibility</figcaption>
            </figure>

            <figure className="flex flex-col items-center justify-center p-4 gap-4">
              <div 
                style={{
                  "--progress": `${slice.primary.best_practices}%`
                } as React.CSSProperties}
                className="donut-chart" role="progressbar" aria-live="polite" aria-valuenow={slice.primary.best_practices as number}></div>
              <figcaption className="text-base font-normal text-black">Best Practices</figcaption>
            </figure>

            <figure className="flex flex-col items-center justify-center p-4 gap-4">
              <div 
                style={{
                  "--progress": `${slice.primary.seo}%`
                } as React.CSSProperties}
                className="donut-chart" role="progressbar" aria-live="polite" aria-valuenow={slice.primary.seo as number}></div>
              <figcaption className="text-base font-normal text-black">SEO</figcaption>
            </figure>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default Lighthouse;
