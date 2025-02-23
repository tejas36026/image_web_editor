const { applyEffect, getEffectValue, effects } = require('../src/index');

test('effects array contains expected effects', () => {
  expect(effects).toContain('brightness');
  expect(effects).toContain('hue');
  // Add more effect checks
});