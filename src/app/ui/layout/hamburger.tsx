import { motion } from "framer-motion"

type ButtonProps = {
  setOpen: (value: boolean) => void;
  open: boolean;
}

export function Hamburger({ setOpen, open }: ButtonProps) {
  return (
    <motion.button
      key="hamburger"
      onClick={() => setOpen(!open)}
      className="group relative appearance-none h-12 flex items-center font-sans text-xs no-underline"
  >
    <span className="relative top-0 w-6 h-6 inline-flex flex-col justify-around transition-all duration-200">
      <span className={`absolute -translate-y-1/2 w-full h-px bg-black transition-all ${open ? 'top-1/2 rotate-45 group-hover:rotate-[-135deg] duration-700' : 'top-[4px] rotate-0 group-hover:top-[8px] duration-200'}`}></span>
      <span className={`absolute -translate-y-1/2 w-full h-px bg-black transition-all ${open ? 'top-1/2 -left-6 duration-700 opacity-0 transition-all' : 'top-[12px] left-0 group-hover:top-[12px] duration-400 delay-200'}`}></span>
      <span className={`absolute -translate-y-1/2 w-full h-px bg-black transition-all ${open ? 'top-1/2 -rotate-45 group-hover:rotate-[135deg] duration-700' : 'top-[20px] rotate-0 group-hover:top-[16px] duration-200'}`}></span>
    </span>
    </motion.button>
  )
}