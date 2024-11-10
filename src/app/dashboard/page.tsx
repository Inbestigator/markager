import BookmarksDashboard from "@/components/dashboard";
import { auth } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  if (session?.user) {
    void api.bookmark.getMarks.prefetch();
  } else {
    redirect("/signin");
  }

  return (
    <HydrateClient>
      <BookmarksDashboard />
    </HydrateClient>
  );
}
