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
//  topTitle
// "developers": [ 
//     {
//       "firstName": "",
//       "lastName": "",
//       "personalFacts": {
//         "languages": [],
//         "birthDate": "",
//         "favoriteFood": ""
//       } 
//     },
//     {
//       "firstName": "",
//       "lastName": "",
//       "personalFacts": {
//         "languages": [],
//         "birthDate": "",
//         "favoriteFood": ""   
//       } 
//     },
//     {
//       "firstName": "",
//       "lastName": "",
//       "personalFacts": {
//         "languages": [],
//         "birthDate": "",
//         "favoriteFood": ""   
//       } 
//     },
//     {
//       "firstName": "",
//       "lastName": "",
//       "personalFacts": {
//         "languages": [],
//         "birthDate": "",
//         "favoriteFood": ""   
//       } 
//     }
//   ], 


//   "manager": { 
//     "firstName": "",
//     "lastName": "",
//     "personalFacts": {
//       "languages": [],
//       "birthDate": "",
//       "favoriteFood": ""
//     } 
//   },

  // subsection would be data.topTitle.label
  // or data.topTitle.subTitle.label

  //innersubsection would be data.topTitle[index].subTitle.label
  // or data.topTitle[index].label