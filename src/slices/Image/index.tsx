import { Container } from "@/app/ui/layout/containers";
import { Content, asText } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Image`.
 */
export type ImageProps = SliceComponentProps<Content.ImageSlice>;

/**
 * Component for "Image" Slices.
 */
const Image = ({ slice }: ImageProps): JSX.Element => {
  return (
    <Container>
      <figure className="col-span-full max-xl:-mr-4 xl:col-start-4 xl:col-span-9">
        <PrismicNextImage field={slice.primary.image} />
        <p className="text-sm text-black">{slice.primary.image.alt}</p>
      </figure>
    </Container>
  );
};

export default Image;
