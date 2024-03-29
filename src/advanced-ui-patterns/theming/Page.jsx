import React from "react";
import Example from "./example";
import Exercise from "./exercise";

const Page = props => (
  <div>
    <h2>Theming</h2>
    <p>
      styled-components has full theming support by exporting a{" "}
      <code>ThemeProvider</code> wrapper component. This component provides a
      theme to all React components underneath itself via the context API. In
      the render tree all styled-components will have access to the provided
      theme, even when they are multiple levels deep.
    </p>
    <p>
      Using a theme help us to share values and styles through out all styled
      components. you can see the theme we are using in
      <code>src/components/patterns/Theming/example/theme.js</code>. On every
      styled component you will have access to a <code>theme</code> prop
      attached to component props.
    </p>
    <h3>Example</h3>
    <Example />
    <hr />
    <h3>Exercise</h3>
    <p>
      Go to <code>src/advanced-ui-patterns/theming/exercise/index</code> and
      follow the instructions
    </p>
    <Exercise />
  </div>
);

export default Page;
