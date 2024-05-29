import { motion } from "framer-motion";
import { PrismicNextLink } from "@prismicio/next";
import { Container } from "../containers";
import { NavItem, NavLink, NavSocialItem } from "./nav_link";
import { socials } from "./socials";

export function MobileNavigation({ open, setOpen }: { open: boolean, setOpen: (value: boolean) => void }) {
  return (
    <motion.nav
      initial={{
        y: "-100%",
      }}
      animate={{
        y: open ? 0 : "-100%",
      }}
      transition={{ delay: open ? 0 : 1, type: "tween", duration: 0.8 }}
      className="fixed inset-0 z-40 w-screen h-screen bg-white dark:bg-black p-4 pb-safe px-safe supports-[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh]"
    >
      <Container className="h-full pt-20 !mx-0">
        <ul className="flex flex-col flex-1 col-span-3 lg:col-span-6">
          <NavItem
            open={open}
            transition={{
              delay: open ? 0.8 : 0.6,
              type: "spring",
              stiffness: 75,
              duration: 0.1,
            }}
          >
            <NavLink title="Learn more about me" url="/about" label="About" setOpen={setOpen} />
          </NavItem>
          <NavItem
            open={open}
            transition={{
              delay: open ? 0.7 : 0.4,
              type: "spring",
              stiffness: 75,
              duration: 0.1,
            }}
          >
            <NavLink title="View my recent work" url="/work" label="Work" setOpen={setOpen} />
          </NavItem>
          <NavItem
            open={open}
            transition={{
              delay: open ? 0.6 : 0.2,
              type: "spring",
              stiffness: 75,
              duration: 0.1,
            }}
          >
            <NavLink
              title="Great resources for design & code"
              url="/blog"
              label="Blog"
              setOpen={setOpen} 
            />
          </NavItem>
        </ul>
        <div className="col-span-3 self-end xl:col-start-10 justify-self-end text-right">
          <ul>
            <NavSocialItem
              open={open}
              transition={{
                delay: open ? 0.8 : 0.6,
                type: "spring",
                stiffness: 75,
                duration: 0.1,
              }}
            >
              <p className="pb-[2em]">Socials</p>
            </NavSocialItem>
            {socials.map((item, i) => (
              <NavSocialItem
                key={`social-${i}`}
                open={open}
                transition={{
                  delay: open ? 0.8 : 0.6,
                  type: "spring",
                  stiffness: 75,
                  duration: 0.1,
                }}
              >
                <PrismicNextLink
                  field={item.link}
                  className="hover:text-primary"
                >
                  {item.name}
                </PrismicNextLink>
              </NavSocialItem>
            ))}
          </ul>
        </div>
      </Container>
    </motion.nav>
  );
}
