"use client"
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page(){
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleGithubSignIn = async () => {
      await gitHubSignIn();
  }

  const handleFirebaseSignOut = async () => {
      await firebaseSignOut();
  }

  return(
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-4xl font-semibold mb-2">Main Landing</h1>
        <Link href="../" className="hover:text-blue-600">Home</Link>
        {!user && (
          <button className="ml-4 hover:text-emerald-600" onClick={handleGithubSignIn}>Github Log In</button>
        )}
      </div>

      {user && (
        <div>
          <p className="ml-4">Welcome, {user.displayName} ({user.email})</p>
          <button className="ml-4 hover:text-fuchsia-600" onClick={handleFirebaseSignOut}>Sign Out</button>
          <Link href="./week10/shopping-list" className="ml-2 hover:text-emerald-600">Shopping List</Link>
        </div>
      )}
    </div>
  )
}


