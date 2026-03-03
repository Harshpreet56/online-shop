import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newError = {};

    if (!formData.name.trim()) {
      newError.name = "Enter your Name";
    }

    if (!formData.email.trim()) {
      newError.email = "Enter your Email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newError.email = "Invalid Email format";
    }

    if (!formData.password) {
      newError.password = "Enter your Password";
    } else if (formData.password.length < 6) {
      newError.password = "Password must be at least 6 characters";
    }

    return newError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validate = validateForm();
    setError(validate);

    if (Object.keys(validate).length !== 0) return;

    // ✅ FIX: Default empty array if no users
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const userExists = existingUsers.find(
      (user) => user.email === formData.email
    );

    if (userExists) {
      alert("Email already registered");
      return;
    }

    const updatedUsers = [...existingUsers, formData];

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("Registration Successful!");
    navigate("/Login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />
          {error.name && <p className="text-red-500 text-sm">{error.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />
          {error.email && <p className="text-red-500 text-sm">{error.email}</p>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />
          {error.password && (
            <p className="text-red-500 text-sm">{error.password}</p>
          )}

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Register
          </button>
        </form>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/Login" className="text-blue-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;