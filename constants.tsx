
import { BentoItemData } from './types';

export const INITIAL_ITEMS: BentoItemData[] = [
  // === Project case studies ===
  {
    id: 'heading-case-studies',
    type: 'heading',
    size: 'full',
    title: 'Project case studies',
  },
  {
    id: 'cs-1',
    type: 'link',
    size: '2x1',
    variant: 'case-study',
    title: 'Expanding color tokens at Gojek',
    subtitle: 'notion.so',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80',
    url: '#'
  },
  {
    id: 'cs-2',
    type: 'link',
    size: '2x1',
    variant: 'case-study',
    title: 'Design systems impact',
    subtitle: 'notion.so',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    url: '#'
  },
  {
    id: 'cs-3',
    type: 'link',
    size: '2x1',
    variant: 'case-study',
    title: 'Permission patterns',
    subtitle: 'notion.so',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80',
    url: '#'
  },
  {
    id: 'cs-4',
    type: 'text',
    size: '2x1',
    title: '',
    content: 'Systemize, automate, innovate',
    backgroundColor: '#ffffff'
  },
  {
    id: 'cs-5',
    type: 'link',
    size: '2x1',
    variant: 'case-study',
    title: 'Accessibility menu for Gojek',
    subtitle: 'keithvaz.notion.site',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
    image: 'https://images.unsplash.com/photo-1614850523296-6313a9a5537a?auto=format&fit=crop&w=800&q=80',
    url: '#'
  },
  {
    id: 'cs-6',
    type: 'link',
    size: '2x1',
    variant: 'case-study',
    title: 'Unifying Gojek & Tokopedia accounts',
    subtitle: 'keithvaz.notion.site',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80',
    url: '#'
  },

  // === My Apps ===
  {
    id: 'heading-apps',
    type: 'heading',
    size: 'full',
    title: 'My Apps',
  },
  {
    id: 'app-1',
    type: 'link',
    size: '2x1',
    variant: 'app',
    title: 'Freely: Financial Freedom Calculator',
    subtitle: 'apps.apple.com',
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135706.png',
    url: '#'
  },
  {
    id: 'app-2',
    type: 'text',
    size: '2x1',
    title: '',
    content: 'Financial freedom starts with knowing where you\'re going...',
    backgroundColor: '#ffffff'
  },

  // === Visual design samples ===
  {
    id: 'heading-visual-design',
    type: 'heading',
    size: 'full',
    title: 'Visual design samples',
  },
  {
    id: 'vd-1',
    type: 'image',
    size: '2x2',
    variant: 'media',
    title: 'Order History',
    subtitle: 'dribbble.com',
    image: 'https://cdn.dribbble.com/users/32512/screenshots/16698655/media/1a903c70f03102379d8e5762a4a7547e.png?resize=1000x750&vertical=center',
  },
  {
    id: 'vd-2',
    type: 'image',
    size: '1x2',
    variant: 'media',
    title: 'Home Banking',
    subtitle: 'dribbble.com',
    image: 'https://cdn.dribbble.com/userupload/6418873/file/original-4394460f37c3746671048b1156828551.jpg?resize=1024x768',
  },
  {
    id: 'vd-3',
    type: 'image',
    size: '1x1',
    variant: 'media',
    title: '',
    image: 'https://cdn.dribbble.com/users/1615584/screenshots/15694247/media/16c310433722513f56b9c9f456108159.jpg?resize=1000x750&vertical=center',
  },
  {
    id: 'vd-4',
    type: 'image',
    size: '1x1',
    variant: 'media',
    title: 'Welcome, Keith!',
    image: 'https://cdn.dribbble.com/users/4189231/screenshots/14467008/media/6738942b0c36082d614838031d904790.png?resize=1000x750&vertical=center',
  },
  {
    id: 'vd-5',
    type: 'link',
    size: '2x1',
    variant: 'social-card',
    title: 'Check out more of my work',
    subtitle: 'Follow',
    icon: 'dribbble',
    backgroundColor: '#ea4c89',
    image: 'https://cdn.dribbble.com/users/1615584/screenshots/17498418/media/c96816008892f254e08285501865a95d.jpg?resize=400x300&vertical=center'
  },

  // === Ideas and questions ===
  {
    id: 'heading-ideas',
    type: 'heading',
    size: 'full',
    title: 'Ideas and questions',
  },
  {
    id: 'iq-1',
    type: 'link',
    size: '2x1',
    variant: 'article',
    title: 'Just a moment...',
    subtitle: 'keithvaz.medium.com',
    icon: 'medium',
    image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*m5dM_V45J9_3g2l_v5G5jg.png'
  },
  {
    id: 'iq-2',
    type: 'link',
    size: '2x1',
    variant: 'article',
    title: 'Unfair LLM pricing',
    subtitle: 'linkedin.com',
    icon: 'linkedin',
    image: 'https://media.licdn.com/dms/image/D5612AQE1b02j31-31Q/article-cover_image-shrink_720_1280/0/1689658932692?e=2147483647&v=beta&t=7j8j1j1j1j1j1j1j1j1j1j1j1j1j1j1j1j1j1j1j1j1'
  },
  {
    id: 'iq-3',
    type: 'link',
    size: '1x0.5',
    variant: 'article',
    title: 'Just a moment...',
    subtitle: 'medium.com',
    icon: 'medium',
  },
  {
    id: 'iq-4',
    type: 'link',
    size: '1x0.5',
    variant: 'article',
    title: 'UI vs Front End Engineers',
    subtitle: 'medium.com',
    icon: 'medium',
  },
  {
    id: 'iq-5',
    type: 'link',
    size: '2x1',
    variant: 'article',
    title: 'App Store Anarchy: A User\'s Perspective',
    subtitle: 'medium.com',
    icon: 'medium',
    image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*m5dM_V45J9_3g2l_v5G5jg.png'
  },
  {
    id: 'iq-6',
    type: 'link',
    size: '2x1',
    variant: 'article',
    title: 'Cognitive dissonance using LinkedIn',
    subtitle: 'linkedin.com',
    icon: 'linkedin',
    image: 'https://media.licdn.com/dms/image/D5612AQE1b02j31-31Q/article-cover_image-shrink_720_1280/0/1689658932692?e=2147483647&v=beta&t=7j8j1j1j1j1j1j1j1j1j1j1j1j1j1j1j1j1j1j1j1j1'
  },
  {
    id: 'iq-7',
    type: 'link',
    size: '2x1',
    variant: 'article',
    title: 'Apple\'s red toggle for iPhone 15 Pro',
    subtitle: 'medium.com',
    icon: 'medium',
    image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*m5dM_V45J9_3g2l_v5G5jg.png'
  },
  {
    id: 'iq-8',
    type: 'link',
    size: '2x1',
    variant: 'article',
    title: 'Why People Avoid Taxes',
    subtitle: 'medium.com',
    icon: 'medium',
    image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*m5dM_V45J9_3g2l_v5G5jg.png'
  },

  // === Coding escapades ===
  {
    id: 'heading-coding',
    type: 'heading',
    size: 'full',
    title: 'Coding escapades',
  },
  {
    id: 'ce-1',
    type: 'link',
    size: '2x2',
    variant: 'default',
    title: 'Screen Size Tester Figma Plugin',
    subtitle: 'figma.com',
    image: 'https://s3-alpha.figma.com/hub/file/2069818844/e1a5b822-5b94-4c4f-9e7b-7b0b0b0b0b0b-cover.png',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'
  },
  {
    id: 'ce-2',
    type: 'link',
    size: '2x1',
    variant: 'default',
    title: 'Color Grading (based on USWDS)',
    subtitle: 'codepen.io',
    image: 'https://shots.codepen.io/username/pen/GRWvdyZ-512.webp?version=1615584',
    icon: 'codepen'
  },

  // === Social links ===
  {
    id: 'heading-social',
    type: 'heading',
    size: 'full',
    title: 'Social links',
  },
  { id: 'sl-1', type: 'social', size: '1x1', variant: 'social-card', title: 'Linkedin', subtitle: 'linkedin.com', icon: 'linkedin' },
  { id: 'sl-2', type: 'social', size: '1x1', variant: 'social-card', title: 'Design Mentor at ADPList', subtitle: 'adplist.org', icon: 'https://cdn-images-1.medium.com/max/1200/1*D-7U7af-j6h6b7b7b7b7b7.png' },
  { id: 'sl-3', type: 'social', size: '1x1', variant: 'social-card', title: 'Figma Community', subtitle: '@keithvaz', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
  { id: 'sl-4', type: 'social', size: '1x1', variant: 'social-card', title: 'Resume', subtitle: 'drive.google.com', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo_%282020%29.svg' },
  { 
    id: 'sl-5', 
    type: 'link', 
    size: '2x1', 
    variant: 'media', 
    title: 'Speaker at Figma Config 2022', 
    image: 'https://i.ytimg.com/vi/w6W8w6w8w6w/maxresdefault.jpg',
    url: '#'
  },
  { id: 'sl-6', type: 'social', size: '1x0.5', variant: 'social-card', title: 'Instagram', subtitle: 'instagram.com', icon: 'instagram' },
  { id: 'sl-7', type: 'social', size: '1x0.5', variant: 'social-card', title: 'Twitter', subtitle: 'twitter.com', icon: 'twitter' }
];
