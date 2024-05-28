import { createClient } from "@/prismicio";
import { Container } from "./containers";
import Link from "next/link";
import { asText } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";

export async function Footer() {
  const client = createClient();

  const cases = await client.getAllByType("case", {
    limit: 5
  });

  const globals = await client.getSingle("globals");

  return (
    <footer className="flex flex-col gap-32 pt-32 pb-4">
      <Container className="gap-y-12">
        <div className="col-span-3">
          <p className="pb-[2em]">Contact</p>
          <p>daniel(at)dtangerfors.se</p>
        </div>
        <div className="col-span-full xl:col-span-3 max-xl:order-1">
          <p className="pb-[2em]">Latest Work</p>
          <ul>
            {cases.map((item) => (<li key={item.id}><Link href={`${item.url}`} className="hover:text-primary">{asText(item.data.title)}</Link></li>))}
          </ul>
        </div>
        <div className="col-span-3 xl:col-start-10 justify-self-end text-right">
          <p className="pb-[2em]">Socials</p>
          <ul>
            {globals.data.socials.map((item, i) => (<li key={`${globals.id}-${i}`}><PrismicNextLink field={item.link} className="hover:text-primary">{item.name}</PrismicNextLink></li>))}
          </ul>
        </div>
      </Container>
      <Container>
        <p className="text-sm text-black col-start-4 col-span-full">© {new Date().getFullYear()} Daniel Tängerfors</p>
      </Container>
    </footer>
  )
}