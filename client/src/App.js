import "./App.scss";
import Header from "./Commons/Header/Header";
import { BrowserRouter as Router, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Main/Home";
import RightMain from "./Commons/Right/RightMain";
import Profile from "./Pages/Profile/Profile";
import Register from "./Pages/Register/index";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Login from "./Pages/Login";
import PrivateRoute from "./Commons/PrivateRoute/PrivateRoute";


const Element = ({ Elem }) => {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <Elem />
        <RightMain />
      </div>
    </div>
  );
};
function App() {
  const { user } = useContext(AuthContext);
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Element Elem={Home} /> : <Register />}></Route>
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        ></Route>
        <Route path="/home" element={<Element Elem={Home} />}></Route>
        <Route path={`/profile`} element={<Element Elem={Profile} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
