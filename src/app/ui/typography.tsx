export const textComponents = {
  heading2: ({ children }: {children: any}) => (
    <h2 className="font-sans font-bold text-black text-4xl pb-4 xl:[column-span:all]">{children}</h2>
  ),
  heading3: ({ children }: {children: any}) => (
    <h3 className="font-sans font-bold text-black text-2xl pb-4 xl:[column-span:all]">{children}</h3>
  ),
  heading4: ({ children }: {children: any}) => (
    <h4 className="font-sans font-bold text-black text-lg pb-4 xl:[column-span:all]">{children}</h4>
  ),
  paragraph: ({ children }: {children: any}) => (
    <p className="text-base font-normal pb-6 last:pb-0 max-w-prose">{children}</p>
  ),
  list: ({ children }: {children: any}) => (<ul className="list-disc text-base pb-[2em] last:pb-0 pl-4">{children}</ul>),
  listItem: ({children}: {children: any}) => (
    <li className="text-base font-normal pb-6 last:pb-0">{children}</li>
  )
}