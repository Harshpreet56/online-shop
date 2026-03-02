import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
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

    if (!formData.email) {
      newError.email = "Enter you Email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newError.email = "Email invalid "
    }
    if (!formData.password) {
      newError.password = "Enter you password";
    } else if (formData.password.length < 6) {
      newError.password = "password invalid "
    }
     
    return newError
    
  };


  const handleSubmit = (e) => {
    e.preventDefault();

     const validate = validateForm();  
    setError(validate);

    if (Object.keys(validate).length !== 0) {
      return;  
    }

    const storedUser = JSON.parse(localStorage.getItem("users")) ;

    const validUser = storedUser.find(
      (user) =>
        user.email === formData.email && user.password === formData.password,
    );

    // if (validUser) {
    //   alert("Login Successful!");
    //   navigate("/");
    // } else {
    //   alert("Invalid Email or Password");
    // }
    if (validUser) {
  alert("Login Successful!");

  // SAVE LOGIN STATE
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("currentUser", JSON.stringify(validUser));

  navigate("/");
} else {
  alert("Invalid Email or Password");
}
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg w-100">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
       
          />
          {error.email && <p className="text-blue-500 font-bold text-lg">{error.email} </p>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
         
          />
          {error.password && <p className="text-red-500 font-bold text-lg">{error.password} </p>}

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Login
          </button>
        </form>

        <p className="text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/Register" className="text-blue-600 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
