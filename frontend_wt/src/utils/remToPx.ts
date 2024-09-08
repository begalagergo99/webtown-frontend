export const remToPx = (rem: number) => {
  const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize); // Gets the root font size in px
  return rem * rootFontSize; // Convert rem to px
};