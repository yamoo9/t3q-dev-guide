export function toPascalCase(name: string): string {
  return name
    .replace(/^./, ($1) => $1.toUpperCase())
    .replace(/-\w{1}/g, ($1) => $1.replace('-', '').toUpperCase());
}
