
import * as prismic from "@prismicio/client"
import { createClient } from "@/prismicio";
import { Metadata } from "next";
import { CaseCard } from "./ui/case_card";
import { PrismicRichText } from "@prismicio/react";
import { HeroImage } from "./ui/hero_image";

const textComponents = {
  heading1: ({ children }: {children: any}) => (
    <h1 className="text-3xl xl:text-9xl text-primary-1000 font-sans-condensed font-thin uppercase">{children}</h1>
  ),
  paragraph: ({ children }: {children: any}) => (
    <span className="leading-none inline-block last:mt-auto last:text-right md:w-1/2 last:w-2/3 xl:last:w-1/2 last:self-end">{children}</span>
  ),
  strong: ({ children }: {children: any}) => (
    <strong className="font-display font-extrabold">{children}</strong>
  ),
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("home");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}


export default async function Home() {
  const client = createClient();

  const page = await client.getSingle("home");

  const cases = await client.getAllByType("case", {
    filters: [prismic.filter.not("my.case.isFeatured", false)],
    orderings: [
      {
        field: "document.first_publication_date",
        direction: "desc",
      },
    ],
  });

  return (
    <main className="flex min-h-screen flex-col justify-between">
      
      <header className="relative p-4 pt-[4.5rem] xl:pt-9 h-svh bg-primary-100">
        <figure className="absolute w-full h-full inset-0">
          <HeroImage image={page.data.hero_image} />
        </figure>
        <h1 className="relative z-10 w-full h-full flex flex-col text-5xl md:text-7xl xl:text-9xl text-primary-1000 font-sans-condensed font-thin uppercase">
          <PrismicRichText field={page.data.title} components={textComponents} />
        </h1>
      </header>

      <section className="relative p-4">
        <div className="display-grid grid grid-cols-12 grid-rows-[auto] gap-4 w-full">
        {cases.map((item) => (
          <CaseCard item={item} key={item.id} />
        ))}
        </div>
      </section>

    </main>
  );
}
