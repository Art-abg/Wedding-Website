/**
 * Utility function to generate dynamic CSS classes
 * This helps avoid inline styles while supporting dynamic values
 */

export const generateBackgroundImageClass = (imageUrl: string): string => {
  // Create a unique class name based on the image URL
  const hash = imageUrl.split('/').pop()?.replace(/[^a-zA-Z0-9]/g, '') || 'default';
  
  // Create a style element if it doesn't exist
  let styleEl = document.getElementById('dynamic-styles');
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = 'dynamic-styles';
    document.head.appendChild(styleEl);
  }
  
  // Create a unique class name
  const className = `bg-image-${hash}`;
  
  // Add the style rule if it doesn't exist
  if (!styleEl.textContent?.includes(`.${className}`)) {
    styleEl.textContent += `
      .${className} {
        background-image: url(${imageUrl});
      }
    `;
  }
  
  return className;
};

export const generateTransformClass = (transform: string): string => {
  // Create a unique class name based on the transform value
  const hash = transform.replace(/[^a-zA-Z0-9]/g, '') || 'default';
  
  // Create a style element if it doesn't exist
  let styleEl = document.getElementById('dynamic-styles');
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = 'dynamic-styles';
    document.head.appendChild(styleEl);
  }
  
  // Create a unique class name
  const className = `transform-${hash}`;
  
  // Add the style rule if it doesn't exist
  if (!styleEl.textContent?.includes(`.${className}`)) {
    styleEl.textContent += `
      .${className} {
        transform: ${transform};
      }
    `;
  }
  
  return className;
};

export const generateColorClass = (property: string, color: string): string => {
  // Create a unique class name based on the color value
  const hash = color.replace(/[^a-zA-Z0-9]/g, '') || 'default';
  
  // Create a style element if it doesn't exist
  let styleEl = document.getElementById('dynamic-styles');
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = 'dynamic-styles';
    document.head.appendChild(styleEl);
  }
  
  // Create a unique class name
  const className = `${property}-${hash}`;
  
  // Add the style rule if it doesn't exist
  if (!styleEl.textContent?.includes(`.${className}`)) {
    styleEl.textContent += `
      .${className} {
        ${property}: ${color};
      }
    `;
  }
  
  return className;
};
