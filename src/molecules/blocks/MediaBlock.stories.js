import React from "react";
import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  text,
  select,
  object,
  boolean,
  date
} from "@storybook/addon-knobs";

import { iconNames } from "../../atoms/icons/Icon";
import MediaBlock from "./MediaBlock";
import Video from "../../atoms/media/Video";

const iconOptions = [null, ...iconNames];

const defaults = {
  title: "General Conference",
  titleClass: "u-theme--color--darker",
  description:
    "The General Conference coordinates the global ministry of the Seventh-day Adventist Church and is responsible for the spiritual and developmental plans of the church around the world.",
  contentClass: "u-color--gray",
  metaClass: "u-theme--color--dark",
  datetime: new Date(),
  category: "Culture",
  cta: "Find out more",
  ctaIcon: "arrowLongRight",
  url: "https://adventist.org",
  imageSrcSet: {
    Landscape: {
      default: "//picsum.photos/500/375",
      500: "//picsum.photos/900/700",
      750: "//picsum.photos/700/600",
      1200: "//picsum.photos/500/375"
    },
    Portrait: {
      default: "//picsum.photos/150/200",
      500: "//picsum.photos/300/400",
      750: "//picsum.photos/450/600",
      1200: "//picsum.photos/600/800"
    },
    Square: {
      default: "//picsum.photos/100/100",
      500: "//picsum.photos/200/200",
      750: "//picsum.photos/300/300",
      1200: "//picsum.photos/500/500"
    }
  },
  imageAlt: "Placeholder image",
  videoSrc:
    "https://player.vimeo.com/video/137487821?color=ffffff&title=0&byline=0&portrait=0",
  kickerText: "",
  headingTitle: "",
  headingIcon: "",
  asRow: false,
  asBreakout: false,
  reversed: false,
  roundImage: false,
  innerClass: ""
};

const imageModes = ["Landscape", "Portrait", "Square"];

const mode = ["Row", "Inline", "Inset", "Stacked"];
const blockModes = {
  Row: "c-media-block__row c-block__row",
  Inline: "c-block__inline c-media-block__inine",
  Inset: "c-block__inset c-media-block__inset",
  Stacked: "c-block__stacked c-media-block__stacked"
};

storiesOf("molecules/blocks/MediaBlock", module)
  .addDecorator(withKnobs)

  .add("Default", () => {
    const title = text("Title", defaults.title);
    const titleClass = text("Title class", defaults.titleClass);
    const description = text("Description", defaults.description);
    const contentClass = text("Content Class", defaults.contentClass);
    const showCta = boolean("Show Call to Action", false);
    const cta = text("Call to Action Text", defaults.cta);
    const url = text("URL", defaults.url);
    const metaClass = text("Meta Class", defaults.metaClass);
    const datetime = date("Date Time", defaults.datetime);
    const category = text("Category", defaults.category);
    const kickerText = text("Kicker Text", defaults.kickerText);
    const showImage = boolean("Show Image", true);
    const imageMode = select("Image Mode", imageModes, "Landscape");
    const imageSrcSet = object("Image SrcSet", defaults.imageSrcSet[imageMode]);
    const imageAlt = text("Image Alt", defaults.imageAlt);
    const showMode = select("Show as", mode, "Row");
    const reversed = boolean("Show reversed", defaults.reversed);
    const asBreakout = boolean("Show as Breakout", defaults.asBreakout);
    const roundImage = boolean("Show round Images", defaults.roundImage);

    return (
      <MediaBlock
        title={title}
        titleClass={titleClass}
        description={description}
        contentClass={contentClass}
        metaClass={metaClass}
        datetime={datetime}
        category={category}
        url={url}
        cta={showCta ? cta : null}
        kickerText={kickerText}
        imageSrcSet={showImage ? imageSrcSet : null}
        imageAlt={imageAlt}
        asBreakout={asBreakout}
        showAs={blockModes[showMode]}
        roundImage={roundImage}
        reversed={reversed}
      />
    );
  })

  .add("Inline", () => {
    const title = text("Title", defaults.title);
    const titleClass = text("Title class", defaults.titleClass);
    const description = text("Description", defaults.description);
    const contentClass = text(
      "Content Class",
      "l-grid-item u-border-left--black--at-large u-theme--border-color--darker--left u-color--gray u-background-color--gray--light u-padding--top u-padding--bottom"
    );
    const showCta = boolean("Show Call to Action", false);
    const cta = text("Call to Action Text", defaults.cta);
    const url = text("URL", defaults.url);
    const metaClass = text("Meta Class", defaults.metaClass);
    const datetime = date("Date Time", defaults.datetime);
    const category = text("Category", defaults.category);
    const kickerText = text("Kicker Text", defaults.kickerText);
    const showImage = boolean("Show Image", true);
    const imageMode = select("Image Mode", imageModes, "Landscape");
    const imageSrcSet = object("Image SrcSet", defaults.imageSrcSet[imageMode]);
    const imageAlt = text("Image Alt", defaults.imageAlt);
    const imageClass = text(
      "Image class",
      "l-grid-item u-padding--zero--sides"
    );
    const reversed = boolean("Show reversed", true);

    return (
      <MediaBlock
        title={title}
        titleClass={titleClass}
        description={description}
        contentClass={contentClass}
        metaClass={metaClass}
        datetime={datetime}
        category={category}
        url={url}
        cta={showCta ? cta : null}
        kickerText={kickerText}
        imageSrcSet={showImage ? imageSrcSet : null}
        imageAlt={imageAlt}
        showAs={blockModes["Inline"]}
        reversed={reversed}
        imageClass={imageClass}
      />
    );
  })

  .add("Inset", () => {
    const title = text("Title", defaults.title);
    const titleClass = text("Title class", defaults.titleClass);
    const description = text("Description", defaults.description);
    const contentClass = text(
      "Content Class",
      "l-grid--7-col u-theme--background-color--darker"
    );
    const url = text("URL", defaults.url);
    const metaClass = text("Meta Class", "l-grid-item l-grid-item--m--2-col");
    const datetime = date("Date Time", defaults.datetime);
    const category = text("Category", defaults.category);
    const kickerText = text("Kicker Text", defaults.kickerText);
    const imageMode = select("Image Mode", imageModes, "Landscape");
    const imageSrcSet = object("Image SrcSet", defaults.imageSrcSet[imageMode]);
    const imageAlt = text("Image Alt", defaults.imageAlt);
    const imageClass = text("Image class", "");

    return (
      <MediaBlock
        title={title}
        titleClass={titleClass}
        description={description}
        contentClass={contentClass}
        metaClass={metaClass}
        datetime={datetime}
        category={category}
        url={url}
        kickerText={kickerText}
        imageSrcSet={imageSrcSet}
        imageAlt={imageAlt}
        showAs={blockModes["Inset"]}
        imageClass={imageClass}
      />
    );
  })

  .add("Reversed", () => {
    const title = text("Title", defaults.title);
    const titleClass = text("Title class", defaults.titleClass);
    const description = text("Description", defaults.description);
    const contentClass = text(
      "Content Class",
      "l-grid-item l-grid-item--m--4-col u-border-left--black--at-large"
    );
    const showCta = boolean("Show Call to Action", false);
    const cta = text("Call to Action Text", defaults.cta);
    const url = text("URL", defaults.url);
    const metaClass = text("Meta Class", defaults.metaClass);
    const datetime = date("Date Time", defaults.datetime);
    const category = text("Category", defaults.category);
    const kickerText = text("Kicker Text", defaults.kickerText);
    const showImage = boolean("Show Image", true);
    const imageMode = select("Image Mode", imageModes, "Landscape");
    const imageSrcSet = object("Image SrcSet", defaults.imageSrcSet[imageMode]);
    const imageAlt = text("Image Alt", defaults.imageAlt);
    const showMode = select("Show as", mode, "Row");
    const reversed = boolean("Show reversed", true);
    const asBreakout = boolean("Show as Breakout", defaults.asBreakout);
    const roundImage = boolean("Show round Images", defaults.roundImage);

    return (
      <MediaBlock
        title={title}
        titleClass={titleClass}
        description={description}
        contentClass={contentClass}
        metaClass={metaClass}
        datetime={datetime}
        category={category}
        url={url}
        cta={showCta ? cta : null}
        kickerText={kickerText}
        imageSrcSet={showImage ? imageSrcSet : null}
        imageAlt={imageAlt}
        asBreakout={asBreakout}
        showAs={blockModes[showMode]}
        roundImage={roundImage}
        reversed={reversed}
      />
    );
  })

  .add("Stacked", () => {
    const title = text("Title", defaults.title);
    const titleClass = text("Title class", defaults.titleClass);
    const description = text("Description", defaults.description);
    const contentClass = text("Content Class", "u-color--gray");
    const showCta = boolean("Show Call to Action", false);
    const cta = text("Call to Action Text", defaults.cta);
    const url = text("URL", defaults.url);
    const metaClass = text("Meta Class", defaults.metaClass);
    const datetime = date("Date Time", defaults.datetime);
    const category = text("Category", defaults.category);
    const kickerText = text("Kicker Text", defaults.kickerText);
    const showImage = boolean("Show Image", true);
    const imageMode = select("Image Mode", imageModes, "Landscape");
    const imageSrcSet = object("Image SrcSet", defaults.imageSrcSet[imageMode]);
    const imageAlt = text("Image Alt", defaults.imageAlt);
    const asBreakout = boolean("Show as Breakout", defaults.asBreakout);
    const roundImage = boolean("Show round Images", defaults.roundImage);

    return (
      <MediaBlock
        title={title}
        titleClass={titleClass}
        description={description}
        contentClass={contentClass}
        metaClass={metaClass}
        datetime={datetime}
        category={category}
        url={url}
        cta={showCta ? cta : null}
        kickerText={kickerText}
        imageSrcSet={showImage ? imageSrcSet : null}
        imageAlt={imageAlt}
        asBreakout={asBreakout}
        showAs={blockModes["Stacked"]}
        roundImage={roundImage}
      />
    );
  });
