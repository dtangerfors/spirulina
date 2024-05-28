import { createClient } from "@/prismicio";
import { Container } from "@/app/ui/layout/containers";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";
import { BlogCard } from "../ui/blog_card";

export default async function BlogPage() {
  const client = createClient();

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
          <div className="col-span-full xl:col-start-4 xl:col-span-7 py-20 xl:py-32">
            <h1 className="font-display text-4xl xl:text-7xl text-black font-extrabold uppercase">Blog</h1>
          </div>
        </Container>
      </header>

      <section className="relative">
        <ul>
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