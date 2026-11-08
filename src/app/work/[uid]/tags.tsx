
import { RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react"

export type CategoryData = {
  category: {
    id: string;
    type: string;
    tags: [];
    lang: string;
    slug: string;
    first_publication_date: string;
    last_publication_date: string;
    uid: string;
    url: string;
    data: DataField;
    link_type: string;
    isBroken: boolean;
  }
}

type DataField = {
  name: RichTextField | null | undefined;
}

export function Tags({items}: {items: CategoryData[]}) {

  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => {
        return (
          <li key={item.category.id} className="relative font-sans font-medium text-sm tracking-wide leading-none py-1.25 px-3 rounded-3xl border-black border-[1.5px]"><PrismicRichText field={item.category.data.name} /></li>
        )
      })}
    </ul>
  )
}