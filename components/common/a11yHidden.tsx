import type { AllHTMLAttributes } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

type A11yHiddenTypes = AllHTMLAttributes<HTMLElement> & {
  /** 렌더링 할 HTML 요소 또는 컴포넌트 타입 */
  as?: string;
  /** 초점(focus) 이동 가능 설정 */
  $focusable?: boolean;
};

export const A11yHidden = styled.span<A11yHiddenTypes>`
  position: absolute;
  clip: rect(0, 0, 0, 0);
  clip-path: circle(0);
  overflow: hidden;
  width: 1px;
  height: 1px;
  margin: -1px;
  white-space: nowrap;

  ${({ $focusable }) =>
    $focusable &&
    css`
      &:focus {
        position: static;
        clip: unset;
        clip-path: unset;
        overflow: auto;
        width: auto;
        height: auto;
        margin: initial;
        white-space: initial;
      }
    `}
`;

A11yHidden.defaultProps = {
  as: 'span',
  $focusable: false,
};
