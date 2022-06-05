import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SvgIcon } from '@/components';

export default {
  title: 'Components/SvgIcon',
  component: SvgIcon,
  argTypes: {
    size: {
      control: {
        type: 'range',
        min: 10,
        max: 100,
        step: 5,
      },
    },
  },
} as ComponentMeta<typeof SvgIcon>;

const Template: ComponentStory<typeof SvgIcon> = (args) => (
  <SvgIcon {...args} />
);

export const ChevronLeft = Template.bind({});
ChevronLeft.args = {
  type: 'chevron-left',
};
export const ChevronRight = Template.bind({});
ChevronRight.args = {
  type: 'chevron-right',
};
export const ChevronDown = Template.bind({});
ChevronDown.args = {
  type: 'chevron-down',
};
export const ChevronUp = Template.bind({});
ChevronUp.args = {
  type: 'chevron-up',
};
