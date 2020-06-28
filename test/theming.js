import { React, ReactDOM } from "https://unpkg.com/es-react";
import css from "https://unpkg.com/csz";
import htm from "https://unpkg.com/htm?module";
const html = htm.bind(React.createElement);

const Button = (props) => {
  const defaultTheme = {
    main: 'palevioletred'
  };
  const theme = props.theme || defaultTheme;
  return html`
    <button
      className=${css`
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border-radius: 3px;
        background: white;
        color: ${theme.main};
        border: 2px solid ${theme.main};
      `}
    >
      ${props.children}
    </button>
  `;
};

const App = () => {
  const theme = {
    main: "mediumseagreen"
  };
  return html`
    <div className=${css`
    font-size: 1.5em;
    text-align: center;`
    }>
      <${Button}>Normal<//>
      <${Button} theme=${theme}>Primary<//>
    </div>
  `;
};

ReactDOM.render(React.createElement(App), document.body);
