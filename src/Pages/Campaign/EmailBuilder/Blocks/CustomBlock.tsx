import { IBlockData,BasicType,t,createBlock,mergeBlock, BlockManager    } from 'easy-email-core';
import { getImg } from './getImg';
import { BasicBlock } from './BasicBlock';
export const CustomAdvancedHTMLBlockType = 'custom-toggle';
export type IToggleBlock = IBlockData<
  {
    'icon-width': string;
    'icon-height': string;
    'container-background-color'?: string;
    border?: string;
    padding: string;
    'font-family'?: string;
    'icon-position': 'left' | 'right';
    'icon-expanded-url'?: string;
    'icon-collapsed-url'?: string;
  },
  {}
>;

export const ToggleBlock = createBlock<IToggleBlock>({
  get name() {
    return t('Toggle Block');
  },
  type: 'custom-toggle',
  validParentType: [BasicType.COLUMN],
  create: (payload) => {
    const defaultData: IToggleBlock = {
      type: 'custom-toggle',
      data: {
        value: {},
      },
      attributes: {
        'icon-height': '32px',
        'icon-width': '32px',
        'icon-position': 'right',
        'icon-expanded-url': getImg('ICON_EXPANDED'),
        'icon-collapsed-url': getImg('ICON_COLLAPSED'),
        padding: '10px 20px',
        border: '1px solid #cccccc',
      },
      children: [
        {
          type: 'toggle-element',
          data: {
            value: {
              content: 'Click to Expand',
            },
          },
          children: [
            {
              type: 'toggle-text',
              data: {
                value: {
                  content: 'This is the hidden content that appears when expanded.',
                },
              },
            },
          ],
        },
      ],
    };
    return mergeBlock(defaultData, payload);
  },
  render(params) {
    return <BasicBlock params={params} tag="mj-toggle" />;
  },
});
BlockManager.registerBlocks({ [CustomAdvancedHTMLBlockType]: ToggleBlock });