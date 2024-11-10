"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChromeIcon, Download, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

export default function InstallPage() {
  const [showChromeInstructions, setShowChromeInstructions] = useState(false);

  return (
    <main className="flex min-h-[calc(100dvh-7rem)] items-center">
      <div className="container mx-auto px-4 py-12">
        <h1 className="mb-2 text-center text-3xl font-bold">
          Install Markager
        </h1>
        <p className="mb-8 text-center text-gray-600 dark:text-gray-400">
          Choose your preferred browser to get started
        </p>
        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ChromeIcon className="h-6 w-6" />
                Chrome
              </CardTitle>
              <CardDescription>
                Install Markager for Google Chrome
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full" asChild>
                <Link target="_blank" href="/g-ext.zip">
                  <Download className="mr-2 h-4 w-4" />
                  Download Extension
                </Link>
              </Button>
              {showChromeInstructions && (
                <div className="space-y-2 text-sm">
                  <h3 className="font-semibold">Installation Instructions:</h3>
                  <ol className="list-inside list-decimal space-y-1">
                    <li>
                      Open Chrome and navigate to{" "}
                      <code className="rounded bg-gray-200 px-1 dark:bg-gray-700">
                        chrome://extensions
                      </code>
                    </li>
                    <li>
                      Enable &quot;Developer mode&quot; using the toggle in the
                      top right corner
                    </li>
                    <li>
                      Drag and drop the downloaded{" "}
                      <code className="rounded bg-gray-200 px-1 dark:bg-gray-700">
                        g-ext.zip
                      </code>{" "}
                      file onto the extensions page
                    </li>
                    <li>Markager is now installed and ready to use!</li>
                  </ol>
                </div>
              )}
              <Button
                variant="ghost"
                className="w-full"
                onClick={() =>
                  setShowChromeInstructions(!showChromeInstructions)
                }
              >
                {showChromeInstructions ? (
                  <>
                    <ChevronUp className="mr-2 h-4 w-4" />
                    Hide Instructions
                  </>
                ) : (
                  <>
                    <ChevronDown className="mr-2 h-4 w-4" />
                    Show Instructions
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M511.587 241.725c-.087-1.532-.238-3.048-.349-4.589-.238-3.176-.493-6.351-.834-9.496-.198-1.778-.444-3.541-.675-5.32a256 256 0 0 0-1.27-8.606 304 304 0 0 0-.961-5.415 264 264 0 0 0-1.731-8.384c-.397-1.747-.786-3.493-1.206-5.224a255 255 0 0 0-2.302-8.59c-.437-1.556-.85-3.113-1.318-4.653a260 260 0 0 0-3.311-10.028c-.333-.961-.627-1.937-.976-2.89a248 248 0 0 0-5.002-12.687c-.365-.858-.77-1.684-1.144-2.532a245 245 0 0 0-4.494-9.75c-.666-1.365-1.381-2.691-2.072-4.041a266 266 0 0 0-4.207-7.923 238 238 0 0 0-2.485-4.32 266 266 0 0 0-4.43-7.336 255 255 0 0 0-2.724-4.232 237 237 0 0 0-4.906-7.178c-.913-1.302-1.818-2.604-2.755-3.882-1.873-2.548-3.81-5.041-5.771-7.518-.81-1.016-1.589-2.064-2.414-3.065a258 258 0 0 0-17.99-19.817c-.945-.936-1.937-1.833-2.898-2.754-2.239-2.152-4.494-4.288-6.812-6.359-1.239-1.112-2.509-2.176-3.772-3.263a244 244 0 0 0-6.415-5.359c-.635-.516-1.246-1.072-1.889-1.58-.095-.048-.19-.088-.286-.135C370.632 20.519 315.732.004 256.004.004 180.89.004 113.326 32.348 66.5 83.875L45 53.436S26.033 110.504 20.039 156.52a254 254 0 0 0-14.815 47.763c-.008.047-.016.08-.024.119a263 263 0 0 0-2.104 11.758c-.04.286-.103.572-.15.858-.564 3.732-1.024 7.51-1.438 11.298-.047.508-.135 1.009-.19 1.517-.35 3.517-.596 7.066-.802 10.623-.047.794-.142 1.58-.182 2.374A258 258 0 0 0 0 255.992c0 141.392 114.612 256.004 256.004 256.004C397.38 511.996 512 397.384 512 255.992c0-4.787-.158-9.535-.413-14.267m-112.119-54.638c19.69 57.663 4.224 127.99 4.224 127.99s-2.81-26.724-12.655-30.947c-42.261 120.987-140.717 122.4-170.26 71.755 33.759 7.043 59.125-42.213 77.409-43.618 18.292-1.398 19.697-14.061-5.621-26.732-25.319-12.647-49.28 18.324-92.882 19.713-43.603 1.406-49.224-35.163-33.759-46.413 15.466-11.25 14.061 0 26.725 5.622 4.215-14.06 1.405-36.561 1.405-36.561s29.534-21.103 46.422-28.138c16.871-7.034 16.871-22.508 14.061-30.939-2.811-8.448-14.061 2.802-14.061 2.802s-30.948-2.802-47.826-2.802c-9.854-11.258-7.027-47.826 14.068-78.782-35.172 1.413-47.827 14.06-70.334 29.542-17.817-3.096-34.314-3.628-45.572-3.486 39.768-46.882 99.051-76.718 165.194-76.718 53.313 0 102.156 19.404 139.939 51.471-6.153-2.406-12.933-3.978-20.388-3.636 47.818 36.568 59.085 139.256 59.085 139.256s-14.08-45.008-35.174-39.379" />
                </svg>
                Firefox
              </CardTitle>
              <CardDescription>
                Install Markager for Mozilla Firefox
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link
                  href="https://addons.mozilla.org/en-US/firefox/addon/markager/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Install from Firefox Add-ons
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          Done installing?{" "}
          <Link href="/dashboard" className="text-primary hover:underline">
            Visit the dashboard
          </Link>
        </p>
      </div>
    </main>
  );
}
