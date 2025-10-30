import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Leaf, Lock, Mail } from "lucide-react";
import { useNavigate } from "react-router";

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsAuthenticated(true);
  }, []);

  const handleSignup = async () => {
    console.log("Signup clicked:", { username, email, password });
    // alert("Signup successful! (Placeholder)");
    localStorage.setItem("token", "dummy_token");
    navigate("/home");
  };

  const handleLogin = async () => {
    console.log("Login clicked:", { email, password });
    // alert("Login successful! (Placeholder)");
    localStorage.setItem("token", "dummy_token");
    navigate("/home");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSignUp) handleSignup();
    else handleLogin();
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side */}
      <div className="flex w-full lg:w-1/2 items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          <div className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">MindSpace</span>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="user@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full hover:bg-gray-700">
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-gray-400">OR</span>
              </div>
            </div>

            <div className="text-center text-gray-600">
              {isSignUp ? (
                <>
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setIsSignUp(false)}
                    className="text-blue-600 hover:underline"
                  >
                    Sign in
                  </button>
                </>
              ) : (
                <>
                  Don’t have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setIsSignUp(true)}
                    className="text-blue-600 hover:underline"
                  >
                    Sign up
                  </button>
                </>
              )}
            </div>

            <div className="text-center text-gray-400 pt-4 text-sm">
              © 2025 MindSpace Inc
            </div>
          </form>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-amber-100 via-yellow-100 to-amber-200 flex-col items-center justify-center p-12">
        <div className="max-w-lg text-center space-y-8">
          <h1 className="text-4xl font-bold text-gray-700 leading-tight">
            Secure your Mental Health <br /> And be yourself <br /> With{" "}
            <span className="text-green-700">MindSpace</span>!
          </h1>

          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-1 bg-gray-600 rounded-full -rotate-12" />
            <div className="w-32 h-24 bg-green-200 rounded-full opacity-60" />
            <div className="w-16 h-1 bg-gray-600 rounded-full rotate-12" />
          </div>
        </div>
      </div>
    </div>
  );
}
