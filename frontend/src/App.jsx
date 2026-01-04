import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>

        {/* Public layout */ }
        <Route element={ <MainLayout /> }>
          <Route path='/' element={<Home />}></Route>
          <Route path="/about" ></Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
