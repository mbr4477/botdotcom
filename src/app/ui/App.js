import "./App.css";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Home from "./home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ConversationView from "./conversation/ConversationView";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="bot" element={<ConversationView />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
