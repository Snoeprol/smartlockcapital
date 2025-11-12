const fs = require('fs');
const path = require('path');

// Create a simple ETH diamond SVG favicon
const ethFaviconSVG = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" fill="#000000"/>
  <path d="M16 4L20 12L16 16L12 12L16 4Z" fill="#627EEA"/>
  <path d="M12 12L16 16L12 20L8 16L12 12Z" fill="#627EEA"/>
  <path d="M20 12L16 16L20 20L24 16L20 12Z" fill="#627EEA"/>
  <path d="M16 16L20 20L16 24L12 20L16 16Z" fill="#627EEA"/>
  <path d="M16 16L12 12L8 16L12 20L16 16Z" fill="#627EEA" opacity="0.8"/>
  <path d="M16 16L20 12L24 16L20 20L16 16Z" fill="#627EEA" opacity="0.8"/>
  <path d="M16 16L12 20L16 24L20 20L16 16Z" fill="#627EEA" opacity="0.6"/>
</svg>`;

// Write to app directory (Next.js 13+ uses app/icon.svg)
const appIconPath = path.join(__dirname, '../app/icon.svg');
fs.writeFileSync(appIconPath, ethFaviconSVG);
console.log('✓ Created app/icon.svg');

// Create apple-icon.svg (Next.js supports SVG for apple icons)
const appleIconSVG = `<svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="180" height="180" fill="#000000"/>
  <path d="M90 20L112.5 67.5L90 90L67.5 67.5L90 20Z" fill="#627EEA"/>
  <path d="M67.5 67.5L90 90L67.5 112.5L45 90L67.5 67.5Z" fill="#627EEA"/>
  <path d="M112.5 67.5L90 90L112.5 112.5L135 90L112.5 67.5Z" fill="#627EEA"/>
  <path d="M90 90L112.5 112.5L90 135L67.5 112.5L90 90Z" fill="#627EEA"/>
  <path d="M90 90L67.5 67.5L45 90L67.5 112.5L90 90Z" fill="#627EEA" opacity="0.8"/>
  <path d="M90 90L112.5 67.5L135 90L112.5 112.5L90 90Z" fill="#627EEA" opacity="0.8"/>
  <path d="M90 90L67.5 112.5L90 135L112.5 112.5L90 90Z" fill="#627EEA" opacity="0.6"/>
</svg>`;

const appleIconPath = path.join(__dirname, '../app/apple-icon.svg');
fs.writeFileSync(appleIconPath, appleIconSVG);
console.log('✓ Created app/apple-icon.svg');

console.log('✓ Favicon files created successfully!');

