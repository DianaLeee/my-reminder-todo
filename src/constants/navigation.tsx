export interface INavigation {
  title: string;
  path: string;
}
export const navItems: INavigation[] = [
  {
    title: "All",
    path: "/",
  },
  {
    title: "Active",
    path: "/active",
  },
  {
    title: "Done",
    path: "/done",
  },
];
