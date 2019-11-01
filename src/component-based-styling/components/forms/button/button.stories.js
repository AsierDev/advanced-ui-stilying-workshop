import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./";


storiesOf("Forms | Button", module)
    .add("default", () => <Button> Button </Button>)
    .add("Primary", () => <Button primary> Primary </Button>)
    .add("Large", () => <Button large> Large </Button>)
    .add("Block", () => <Button block> Block </Button>);