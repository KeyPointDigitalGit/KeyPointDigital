const fs = require("fs");
const path = require("path");

// CARTELLE
const INPUT = "./input";
const OUTPUT_APP = "./src/app";
const OUTPUT_COMPONENTS = "./src/app/components";
const OUTPUT_PAGES = "./src/app/pages";
const OUTPUT_ASSETS = "./src/assets/images";

// UTILS
function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function readFile(file) {
  return fs.readFileSync(path.join(INPUT, file), "utf8");
}

function extract(html, tag) {
  const regex = new RegExp(`<${tag}[\\s\\S]*?<\\/${tag}>`);
  return html.match(regex)?.[0] || "";
}

function extractDiv(html, className) {
  const regex = new RegExp(`<div class="${className}"[\\s\\S]*?<\\/div>`);
  return html.match(regex)?.[0] || "";
}

function cleanCSS(css) {
  return css
    .replace(/@media[\s\S]*?}/g, "")
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .trim();
}

// ⚠️ Template TS generico per componenti standalone semplici
function createStandaloneTs(name, className) {
  return `
import { Component } from '@angular/core';

@Component({
  selector: 'app-${name}',
  standalone: true,
  templateUrl: './${name}.component.html',
  styleUrls: ['./${name}.component.css'],
  imports: []
})
export class ${className} {}
`;
}

function createComponent(baseDir, name, html, css = "", customTs = null) {
  const dir = path.join(baseDir, name);
  ensureDir(dir);

  const className = name
    .split("-")
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))
    .join("") + "Component";

  fs.writeFileSync(path.join(dir, `${name}.component.html`), html);
  fs.writeFileSync(path.join(dir, `${name}.component.css`), cleanCSS(css));

  const ts = customTs || createStandaloneTs(name, className);

  fs.writeFileSync(path.join(dir, `${name}.component.ts`), ts);

  console.log("✔ Componente creato:", name);

  return { name, className };
}

function copyImages() {
  ensureDir(OUTPUT_ASSETS);
  const imgDir = path.join(INPUT, "images");
  if (!fs.existsSync(imgDir)) return;

  const files = fs.readdirSync(imgDir);
  files.forEach(f => {
    fs.copyFileSync(path.join(imgDir, f), path.join(OUTPUT_ASSETS, f));
  });

  console.log("✔ Immagini copiate");
}

function generateRouting(pages) {
  const imports = pages
    .map(
      p =>
        `import { ${p.className} } from './pages/${p.name}/${p.name}.component';`
    )
    .join("\n");

  const routes = pages
    .map(p => `  { path: '${p.route}', component: ${p.className} },`)
    .join("\n");

  const routing = `
import { Routes } from '@angular/router';
${imports}

export const routes: Routes = [
${routes}
];
`;

  fs.writeFileSync("./src/app/app.routes.ts", routing);
  console.log("✔ Routing standalone aggiornato");
}

// GENERATORE PRINCIPALE
function generate() {
  ensureDir(OUTPUT_COMPONENTS);
  ensureDir(OUTPUT_PAGES);

  const files = fs.readdirSync(INPUT).filter(f => f.endsWith(".html"));

  if (!files.includes("index.html")) {
    console.error("❌ Manca index.html nella cartella /input");
    process.exit(1);
  }

  // Usa index.html come base per CSS e componenti globali
  const indexHtml = readFile("index.html");
  const globalCSS = indexHtml.match(/<style>([\s\S]*?)<\/style>/)?.[1] || "";

  // NAVBAR
  createComponent(
    OUTPUT_COMPONENTS,
    "navbar",
    extract(indexHtml, "header"),
    globalCSS
  );

  // FOOTER
  createComponent(
    OUTPUT_COMPONENTS,
    "footer",
    extract(indexHtml, "footer"),
    globalCSS
  );

  // CHAT WIDGET
  createComponent(
    OUTPUT_COMPONENTS,
    "chat-widget",
    extractDiv(indexHtml, "chat-float"),
    globalCSS
  );

  // CARD (standalone con NgFor)
  const cardTs = `
import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  imports: [NgFor]
})
export class CardComponent {
  @Input() icon = '';
  @Input() title = '';
  @Input() items: string[] = [];
}
`;
  createComponent(
    OUTPUT_COMPONENTS,
    "card",
    `<div class="card">
  <img class="card-icon" [src]="icon" alt="">
  <h3>{{ title }}</h3>
  <ul>
    <li *ngFor="let item of items">{{ item }}</li>
  </ul>
</div>`,
    "",
    cardTs
  );

  // PAGINE
  const pages = [];

  files.forEach(file => {
    const rawName = file.replace(".html", "").toLowerCase();
    const html = readFile(file);

    const pageHtml = extractDiv(html, "page");
    const pageCSS = globalCSS;

    const pageName = rawName === "index" ? "home" : rawName;

    const { className } = createComponent(
      OUTPUT_PAGES,
      pageName,
      pageHtml,
      pageCSS
    );

    pages.push({
      name: pageName,
      className,
      route: pageName === "home" ? "" : pageName
    });
  });

  generateRouting(pages);
  copyImages();
}

generate();
