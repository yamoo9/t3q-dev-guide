import type { ReactElement } from 'react';
import { css as emotionCss } from '@emotion/react';

import { ReactComponent as ChevronLeft } from '@/assets/svgs/chevron-left.svg';
import { ReactComponent as ChevronUp } from '@/assets/svgs/chevron-up.svg';
import { ReactComponent as ChevronRight } from '@/assets/svgs/chevron-right.svg';
import { ReactComponent as ChevronDown } from '@/assets/svgs/chevron-down.svg';

function switchComponent(type: SvgIconTypes) {
  switch (type) {
    default:
    case 'chevron-left':
      return ChevronLeft;
    case 'chevron-up':
      return ChevronUp;
    case 'chevron-right':
      return ChevronRight;
    case 'chevron-down':
      return ChevronDown;
  }
}

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
}

export function SvgIcon({
  type,
  title,
  fill,
  size,
  ...restProps
}: SvgIconProps): ReactElement {
  const ComponentType = switchComponent(type);

  return (
    <ComponentType
      title={title}
      width={size}
      height={size}
      css={emotionCss`
        pointer-events: none;
        color: ${fill};
      `}
      {...restProps}
    />
  );
}

SvgIcon.defaultProps = {
  fill: 'currentColor',
  size: 16,
};
