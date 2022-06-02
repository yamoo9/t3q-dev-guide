import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { AllHTMLAttributes } from 'react';

type A11yHiddenTypes = AllHTMLAttributes<HTMLElement> & {
  $focusable: boolean;
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
