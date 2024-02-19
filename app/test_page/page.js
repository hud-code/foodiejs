import { redirect } from "next/navigation";

export default async function TestPage() {
  redirect("https://www.google.com");
}
