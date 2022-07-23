import { Projects } from "../components/pages";
import config from "../config";

//Public route
export const publicRoutes = [
  { path: config.routes.home, component: Projects },

  { path: config.routes.projects, component: Projects },
];
