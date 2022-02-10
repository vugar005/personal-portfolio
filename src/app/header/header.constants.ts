import { NavLink } from '../shared/models/nav-link.model';

export const NAV_LINKS: NavLink[] = [
  {
    text: 'home',
    url: '/home',
    disabled: false,
  },
  {
    text: 'projects',
    url: 'projects',
    disabled: true,
  },
  {
    text: 'contact',
    url: 'contact',
    disabled: false,
  },
];
