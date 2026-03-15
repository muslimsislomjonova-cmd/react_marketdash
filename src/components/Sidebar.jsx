import { Link } from "react-router-dom";
import "../App.css"; // CSS import qilindi

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Admin</h2>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/">Users</Link></li>
          <li><Link to="/">Cards</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;