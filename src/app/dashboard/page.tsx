import BookmarksDashboard from "@/components/dashboard";
import { Button } from "@/components/ui/button";
import { auth } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await auth();

  if (session?.user) {
    void api.bookmark.getMarks.prefetch();
  } else {
    return (
      <div className="flex min-h-dvh w-full items-center justify-center">
        <Button size="lg" asChild>
          <Link target="_blank" href="/api/auth/signin">
            Sign in
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <HydrateClient>
      <BookmarksDashboard />
    </HydrateClient>
  );
}
