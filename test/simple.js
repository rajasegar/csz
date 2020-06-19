import { React, ReactDOM } from "https://unpkg.com/es-react";
import css from "https://unpkg.com/csz";
import htm from "https://unpkg.com/htm?module";
const html = htm.bind(React.createElement);

const App = () => {
  const [toggle, setToggle] = React.useState(true);
  return html`
    <div
      className=${css`
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
      `}
    >
      <h1
        className=${css`
          padding: 4em;
          background: papayawhip;
        `}
      >
        Hello World!
      </h1>
    </div>
  `;
};

ReactDOM.render(React.createElement(App), document.body);
