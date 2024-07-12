"use client"
import { signIn } from 'next-auth/react';
import React from 'react'
import { Button } from '../ui/button';

function GoogleLoginButton() {

        const handleSignIn = async () => {
          const result = await signIn("google", { callbackUrl: "/ideas" });
          if (result?.error) {
            console.error("Failed to sign in", result.error);
            return;
          }
          
        };
  return (
    <div>
      <Button
        className="border-2  px-4 py-2 font-bold rounded-xl transition duration-500 ease-in-out hover:cursor-pointer  hover:border-white hover:bg-transparent hover:text-white"
        onClick={handleSignIn}
      >
        Register
      </Button>
    </div>
  )
}

export default GoogleLoginButton
