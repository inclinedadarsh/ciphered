import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <Main />
    </ThemeProvider>
  );
}

export default App;
