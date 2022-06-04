import { css } from '@emotion/react';

export default {
  title: 'components/button',
};

export const AccessibleButton = () => (
  <button
    type="button"
    css={css`
      border: 0;
      padding: 0.681em 0.909em;
      background: #e50914;
      color: #fff;
      font-weight: 700;
      font-size: 22px;
    `}
  >
    <svg
      width={22}
      height={16}
      viewBox="0 0 22 16"
      fill="none"
      css={css`
        vertical-align: middle;
        margin-right: 10px;
      `}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.65685 0.928941L0.292892 7.2929C-0.0976315 7.68343 -0.0976315 8.31659 0.292892 8.70712L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6806 8.46159 14.0474 8.07107 13.6569L3.41421 9.00001H21C21.5523 9.00001 22 8.55229 22 8.00001C22 7.44772 21.5523 7.00001 21 7.00001H3.41421L8.07107 2.34315C8.46159 1.95263 8.46159 1.31947 8.07107 0.928941C7.68054 0.538416 7.04738 0.538416 6.65685 0.928941Z"
        fill="white"
      />
    </svg>
    접근성을 갖춘 버튼
  </button>
);
AccessibleButton.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/LyA0CbsDHTdDdMbzGgeWPX/%EC%95%84%ED%86%A0%EB%AF%B9-%EB%94%94%EC%9E%90%EC%9D%B8%EF%B9%95%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4(Netflix)?node-id=1683%3A388',
  },
};

export const InaccessibleButton = () => (
  <button
    css={css`
      background: #010209;
      color: #4e4e4f;
    `}
  >
    접근성이 없는 버튼
  </button>
);

InaccessibleButton.parameters = {
  ...AccessibleButton.parameters,
};
