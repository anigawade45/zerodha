import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState({ type: "", content: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const password = watch("password", "");

  const onSubmit = async (data) => {
    setIsLoading(true);
    setMessage({ type: "", content: "" });
    
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/users/register`, data, {
        withCredentials: true
      });
      
      setMessage({
        type: "success",
        content: "Registration successful! Redirecting to login...",
      });
      
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (error) {
      console.error("Registration error:", error);
      let errorMessage = "Registration failed! Please try again.";
      
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
    <div className="min-vh-100 d-flex align-items-center bg-light py-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="row justify-content-center"
        >
          <div className="col-md-6 col-lg-5">
            <div className="bg-white shadow-lg rounded-4 p-4 p-md-5">
              {/* Header */}
              <div className="text-center mb-4">
                <motion.img
                  src={logoError ? "https://zerodha.com/static/images/logo.svg" : "media/images/logo.svg"}
                  alt="Zerodha"
                  className="mb-4"
                  style={{ height: "40px" }}
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  onError={() => setLogoError(true)}
                />
                <h2 className="fw-bold mb-1">Create Account</h2>
                <p className="text-muted">Join millions of investors on Zerodha</p>
              </div>

              {/* Alert */}
              {message.content && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`alert ${message.type === "success" ? "alert-success" : "alert-danger"} text-center mb-4`}
                >
                  {message.content}
                </motion.div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name */}
                <div className="mb-4">
                  <label className="form-label">Full Name</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light">
                      <FiUser className="text-muted" />
                    </span>
                    <input
                      type="text"
                      className={`form-control ${errors.name ? "is-invalid" : ""}`}
                      placeholder="Enter your full name"
                      {...register("name", {
                        required: "Name is required",
                        minLength: { value: 2, message: "Name must be at least 2 characters" },
                      })}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                  </div>
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label className="form-label">Email Address</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light">
                      <FiMail className="text-muted" />
                    </span>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? "is-invalid" : ""}`}
                      placeholder="Enter your email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                  </div>
                </div>

                {/* Password */}
                <div className="mb-4">
                  <label className="form-label">Password</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light">
                      <FiLock className="text-muted" />
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      className={`form-control ${errors.password ? "is-invalid" : ""}`}
                      placeholder="Create a password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message: "Password must be at least 8 characters",
                        },
                      })}
                    />
                    <button
                      type="button"
                      className="input-group-text bg-light"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FiEyeOff className="text-muted" /> : <FiEye className="text-muted" />}
                    </button>
                    {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="mb-4">
                  <label className="form-label">Confirm Password</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light">
                      <FiLock className="text-muted" />
                    </span>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                      placeholder="Confirm your password"
                      {...register("confirmPassword", {
                        required: "Please confirm your password",
                        validate: (value) => value === password || "The passwords do not match",
                      })}
                    />
                    <button
                      type="button"
                      className="input-group-text bg-light"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <FiEyeOff className="text-muted" /> : <FiEye className="text-muted" />}
                    </button>
                    {errors.confirmPassword && (
                      <div className="invalid-feedback">{errors.confirmPassword.message}</div>
                    )}
                  </div>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  className="btn btn-primary w-100 py-2 mb-4"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" />
                      Creating Account...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </motion.button>

                {/* Login Link */}
                <p className="text-center mb-0">
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary text-decoration-none">
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;
