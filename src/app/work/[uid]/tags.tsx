import { CaseDocumentData } from "../../../../prismicio-types";
import { PrismicRichText, SliceZone } from "@prismicio/react"

export function Tags({items}: {items: CaseDocumentData["categories"]}) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => {
        return (
          <li key={item.category.id} className="relative font-sans-condensed font-normal text-sm uppercase leading-none pt-1 pb-1.5 px-3 rounded-3xl border-black border-[1.5px]"><PrismicRichText field={item.category.data.name} /></li>
        )
      })}
    </ul>
  )
}