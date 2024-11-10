"use client";

import { Button } from "@/components/ui/button";
import Google from "@/components/google-icon";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  async function handleGoogleSignIn() {
    await signIn("google", {
      redirectTo: "/dashboard",
    });
  }

  return (
    <main className="flex min-h-[calc(100dvh-7rem)] justify-center">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">
            Sign in to your account
          </h2>
          <div className="mt-8">
            <Button
              onClick={handleGoogleSignIn}
              className="flex w-full items-center justify-center"
              variant="outline"
            >
              <Google className="mr-2 h-5 w-5" />
              Sign in with Google
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
