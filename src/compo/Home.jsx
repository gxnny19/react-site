import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h2>MAIN HOMEPAGE</h2>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/works">Works</Link></li>
          <li><Link to="/miniblog">MiniBlog</Link></li>
        </ul>
      </nav>
    </>
  );
}
export default Home;
