/**
 * Ambient Drifting Gold Particles Module
 */
export function initAmbientMotes(containerId = 'ambientBackdrop') {
  const wrap = document.getElementById(containerId);
  if (!wrap) return;

  const count = window.innerWidth < 640 ? 18 : 34;
  for (let i = 0; i < count; i++) {
    const m = document.createElement('div');
    m.className = 'mote';
    const left = Math.random() * 100;
    const dur = 14 + Math.random() * 18;
    const delay = Math.random() * -dur;
    const size = 2 + Math.random() * 2.5;

    m.style.left = left + 'vw';
    m.style.width = size + 'px';
    m.style.height = size + 'px';
    m.style.animationDuration = dur + 's';
    m.style.animationDelay = delay + 's';

    wrap.appendChild(m);
  }
}
