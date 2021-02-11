export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  collapse?: string;
  isCollapsed?: boolean;
  isCollapsing?: any;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  type?: string;
  collapse?: string;
  children?: ChildrenItems2[];
  isCollapsed?: boolean;
}
export interface ChildrenItems2 {
  path?: string;
  title?: string;
  type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: "/admin/dashboard",
    title: "Dashboard",
    type: "link",
    icontype: "fas fa-home text-black",
  },
  {
    path: "/admin/management",
    title: "Management",
    type: "sub",
    icontype: "fas fa-file-invoice text-black",
    collapse: "management",
    isCollapsed: true,
    children: [
      { path: "audit-trails", title: "Audit Trails", type: "link" },
      { path: "user", title: "User", type: "link" },
      { path: "bot", title: "Bot", type: "link" },
      { path: "dynamic-variables", title: "Dynamic Variables", type: "link" },
    ],
  },
  {
    path: "/admin/report",
    title: "Reporting",
    type: "sub",
    icontype: "fas fa-chart-bar text-black",
    collapse: "reporting",
    isCollapsed: true,
    children: [
      { path: "live-chat-history", title: "Live Chat History", type: "link" },
      { path: "user-rating", title: "User Ratings", type: "link" },
      { path: "user-statistic", title: "User Statistics", type: "link" },
    ],
  },
];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: "/admin/dashboard",
    title: "Dashboard",
    type: "link",
    icontype: "fas fa-home text-black",
  },
  // {
  //   path: '/admin/management',
  //   title: 'Management',
  //   type: 'sub',
  //   icontype: 'fas fa-file-invoice text-black',
  //   collapse: 'management',
  //   isCollapsed: true,
  //   children: [
  //     { path: 'audit-trails', title: 'Audit Trails', type: 'link' },
  //     { path: 'user', title: 'User', type: 'link' },
  //     { path: 'bot', title: 'Bot', type: 'link' },
  //     { path: 'dynamic-variables', title: 'Dynamic Variables', type: 'link' },
  //   ]
  // },
  // {
  //   path: '/admin/report',
  //   title: 'Reporting',
  //   type: 'link',
  //   icontype: 'fas fa-chart-bar text-black'
  // },
];
