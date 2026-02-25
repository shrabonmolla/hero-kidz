"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FiMail, FiLock } from "react-icons/fi";
import { useRouter } from "next/navigation";
import SocialLoginBtn from "../buttons/SocialLoginBtn";

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Login Data:", form);
    const result = await signIn("credentials", {
      redirect: false,
      password: form.password,
      email: form.email,
    });

    if (result.status === 200) {
      alert("sucessfully login");
      console.log(result);
    } else {
      alert("failed login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl border border-base-300">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center text-primary">
            Welcome Back
          </h2>

          <form onSubmit={handleLogin} className="space-y-4 mt-4">
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

            {/* Login Button */}
            <button type="submit" className="btn btn-primary w-full mt-2">
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Google Login */}
          {/* <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full flex items-center gap-2"
          >
            <FcGoogle size={20} />
            Continue with Google
          </button> */}
          <SocialLoginBtn />

          {/* Register Link */}
          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <Link
              href="/register"
              className="text-primary font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
