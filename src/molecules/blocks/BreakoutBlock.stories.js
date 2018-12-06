import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import BreakoutBlock from "./BreakoutBlock";

const defaults = {
  title: "General Conference",
  description:
    "The General Conference coordinates the global ministry of the Seventh-day Adventist Church and is responsible for the spiritual and developmental plans of the church around the world.",
  cta: "Find out more",
  url: "https://adventist.org",
  blockClass: "can-be--dark-dark"
};

storiesOf("molecules/blocks/BreakoutBlock", module)
  .addDecorator(withKnobs)

  .add("default", () => {
    const title = text("Title", defaults.title);
    const description = text("Description", defaults.description);
    const showCta = boolean("Show CTA", true);
    const cta = text("CTA", defaults.cta);
    const url = text("URL", defaults.url);
    const blockClass = text("Block class", defaults.blockClass);
    return (
      <BreakoutBlock
        title={title}
        description={description}
        cta={showCta ? cta : null}
        url={url}
        blockClass={blockClass}
      />
    );
  });
