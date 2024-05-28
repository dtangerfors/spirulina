import { Content, asText } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Container } from "@/app/ui/layout/containers";

/**
 * Props for `Experience`.
 */
export type ExperienceProps = SliceComponentProps<Content.ExperienceSlice>;

/**
 * Component for "Experience" Slices.
 */
const Experience = ({ slice }: ExperienceProps): JSX.Element => {

  return (
    <Container>
      <div className="col-span-full xl:col-span-3 xl:sticky top-9 self-start mb-2">
        <h2>{asText(slice.primary.title)}</h2>
      </div>
      <div className="col-span-full xl:col-start-4 xl:col-span-7">
        <ul className="flex flex-col gap-16">
          {slice.items.map((item, i) => {
            return (
              <li key={`${slice.id}-${i}`}>
                <h3 className="text-2xl pb-4">{asText(item.position)} &mdash; {asText(item.company)}</h3>
                <p className="max-w-prose pb-4">{asText(item.description)}</p>
                <p>
                  <span className="capitalize">
                    {new Date(item.start_date as string).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </span>{" "}&mdash;{" "}
                  <span>{item.end_date ? new Date(item.start_date as string).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    }) : "Present"}</span>
                  </p>
              </li>
            )
          })}
        </ul>
      </div>
    </Container>
  );
};

export default Experience;
