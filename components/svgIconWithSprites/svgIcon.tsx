import { px2rem } from '@/utils';
import { css } from '@emotion/react';
import type { ReactElement } from 'react';

type SvgIconTypes =
  | 'chevron-left'
  | 'chevron-up'
  | 'chevron-right'
  | 'chevron-down';

interface SvgIconProps {
  /** 아이콘 타입 */
  type: SvgIconTypes;
  /** 아이콘 타이틀 (접근성) */
  title?: string;
  /** 아이콘 색상 */
  fill?: string;
  /** 아이콘 크기 (width, height 일괄 적용) */
  size?: string | number;
  /** 아이콘 너비 (개별 적용) */
  width?: string | number;
  /** 아이콘 높이 (개별 적용) */
  height?: string | number;
}

export function SvgIcon({
  type,
  title,
  fill,
  size,
  width,
  height,
  ...restProps
}: SvgIconProps): ReactElement {
  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      css={css`
        color: ${fill};
        width: ${px2rem((width ?? size)!)};
        height: ${px2rem((height ?? size)!)};
      `}
      {...restProps}
    >
      {title ? <title>{title}</title> : null}
      <use href={`/sprites/sprites.svg#${type}`} />
    </svg>
  );
}

SvgIcon.defaultProps = {
  fill: 'currentColor',
  size: 16,
};
