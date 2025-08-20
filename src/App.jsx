import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./compo/Home";
import Login from "./compo/Login";
import Layout from "./compo/Layout";
import MiniBlog from "./compo/MiniBlog/MiniBlog";
import Works from "./compo/Works";

function App() {
  return (
    <BrowserRouter>
      <div style={styles.app}>
        <header style={styles.header}>
          <h1>📚 장경건 REACT 과제방</h1>
        </header>

        <main style={styles.main}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/layout" element={<Layout />} />
            <Route path="/miniblog" element={<MiniBlog />} />
            <Route path="/works" element={<Works />} />
          </Routes>
        </main>

        <footer style={styles.footer}>
          <p>© 2025 React Assignment by 장경건</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

const styles = {
  app: { display: "flex", flexDirection: "column", minHeight: "100vh", fontFamily: "sans-serif" },
  header: { padding: "1rem", background: "#282c34", color: "#fff", textAlign: "center" },
  main: { flex: 1, padding: "2rem", background: "#f4f6f8" },
  footer: { padding: "1rem", background: "#ddd", textAlign: "center", fontSize: "0.9rem" },
};
