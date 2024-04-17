"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function AppBar() {
  const { data: session } = useSession();

  return (
    <div className="w-full h-14 flex justify-between items-center px-14 border-b">
      {/* left side  */}
      <h1 className="text-xl font-bold">
        Secure<span className="text-purple-800">Pay</span>
      </h1>

      {session ? (<span>{session.user?.email}</span>):(<span>hi</span>)}

      {/* right side */}
      {session ? (
        <button
          onClick={() => signOut()}
          className="bg-black px-4 py-2 rounded-md text-white font-bold text-sm"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => signIn()}
          className="bg-black px-4 py-2 rounded-md text-white font-bold text-sm"
        >
          Login
        </button>
      )}
    </div>
    
  );
}
