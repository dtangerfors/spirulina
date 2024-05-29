"use client"
import clsx from "clsx";
import { HTMLMotionProps, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from 'next/navigation';

interface NavItem extends HTMLMotionProps<"li"> {
  open: boolean;
  children: React.ReactNode;
}

export function NavItem({open, children, ...props}: NavItem) {
  return (
    <motion.li
      {...props}
      animate = {{
        y: open ? 0 : 30,
        opacity: open ? 1 : 0,
      }}
      className="relative py-6"
    >
      {children}
    </motion.li>
  )
}

export function NavLink({url, title, label, setOpen}: {url: string, title: string, label: string, setOpen: (value: boolean) => void}) {
  const pathname = usePathname();

  return (
    <Link
      href={url}
      title={title}
      onClick={() => setOpen(!open)}
      className={clsx("block text-5xl leading-none uppercase text-black hover:text-primary", pathname == url ? "font-display font-extrabold" : "font-sans-condensed font-thin" )}
    >
      {label}
    </Link>
  )
}


export function NavSocialItem({open, children, ...props}: NavItem) {
  return (
    <motion.li
      {...props}
      animate = {{
        y: open ? 0 : 30,
        opacity: open ? 1 : 0,
      }}
      className="relative"
    >
      {children}
    </motion.li>
  )
}
