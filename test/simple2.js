import { React, ReactDOM } from "https://unpkg.com/es-react";
import css from "https://unpkg.com/csz";
import htm from "https://unpkg.com/htm?module";
const html = htm.bind(React.createElement);

const App = () => {
  const styles = {
    wrapper: css`
      font-size: 1.5em;
      text-align: center;
      color: palevioletred;
      h1 {
        padding: 4em;
        background: papayawhip;
      }`
  };
  return html`
    <div
      className=${styles.wrapper}>
      <h1>
        Hello World!
      </h1>
    </div>
  `;
};

ReactDOM.render(React.createElement(App), document.body);
