"use client"
import { motion } from "framer-motion";
import { Container } from "@/app/ui/layout/containers";
import { textComponents } from "@/app/ui/typography";
import { Content, LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

type LinkProps = {
  link_type: string;
  url: string;
}

const getDomain = (field: LinkProps) => {
  const domain = new URL(field.url);

  return domain.hostname
}

/**
 * Props for `ArticleList`.
 */
export type ArticleListProps = SliceComponentProps<Content.ArticleListSlice>;

/**
 * Component for "ArticleList" Slices.
 */
const ArticleList = ({ slice }: ArticleListProps): JSX.Element => {
  return (
    <Container>
      <div className="col-span-full xl:col-span-7 xl:col-start-4">
        <ul className="flex flex-col gap-12">
          {slice.items.map((item, i) => {
            return (
              <motion.li 
                key={`${slice.id}-${i}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "0px 0px -200px 0px" }}
              >
                <PrismicRichText field={item.title} components={textComponents} />
                <PrismicRichText field={item.body} components={textComponents} />
                <p className="mt-2"> {item.pretext_link} <i className="ri-arrow-right-line"></i> {" "}
                  <PrismicNextLink field={item.link}>{getDomain(item.link as LinkProps)}</PrismicNextLink>
                </p>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </Container>
  );
};

export default ArticleList;
