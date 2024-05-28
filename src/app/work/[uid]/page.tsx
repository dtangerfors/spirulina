import { Container } from "@/app/ui/layout/containers";
import { createClient } from "@/prismicio"
import { Metadata } from "next";
import { asText } from "@prismicio/client";
import { notFound } from "next/navigation"
import { SliceZone } from "@prismicio/react"
import {components} from "@/slices"
import { Tags } from "./tags";
import { PrismicNextImage } from "@prismicio/next";
import { HeroImage } from "@/app/ui/hero_image";

type PageProps = {
  uid: string;
}

export async function generateMetadata({ params }: {params: PageProps}): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID("case", params.uid).catch(() => notFound());

  return {
    title: page.data.meta_title || `${asText(page.data.title)}`,
    description: page.data.meta_description,
  };
}

export default async function Page({ params }: {params: PageProps}) {
  const client = createClient()

  const page = await client
    .getByUID("case", params.uid, {
      fetchLinks: ['category.name'],
    })
    .catch(() => notFound());

  return (
    <article className="flex flex-col gap-16">
      <header className="min-h-svh">
        <figure className="h-[70svh]">
          <HeroImage image={page.data.hero_image} />
        </figure>
        <Container className="pt-4">
          <div className="col-span-full xl:col-span-3">
            <Tags items={page.data.categories} />          
          </div>
          <div className="col-span-full xl:col-span-7">
            <h1 className="text-4xl xl:text-6xl text-black">
              <span className="inline font-display font-extrabold uppercase">{asText(page.data.title)}. </span>
              <span className="inline font-sans-condensed font-thin">{asText(page.data.subtitle)}</span>
            </h1>
          </div>
        </Container>
      </header>
      <Container>
        <div className="col-span-full xl:col-span-7 xl:col-start-4">
          <p className="text-2xl pb-0">{asText(page.data.preamble)}</p>
        </div>
      </Container>
      <SliceZone slices={page.data.slices} components={components} />
    </article>
  )
}

export async function generateStaticParams() {
  const client = createClient()

  const pages = await client.getAllByType("case")

  return pages.map((page) => {
    return { uid: page.uid }
  })
}