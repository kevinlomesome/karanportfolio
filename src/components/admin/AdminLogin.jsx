import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUserShield,
} from "react-icons/fa";

function AdminLogin() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.username === "admin" &&
      formData.password === "admin123"
    ) {
   navigate("/admin/dashboard");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-slate-800 rounded-3xl shadow-2xl border border-slate-700 p-8">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-cyan-500 flex items-center justify-center">
            <FaUserShield className="text-4xl text-white" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center text-white mb-2">
          Admin Login
        </h1>

        <p className="text-center text-gray-400 mb-8">
          Sign in to continue
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Username */}
          <div>
            <label className="text-gray-300 block mb-2">
              Username
            </label>

            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400" />

              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter Username"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl py-4 pl-12 pr-4 text-white outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-300 block mb-2">
              Password
            </label>

            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl py-4 pl-12 pr-12 text-white outline-none focus:border-cyan-400"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 transition py-4 rounded-xl text-lg font-semibold text-white"
          >
            Login
          </button>

        </form>

        <div className="mt-8 bg-slate-900 border border-slate-700 rounded-xl p-4">
          <h2 className="text-cyan-400 font-semibold mb-2">
            Demo Credentials
          </h2>

          <p className="text-gray-300">
            Username: <span className="font-bold">admin</span>
          </p>

          <p className="text-gray-300">
            Password: <span className="font-bold">admin123</span>
          </p>
        </div>

      </div>

    </div>
  );
}

export default AdminLogin;