import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import { CaseDocument } from "../../../prismicio-types";
import { asText } from "@prismicio/client";

function CaseCardContent({data}: {data: CaseDocument["data"]}) {
  return (
    <>
      <div className="mb-5">
        <h2 className="text-base font-display font-extrabold text-black">{asText(data.title)} {data.isComing && <span className="font-sans font-normal opacity-60">(Coming soon)</span>}</h2>
        <p className="text-base font-sans text-black">{asText(data.subtitle)}</p>
      </div>
      <figure className="relative aspect-[4/3] overflow-hidden">
        <PrismicNextImage field={data.thumbnail[0]?.image} className="w-full h-full object-cover"/>
      </figure>
    </>
  )
}

export function CaseCard({item}: {item: CaseDocument}) {

  if (item.data.isComing) return (
    <div key={item.id} className="card relative overflow-hidden">
      <CaseCardContent data={item.data} />
    </div>
  )

  return (
    <Link href={`${item.url}`} key={item.id} className="card relative overflow-hidden">
      <CaseCardContent data={item.data} />
    </Link>
  )
}
