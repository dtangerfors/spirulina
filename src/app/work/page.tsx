import { createClient } from "@/prismicio";
import { CaseCard } from "@/app/ui/case_card";
import { Container } from "@/app/ui/layout/containers";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";

export default async function WorkPage() {
  const client = createClient();

  const cases = await client.getAllByType("case", {
    orderings: [
      {
        field: "document.first_publication_date",
        direction: "desc",
      },
    ],
  });
  const categories = await client.getAllByType("category");

  return (
    <main className="flex min-h-screen flex-col justify-between">
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
            <h1 className="font-display text-4xl xl:text-6xl text-black font-extrabold uppercase">Selected work</h1>
          </div>
        </Container>
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