import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { gridItem } from '@/data';

function Grid() {
  return (
    <div id="about">
      <BentoGrid>
        {gridItem.map(item => (
          <BentoGridItem
          id={item.id}
          key={item.id}
          title={item.title}
          description={item.description}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

export default Grid;
