/**
 * Get a space image from the assets folder
 * @param imageName - The name of the image
 * @returns The full path to the image
 */
export function getImage(imageName: string): string {
  return `/assets/${imageName}`;
}

/**
 * Get an icon from the icons directory
 * @param iconName - The name of the icon
 * @returns The full path to the icon
 */
export function getIcon(iconName: string): string {
  return `/icons/${iconName}`;
}
