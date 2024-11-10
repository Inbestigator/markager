import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CloudIcon, MonitorSmartphoneIcon, RefreshCwIcon } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <main className="flex flex-col items-center">
        <section className="py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Manage Your Bookmarks in the Cloud
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                  Markager syncs your bookmarks across all your devices and
                  browsers. Never lose an important link again.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="/install">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="flex w-full flex-col items-center bg-gray-50 py-12 dark:bg-gray-800 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
              Features
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CloudIcon className="mb-2 h-10 w-10" />
                  <CardTitle>Cloud Storage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Store your bookmarks securely in the cloud, accessible from
                    anywhere.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <RefreshCwIcon className="mb-2 h-10 w-10" />
                  <CardTitle>Sync Across Devices</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Seamlessly synchronize your bookmarks across all your
                    devices and browsers.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <MonitorSmartphoneIcon className="mb-2 h-10 w-10" />
                  <CardTitle>Multi-Platform Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Works on most modern browsers and operating systems.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
              How It Works
            </h2>
            <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <li className="flex flex-col items-center text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  1
                </div>
                <h3 className="mt-4 text-xl font-semibold">Sign Up</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Create your Markager account in seconds.
                </p>
              </li>
              <li className="flex flex-col items-center text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  2
                </div>
                <h3 className="mt-4 text-xl font-semibold">
                  Install Extension
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Add our browser extension to start syncing.
                </p>
              </li>
              <li className="flex flex-col items-center text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  3
                </div>
                <h3 className="mt-4 text-xl font-semibold">
                  Start Bookmarking
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Click the sync button to sync across all your devices.
                </p>
              </li>
            </ol>
          </div>
        </section>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Markager. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link
            className="text-xs underline-offset-4 hover:underline"
            href="https://github.com/inbestigator/markager"
            target="_blank"
          >
            GitHub
          </Link>
        </nav>
      </footer>
    </>
  );
}
