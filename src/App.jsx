import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./compo/Home";
import Login from "./compo/Login";
import Layout from "./compo/Layout";
import Works from "./compo/Works";

function App() {
  return (
    <BrowserRouter>
      <div style={styles.app}>
        <header style={styles.header}>
          <h1>📚 장경건 REACT 과제방</h1>
          <nav style={styles.nav}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/layout" style={styles.link}>Layout</Link>
            <Link to="/works" style={styles.link}>Works</Link>
          </nav>
        </header>

        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/layout" element={<Layout />} />
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
  nav: { marginTop: "0.5rem" },
  link: { margin: "0 10px", color: "#61dafb", textDecoration: "none" },
  main: { flex: 1, padding: "2rem", background: "#f4f6f8" },
  footer: { padding: "1rem", background: "#ddd", textAlign: "center", fontSize: "0.9rem" },
};
