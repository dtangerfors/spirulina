import { BlogPostDocument } from "../../../prismicio-types";
import { Container } from "@/app/ui/layout/containers";
import { PrismicNextLink } from "@prismicio/next";
import { asText } from "@prismicio/client";

export function BlogCard({ post }: {post: BlogPostDocument}) {

  const publicationDate = new Date(post.first_publication_date).toLocaleDateString("en-us", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })

  return (
    <Container>
      <div className="col-span-full xl:col-span-3">
        <p>{publicationDate}</p>
      </div>
      <div className="col-span-full xl:col-span-7 xl:col-start-4">
        <h2 className="font-display text-3xl xl:text-5xl pb-4 max-w-prose">
          <PrismicNextLink document={post}>{asText(post.data.title)}</PrismicNextLink>
        </h2>
        <p className="max-w-prose">{post.data.meta_description}</p>
      </div>
    </Container>
  )
}