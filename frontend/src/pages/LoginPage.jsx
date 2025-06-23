import { useState } from "react";
import { ShipWheelIcon, VideoIcon } from "lucide-react";
import { Link } from "react-router";
import useLogin from "../hooks/useLogin";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const { isPending, error, loginMutation } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    loginMutation(loginData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0e0c0c] px-4">
      <div className="w-full max-w-md bg-[#131111] p-8 rounded-2xl shadow-md border border-green-900">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-2">
          <VideoIcon className="size-16 text-green-400" />
          <h1 className="text-4xl font-bold font-mono text-green-400">🐺 Bold</h1>
        </div>

        {/* Welcome Message */}
       <p className="text-2xl text-pink-600 text-center font-semibold italic bg-pink-100 rounded-xl px-6 py-4 shadow-md">
  👋 Goodbye for now, my love — but my heart stays with her 💘
</p>

        <h2 className="text-xl font-semibold text-white mb-1">Welcome Back</h2>

        {/* Error Message */}
        {error && (
          <div className="text-sm text-red-400 mb-4 py-2 px-3 bg-red-900 bg-opacity-20 rounded">
            {error?.response?.data?.message || "Login failed"}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          {/* Email Field */}
          <div className="form-control mb-4">
            <label className="label text-sm text-gray-300">Email</label>
            <input
              type="email"
              className="input w-full rounded-full px-4 py-2 bg-[#1a1a1a] text-white placeholder-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="hello@example.com"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              required
            />
          </div>

          {/* Password Field */}
          <div className="form-control mb-5">
            <label className="label text-sm text-gray-300">Password</label>
            <input
              type="password"
              className="input w-full rounded-full px-4 py-2 bg-[#1a1a1a] text-white placeholder-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="••••••••"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-green-500 text-black py-2 rounded-full font-semibold hover:bg-green-600 transition"
          >
            {isPending ? (
              <>
                <span className="loading loading-spinner loading-xs mr-2" />
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </button>

          {/* Footer */}
          <p className="text-center text-xs text-gray-400 mt-4">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-green-400 hover:underline">
              Create one
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
