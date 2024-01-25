'use client';

import { motion } from 'framer-motion';
import { File, Folder, FolderOpen } from 'lucide-react';

type TIcons = 'Folder' | 'FolderOpen' | 'File';

export const Icon = ({ iconName }: { iconName: TIcons }) => {
  let IconComponent;

  switch (iconName) {
    case 'Folder':
      IconComponent = Folder;
      break;
    case 'FolderOpen':
      IconComponent = FolderOpen;
      break;
    case 'File':
      IconComponent = File;
      break;
    default:
      return null;
  }

  return (
    <motion.div transition={{ duration: 0.5, type: 'spring', bounce: 0.25 }}>
      <IconComponent />
    </motion.div>
  );
};
