import { useState } from "react";
import { useTransition, animated } from "react-spring";
import { svgWarning, svgError, svgSuccess, svgClose } from "../../svg";
import "./Notifications.css";

function About() {
  const [isVisibleWarning, setIsVisibleWarning] = useState(true);
  const [isVisibleError, setIsVisibleError] = useState(true);
  const [isVisibleInfo, setIsVisibleInfo] = useState(true);
  const [isVisibleSuccess, setIsVisibleSuccess] = useState(true);

  const transition1 = useTransition(isVisibleWarning, {
    from: { x: 0, y: 0, opacity: 1 },
    //enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 100, y: -100, opacity: 0 },
  });

  const transition2 = useTransition(isVisibleError, {
    from: { x: 0, y: 50, opacity: 1 },
    //enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 100, y: 0, opacity: 0 },
  });

  const transition3 = useTransition(isVisibleInfo, {
    from: { x: 0, y: 100, opacity: 1 },
    //enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 100, y: 0, opacity: 0 },
  });

  const transition4 = useTransition(isVisibleSuccess, {
    from: { x: 0, y: 150, opacity: 1 },
    //enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 100, y: 0, opacity: 0 },
  });

  return (
    <div className="about-page">
      {transition1((style, item) =>
        item ? (
          <animated.div style={style} className={"item"}>
            <div className={"item-warning"}>
              <div className={"icon-box__warning"}>{svgWarning()}</div>
              <div className={"notification-text"}>
                <p>
                  <span>uh no!</span>
                </p>
                <p>Pay attention to me, things are not going as planned</p>
                <div
                  className="close-box"
                  onClick={() => {
                    setIsVisibleWarning((v) => !v);
                  }}
                >
                  {svgClose()}
                </div>
              </div>
            </div>
          </animated.div>
        ) : (
          ""
        )
      )}

      {transition2((style, item) =>
        item ? (
          <animated.div style={style} className={"item"}>
            <div className={"item-error"}>
              <div className={"icon-box__error"}>{svgError()}</div>
              <div className={"notification-text"}>
                <p>
                  <span>uh no!</span>
                </p>
                <p>You need to take action! something went wrong</p>
                <div
                  className="close-box"
                  onClick={() => {
                    setIsVisibleError((v) => !v);
                  }}
                >
                  {svgClose()}
                </div>
              </div>
            </div>
          </animated.div>
        ) : (
          ""
        )
      )}

      {transition3((style, item) =>
        item ? (
          <animated.div style={style} className={"item"}>
            <div className={"item-info"}>
              <div className={"icon-box__info"}>{svgError()}</div>
              <div className={"notification-text"}>
                <p>
                  <span>Hey, did you know...</span>
                </p>
                <p>
                  This alert needs your attention but it's not that important
                </p>
                <div
                  className="close-box"
                  onClick={() => {
                    setIsVisibleInfo((v) => !v);
                  }}
                >
                  {svgClose()}
                </div>
              </div>
            </div>
          </animated.div>
        ) : (
          ""
        )
      )}

      {transition4((style, item) =>
        item ? (
          <animated.div style={style} className={"item"}>
            <div className={"item-success"}>
              <div className={"icon-box__success"}>{svgSuccess()}</div>
              <div className={"notification-text"}>
                <p>
                  <span>Good news, everyone</span>
                </p>
                <p>Nothing to worry about, everything is going great</p>
                <div
                  className="close-box"
                  onClick={() => {
                    setIsVisibleSuccess((v) => !v);
                  }}
                >
                  {svgClose()}
                </div>
              </div>
            </div>
          </animated.div>
        ) : (
          ""
        )
      )}
    </div>
  );
}

export default About;
