import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import OrderReview from "./components/OrderReview/OrderReview";
import Grandpa from "./components/Grandpa/Grandpa";
import Father from "./components/Father/Father";
import Uncle from "./components/Uncle/Uncle";
import Aunty from "./components/Aunty/Aunty";
import MySelf from "./components/MySelf/MySelf";
import Brother from "./components/Brother/Brother";
import Sister from "./components/Sister/Sister";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/order-review"
          element={<OrderReview></OrderReview>}
        ></Route>
        <Route path='/grandpa' element={<Grandpa></Grandpa>}></Route>
        <Route path='/father' element={<Father></Father>}></Route>
        <Route path='/uncle' element={<Uncle></Uncle>}></Route>
        <Route path='/aunty' element={<Aunty></Aunty>}></Route>
        <Route path='/myself' element={<MySelf></MySelf>}></Route>
        <Route path='/brother' element={<Brother></Brother>}></Route>
        <Route path='/sister' element={<Sister></Sister>}></Route>
      </Routes>
    </div>
  );
}

export default App;
