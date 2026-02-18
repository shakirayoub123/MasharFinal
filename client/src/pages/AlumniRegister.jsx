import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

export default function AlumniRegister() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    batch: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);

    try {
      const { confirmPassword, ...data } = formData;
      await register(data);
      setSuccess("Registration successful! Redirecting to login...");
      setTimeout(() => navigate("/alumni-login"), 2000);
    } catch (err) {
      setError(
        err.response?.data?.message || "Registration failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-4 py-10">
        <form
          onSubmit={handleSubmit}
          className="
            w-[661px] max-w-[95vw]
            bg-white
            rounded-[12px]
            pb-[24px]
            flex flex-col
            shadow-xl
            overflow-hidden
          "
        >
          {/* Header */}
          <div className="bg-[#0F1C80] py-6">
            <h1
              className="
                text-white
                font-spartan font-semibold
                text-[30px]
                leading-[32px]
                tracking-[0.5px]
                text-center
              "
            >
              Alumni Registration
            </h1>
          </div>

          {/* Body */}
          <div className="px-8 sm:px-12 py-8">
            {/* Error */}
            {error && (
              <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-xl mb-6 font-poppins text-[16px]">
                {error}
              </div>
            )}

            {/* Success */}
            {success && (
              <div className="bg-green-50 border border-green-300 text-green-700 px-4 py-3 rounded-xl mb-6 font-poppins text-[16px]">
                {success}
              </div>
            )}

            {/* Name */}
            <div className="grid grid-cols-[120px_1fr] items-center gap-6 mb-5">
              <label className="font-poppins text-[18px] leading-[16px] tracking-[0.5px]">
                Name :
              </label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full h-[48px] px-4 border-2 border-[#0F1C80] rounded-xl font-poppins text-[18px] tracking-[0.5px] focus:outline-none"
              />
            </div>

            {/* Email */}
            <div className="grid grid-cols-[120px_1fr] items-center gap-6 mb-5">
              <label className="font-poppins text-[18px] leading-[16px] tracking-[0.5px]">
                Email ID :
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full h-[48px] px-4 border-2 border-[#0F1C80] rounded-xl font-poppins text-[18px] tracking-[0.5px] focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div className="grid grid-cols-[120px_1fr] items-center gap-6 mb-5">
              <label className="font-poppins text-[18px] leading-[16px] tracking-[0.5px]">
                Phone :
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full h-[48px] px-4 border-2 border-[#0F1C80] rounded-xl font-poppins text-[18px] tracking-[0.5px] focus:outline-none"
              />
            </div>

            {/* Batch */}
            <div className="grid grid-cols-[120px_1fr] items-center gap-6 mb-5">
              <label className="font-poppins text-[18px] leading-[16px] tracking-[0.5px]">
                Batch :
              </label>
              <input
                type="text"
                name="batch"
                placeholder="e.g. 2024"
                value={formData.batch}
                onChange={handleChange}
                className="w-full h-[48px] px-4 border-2 border-[#0F1C80] rounded-xl font-poppins text-[18px] tracking-[0.5px] focus:outline-none"
              />
            </div>

            {/* Password */}
            <div className="grid grid-cols-[120px_1fr] items-center gap-6 mb-5">
              <label className="font-poppins text-[18px] leading-[16px] tracking-[0.5px]">
                Password :
              </label>
              <input
                type="password"
                name="password"
                placeholder="Min. 6 characters"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full h-[48px] px-4 border-2 border-[#0F1C80] rounded-xl font-poppins text-[18px] tracking-[0.5px] focus:outline-none"
              />
            </div>

            {/* Confirm Password */}
            <div className="grid grid-cols-[120px_1fr] items-center gap-6 mb-6">
              <label className="font-poppins text-[18px] leading-[16px] tracking-[0.5px]">
                Confirm :
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full h-[48px] px-4 border-2 border-[#0F1C80] rounded-xl font-poppins text-[18px] tracking-[0.5px] focus:outline-none"
              />
            </div>

            {/* Already registered */}
            <p className="font-poppins text-[16px] leading-[30px] tracking-[0.5px] text-gray-600 mb-6">
              Already have an account?{" "}
              <Link
                to="/alumni-login"
                className="text-[#0F1C80] cursor-pointer hover:underline"
              >
                Sign in here
              </Link>
            </p>

            {/* Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-[#0F1C80] text-white font-poppins text-[20px] px-14 py-3 rounded-2xl hover:bg-[#0C1766] transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? "Registering..." : "Register"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
