import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { useUser } from "../../context/UserContext";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [message, setMessage] = useState({ type: "", content: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useUser();

  const onSubmit = async (data, e) => {
    e?.preventDefault();
    e?.stopPropagation();
    setIsLoading(true);
    setMessage({ type: "", content: "" });

    try {
      const trimmedData = {
        email: data.email.trim(),
        password: data.password.trim(),
      };

      const response = await axios.post(`${process.env.REACT_APP_API_URL}/users/login`, trimmedData, {
        withCredentials: true,
      });

      const userInfo = response.data.user;
      setUser(userInfo);
      setMessage({ type: "success", content: "Login successful! Redirecting..." });

      // Redirect to dashboard after successful login
      setTimeout(() => {
        window.location.href = process.env.REACT_APP_DASHBOARD_URL;
      }, 1000);
    } catch (error) {
      console.error("Login error:", error);
      let errorMessage = "Login failed! Please try again.";
      
      if (error.response) {
        // Server responded with an error
        errorMessage = error.response.data.error || errorMessage;
      } else if (error.request) {
        // Request was made but no response received
        errorMessage = "Network error. Please check your connection.";
      }
      
      setMessage({
        type: "error",
        content: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light py-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="row justify-content-center"
        >
          <div className="col-md-6 col-lg-5">
            <div className="bg-white shadow-lg rounded-4 p-4 p-md-5">
              <div className="text-center mb-4">
                <motion.img
                  src="/media/images/logo.svg"
                  alt="Zerodha"
                  className="mb-4"
                  style={{ height: "40px" }}
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  onError={(e) => { e.target.src = "https://zerodha.com/static/images/logo.svg" }}
                />
                <h2 className="fw-bold mb-1">Welcome Back</h2>
                <p className="text-muted">Login to access your account</p>
              </div>

              {message.content && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`alert ${message.type === "success" ? "alert-success" : "alert-danger"} text-center mb-4`}
                >
                  {message.content}
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label className="form-label">Email Address</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light"><FiMail /></span>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? "is-invalid" : ""}`}
                      placeholder="Enter your email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label">Password</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light"><FiLock /></span>
                    <input
                      type={showPassword ? "text" : "password"}
                      className={`form-control ${errors.password ? "is-invalid" : ""}`}
                      placeholder="Enter your password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: { value: 6, message: "Minimum 6 characters" }
                      })}
                    />
                    <button
                      type="button"
                      className="input-group-text bg-light"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                    {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                  </div>
                  <Link to="/forgot-password" className="text-primary text-decoration-none">Forgot Password?</Link>
                </div>

                <motion.button
                  type="submit"
                  className="btn btn-primary w-100 py-2 mb-4"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isLoading ? (
                    <><span className="spinner-border spinner-border-sm me-2" /> Logging in...</>
                  ) : "Login"}
                </motion.button>

                <p className="text-center mb-0">
                  Don't have an account? <Link to="/signup" className="text-primary">Sign up</Link>
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
