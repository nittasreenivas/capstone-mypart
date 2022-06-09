import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <div className="nav-container">
      <ul className="nav-list">
        <li>
          <Link to="/adoption"> Adoption </Link>
        </li>
      </ul>
    </div>
  );
}
