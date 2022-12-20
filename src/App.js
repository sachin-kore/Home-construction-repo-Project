import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Analytic from "./components/Analytic";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Dummyproductapi from "./components/Dummyproductapi";
// import { Signup } from "./components/Signup";
import "./../src/App.css";
import { OldProject } from "./components/OldProject";
import { NewProject } from "./components/NewProject";
import axios from "axios";


const APIURL = "https://jsonplaceholder.typicode.com/users";
function App() {
  // const [data, setData] = useState([]);

  // const fetchData = () => {
  //   let result = axios.get(APIURL).then((res) => {
  //     setData(res.data);
  //   }).then((err) => {
  //     console.log(err);
  //   })
  // }


  // const Sortdata = () => {
  //   data.sort((a, b) => {
  //     let fa = a.firstName.toLowerCase(),
  //       fb = b.firstName.toLowerCase();
  //     if (fa < fb) {
  //       return -1;
  //     }
  //     if (fa > fb) {
  //       return 1;
  //     }
  //     return 0;
  //   })
  // }
  // console.table(setData);

  // console.table(data);






  // const [data, setData] = useState([]);

  // const fetchData = async () => {
  //   let result = await axios.get("https://dummyjson.com/todos").then((res) => {
  //     console.log(res.data.todos)
  //     setData(res.data.todos);
  //   }).then((err) => {
  //     return err;
  //   })
  // }

  // useEffect(() => {
  //   fetchData();
  // }, [])
  // console.log()

  return (
    <div>
      {/* <Signup /> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/analytic" element={<Analytic />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/dummyproductapi" element={<Dummyproductapi />} />
          <Route path="/oldproject" element={<OldProject />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Router>
      {/* <button style={{ color: "red" }} onClick={fetchData}>click me</button>
      <button style={{ color: "blue" }} onClick={Sortdata}>sort data</button>
      {
        data.map((val) => {
          return <div key={val.id} style={{ color: "yellow" }}  >{val.name}</div>
        })
      } */}
    </div>

  );
}

export default App;


