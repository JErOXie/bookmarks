function handleOrientation(cell) {
   if (cell.beta > 40) return window.scrollBy(0, 2);
}; window.addEventListener('deviceorientation', handleOrientation);
