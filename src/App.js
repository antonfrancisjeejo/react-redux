// import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./App.css";
// import Home from "./Pages/Home";
// import Users from "./Pages/Users";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import usersReducer from "./store/reducers/user";

// function App() {
//   const store = createStore(usersReducer);

//   return (
//     <Provider store={store}>
//       <Router>
//         <Switch>
//           <Route exact path="/user" component={Users} />
//           <Route exact path="/" component={Home} />
//         </Switch>
//       </Router>
//     </Provider>
//   );
// }

// export default App;

// Use Callback

// import React, { useState, useCallback } from "react";
// import List from "./List";

// const App = () => {
//   const [number, setNumber] = useState(1);
//   const [dark, setDark] = useState(false);

//   const getItems = useCallback(() => {
//     return [number, number + 1, number + 2];
//   }, [number]);

//   const theme = {
//     backgroundColor: dark ? "#333" : "#fff",
//     color: dark ? "#fff" : "#333",
//   };

//   return (
//     <div style={theme}>
//       <input
//         type="number"
//         value={number}
//         onChange={(e) => setNumber(parseInt(e.target.value))}
//       />
//       <button onClick={() => setDark((prev) => !prev)}>Toggle</button>
//       <List getItems={getItems} />
//     </div>
//   );
// };

// export default App;

// UseMemo

// import React, { useState, useMemo, useEffect } from "react";

// const App = () => {
//   const [number, setNumber] = useState(0);
//   const [dark, setDark] = useState(false);
//   const doubleNumber = useMemo(() => {
//     return slowFunction(number);
//   }, [number]);
//   const themeStyles = useMemo(() => {
//     return {
//       backgroundColor: dark ? "black" : "white",
//       color: dark ? "white" : "black",
//     };
//   }, [dark]);

//   useEffect(() => {
//     console.log("Theme CHanges");
//   }, [themeStyles]);

//   return (
//     <div>
//       <input
//         type="number"
//         value={number}
//         onChange={(e) => setNumber(parseInt(e.target.value))}
//       />
//       <button onClick={() => setDark((prevDark) => !prevDark)}>
//         Change theme
//       </button>
//       <div style={themeStyles}>{doubleNumber}</div>
//     </div>
//   );
// };

// function slowFunction(num) {
//   console.log("Calling Slow function");
//   for (let i = 0; i <= 1000000000; i++) {}
//   return num * 2;
// }

// export default App;

//useRef - Part1

// import React, { useEffect, useState, useRef } from "react";

// const App = () => {
//   const [name, setName] = useState("");
//   const renderCount = useRef(1);

//   // useEffect(() => {
//   //   setRenderCount((prev) => prev + 1);
//   // });

//   useEffect(() => {
//     renderCount.current = renderCount.current + 1;
//   });

//   return (
//     <div>
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <div>My name is {name}</div>
//       <div>I rendered {renderCount.current} times</div>
//     </div>
//   );
// };

// export default App;

//useRef - Part2

import React, { useEffect, useState, useRef } from "react";

const App = () => {
  const [name, setName] = useState("");
  const inputRef = useRef();

  const focus = () => {
    inputRef.current.focus();
    inputRef.current.value = "Ref updated";
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <button onClick={focus}>Focus</button>
    </div>
  );
};

export default App;
