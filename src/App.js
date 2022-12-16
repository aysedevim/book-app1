import Layout from "./components/Layout";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import BookList from "./components/BookList"
import BookRecyled from "./components/BookRecyled";
import BookCreate from "./components/BookCreate";
import BookUpdate from "./components/BookUpdate";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<BookList/>}></Route>
          <Route path="/recyled" element={<BookRecyled/>}></Route>
          <Route path="/book/create" element={<BookCreate/>}></Route>
          <Route path="/book/update:id" element={<BookUpdate/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

