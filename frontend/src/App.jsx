import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import { ThemeProvider } from "./components/theme-provider";

export default function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <BrowserRouter>
      <Routes>

        {/* Public layout */ }
        <Route element={ <MainLayout /> }>
          <Route path='/' element={<Home />}></Route>
          <Route path="/about" ></Route>
        </Route>

      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}
