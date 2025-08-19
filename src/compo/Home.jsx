import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h2>홈 페이지 MAIN입니다</h2>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/work1">Work1</Link></li>
          <li><Link to="/miniblog">MiniBlog</Link></li>
        </ul>
      </nav>
    </>
  );
}
export default Home;
