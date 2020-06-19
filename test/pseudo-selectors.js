import { React, ReactDOM } from "https://unpkg.com/es-react";
import css from "https://unpkg.com/csz";
import htm from "https://unpkg.com/htm?module";
const html = htm.bind(React.createElement);

const Thing = (props) => {
  return html`
    <div
      className=${css`
        color: blue;

        &:hover {
          color: red; // <Thing> when hovered
        }

        & ~ & {
          background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
        }

        & + & {
          background: lime; // <Thing> next to <Thing>
        }

        &.something {
          background: orange; // <Thing> tagged with an additional CSS class ".something"
        }

        .something-else & {
          border: 1px solid; // <Thing> inside another element labeled ".something-else"
        }
      `}
    >
      ${props.children}
    </div>
  `;
};
const App = () => {
  const [toggle, setToggle] = React.useState(true);
  return html`
    <div>
      <${Thing}>Hello world!<//>
      <${Thing}>How ya doing?<//>
      <${Thing} className="something">The sun is shining...<//>
      <div>Pretty nice day today.</div>
      <${Thing}>Don't you think?<//>
      <div className="something-else">
        <${Thing}>Splendid.<//>
      </div>
    </div>
  `;
};

ReactDOM.render(React.createElement(App), document.body);
