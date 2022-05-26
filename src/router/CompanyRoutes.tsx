import { CompanyLocation } from "../components/pages/CompanyLocation";
import { CompanyRecruit } from "../components/pages/CompanyRecruit";
import { CompanyComment } from "../components/pages/CompanyComment";

export const CompanyRoutes = [
  {
    path: "location",
    children: <CompanyLocation />
  },
  {
    path: "recruit",
    children: <CompanyRecruit />
  },
  {
    path: "comment",
    children: <CompanyComment />
  }
];
