import { PrismicNextLink } from "@prismicio/next";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicText } from "@prismicio/react";
import { createClient } from "@/prismicio"
import * as prismic from "@prismicio/client"
import { Container } from "@/app/ui/layout/containers";
import { CaseCard } from "@/app/ui/case_card";
import { asText } from "@prismicio/client";

type PageProps = {
  uid: string;
}

export async function generateMetadata({ params }: {params: PageProps}): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID("category", params.uid).catch(() => notFound());

  return {
    title: `Work made: ${asText(page.data.name)} | Daniel Tängerfors`,
  };
}

export default async function Category({ params }: {params: PageProps}) {
  const client = createClient();

  // Query the specific category
  const category = await client.getByUID("category", params.uid);
  const categories = await client.getAllByType("category");

  // Use the category ID to filter for posts with that category
  const cases = await client.getAllByType("case", {
    filters: [prismic.filter.at("my.case.categories.category", category.id)],
  })

  return (
    <main className="flex min-h-screen flex-col">
    <div className="relative xl:sticky top-9 z-30">
      <Container className="gap-y-2 max-xl:pt-9">
        <div className="col-span-2">
          <p>Filter by</p>
        </div>
        <div className="col-span-full xl:col-span-4 xl:col-start-4">
          <ul className="flex gap-4">
            {categories.map((category) => <li key={category.id}><PrismicNextLink document={category}><PrismicText field={category.data.name} /></PrismicNextLink></li>)}
          </ul>
        </div>
      </Container>
    </div>
    <header>
      <Container>
        <div className="col-span-full xl:col-start-4 xl:col-span-7 py-20 xl:py-32">
          <h1 className="text-4xl xl:text-6xl text-black">
            <span className="font-sans-condensed font-thin">Selected works in </span><br/>
            <span className="font-display font-thin uppercase"><PrismicText field={category.data.name} /></span>
          </h1>
        </div>
      </Container>
    </header>

    <section className="relative p-4">
      <div className="grid grid-cols-12 grid-rows-[auto] gap-4 w-full">
      {cases.map((item) => (
        <CaseCard item={item} key={item.id} />
      ))}
      </div>
    </section>

  </main>
  )
}

export async function generateStaticParams() {
  const client = createClient()
  const categories = await client.getAllByType("category")

  return categories.map((category) => {
    return { uid: category.uid }
  })
}