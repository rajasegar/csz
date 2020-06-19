import { React, ReactDOM } from "https://unpkg.com/es-react";
import css from "https://unpkg.com/csz";
import htm from "https://unpkg.com/htm?module";
const html = htm.bind(React.createElement);

const Button = (props) => {
  return html`
    <button
      className=${css`
        background: ${props.primary ? "palevioletred" : "white"};
        color: ${props.primary ? "white" : "palevioletred"};
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid palevioletred;
        border-radius: 3px;
      `}
    >
      ${props.children}
    </button>
  `;
};

const App = () => {
  return html`
    <div
      className=${css`
        font-size: 1.5em;
        text-align: center;
      `}
    >
      <${Button}>Normal<//>
      <${Button} primary>Primary<//>
    </div>
  `;
};

ReactDOM.render(React.createElement(App), document.body);
