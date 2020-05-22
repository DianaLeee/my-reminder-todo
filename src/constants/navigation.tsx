export interface INavigation {
  title: string;
  path: string;
  state?: "ALL" | "ACTIVE" | "DONE" | undefined;
}

export const navItems: INavigation[] = [
  {
    title: "All",
    path: "/",
    state: "ALL",
  },
  {
    title: "Active",
    path: "/active",
    state: "ACTIVE",
  },
  {
    title: "Done",
    path: "/done",
    state: "DONE",
  },
];
