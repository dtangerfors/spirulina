"use client"
import { useState } from "react"
import NextLink from "next/link";
import { Hamburger } from "./hamburger";
import { MobileNavigation } from "./nav";
import { Logo } from "./logo";

// next/link (not <a>) so navigation stays client-side and the page transition runs.
function Link({url, label}: {url: string, label: string}) {
  return (
    <NextLink href={url} className="font-sans text-base no-underline leading-5 text-black hover:text-primary">{label}</NextLink>
  )
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/*
        The transition name sits on the bar, not on <header>: Safari makes an
        element with a view-transition-name the containing block for fixed
        descendants, which would trap the full-screen MobileNavigation inside
        the 60px header.
      */}
      <div className="[view-transition-name:site-header] relative z-50 grid gap-4 grid-cols-6 xl:grid-cols-12 py-1.5 px-4 items-center max-xl:bg-white">
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
        <div className="hidden xl:flex gap-4 col-start-10 col-span-2">
          <Link url={"/blog"} label={"Blog"} />
          <Link url={"/about"} label={"About"} />
        </div>
        <div className="max-xl:hidden col-start-12 col-span-1 justify-self-end">
          <NextLink href="/" className="block">
            <Logo size={24} stroke={2} />
          </NextLink>
        </div>
      </div>
      <MobileNavigation open={open} setOpen={setOpen} />
    </header>
  )
}