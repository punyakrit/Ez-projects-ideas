"use client"
import React from 'react'
import { Button } from '../ui/button'
import { signIn } from 'next-auth/react';

function SetUpButton() {

    const handleSignIn = async () => {
        const result = await signIn("google", { callbackUrl: "/" });
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
        Get Started
      </Button>
    </div>
  )
}

export default SetUpButton
