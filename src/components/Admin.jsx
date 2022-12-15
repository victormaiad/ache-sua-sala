import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Admin() {
	const navigate = useNavigate();
	navigate("/");

  return (
    <Link as={Link} to="/admin">
      Admin
    </Link>
  );
}

export default Admin;