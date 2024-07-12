"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { toast} from "sonner";
import { Button } from "../ui/button";

function UserLogoutButton() {
  return (
    <div>
      <Button
        onClick={() => {
            signOut();
          
          toast.success('Logged out successfully.')
          }}
      >
        LogOut
      </Button>
    </div>
  );
}

export default UserLogoutButton;