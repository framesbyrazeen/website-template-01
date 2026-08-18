/**
 * Magnetic button cursor tracking module
 */
export function initMagneticButtons(selector = '.magnetic-btn') {
  const buttons = document.querySelectorAll(selector);
  if (!buttons.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  buttons.forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const pullX = (deltaX / rect.width) * 16;
      const pullY = (deltaY / rect.height) * 12;
      btn.style.transform = `translate(${pullX.toFixed(2)}px, ${pullY.toFixed(2)}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0px, 0px)';
    });
  });
}
