'use client';

import { MotionConfig, motion } from 'framer-motion';
import { useMeasure } from 'react-use';

export function AnimatedContainer({ children }: { children: React.ReactNode }) {
  const [ref, { height }] = useMeasure<HTMLDivElement>();

  return (
    <MotionConfig transition={{ duration: 1 }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, height: height }}
        className="h-full overflow-hidden"
      >
        <div ref={ref} className="overflow-hidden ">
          {children}
        </div>
      </motion.div>
    </MotionConfig>
  );
}
