import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PrismCodeBlock } from '../src/index';

const codeStr = `
def hello_world():
  print('Hello, world!')
`;

const App = () => {
  return (
    <div>
      <PrismCodeBlock language="python">{codeStr}</PrismCodeBlock>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
