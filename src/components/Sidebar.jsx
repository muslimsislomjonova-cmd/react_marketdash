import { Link } from "react-router-dom";
import "../App.scss";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Admin</h2>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/">User</Link></li>
          <li><Link to="/">Cards</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;