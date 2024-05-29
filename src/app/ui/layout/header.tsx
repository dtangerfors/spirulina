"use client"
import { useState } from "react"
import { Hamburger } from "./hamburger";
import { MobileNavigation } from "./nav";

function Link({url, label}: {url: any, label: string}) {
  return (
    <a href={url} className="font-sans text-base no-underline leading-5 text-black hover:text-primary">{label}</a>
  )
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 max-xl:bg-white">
      <div className="relative z-50 grid gap-4 grid-cols-6 xl:grid-cols-12 py-1.5 items-center">
        <div className="col-span-3 xl:hidden">
          <Hamburger open={open} setOpen={setOpen} />
        </div>
        <div className="col-span-3 xl:col-span-2">
          <Link url={"/"} label={"Daniel Tängerfors"} />
        </div>
        <div className="max-xl:hidden col-start-4 col-span-4">
          <span>
          <Link url={"/work"} label={"Work"} />
          </span>
        </div>
        <div className="hidden xl:flex gap-4 col-span-3 col-start-10 justify-self-end">
          <Link url={"/blog"} label={"Blog"} />
          <Link url={"/about"} label={"About"} />
        </div>
      </div>
      <MobileNavigation open={open} setOpen={setOpen} />
    </header>
  )
}