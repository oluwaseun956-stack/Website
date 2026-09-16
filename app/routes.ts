import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("analyst-launchpad", "routes/analyst-launchpad.tsx"),
  route("consultancy", "routes/consultancy.tsx"),
  route("contact", "routes/contact.tsx"),
  route("thank-you", "routes/thank-you.tsx"),
  route("payment", "routes/payment.tsx"),
] satisfies RouteConfig;
