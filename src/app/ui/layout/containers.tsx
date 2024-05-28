import clsx from "clsx";

export function Container({children, className}: {children: React.ReactNode, className?: string}) {
  return (
    <section className={clsx("grid grid-cols-6 xl:grid-cols-12 gap-4 mx-4", className)}>
      {children}
    </section>
  )
}