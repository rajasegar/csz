import { React, ReactDOM } from "https://unpkg.com/es-react";
import css from "https://unpkg.com/csz";
import htm from "https://unpkg.com/htm?module";
const html = htm.bind(React.createElement);

const App = () => {
  return html`
    <div className=${css`
    font-size: 1.5em;
    text-align: left;`
    }>
      <p className=${css`text-align:center;`}>
        I am center aligned text.
      </p>
      <h1>Hello World</h1>
      <p className=${css`text-align:center;`}>
        Me too, I am also center aligned text.
      </p>
    </div>
  `;
};

ReactDOM.render(React.createElement(App), document.body);
