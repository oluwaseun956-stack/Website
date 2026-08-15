import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("group-classes", "routes/group-classes.tsx"),
  route("coaching", "routes/coaching.tsx"),
  route("consulting", "routes/consulting.tsx"),
  route("book", "routes/book.tsx"),
  route("thank-you", "routes/thank-you.tsx"),
  route("payment", "routes/payment.tsx"),
] satisfies RouteConfig;
