import File from './components/File';
import Folder from './components/Folder';
import data from '@/public/data.json';
import { Descendant } from '@/lib/types';
import { AnimatedContainer } from './components/AnimatedContainer';

export default function Home() {
  const initialDepth = Object.keys(data) as (keyof typeof data)[];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-stone-100 ">
      <AnimatedContainer>
        {initialDepth.map((item) => {
          const itemData = data[item];
          if (Array.isArray(itemData)) {
            return itemData.map((fileName) => (
              <File key={fileName} name={fileName} depth={0} />
            ));
          } else {
            return (
              <Folder
                key={item}
                name={item}
                descendants={itemData as Descendant}
                depth={0}
              />
            );
          }
        })}
      </AnimatedContainer>
    </main>
  );
}
