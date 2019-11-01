import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "./";

storiesOf("Forms | Input", module).add("default Input", () => <Input />);
storiesOf("Forms | Input", module).add("error style", () => <Input error />);
storiesOf("Forms | Input", module).add("disabled style", () => <Input disabled />);
storiesOf("Forms | Input", module).add("error disabled style", () => <Input error disabled />);


