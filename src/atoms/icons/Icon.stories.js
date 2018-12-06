import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";
import Icon, { iconNames } from "./Icon";

const defaults = {
  name: "logo"
};

storiesOf("atoms/icons/Icon", module)
  .addDecorator(withKnobs)

  .add("default", () => {
    const name = select("name", iconNames, defaults.name);
    return <Icon name={name} />;
  });
