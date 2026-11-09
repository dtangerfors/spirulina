import { createClient } from "@/prismicio";
import { Container } from "./containers";
import { Logo } from "./logo";
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
        <div className="col-span-full xl:col-span-3">
          <Link href="/" aria-label="Home">
            <Logo size={64} stroke={3} />
          </Link>
        </div>
        <div className="col-span-3">
          <p className="pb-[2em]">Latest Work</p>
          <ul>
            {cases.map((item) => (<li key={item.id}><Link href={`${item.url}`} className="hover:text-primary">{asText(item.data.title)}</Link></li>))}
          </ul>
        </div>
        <div className="col-span-3 xl:col-start-10 xl:justify-self-end xl:text-right">
          <p className="pb-[2em]">Socials</p>
          <ul>
            {globals.data.socials.map((item, i) => (<li key={`${globals.id}-${i}`}><PrismicNextLink field={item.link} className="hover:text-primary">{item.name}</PrismicNextLink></li>))}
          </ul>
        </div>
      </Container>
      <Container>
        <p className="text-sm text-black col-span-full text-right xl:text-left xl:col-start-4 xl:col-span-2">© {new Date().getFullYear()} Daniel Tängerfors</p>
      </Container>
    </footer>
  )
}