import { createClient } from "@/prismicio";
import { Metadata } from "next";
import { Container } from "@/app/ui/layout/containers";
import { BlogCard } from "../ui/blog_card";
import { PrismicRichText } from "@prismicio/react";

const textComponents = {
  heading1: ({ children }: {children: any}) => (
    <h1 className="text-3xl xl:text-6xl text-black font-serif font-normal italic">{children}</h1>
  ),
  strong: ({ children }: {children: any}) => (
    <strong className="font-sans font-extrabold not-italic uppercase tracking-tight">{children}</strong>
  ),
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("blog_index");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export default async function BlogPage() {
  const client = createClient();

  const page = await client.getSingle("blog_index");

  const posts = await client.getAllByType("blog_post", {
    orderings: [
      {
        field: "document.first_publication_date",
        direction: "desc",
      },
    ],
  });

  return (
    <main className="flex flex-col min-h-screen">
      <header>
        <Container>
          <div className="col-span-full xl:col-start-4 xl:col-span-6 py-20 xl:py-32">
            <PrismicRichText field={page.data.title} components={textComponents} />
          </div>
        </Container>
      </header>

      <section className="relative">
        <ul className="flex flex-col gap-16">
          {posts.map(post => {
            return (
              <li key={post.id}>
                <BlogCard post={post} />
              </li>
            )
          })}
        </ul>
      </section>

    </main>
  );
}