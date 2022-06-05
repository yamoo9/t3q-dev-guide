import { ComponentMeta, ComponentStory } from '@storybook/react';
import HomePage from '../../pages/index';
import { PageDecorator } from './pageDecorator';

export default {
  title: 'Pages/Home',
  component: HomePage,
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = (args) => (
  <PageDecorator>
    <HomePage {...args} />
  </PageDecorator>
);

export const Base = Template.bind({});
