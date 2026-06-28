import fs from 'fs';
import * as XLSX from 'xlsx';

// A script to extract all project card data from the live HTML content and compare it with the local Excel sheet
function cleanText(text) {
  if (!text) return "";
  return text.toLowerCase().trim().replace(/[\s\u200b]+/g, ' ');
}

function extractLiveCards() {
  const filePath = '/Users/praveenkumarpalaboyina/.gemini/antigravity-ide/brain/efbda837-2a1b-4318-a19b-69727f7efc04/.system_generated/steps/170/content.md';
  const html = fs.readFileSync(filePath, 'utf-8');

  // Let's find all project card containers in the WordPress HTML
  // On the live WordPress site, the cards have structures with elements like contributor-name, mentor-name, track, organization, etc.
  // Let's examine the structure of the cards from the HTML file.
  // Wait, let's search for "Contributor Name" or "Mentor Name" in the content.
  // Let's write a regex that matches cards or card structures.
  
  // Let's log some sample text from the HTML file to see the structure of a card on the live site.
  const lines = html.split('\n');
  const cardLines = lines.filter(l => l.includes('Contributor Name') || l.includes('Mentor Name') || l.includes('completed-project/'));
  console.log("Found card-like lines count:", cardLines.length);
  // Let's extract urls
  const urls = [];
  const urlRegex = /href="https:\/\/codeforgoodtech\.in\/completed-project\/([^"/]+)\/?"/g;
  let match;
  while ((match = urlRegex.exec(html)) !== null) {
    if (!urls.includes(match[1])) {
      urls.push(match[1]);
    }
  }
  return urls;
}

function compare() {
  const liveSlugs = extractLiveCards();
  console.log("Live Slugs in list page:", liveSlugs.length);

  const excelPath = '/Users/praveenkumarpalaboyina/Desktop/website-v2/public/c4gt_projects_2024_detailed.xlsx';
  const buf = fs.readFileSync(excelPath);
  const workbook = XLSX.read(buf, { type: 'buffer' });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const excelRows = XLSX.utils.sheet_to_json(sheet);
  
  const excelSlugs = excelRows.map(row => {
    const url = row["Project URL"] || "";
    return url.split('/').filter(Boolean).pop();
  }).filter(Boolean);

  console.log("Excel Slugs count:", excelSlugs.length);

  // Check mismatch
  const missingInExcel = liveSlugs.filter(slug => !excelSlugs.includes(slug));
  const extraInExcel = excelSlugs.filter(slug => !liveSlugs.includes(slug));

  console.log("\n--- Comparison Results ---");
  console.log("Missing in Excel:", missingInExcel);
  console.log("Extra in Excel (not on live projects page):", extraInExcel);
}

compare();
