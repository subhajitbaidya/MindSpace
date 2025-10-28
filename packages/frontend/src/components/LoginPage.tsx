import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Leaf, Lock, Mail } from "lucide-react";
import { useNavigate } from "react-router";

export function LoginPage() {
  // const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();
  // const [isSignUp, setIsSignUp] = useState(false);
  // const [showPassword, setShowPassword] = useState(false);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt with:", { email, password });
    // Add your login logic here
  };

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     setIsAuthenticated(true);
  //   }
  // });

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Login Form */}
      <div className="flex w-full lg:w-1/2 items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-green-600" />
            <span className="text-gray-900 text-bold">MindSpace</span>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-900">
                Email
              </Label>
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

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-900">
                Password
              </Label>
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

            {/* Sign In Button */}
            <Button type="submit" className="w-full hover:bg-blue-700">
              Sign In
            </Button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-gray-400">OR</span>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="text-center text-gray-600">
              Don't have an account?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Sign up
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-400 pt-4">
              Copyright 2025 MindSpace Inc
            </div>
          </form>
        </div>
      </div>

      {/* Right Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-amber-100 to-amber-200 items-center justify-center p-12">
        <div className="max-w-lg text-center space-y-8">
          <h1 className="text-5xl font-extrabold text-gray-700 leading-tight">
            Secure your Mental Health
            <br />
            And be yourself
            <br />
            With <span className="text-green-700">MindSpace</span>!
          </h1>

          {/* Simple illustration */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-1 bg-gray-600 rounded-full transform -rotate-12" />
            <div className="w-32 h-24 bg-green-200 rounded-full opacity-60" />
            <div className="w-16 h-1 bg-gray-600 rounded-full transform rotate-12" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
