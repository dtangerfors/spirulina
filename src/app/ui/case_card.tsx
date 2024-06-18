import Image from "next/image";
import tinycolor from "tinycolor2";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import { CaseDocument } from "../../../prismicio-types";
import { asText } from "@prismicio/client";

export function CaseCard({item}: {item: CaseDocument}) {

  const split_colors = tinycolor(`${item.data.thumbnail[0]?.color}`).splitcomplement();

  return (
    <Link href={`${item.url}`} key={item.id} className="card relative overflow-hidden">
      <div className="mb-5">
        <h2 className="text-base font-display font-extrabold text-black">{asText(item.data.title)}</h2>
        <p className="text-base font-sans text-black">{asText(item.data.subtitle)}</p>
      </div>
      <figure className="relative aspect-[4/3] overflow-hidden">
        <PrismicNextImage field={item.data.thumbnail[0]?.image} className="w-full h-full object-cover"/>
      </figure>
    </Link>
  )
}
