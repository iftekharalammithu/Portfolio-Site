import { useNavigate } from "react-router-dom"; // For navigation link (optional)
import "./Page-not-Found.css";
const Pagenotfound = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 10000);

  return (
    <div>
      <div className="container ">
        <input id="switch" type="checkbox" />
        <div className="ellipse"></div>
        <div className="ray"></div>
        <div className="head"></div>
        <div className="neck"></div>
        <div className="body">
          <label htmlFor="switch"></label>
        </div>
      </div>

      <div className="container">
        <div className="msg msg_1">404</div>
        <div className="msg msg_2">Page Not Found</div>
      </div>
    </div>
  );
};

export default Pagenotfound;
