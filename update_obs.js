const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'obs.html');
let html = fs.readFileSync(file, 'utf8');

// Replace everything between <style> and </style> with the link to obs.css
// Also handle the case where it might span multiple lines
html = html.replace(/<style>[\s\S]*?<\/style>/, '<link rel="stylesheet" href="obs.css" />');

// Inject the cinematic bars inside scaleRoot
if (!html.includes('cinematic-bar-top')) {
  html = html.replace('<div id="scaleRoot">', '<div id="scaleRoot">\n    <div class="cinematic-bar-top"></div>\n    <div class="letterbox-line-top"></div>\n    <div class="cinematic-bar-bottom"></div>\n    <div class="letterbox-line-bottom"></div>');
}

fs.writeFileSync(file, html, 'utf8');
console.log('Update complete');
