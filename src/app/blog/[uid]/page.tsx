import { createClient } from "@/prismicio"
import { Metadata } from "next";
import { asText } from "@prismicio/client";
import { notFound } from "next/navigation"
import { SliceZone } from "@prismicio/react"
import { Container } from "@/app/ui/layout/containers";
import {components} from "@/slices"

type PageProps = {
  uid: string;
}

export async function generateMetadata({ params }: {params: PageProps}): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID("blog_post", params.uid).catch(() => notFound());

  return {
    title: page.data.meta_title || `${asText(page.data.title)}`,
    description: page.data.meta_description,
  };
}

export default async function BlogPostPage({ params }: {params: PageProps}) {
  const client = createClient();

  const post = await client
    .getByUID("blog_post", params.uid)
    .catch(() => notFound());

  const publicationDate = new Date(post.first_publication_date).toLocaleDateString("en-us", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="flex flex-col">
      <header className="py-20 xl:py-32">
        <Container>
          <div className="col-span-full xl:col-span-7 xl:col-start-4">
            <h1 className="text-4xl xl:text-6xl text-black pb-4">
              <span className="inline font-sans font-extrabold uppercase tracking-tight">{asText(post.data.title)}</span>
            </h1>
            <p>Posted on {publicationDate}</p>
          </div>
        </Container>
      </header>
      <div className="flex flex-col gap-6">
        <SliceZone slices={post.data.slices} components={components} />
      </div>
    </article>
  )
}

export async function generateStaticParams() {
  const client = createClient()

  const pages = await client.getAllByType("blog_post")

  return pages.map((page) => {
    return { uid: page.uid }
  })
}