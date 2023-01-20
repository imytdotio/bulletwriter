import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Page/Home";
import { Nav } from "./Components/Nav";
import { Create } from "./Page/Create";
// import { Art_Book } from "./Demo/Art/Art_Book";
import { Art_Book } from "./Demo/Art/Art_Book";
import { Art_Ch1_P1 } from "./Demo/Art/Art_Chapter_1_1";
import { Art_Ch1_P2 } from "./Demo/Art/Art_Chapter_1_2";
import { Art_Ch1_P3 } from "./Demo/Art/Art_Chapter_1_3";
import { Art_Ch1_P4 } from "./Demo/Art/Art_Chapter_1_4";
import { Art_Ch1_P5 } from "./Demo/Art/Art_Chapter_1_5";
import { Art_Ch1_P6 } from "./Demo/Art/Art_Chapter_1_6";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/create" element={<Create />} />

          <Route
            path="/books/the-art-and-business-of-online-writing"
            element={<Art_Book />}
          />
          <Route
            path="/books/the-art-and-business-of-online-writing/1/1"
            element={<Art_Ch1_P1 />}
          />
          <Route
            path="/books/the-art-and-business-of-online-writing/1/2"
            element={<Art_Ch1_P2 />}
          />
          <Route
            path="/books/the-art-and-business-of-online-writing/1/3"
            element={<Art_Ch1_P3 />}
          />
          <Route
            path="/books/the-art-and-business-of-online-writing/1/4"
            element={<Art_Ch1_P4 />}
          />
          <Route
            path="/books/the-art-and-business-of-online-writing/1/5"
            element={<Art_Ch1_P5 />}
          />
          <Route
            path="/books/the-art-and-business-of-online-writing/1/6"
            element={<Art_Ch1_P6 />}
          />
          {/* <Route
            path="/books/the-art-and-business-of-online-writing"
            element={<Art_Book />}
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
