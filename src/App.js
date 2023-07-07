import { useState } from "react";
import { useTransition, animated } from "react-spring";
import './App.css';


function App() {
  const [items, setItems] = useState([]);
  const transition = useTransition(items, {
    from: { x: 100, y: 100, opacity: 0 },
    enter: item => async (next) => {
      await next({ y: item.y, opacity: 1, delay: item.delay });
      await next({ x: 0 });
    },
    leave: item => async (next) => (
      await next({ x: 100, y: -100, opacity: 0, delay: item.delay }))
  })

  return (
    <div className="app">
     <div className="header-left">
       <h2>Modal dialogs,</h2>
       <h2>flags and notifications</h2>
     <button onClick={() => {
        setItems(v => v.length ? [] : [{ y: -100, delay: 200 }, { y: -50, delay: 400 }, { y: 0, delay: 600 }])
      }}>
        { items.length ? "Unmount Notificatios" : "Show Notifications" }
      </button>
     </div>
     <div className="header-right">
     <div className="container">
        { transition((style, item) => (
          item ? <animated.div style={style} className="item" >
            <div className="item-warning">
      <div className="icon-box">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
      </div>
      <div className="notification-text">
      <p><span>uh no!</span></p>
        <p>Pay attention to me, things are not going as planned</p>
      </div> 
    </div> 
          </animated.div> : ""
        )) }
      </div>
     </div>
    </div>
  );
}

export default App;
