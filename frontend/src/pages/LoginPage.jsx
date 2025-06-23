import { useState } from "react";
import { VideoIcon } from "lucide-react";
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#0f0d0d] to-[#1f1c1c] px-4">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-green-800">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-6 justify-center">
          <VideoIcon className="size-14 text-green-400 drop-shadow-md" />
          <h1 className="text-4xl font-bold font-mono text-green-400 drop-shadow-md">
            🐺 Bold
          </h1>
        </div>

        {/* Welcome Message */}
        <p className="text-xl text-pink-500 text-center font-medium italic bg-pink-100 bg-opacity-10 rounded-lg px-4 py-3 mb-4 shadow">
          👋 Goodbye for now, my love — but my heart stays with her 💘
        </p>

        <h2 className="text-2xl font-bold text-white mb-4 text-center">Welcome Back</h2>

        {/* Error Message */}
        {error && (
          <div className="text-sm text-red-400 mb-4 py-2 px-3 bg-red-900/20 rounded-lg shadow-sm">
            {error?.response?.data?.message || "Login failed"}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              className="w-full rounded-xl px-4 py-2 bg-[#1e1e1e] text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              placeholder="hello@example.com"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label className="block text-sm text-gray-300 mb-1">Password</label>
            <input
              type="password"
              className="w-full rounded-xl px-4 py-2 bg-[#1e1e1e] text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
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
            className="w-full bg-green-500 hover:bg-green-600 text-black py-2 rounded-full font-semibold transition-transform hover:scale-[1.02] active:scale-95 shadow-md"
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
          <p className="text-center text-sm text-gray-400 mt-5">
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
