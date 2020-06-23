import { React, ReactDOM } from "https://unpkg.com/es-react";
import css from "https://unpkg.com/csz";
import htm from "https://unpkg.com/htm?module";
const html = htm.bind(React.createElement);

const App = () => {
  return html`
    <div
      className=${css`

      display: inline-block;
      animation: rotate 2s linear infinite;
      padding: 2rem 1rem;
      font-size: 1.2rem;

      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }

        to {
          transform: rotate(360deg);
        }
      }
      `}
    >
    ${'<'} 💅 ${'>'}
    </div>
  `;
};

ReactDOM.render(React.createElement(App), document.body);
