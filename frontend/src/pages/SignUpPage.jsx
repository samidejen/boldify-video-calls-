import { useState } from "react";
import { ShipWheelIcon, VideoIcon } from "lucide-react";
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
    <div className="min-h-screen  flex items-center justify-center bg-[#0e0c0c] px-4">
      <div className="w-full max-w-md  bg-[#131111] p-8 rounded-2xl shadow-md border border-green-900">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-2">
          <VideoIcon className="size-16 text-green-400" />
          <h1 className="text-4xl font-bold font-mono text-green-400">Bold</h1>
        </div>

        <h2 className="text-xl font-semibold text-white mb-4">
          Create an Account
        </h2>

        {/* Error Message */}
        {error && (
          <div className="text-sm text-red-400 mb-4 py-2 px-3 bg-red-900 bg-opacity-20 rounded">
            {error?.response?.data?.message || "Signup failed"}
          </div>
        )}

        {/* Signup Form */}
        <form onSubmit={handleSignup} className="space-y-3">
          {/* Full Name */}
          <div>
            <label
              className="block text-sm text-gray-300 mb-1"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="John Doe"
              className="input w-full rounded-full px-4 py-2 bg-[#1a1a1a] text-white placeholder-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={signupData.fullName}
              onChange={(e) =>
                setSignupData({ ...signupData, fullName: e.target.value })
              }
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-300 mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="john@example.com"
              className="input w-full rounded-full px-4 py-2 bg-[#1a1a1a] text-white placeholder-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={signupData.email}
              onChange={(e) =>
                setSignupData({ ...signupData, email: e.target.value })
              }
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              className="block text-sm text-gray-300 mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="input w-full rounded-full px-4 py-2 bg-[#1a1a1a] text-white placeholder-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
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

          {/* Terms and Conditions */}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-green-500 text-black py-2 rounded-full font-semibold hover:bg-green-600 transition"
          >
            {isPending ? (
              <>
                <span className="loading loading-spinner loading-xs mr-2" />
                Creating account...
              </>
            ) : (
              "Create Account"
            )}
          </button>

          {/* Footer */}
          <p className="text-center text-xs text-gray-400 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-green-400 hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
