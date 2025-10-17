import { createClient } from "@/prismicio";
import { Metadata } from "next";
import { asText } from "@prismicio/client";
import { Container } from "@/app/ui/layout/containers";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import {components} from "@/slices";
import { PrismicNextImage } from "@prismicio/next";
import { HeroImage } from "../ui/hero_image";

const textComponents = {
  heading1: ({ children }: {children: any}) => (
    <h1 className="text-3xl xl:text-6xl text-black font-serif font-normal italic text-balance">{children}</h1>
  ),
  strong: ({ children }: {children: any}) => (
    <strong className="font-sans font-extrabold not-italic uppercase tracking-tight">{children}</strong>
  ),
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID("about", "about");

  return {
    title: page.data.meta_title || `${asText(page.data.title)}`,
    description: page.data.meta_description,
  };
}

export default async function AboutPage() {
  const client = createClient()

  const page = await client.getByUID("about", "about");

  return (
    <article className="flex flex-col gap-16">
      <header className="min-h-svh">
        <figure style={{height: `calc(24px * 23)`}} className="bg-primary-300">
          <HeroImage image={page.data.hero_image} />
        </figure>
        <Container className="pt-4">
          <div className="col-span-full xl:col-span-7">
            <PrismicRichText field={page.data.title} components={textComponents} />
          </div>
        </Container>
      </header>
      <Container>
        <div className="col-span-full xl:col-span-7 xl:col-start-4">
          <p className="text-xl xl:text-2xl pb-0">{asText(page.data.preamble)}</p>
        </div>
      </Container>
      <SliceZone slices={page.data.slices} components={components} />
    </article>
  )
}