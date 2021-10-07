import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./style/Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();
  //useEffect <<< Powerful
  //piece of code which runs on a given condition

  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is logged in

        dispatch({
          type: "SET_User",
          user: authUser,
        });
      } else {
        //the user is logged out

        dispatch({
          type: "SET_User",
          user: null,
        });
      }
    });

    return () => {
      // Any cleanup operations go in here
      unsubscribe();
    };
  });

  console.log("user is ", user);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          {/*This is the default page */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;