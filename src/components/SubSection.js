import React from 'react';

import { InnerSubSection } from './InnerSubSection';
import { DataInput } from './DataInput';

export const SubSection = ({item, topTitle, index, handleChange, capitalize}) => {
  const keys = Object.keys(item);
  return (
    <div className='column grey-bg'>
      {keys.map((key,i) => 
        typeof item[key] === 'object' ? 
        <InnerSubSection
          handleChange={handleChange}
          capitalize={capitalize}
          key={i + '123'}
          item={item[key]}
          innerTitle={key}
          topTitle={topTitle}
          index={index} 
          innerIndex={i}/>
        : <DataInput
            handleChange={handleChange}
            capitalize={capitalize}
            value={item[key]}
            topTitle={topTitle}
            index={index}
            innerIndex={i} 
            key={i + 'def'}
            label={key}/>
        )}
    </div>
  )
};
