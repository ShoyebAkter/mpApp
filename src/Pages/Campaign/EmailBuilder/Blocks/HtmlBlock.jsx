// // import { generateAdvancedBlock } from 'easy-email-core/lib/blocks/advanced/';
// import { BlockManager ,BasicType,AdvancedType} from 'easy-email-core';
// // import { generateAdvancedBlock } from 'easy-email-core/lib/blocks/advanced/generateAdvancedBlock';

// export const CustomAdvancedHTMLBlockType = 'advanced_html_block';
// const generateAdvancedBlock = (options) => {
//     return {
//       type: options.type,
//       validParentType: options.validParentType,
//       render: options.getContent,
//     };
//   };
  
//   const CustomAdvancedHTMLBlock = {
//     name: 'HTML',
//     type: CustomAdvancedHTMLBlockType,
//     create: (payload = {}) => {
//       console.log('Creating block with payload:', payload); // Debugging log
      
//       return {
//         type: CustomHTMLBlockType,
//         data: {
//           value: {
//             content: '<div>Your custom HTML here</div>',
//           },
//         },
//         attributes: {
//           padding: '0px 0px 0px 0px',
//           'background-color': '#ffffff',
//         },
//         children: [],
//         ...payload, // Spread payload after defaults to avoid overwriting
//       };
//     }
    
//     ,
//     validParentType: [
//       BasicType.WRAPPER,
//       BasicType.SECTION,
//       BasicType.COLUMN,
//       BasicType.HERO,
//       BasicType.GROUP,
//       AdvancedType.NAVBAR,
//     AdvancedType.TEXT,
//     AdvancedType.BUTTON,
//     AdvancedType.IMAGE,
//     AdvancedType.DIVIDER,
//     AdvancedType.SPACER,
//     AdvancedType.SOCIAL,
//     AdvancedType.CAROUSEL,
//     AdvancedType.ACCORDION, // Allows flexible grouping
//     ],  
//     render: ({ data }) => {
//       console.log('Rendering data:', data);
//       if (!data || !data.data || !data.data.value) {
//         return <div>Error: Missing data</div>;
//       }
    
//       const { content } = data.data.value;
//       return <div>{content || 'No content provided'}</div>;
//     }
//     ,
//     panels: {
//       settings: [
//         {
//           title: 'HTML Content',
//           components: [
//             {
//               type: 'textarea',
//               label: 'Content',
//               key: 'content',
//               value: (data) => data.data.value.content,
//               onChange: (data, value) => {
//                 data.data.value.content = value;
//                 return data;
//               },
//             },
//             {
//               type: 'padding',
//               label: 'Padding',
//               key: 'padding',
//               value: (data) => data.attributes.padding,
//               onChange: (data, value) => {
//                 data.attributes.padding = value;
//                 return data;
//               },
//             },
//             {
//               type: 'color',
//               label: 'Background Color',
//               key: 'background-color',
//               value: (data) => data.attributes['background-color'],
//               onChange: (data, value) => {
//                 data.attributes['background-color'] = value;
//                 return data;
//               },
//             },
//           ],
//         },
//       ],
//     },
//   };
  

// // Register the block

// BlockManager.registerBlocks({ [CustomAdvancedHTMLBlockType]: CustomAdvancedHTMLBlock });
