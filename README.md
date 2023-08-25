# React Prism Code Block

I made this simple react component to have out-of-the-box styling for a code block, using `prism` for syntax highlighting.

The goal of this component is absolute simplicity. Just plug and play. So here are the constraints on this component:

- Only dark theme provided.
- No way of directly changing the copy button styling (unless you use `!important` hacks to target the button)
- The only supported languages are HTML, JavaScript, JSX, Python, Markdown, and CSS.

## Table of Contents

- [React Prism Code Block](#react-prism-code-block)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Props](#props)

## Installation

```bash
npm install the-react-prism-code-block
```

## Usage

The basic codeblock syntax is like so:

```html
<div>
  <pre>
    <code className="language-javascript">
      {`const foo = 'bar';`}
    </code>
  </pre>
</div>
```

And this is how the component is used:

```jsx
import { PrismCodeBlock } from 'the-react-prism-code-block';

const App = () => {
  return (
    <PrismCodeBlock language="javascript">
      function bruh() {
        console.log('bruh');
      }
    </PrismCodeBlock>
  );
};
```

### Props

The `<PrismCodeBlock />` component takes in a `language` prop, which is a string that can be one of the supported languages above. If the language is invalid, there won't be any language-specific styling.

Since this component is just a `<div>` wrapping the code, you can use any props that a `<div>` has. For example, you can add a `className` prop to the component to add your own styling.

```jsx
<PrismCodeBlock language="javascript" className="my-custom-class">
  function bruh() {
    console.log('bruh');
  }
</PrismCodeBlock>
```
