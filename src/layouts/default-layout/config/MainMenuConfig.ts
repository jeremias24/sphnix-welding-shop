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
        heading: "Product",
        route: "/products",
        keenthemesIcon: "shop",
        bootstrapIcon: "bi-bag",
      },
    ],
  },
];

export default MainMenuConfig;
