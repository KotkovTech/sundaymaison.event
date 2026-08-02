export function getAssetPath(pathStr: string): string {
  if (!pathStr) return '';
  if (pathStr.startsWith('http://') || pathStr.startsWith('https://')) return pathStr;

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const cleanPath = pathStr.startsWith('/') ? pathStr : `/${pathStr}`;

  if (basePath && cleanPath.startsWith(basePath)) {
    return cleanPath;
  }

  return `${basePath}${cleanPath}`;
}
