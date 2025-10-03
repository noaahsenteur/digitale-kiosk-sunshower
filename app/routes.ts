import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/index.tsx", [
    index("routes/home.tsx"),
    layout("./layouts/child-pages.tsx", [
      route("advisory", "./routes/advisory.tsx"),
      route("faq", "./routes/faq.tsx"),
      ...prefix("packages", [
        route("pick-up", "./routes/packages/pick-up.tsx"),
        route("delivery", "./routes/packages/delivery.tsx"),
      ]),
      ...prefix("appointment", [
        index("./routes/appointment/index.tsx"),
        route("confirmation", "./routes/appointment/confirmation.tsx"),
      ]),
    ]),
  ]),
] satisfies RouteConfig;
