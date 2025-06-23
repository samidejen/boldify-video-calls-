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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] px-4">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/10">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <VideoIcon className="w-12 h-12 text-emerald-400" />
          <h1 className="text-4xl font-bold font-mono text-emerald-400">🐺 Bold</h1>
        </div>

        {/* Welcome Message */}
        <p className="text-lg text-pink-300 text-center font-medium italic bg-white/10 rounded-lg px-4 py-3 mb-5 shadow-sm">
          👋 Goodbye for now, my love — but my heart stays with her 💘
        </p>

        <h2 className="text-xl font-bold text-white mb-5 text-center">Welcome Back</h2>

        {/* Error Message */}
        {error && (
          <div className="text-sm text-red-400 mb-4 py-2 px-3 bg-red-800/20 rounded">
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
              className="w-full rounded-lg px-4 py-2 bg-[#1e293b] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
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
              className="w-full rounded-lg px-4 py-2 bg-[#1e293b] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
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
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-black py-2 rounded-full font-semibold transition-all duration-200 active:scale-95"
          >
            {isPending ? (
              <>
                <span className="inline-block animate-spin mr-2 border-2 border-t-transparent border-white rounded-full w-4 h-4" />
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </button>

          {/* Footer */}
          <p className="text-center text-sm text-gray-400 mt-4">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-emerald-400 hover:underline">
              Create one
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
