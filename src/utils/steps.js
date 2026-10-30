import { User, Link2, Palette, Image as ImageIcon, Share2 } from 'lucide-react';

export const WIZARD_STEPS = [
  { id: 1, title: 'Profile', subtitle: 'Name & Handle', icon: User },
  { id: 2, title: 'Links', subtitle: 'Select Links', icon: Link2 },
  { id: 3, title: 'Design', subtitle: 'Colors & Theme', icon: Palette },
  { id: 4, title: 'Photos', subtitle: 'Media & Work', icon: ImageIcon },
  { id: 5, title: 'Publish', subtitle: 'Share & QR', icon: Share2 },
];
