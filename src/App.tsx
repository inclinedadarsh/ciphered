import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./components/Navbar";
import Main from "@/components/Main";
import About from "./components/About";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
