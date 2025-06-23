import { useState } from "react";
import { VideoIcon } from "lucide-react";
import { Link } from "react-router";
import useSignUp from "../hooks/useSignUp";

const SignUpPage = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { isPending, error, signupMutation } = useSignUp();

  const handleSignup = (e) => {
    e.preventDefault();
    signupMutation(signupData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] px-4">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/10">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <VideoIcon className="w-12 h-12 text-emerald-400" />
          <h1 className="text-4xl font-bold font-mono text-emerald-400">
            Bold
          </h1>
        </div>

        <h2 className="text-2xl font-semibold text-white text-center mb-5">
          Create an Account
        </h2>

        {/* Error Message */}
        {error && (
          <div className="text-sm text-red-400 mb-4 py-2 px-3 bg-red-800/20 rounded">
            {error?.response?.data?.message || "Signup failed"}
          </div>
        )}

        {/* Signup Form */}
        <form onSubmit={handleSignup} className="space-y-5">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm text-gray-300 mb-1">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="John Doe"
              className="w-full rounded-lg px-4 py-2 bg-[#1e293b] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              value={signupData.fullName}
              onChange={(e) =>
                setSignupData({ ...signupData, fullName: e.target.value })
              }
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm text-gray-300 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="john@example.com"
              className="w-full rounded-lg px-4 py-2 bg-[#1e293b] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              value={signupData.email}
              onChange={(e) =>
                setSignupData({ ...signupData, email: e.target.value })
              }
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm text-gray-300 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg px-4 py-2 bg-[#1e293b] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              value={signupData.password}
              onChange={(e) =>
                setSignupData({ ...signupData, password: e.target.value })
              }
              required
              minLength={6}
            />
            <p className="text-xs text-gray-400 mt-1">
              Password must be at least 6 characters long
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-black py-2 rounded-full font-semibold transition active:scale-[.98]"
          >
            {isPending ? (
              <>
                <span className="inline-block animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4 mr-2" />
                Creating account...
              </>
            ) : (
              "Create Account"
            )}
          </button>

          {/* Footer */}
          <p className="text-center text-sm text-gray-400 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-emerald-400 hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
