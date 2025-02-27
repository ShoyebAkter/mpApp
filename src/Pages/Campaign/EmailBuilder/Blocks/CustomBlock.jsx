// import React from 'react';
// import { BasicType, AdvancedType, BlockManager } from 'easy-email-core';

// // Block type constant
// export const CustomHTMLBlockType = 'advanced_html';

// const CustomHTMLBlock = {
//   name: 'HTML',
//   type: CustomHTMLBlockType,
//   create: (payload = {}) => {
//     console.log('Creating block with payload:', payload); // Debug log
    
//     // Create the default block structure
//     const defaultBlock = {
//       type: CustomHTMLBlockType,
//       data: {
//         value: {
//           content: '<div>Your custom HTML here</div>',
//         },
//       },
//       attributes: {
//         padding: '0px 0px 0px 0px',
//         'background-color': '#ffffff',
//       },
//       children: [],
//     };

//     // Deep merge the payload with the default block
//     const result = mergeDeep(defaultBlock, payload);
//     console.log('Merged result:', result); // Debug log
//     return result;
//   },
//   validParentType: [
//     BasicType.WRAPPER,
//     BasicType.SECTION,
//     BasicType.COLUMN,
//     BasicType.GROUP,
//     AdvancedType.ACCORDION,
//   ],
//   render: ({ data }) => {
//     console.log('Render data:', data); // Debug log
    
//     if (!data?.data?.value) {
//       console.error('Missing data in render:', data);
//       return <div>Error: Missing data</div>;
//     }
  
//     const { content } = data.data.value;
    
//     // Use dangerouslySetInnerHTML to render the HTML content
//     return (
//       <div 
//         style={{
//           padding: data.attributes?.padding || '0px',
//           backgroundColor: data.attributes?.['background-color'] || '#ffffff',
//         }}
//         dangerouslySetInnerHTML={{ __html: content || 'No content provided' }}
//       />
//     );
//   },
//   panels: {
//     settings: [
//       {
//         title: 'HTML Content',
//         components: [
//           {
//             type: 'textarea',
//             label: 'Content',
//             key: 'content',
//             value: (data) => {
//               console.log('Getting content value from data:', data);
//               return data?.data?.value?.content || '';
//             },
//             onChange: (data, value) => {
//               console.log('Setting content value:', value);
//               if (!data.data) data.data = {};
//               if (!data.data.value) data.data.value = {};
//               data.data.value.content = value;
//               return data;
//             },
//           },
//           {
//             type: 'padding',
//             label: 'Padding',
//             key: 'padding',
//             value: (data) => data?.attributes?.padding || '0px 0px 0px 0px',
//             onChange: (data, value) => {
//               if (!data.attributes) data.attributes = {};
//               data.attributes.padding = value;
//               return data;
//             },
//           },
//           {
//             type: 'color',
//             label: 'Background Color',
//             key: 'background-color',
//             value: (data) => data?.attributes?.['background-color'] || '#ffffff',
//             onChange: (data, value) => {
//               if (!data.attributes) data.attributes = {};
//               data.attributes['background-color'] = value;
//               return data;
//             },
//           },
//         ],
//       },
//     ],
//   },
// };

// // Helper function to deep merge objects
// function mergeDeep(target, source) {
//   const isObject = (obj) => obj && typeof obj === 'object' && !Array.isArray(obj);
  
//   if (!isObject(target) || !isObject(source)) {
//     return source === undefined ? target : source;
//   }
  
//   const output = { ...target };
  
//   Object.keys(source).forEach(key => {
//     if (source[key] === undefined) return;
    
//     if (isObject(source[key])) {
//       if (!(key in target)) {
//         output[key] = source[key];
//       } else {
//         output[key] = mergeDeep(target[key], source[key]);
//       }
//     } else if (Array.isArray(source[key])) {
//       // For arrays, replace the entire array
//       output[key] = [...source[key]];
//     } else {
//       output[key] = source[key];
//     }
//   });
  
//   return output;
// }

// BlockManager.registerBlocks({ [CustomHTMLBlockType]: CustomHTMLBlock });
// export default CustomHTMLBlock;