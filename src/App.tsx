import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
