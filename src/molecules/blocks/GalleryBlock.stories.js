import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, object } from "@storybook/addon-knobs";

import GalleryBlock from "./GalleryBlock";

const defaults = {
  kicker: "The General Conference.",
  title: "Coordinates the global ministry of the Seventh-day Adventist Church.",
  description:
    "Is responsible for the spiritual and developmental plans of the church around the world.",
  imageSrcSet: [
    {
      default: "//picsum.photos/500/375",
      500: "//picsum.photos/900/700",
      750: "//picsum.photos/700/600",
      1200: "//picsum.photos/500/375",
      imageAlt: "Random image",
      imageCaption: "Nam pretium et mauris sit amet vehicula."
    },
    {
      default: "//picsum.photos/500/375",
      500: "//picsum.photos/900/700",
      750: "//picsum.photos/700/600",
      1200: "//picsum.photos/500/375",
      imageAlt: "Random image",
      imageCaption: "Morbi at est tristique."
    },
    {
      default: "//picsum.photos/500/375",
      500: "//picsum.photos/900/700",
      750: "//picsum.photos/700/600",
      1200: "//picsum.photos/500/375",
      imageAlt: "Random image",
      imageCaption: "Curabitur vulputate mattis dignissim."
    }
  ]
};

storiesOf("molecules/blocks/GalleryBlock", module)
  .addDecorator(withKnobs)

  .add("Default", () => {
    const kicker = text("Kicker", defaults.kicker);
    const title = text("Title", defaults.title);
    const description = text("Description", defaults.description);
    const imageSrcSet = object("Image SrcSet", defaults.imageSrcSet);
    return (
      <GalleryBlock
        kicker={kicker}
        title={title}
        description={description}
        imageSrcSet={imageSrcSet}
      />
    );
  });
