import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">AppName</h1>
        </div>
        <h2 className="text-xl font-semibold text-center">Sign In</h2>
        <form className="space-y-4">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button className="w-full">Sign In</Button>
        </form>
        <div className="text-center">
          <p className="text-sm text-gray-600">Use Google or one of your social profiles</p>
          <div className="flex justify-center space-x-2 mt-2">
            <Button variant="outline" className="bg-blue-500 text-white">Google</Button>
            <Button variant="outline" className="bg-indigo-500 text-white">Facebook</Button>
          </div>
        </div>
        <div className="text-center text-sm">
          <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
          <span className="mx-2">|</span>
          <a href="#" className="text-green-500 hover:underline">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;