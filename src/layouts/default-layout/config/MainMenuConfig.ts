import type { MenuItem } from "@/layouts/default-layout/config/types";

const MainMenuConfig: Array<MenuItem> = [
  {
    pages: [
      {
        heading: "Dashboard",
        route: "/dashboard",
        keenthemesIcon: "element-11",
        bootstrapIcon: "bi-app-indicator",
      },
      {
        heading: "Products",
        route: "/products",
        keenthemesIcon: "shop",
        bootstrapIcon: "bi-bag",
      },
      {
        heading: "Projects",
        route: "/projects",
        keenthemesIcon: "folder",
        bootstrapIcon: "bi-bag",
      },
    ],
  },
];

export default MainMenuConfig;
