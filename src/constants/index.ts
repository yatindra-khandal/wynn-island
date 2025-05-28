type NavLink = {
  id: string;
  link: string;
  label: string;
};

const navLinks: NavLink[] = [
  {
    id: 'ROOMS & SUITES',
    link: '/rooms-suites',
    label: 'ROOMS & SUITES',
  },
  {
    id: 'WYNN REWARDS',
    link: '/wynn-rewards',
    label: 'WYNN REWARDS',
  },
  {
    id: 'OFFERS',
    link: '/offers',
    label: 'OFFERS',
  },
  {
    id: 'DINING',
    link: '/dining',
    label: 'DINING',
  },
  {
    id: 'ENTERTAINMENT',
    link: '/entertainment',
    label: 'ENTERTAINMENT',
  },
  {
    id: 'MEETINGS & EVENTS',
    link: '/meetings-events',
    label: 'MEETINGS & EVENTS',
  },
];

export { navLinks };
