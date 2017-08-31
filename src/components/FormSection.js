import React from 'react';

import { SubSection } from './SubSection';

export const FormSection = ({topItem, topTitle, handleChange, capitalize}) => {
  return Array.isArray(topItem) ? 

    <div>
        {topItem.map((item,i) => 
          <SubSection
            handleChange={handleChange}
            capitalize={capitalize}
            item={item}
            key={i + 'omg'}
            topTitle={topTitle}
            index={i}/>)}
    </div>

        : <SubSection
            handleChange={handleChange}
            capitalize={capitalize}
            item={topItem}
            topTitle={topTitle}/>
};
