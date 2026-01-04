import { Dimensions, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

// Base reference dimensions (iPhone X/11/12/13/14 standard)
const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

/**
 * Get the scale factor based on screen width
 */
const getWidthScale = (): number => {
  return SCREEN_WIDTH / BASE_WIDTH;
};

/**
 * Get the scale factor based on screen height
 */
const getHeightScale = (): number => {
  return SCREEN_HEIGHT / BASE_HEIGHT;
};

/**
 * Get the average scale factor (useful for font sizes)
 */
const getScale = (): number => {
  const widthScale = getWidthScale();
  const heightScale = getHeightScale();
  // Use the smaller scale to prevent elements from becoming too large
  return Math.min(widthScale, heightScale);
};

/**
 * Scale font size based on screen dimensions
 * @param size - Base font size
 * @param factor - Optional scaling factor (default: 1)
 * @returns Scaled font size
 */
export const scaleFontSize = (size: number, factor: number = 1): number => {
  const scale = getScale();
  const newSize = size * scale * factor;
  
  // Round to nearest pixel and ensure minimum size
  return Math.max(Math.round(newSize), 10);
};

/**
 * Scale width based on screen width
 * @param width - Base width
 * @param factor - Optional scaling factor (default: 1)
 * @returns Scaled width
 */
export const scaleWidth = (width: number, factor: number = 1): number => {
  const scale = getWidthScale();
  const newWidth = width * scale * factor;
  
  // Round to nearest pixel
  return Math.round(newWidth);
};

/**
 * Scale height based on screen height
 * @param height - Base height
 * @param factor - Optional scaling factor (default: 1)
 * @returns Scaled height
 */
export const scaleHeight = (height: number, factor: number = 1): number => {
  const scale = getHeightScale();
  const newHeight = height * scale * factor;
  
  // Round to nearest pixel
  return Math.round(newHeight);
};

/**
 * Scale both width and height proportionally
 * @param size - Base size (applied to both width and height)
 * @param factor - Optional scaling factor (default: 1)
 * @returns Object with scaled width and height
 */
export const scaleSize = (
  size: number,
  factor: number = 1
): { width: number; height: number } => {
  const scale = getScale();
  const scaledSize = size * scale * factor;
  
  return {
    width: Math.round(scaledSize),
    height: Math.round(scaledSize),
  };
};

/**
 * Get responsive pixel value (handles different pixel densities)
 * @param size - Base size in pixels
 * @returns Responsive pixel value
 */
export const getResponsivePixel = (size: number): number => {
  return PixelRatio.roundToNearestPixel(size);
};

/**
 * Check if device is a tablet
 * @returns true if device width is >= 768px
 */
export const isTablet = (): boolean => {
  return SCREEN_WIDTH >= 768;
};

/**
 * Check if device is a small screen (iPhone SE, etc.)
 * @returns true if device width is < 375px
 */
export const isSmallScreen = (): boolean => {
  return SCREEN_WIDTH < 375;
};

/**
 * Check if device is a large screen (iPad, etc.)
 * @returns true if device width is >= 1024px
 */
export const isLargeScreen = (): boolean => {
  return SCREEN_WIDTH >= 1024;
};

/**
 * Get current screen dimensions
 * @returns Object with current width and height
 */
export const getScreenDimensions = (): {
  width: number;
  height: number;
} => {
  return {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  };
};

/**
 * Get responsive value based on screen size
 * @param small - Value for small screens
 * @param medium - Value for medium screens
 * @param large - Value for large screens
 * @returns Appropriate value based on screen size
 */
export const getResponsiveValue = <T>(
  small: T,
  medium: T,
  large: T
): T => {
  if (isLargeScreen()) return large;
  if (isTablet()) return medium;
  return small;
};

/**
 * Scale margin/padding values
 * @param value - Base margin/padding value
 * @param factor - Optional scaling factor (default: 1)
 * @returns Scaled value
 */
export const scaleSpacing = (value: number, factor: number = 1): number => {
  const scale = getScale();
  return Math.round(value * scale * factor);
};

/**
 * Configuration object with all scaling functions
 */
export const responsiveConfig = {
  scaleFontSize,
  scaleWidth,
  scaleHeight,
  scaleSize,
  scaleSpacing,
  getResponsivePixel,
  isTablet,
  isSmallScreen,
  isLargeScreen,
  getScreenDimensions,
  getResponsiveValue,
  // Direct access to scale factors
  getWidthScale,
  getHeightScale,
  getScale,
};

export default responsiveConfig;

