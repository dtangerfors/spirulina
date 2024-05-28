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
        <p className="text-base font-sans text-black dark:text-gray-300">{asText(item.data.subtitle)}</p>
      </div>
      <figure className="relative aspect-[4/3] overflow-hidden">
        <PrismicNextImage field={item.data.thumbnail[0]?.image} className="w-full h-full object-cover"/>
      </figure>
      {/* <figure style={{
        backgroundColor: `${item.data.thumbnail[0]?.color}`, 
        backgroundImage: `radial-gradient(78% 60% at -12% -8%, ${split_colors[1].lighten(50).saturate(10)} 1%, #FF000000 99%), radial-gradient(120% 91% at 130% 102%, ${split_colors[1].lighten(10)} 1%, #FF000000 99%)`}
        } 
        className="relative aspect-[4/3] overflow-hidden">
        <Image src={"/noise.jpg"} width={1200} height={800} alt="" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"/>
        <div className="relative w-3/5 mx-auto">
          <div className="absolute mt-5">
            <Image src={"/iphone-mockup.png"} width={541} height={1086} alt="" />
            <div className="absolute inset-0" style={{maskImage: `url(/screen-mask.png)`, maskSize: "contain"}}>
              <PrismicNextImage field={item.data.thumbnail[0]?.image} style={{width: "85.5%", top: "2.5%"}} className="relative block mx-auto"/>
            </div>
          </div>
        </div>
      </figure> */}
    </Link>
  )
}
