/**
 * Ambient background temperature color shift module
 */
export function initTemperatureShift() {
  const sections = document.querySelectorAll('section[data-temp]');
  if (!sections.length || !('IntersectionObserver' in window)) return;

  const tempObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
        const tempColor = entry.target.getAttribute('data-temp');
        if (tempColor) {
          document.body.style.backgroundColor = tempColor;
        }
      }
    });
  }, {
    threshold: [0.35, 0.6]
  });

  sections.forEach(sec => tempObserver.observe(sec));
}
