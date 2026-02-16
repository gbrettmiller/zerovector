#!/usr/bin/env node
/**
 * generate-og.js — Creates static OG images (1200x630) for all major pages.
 *
 * Uses inline SVG rendered to PNG via sharp.
 * Run: node scripts/generate-og.js
 * Requires: npm install sharp (dev dependency)
 *
 * Each image follows the visual identity of its section:
 * - Main site: dark bg (#181818), green accent (#00ff88), Space Grotesk
 * - Open Vector: white bg, dark text, green accent
 * - Investiture: deep blue (#0a1628), Kholin gold (#c9a84c)
 */

import sharp from 'sharp';
import { mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, '..', 'public', 'og');

mkdirSync(OUT_DIR, { recursive: true });

// OG image dimensions
const W = 1200;
const H = 630;

function mainSiteSVG(title, subtitle) {
  return `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${W}" height="${H}" fill="#181818"/>
    <rect x="0" y="0" width="${W}" height="4" fill="#00ff88"/>
    <text x="80" y="200" font-family="monospace" font-size="14" fill="#00ff88" letter-spacing="3" text-transform="uppercase">ZERO-VECTOR DESIGN</text>
    <text x="80" y="320" font-family="sans-serif" font-size="64" fill="#ffffff" font-weight="700">${escapeXml(title)}</text>
    ${subtitle ? `<text x="80" y="400" font-family="sans-serif" font-size="24" fill="rgba(255,255,255,0.6)">${escapeXml(subtitle)}</text>` : ''}
    <line x1="80" y1="500" x2="300" y2="500" stroke="#00ff88" stroke-width="2"/>
    <text x="80" y="560" font-family="monospace" font-size="16" fill="rgba(255,255,255,0.4)">zerovector.design</text>
  </svg>`;
}

function openVectorSVG(title, subtitle) {
  return `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${W}" height="${H}" fill="#ffffff"/>
    <rect x="0" y="0" width="${W}" height="4" fill="#00aa44"/>
    <text x="80" y="200" font-family="monospace" font-size="14" fill="#00aa44" letter-spacing="3">THE OPEN VECTOR</text>
    <text x="80" y="320" font-family="sans-serif" font-size="56" fill="#0a0a0a" font-weight="700">${escapeXml(title)}</text>
    ${subtitle ? `<text x="80" y="400" font-family="sans-serif" font-size="22" fill="#666">${escapeXml(subtitle)}</text>` : ''}
    <text x="80" y="560" font-family="monospace" font-size="16" fill="#999">zerovector.design/open</text>
  </svg>`;
}

function investitureSVG(title, subtitle) {
  return `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${W}" height="${H}" fill="#0a1628"/>
    <rect x="0" y="0" width="${W}" height="4" fill="#c9a84c"/>
    <text x="80" y="200" font-family="monospace" font-size="14" fill="#c9a84c" letter-spacing="3">INVESTITURE</text>
    <text x="80" y="320" font-family="sans-serif" font-size="56" fill="#e8e0d0" font-weight="700">${escapeXml(title)}</text>
    ${subtitle ? `<text x="80" y="400" font-family="sans-serif" font-size="22" fill="#8a9ab5">${escapeXml(subtitle)}</text>` : ''}
    <text x="80" y="560" font-family="monospace" font-size="16" fill="rgba(232,224,208,0.4)">zerovector.design/investiture</text>
  </svg>`;
}

function escapeXml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

async function generate(filename, svgContent) {
  const outPath = join(OUT_DIR, filename);
  await sharp(Buffer.from(svgContent)).png().toFile(outPath);
  console.log(`  ✓ ${filename}`);
}

async function main() {
  console.log('Generating OG images...\n');

  // Main site pages
  await generate('manifesto.png', mainSiteSVG('Zero-Vector Design', 'From intent to artifact, directly.'));
  await generate('philosophy.png', mainSiteSVG('Philosophy', 'Seven principles for the age of AI.'));
  await generate('approach.png', mainSiteSVG('The Approach', 'Concept to customer. Every phase reimagined.'));
  await generate('builders.png', mainSiteSVG('For Builders', 'Fall in love with the problem, not the solution.'));
  await generate('leaders.png', mainSiteSVG('For Leaders', 'Transform how your organization builds with AI.'));
  await generate('media.png', mainSiteSVG('Media', 'Articles, talks, and the reading list.'));
  await generate('origin.png', mainSiteSVG('The Origin', '31 years of design. One question.'));
  await generate('start.png', mainSiteSVG('Get Started', 'Learn. Build. Ship.'));
  await generate('quiz.png', mainSiteSVG('Am I Vibe Coding?', 'Take the quiz. Find out.'));
  await generate('name.png', mainSiteSVG('Zero Vector', 'The meaning behind the name.'));

  // Open Vector pages
  await generate('open-vector.png', openVectorSVG('The Open Vector', 'Free curriculum. From apprentice to auteur.'));
  await generate('learn.png', openVectorSVG('Learn', 'The Open Vector learning platform.'));

  // Investiture
  await generate('investiture.png', investitureSVG('Investiture', 'Architecture that teaches your AI to write clean code.'));

  console.log(`\nDone. ${13} images in public/og/`);
}

main().catch(console.error);
