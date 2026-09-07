import { NavItem } from '@/types';
import { servicesData } from './services';

export const navigationData: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Services',
    href: '/services',
    dropdown: servicesData.map(service => ({
      name: service.title,
      href: `/services/${service.slug}`,
      description: service.shortDescription,
      iconName: 'Layout', // We can use a generic icon for now or map it later
      category: service.category,
    })),
  },
  {
    label: 'Case Studies',
    href: '/case-studies',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];
