import "../../sentry.client.config";
import { redirect } from "next/navigation";
export default async function() {
  redirect("/login"); 
}
