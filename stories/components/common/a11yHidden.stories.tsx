import React from 'react';
import { css } from '@emotion/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { A11yHidden } from '@/components';

export default {
  title: 'Components/Common/A11yHidden',
  component: A11yHidden,
  argTypes: {
    as: {
      type: 'string',
      defaultValue: 'span',
    },
    $focusable: {
      type: 'boolean',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof A11yHidden>;

const Template: ComponentStory<typeof A11yHidden> = (args) => (
  <>
    <h1
      lang="en"
      css={css`
        margin: 0;
      `}
    >
      Accessible Hidden Component
    </h1>
    <p>접근성 있는 감춤 스타일 컴포넌트</p>
    <A11yHidden {...args} />
    <div>⬆ 위에 감춰져 있습니다.</div>
  </>
);

export const Base = Template.bind({});

export const Headling = Template.bind({});
Headling.args = {
  as: 'h1',
  children: 'Heading',
  lang: 'en',
};

export const Link = Template.bind({});
Link.args = {
  as: 'a',
  href: 'https://storybookjs.org/',
  rel: 'noopener noreferrer',
  target: '_blank',
  children: 'Storybook',
  lang: 'en',
  $focusable: true,
};
