"use client";

import { useState } from "react";
import Link from "next/link";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { postUser } from "@/actions/server";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // console.log("Register Data:", form);

    const result = await postUser(form);
    console.log(result);

    if (result.acknowledged) {
      alert("regestration successful");
      router.push(`/login`);
    }
  };

  const handleGoogleRegister = () => {
    console.log("Google Register Clicked");
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl border border-base-300">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center text-primary">
            Create Account
          </h2>

          <form onSubmit={handleRegister} className="space-y-4 mt-4">
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <div className="relative">
                <FiUser className="absolute left-3 top-3.5 text-neutral" />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                  className="input input-bordered w-full pl-10 focus:input-primary"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <div className="relative">
                <FiMail className="absolute left-3 top-3.5 text-neutral" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  className="input input-bordered w-full pl-10 focus:input-primary"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <FiLock className="absolute left-3 top-3.5 text-neutral" />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={handleChange}
                  className="input input-bordered w-full pl-10 focus:input-primary"
                  required
                />
              </div>
            </div>

            {/* Register Button */}
            <button type="submit" className="btn btn-primary w-full mt-2">
              Register
            </button>
          </form>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Google Register */}
          <button
            onClick={handleGoogleRegister}
            className="btn btn-outline w-full flex items-center gap-2"
          >
            <FcGoogle size={20} />
            Sign up with Google
          </button>

          {/* Login Link */}
          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
