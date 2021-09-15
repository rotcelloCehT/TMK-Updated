import Chat from 'assets/widget/chat.svg';
import Community from 'assets/widget/community.svg';
import Github from 'assets/widget/github.svg';
import Boots from 'assets/icons/boots.svg';
import Helmet from 'assets/icons/helmet.svg';
import Tools from 'assets/icons/tools.svg';


export default {
  widgets: [
    {
      id: 1,
      iconSrc: Boots,
      altText: 'Workers Ready',
      title: 'Workers Ready',
      description:
        'Should the task require more people, TMK has connections in every industry.',
    },
    {
      id: 2,
      iconSrc: Helmet,
      altText: 'Safety First',
      title: 'Safety First',
      description:
        'Peace of mind is most important when you have work done in your home.',
    },
    {
      id: 3,
      iconSrc: Tools,
      altText: 'Equiped',
      title: 'Equiped To Handle',
      description:
        'We have all the tools and knowledge necesseary to assist you with your project.',
    },
  ],
  menuItem: [
    {
      path: '#home',
      label: 'Home',
    },
    {
      path: '#features',
      label: 'Features',
    },
    {
      path: '#services',
      label: 'Services',
    },
    {
      path: '#map',
      label: 'Find Us',
    },
    {
      path: '#testimonial',
      label: 'Testimonials',
    },
    {
      path: '#contact',
      label: 'Contact Us',
    },
  ],
};
