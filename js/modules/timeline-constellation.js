/**
 * Timeline Constellation SVG Connections & Replaying Scroll Reveal Module
 */
export function initTimelineConstellation() {
  const container = document.getElementById('timelineContainer');
  const svg = document.getElementById('constellationSvg');
  const moments = document.querySelectorAll('.moment');
  if (!container || !svg || moments.length < 2) return;

  const lineLengths = [0, 0, 0];

  function updateLineCoords() {
    const paths = [
      document.getElementById('constellationPath1'),
      document.getElementById('constellationPath2'),
      document.getElementById('constellationPath3')
    ];

    for (let i = 0; i < moments.length - 1; i++) {
      const curRing = moments[i].querySelector('.moment-ring');
      const nextRing = moments[i + 1].querySelector('.moment-ring');
      const path = paths[i];
      if (!curRing || !nextRing || !path) continue;

      const curRect = curRing.getBoundingClientRect();
      const nextRect = nextRing.getBoundingClientRect();
      const contRect = container.getBoundingClientRect();

      const x1 = (curRect.left - contRect.left) + curRect.width / 2;
      const y1 = (curRect.bottom - contRect.top) + 4;
      const x2 = (nextRect.left - contRect.left) + nextRect.width / 2;
      const y2 = (nextRect.top - contRect.top) - 4;

      const cx = 18;
      path.setAttribute(
        'd',
        `M ${x1} ${y1} C ${x1 + cx} ${y1 + (y2 - y1) * 0.35}, ${x2 - cx} ${y1 + (y2 - y1) * 0.65}, ${x2} ${y2}`
      );

      const len = path.getTotalLength ? path.getTotalLength() : 300;
      lineLengths[i] = len;
      path.style.strokeDasharray = len;
      if (!path.classList.contains('drawn')) {
        path.style.strokeDashoffset = len;
      }
    }
  }

  updateLineCoords();
  window.addEventListener('resize', updateLineCoords);

  if (!('IntersectionObserver' in window)) return;

  // 1. Constellation connector line drawing/undrawing on scroll entry/exit
  const momentObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const idx = parseInt(entry.target.getAttribute('data-node'), 10);
      const path = idx > 1 ? document.getElementById(`constellationPath${idx - 1}`) : null;

      if (entry.isIntersecting) {
        if (path) {
          path.classList.add('drawn');
          path.style.strokeDashoffset = '0';
        }
      } else {
        if (path) {
          const len = lineLengths[idx - 2] || 300;
          path.classList.remove('drawn');
          path.style.strokeDashoffset = len;
        }
      }
    });
  }, { threshold: 0.25 });

  moments.forEach((m) => momentObserver.observe(m));

  // 2. Timeline nodes reveal replay on every scroll pass
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
      } else {
        entry.target.classList.remove('in');
      }
    });
  }, { threshold: 0.15 });

  moments.forEach((m) => {
    m.setAttribute('data-timeline-item', '1');
    timelineObserver.observe(m);
  });
}
