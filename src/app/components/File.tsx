import { Icon } from './FolderIcon';

export default function File({ name, depth }: { name: string; depth: number }) {
  const indentStyle = { marginLeft: `${depth * 5}px` };

  return (
    <div className="m-2 flex gap-1" style={indentStyle}>
      <Icon iconName="File" /> {name}
    </div>
  );
}
