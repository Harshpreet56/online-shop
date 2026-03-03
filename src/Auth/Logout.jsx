import { useNavigate } from "react-router-dom";

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
        Logout
      </button>
    </div>
  );
}

export default Logout;