import { auth } from "@/server/auth";
import Link from "next/link";

export default async function User() {
  const session = await auth();
  if (!session) {
    return <Link href="/signin">Sign in</Link>;
  }
  return <Link href="/dashboard">Dashboard</Link>;
}
