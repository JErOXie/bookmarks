function handleOrientation(ele) {
   if (ele.beta > 40) window.scrollBy(0, 2);
}; window.addEventListener('deviceorientation', handleOrientation)
