import { Container } from "@/app/ui/layout/containers";
import { textComponents } from "@/app/ui/typography";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Text`.
 */
export type TextProps = SliceComponentProps<Content.TextSlice>;

/**
 * Component for "Text" Slices.
 */
const Text = ({ slice }: TextProps): JSX.Element => {

  
  return (
    <Container>
      {slice.variation === "default" && (
        <div className="col-span-full xl:col-start-4 xl:col-span-7 xl:columns-2 gap-x-4">
          <PrismicRichText field={slice.primary.text} components={textComponents} />
        </div>
      )}
      {slice.variation === "fullSpanText" && (
        <div className="col-span-full xl:col-start-4 xl:col-span-7">
          <PrismicRichText field={slice.primary.text} components={textComponents} />
        </div>
      )}
      
    </Container>
  );
};

export default Text;
