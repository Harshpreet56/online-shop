import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [error, setError] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newError = {};

    if (!formData.name) {
      newError.name = "Enter your Name ";
    }

    if (!formData.email) {
      newError.email = "Enter you Email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newError.email = "Email invalid ";
    }
    if (!formData.password) {
      newError.password = "Enter you password";
    } else if (formData.password.length < 6) {
      newError.password = "password invalid ";
    }

    return newError;
  };
  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //  const validate = validateForm();
  //     setError(validate);

  //     if (Object.keys(validate).length !== 0) {
  //       return;
  //     }

  //     const existingUsers = JSON.parse(localStorage.getItem("users")) ;

  //     const userExists = existingUsers.find(
  //       (user) => user.email === formData.email,
  //     );

  //     if (userExists) {
  //       alert("Email already registered");
  //       return;
  //     }
  //     const updatedUsers = [...existingUsers, formData];

  //     localStorage.setItem("users", JSON.stringify(updatedUsers));

  //     alert("Registration Successful!");
  //     navigate("/Login");
  //   };
  const handleSubmit = (e) => {
    e.preventDefault();

    const validate = validateForm();
    setError(validate);

    if (Object.keys(validate).length !== 0) return;
    const existingUsers = JSON.parse(localStorage.getItem("users"));

    const userExists = existingUsers.find(
      (user) => user.email === formData.email,
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
      <div className="bg-white p-10 rounded-xl shadow-lg w-100">
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />
          {error.name && (
            <p className="text-blue-500 font-bold text-lg">{error.name} </p>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />
          {error.email && (
            <p className="text-red-500 font-bold text-lg">{error.email} </p>
          )}
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />
          {error.password && (
            <p className="text-green-500 font-bold text-lg">
              {error.password}{" "}
            </p>
          )}

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Register
          </button>
        </form>

        <p className="text-center mt-4">
          Already have an account?
          <Link to="/Login" className="text-blue-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
