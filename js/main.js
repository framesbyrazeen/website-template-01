/**
 * Main Application Entry Point
 * Orchestrates configuration loading and feature modules.
 */

import { initAmbientMotes } from './modules/ambient-motes.js';
import { initScrollReveal } from './modules/scroll-reveal.js';
import { initTemperatureShift } from './modules/temperature-shift.js';
import { initTimelineConstellation } from './modules/timeline-constellation.js';
import { initMagneticButtons } from './modules/magnetic-buttons.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize ambient drifting particles
  initAmbientMotes('ambientBackdrop');

  // 2. Initialize depth-of-field rack-focus reveal observer
  initScrollReveal();

  // 3. Initialize background temperature shift per section
  initTemperatureShift();

  // 4. Initialize constellation SVG lines & replaying timeline reveal
  initTimelineConstellation();

  // 5. Initialize magnetic interactive buttons
  initMagneticButtons('.magnetic-btn');
});
