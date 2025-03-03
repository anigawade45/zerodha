import React from "react";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("User Data:", data);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto shadow p-4 rounded">
        {/* Name Field */}
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
        </div>

        {/* Email Field */}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            {...register("email", { required: "Email is required", pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: "Invalid email format" } })}
          />
          {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
        </div>

        {/* Password Field */}
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
          />
          {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-100">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
