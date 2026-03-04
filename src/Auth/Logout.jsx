import { useNavigate } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";

function Logout() {
  const navigate = useNavigate();
  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );
    if (confirmLogout) {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("currentUser");

      navigate("/Login");
    }
  };
  return (
    <div>
      <button
        onClick={handleLogout}
           >
        <LuLogOut />
      </button>
    </div>
  );
}

export default Logout;