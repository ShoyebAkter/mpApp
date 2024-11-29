import { BlockManager, BasicType } from 'easy-email-core';

// Register the custom block
BlockManager.registerBlocks({
  TESTIMONIAL_BLOCK: { // Key must be the block's type
    name: "Template1",
    type: 'TESTIMONIAL_BLOCK',
    validParentType: [BasicType.PAGE, BasicType.WRAPPER, BasicType.SECTION, BasicType.COLUMN],
    
  },
  TEMPLATE_BLOCK: { // Key must be the block's type
    name: 'Template2',
    type: 'TEMPLATE_BLOCK',
    validParentType: [BasicType.PAGE, BasicType.WRAPPER, BasicType.SECTION, BasicType.COLUMN],
    
  },
});
