export function px2rem(unit: number | string, base: number = 16): string {
  unit = typeof unit === 'number' ? unit : parseFloat(unit);
  return `${unit  / base}rem`;
}
