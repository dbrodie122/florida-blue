import React from 'react';

import { DataInput } from './DataInput';

export const InnerSubSection = ({item, innerTitle, topTitle, index, innerIndex, handleChange, capitalize}) => {
  const labels = Object.keys(item);
  return (
    <div className='column'>
      {labels.map((label, i) => 
        <DataInput
        handleChange={handleChange}
        capitalize={capitalize}
        value={item[label]}
        key={i + 'abc'}
        label={label}
        innerTitle={innerTitle}
        topTitle={topTitle}
        index={index}
        innerIndex={innerIndex}/>)}
    </div>
  )
};
