import { useEffect } from 'react';

/**
 * useContentProtection
 * Casual content protection hook for the portfolio.
 * 
 * - Disables browser right-click context menu across the website.
 * - Prevents dragging images and visual assets.
 * - Leaves all developer tools, F12, Ctrl+Shift+I/J/C, and responsive device toolbar
 *   completely functional for development, inspection, and responsive testing.
 */
export function useContentProtection() {
  useEffect(() => {
    // 1. Disable browser right-click context menu
    const handleContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    // 2. Disable image and asset dragging
    const handleDragStart = (e) => {
      e.preventDefault();
      return false;
    };

    document.addEventListener('contextmenu', handleContextMenu, { capture: true });
    document.addEventListener('dragstart', handleDragStart, { capture: true });

    // Clean up event listeners on unmount
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu, { capture: true });
      document.removeEventListener('dragstart', handleDragStart, { capture: true });
    };
  }, []);
}
