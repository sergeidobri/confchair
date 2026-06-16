import type { DetailedHTMLProps, MetaHTMLAttributes } from "react";
export interface Route {
  name: string;
  path: string;
  meta?: DetailedHTMLProps<
    MetaHTMLAttributes<HTMLMetaElement>,
    HTMLMetaElement
  >[];
  routes?: { [key: string]: Route };
  hidden?: boolean;
  showInNav?: boolean;
  disabled?: boolean;
}
export type TRoutes = { [key: string]: Route };