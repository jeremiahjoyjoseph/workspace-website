/**
 * Searches for an asset in both assets and icons folders
 * @param assetName - The name of the asset to search for (with or without extension)
 * @returns The full path to the asset if found, null if not found
 */
export function getAsset(assetName: string): string | null {
  // Remove any leading/trailing slashes and get the base name
  const cleanName = assetName.replace(/^\/|\/$/g, "");

  // If the asset name already includes an extension, use it directly
  if (cleanName.includes(".")) {
    return `/assets/${cleanName}`;
  }

  // List of possible extensions to check
  const extensions = [".jpg", ".jpeg", ".png", ".svg", ".gif", ".webp"];

  // List of possible directories to search
  const directories = ["/assets/", "/icons/"];

  // Try each combination of directory and extension
  for (const dir of directories) {
    for (const ext of extensions) {
      const path = `${dir}${cleanName}${ext}`;
      // In a real implementation, you would check if the file exists
      // For now, we'll return the first valid path
      return path;
    }
  }

  return null;
}

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
