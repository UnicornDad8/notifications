import { useState } from "react";
import { useTransition, animated } from "react-spring";
import { svgWarning } from "../../svg";
import "./HomePage.css";

function Home() {
  const [items, setItems] = useState([]);
  const transition = useTransition(items, {
    from: { x: 100, y: 100, opacity: 0 },
    enter: (item) => async (next) => {
      await next({ y: item.y, opacity: 1, delay: item.delay });
      await next({ x: 0 });
    },
    leave: (item) => async (next) =>
      await next({ x: 100, y: -100, opacity: 0, delay: item.delay }),
  });

  return (
    <div className={"app"}>
      <div className={"header-left"}>
        <h2>Modal dialogs,</h2>
        <h2>flags and notifications</h2>
        <button
          onClick={() => {
            setItems((v) =>
              v.length
                ? []
                : [
                    { y: -100, delay: 200 },
                    { y: -50, delay: 400 },
                    { y: 0, delay: 600 },
                  ]
            );
          }}
        >
          {items.length ? "Hide Notifications" : "Show Notificatios"}
        </button>
      </div>
      <div className={"header-right"}>
        <div className={"container"}>
          {transition((style, item) =>
            item ? (
              <animated.div style={style} className={"item"}>
                <div className={"item-warning"}>
                  <div className={"icon-box"}>{svgWarning()}</div>
                  <div className={"notification-text"}>
                    <p>
                      <span>uh no!</span>
                    </p>
                    <p>Pay attention to me, things are not going as planned</p>
                  </div>
                </div>
              </animated.div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
