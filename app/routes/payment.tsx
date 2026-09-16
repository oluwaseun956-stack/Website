import type { Route } from "./+types/payment";
import { redirect } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Payment | Seun Edema" }];
}

export function loader() {
  return redirect("/analyst-launchpad#payment");
}

export default function Payment() {
  return null;
}
