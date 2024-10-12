import { useState } from 'react';
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "../../components/ui/label";
import Link from "next/link";
import Image from "next/image";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Password reset attempt for email:', email);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <div className="space-y-2 text-center">
          <div className="flex justify-center mb-4">
            <Image src="/logo.ico" alt="GameHub Logo" width={128} height={128} />
          </div>
          <h2 className="text-2xl font-bold text-center mb-4">Forgot Your Password?</h2>
          <p className="text-gray-700">
            Enter your email address and we&apos;ll send you a link to reset your password
          </p>
        </div>
        <div className="mt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="gamer@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                className="border border-gray-300 rounded-lg px-3 py-2 w-full"
              />
            </div>
            <div className="flex justify-center">
              <button 
                type="submit" className="w-full py-2 rounded-lg transition-colors duration-200"
                style={{
                  backgroundColor: 'var(--foreground)',
                  color: 'white',
                }}
              >
                Send Reset Link
              </button>
            </div>
          </form>
        </div>
        <div className="text-center mt-4">
          <div className="text-sm text-gray-600">
            Remember your password?{" "}
            <div className="flex justify-between w-full">
              <Link href="/register/login" className="text-blue-500 hover:underline">
                Back to login
              </Link>
              <Link href="/" className="text-blue-500 hover:underline">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
