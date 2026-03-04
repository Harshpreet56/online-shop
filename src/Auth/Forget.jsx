import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let newError = {};

    if (!email) {
      newError.email = "Enter your email";
    }

    if (!newPassword) {
      newError.password = "Enter new password";
    } else if (newPassword.length < 6) {
      newError.password = "Password must be at least 6 characters";
    }

    return newError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validate = validateForm();
    setError(validate);

    if (Object.keys(validate).length !== 0) return;

    const users = JSON.parse(localStorage.getItem("users")) ;

    const userIndex = users.findIndex((user) => user.email === email);

    if (userIndex === -1) {
      alert("Email not found");
      return;
    }

    users[userIndex].password = newPassword;

    localStorage.setItem("users", JSON.stringify(users));

    alert("Password updated successfully!");
    navigate("/Login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg w-100">
        <h2 className="text-3xl font-bold text-center mb-6">
          Forget Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border p-3 rounded-lg"
            onChange={(e) => setEmail(e.target.value)}
          />
          {error.email && (
            <p className="text-red-500 font-bold">{error.email}</p>
          )}

          <input
            type="password"
            placeholder="Enter new password"
            className="w-full border p-3 rounded-lg"
            onChange={(e) => setNewPassword(e.target.value)}
          />
          {error.password && (
            <p className="text-red-500 font-bold">{error.password}</p>
          )}

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Reset Password
          </button>
        </form>

        <p className="text-center mt-4">
          Back to{" "}
          <Link to="/Login" className="text-blue-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ForgetPassword;