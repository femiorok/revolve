'use client';

import { useState } from 'react';
import File from './File';
import { Icon } from './FolderIcon';
import { Button } from '@/components/ui/button';
import { Descendant } from '@/lib/types';
import { AnimatedContainer } from './AnimatedContainer';

export default function Folder({
  name,
  descendants,
  depth,
}: {
  name: string;
  descendants: Descendant;
  depth: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const iconState = isOpen ? 'FolderOpen' : 'Folder';
  const depthStyle = {
    backgroundColor: `rgb(120 113 108 / ${depth * 10})`,
    marginLeft: `${depth * 5}px`,
  };

  return (
    <AnimatedContainer>
      <div style={depthStyle} className="m-2 rounded-lg bg-stone-500 p-2">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="flex max-w-40 gap-1"
        >
          <Icon iconName={iconState} />
          <p>{name}</p>
        </Button>
        {isOpen &&
          Object.keys(descendants).map((item) => {
            const itemDescendant = descendants[item];
            if (!Array.isArray(itemDescendant) && itemDescendant) {
              return (
                <Folder
                  key={item}
                  name={item}
                  descendants={itemDescendant as Descendant}
                  depth={depth + 1}
                />
              );
            } else if (Array.isArray(itemDescendant)) {
              return itemDescendant.map((fileName) => (
                <File key={fileName} name={fileName} depth={depth + 1} />
              ));
            }
          })}
      </div>
    </AnimatedContainer>
  );
}
