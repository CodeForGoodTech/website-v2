import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream/promises';
import { createWriteStream } from 'fs';
import xlsx from 'xlsx';

const EXTERNAL_ASSETS_DIR = './public/assets/external';
const PROFILES_DIR = './public/assets/profiles';

if (!fs.existsSync(EXTERNAL_ASSETS_DIR)) {
  fs.mkdirSync(EXTERNAL_ASSETS_DIR, { recursive: true });
}
if (!fs.existsSync(PROFILES_DIR)) {
  fs.mkdirSync(PROFILES_DIR, { recursive: true });
}

// Ensure unique names
const usedNames = new Set();
function getUniqueFilename(basename) {
  let name = basename;
  let counter = 1;
  while (usedNames.has(name)) {
    const ext = path.extname(basename);
    const base = path.basename(basename, ext);
    name = `${base}_${counter}${ext}`;
    counter++;
  }
  usedNames.add(name);
  return name;
}

async function downloadAsset(url, destPath) {
  console.log(`Downloading: ${url}`);
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Status ${response.status}`);
    
    // Convert Web ReadableStream to Node Readable
    const nodeStream = fs.createWriteStream(destPath);
    await pipeline(response.body, nodeStream);
    console.log(`Saved: ${destPath}`);
    return true;
  } catch (err) {
    console.error(`Failed to download ${url}: ${err.message}`);
    return false;
  }
}

function walk(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (!['node_modules', 'dist', '.git'].includes(file)) {
        walk(filePath, fileList);
      }
    } else {
      if (/\.(jsx?|tsx?|css|json)$/.test(file)) {
        fileList.push(filePath);
      }
    }
  }
  return fileList;
}

const urlRegex = /https?:\/\/(www\.)?(codeforgoodtech\.in|codeforgovtech\.in)[^"'\s\)]+\.(png|jpe?g|webp|svg|pdf|mp4|gif)/gi;

async function processSourceFiles() {
  const allFiles = walk('./src');
  let totalDownloads = 0;

  for (const file of allFiles) {
    let content = fs.readFileSync(file, 'utf-8');
    const matches = content.match(urlRegex);
    if (matches) {
      // Deduplicate URLs in this file
      const uniqueUrls = [...new Set(matches)];
      for (const url of uniqueUrls) {
        // Only http/https
        if (!url.startsWith('http')) continue;
        
        let basename = url.split('/').pop().split('?')[0];
        // Clean up basename (sometimes contains weird chars if matched poorly)
        basename = decodeURIComponent(basename);
        
        const uniqueName = getUniqueFilename(basename);
        const destPath = path.join(EXTERNAL_ASSETS_DIR, uniqueName);
        
        const success = await downloadAsset(url, destPath);
        if (success) {
          totalDownloads++;
          // Replace all occurrences of this URL in the file
          const replaceRegex = new RegExp(url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
          content = content.replace(replaceRegex, `/assets/external/${uniqueName}`);
        }
      }
      fs.writeFileSync(file, content, 'utf-8');
    }
  }
  console.log(`Finished processing source files. Downloaded ${totalDownloads} assets.`);
}

async function processExcel() {
  const excelPath = './public/c4gt_projects_2024_detailed.xlsx';
  if (!fs.existsSync(excelPath)) {
    console.log('Excel file not found, skipping.');
    return;
  }
  const workbook = xlsx.readFile(excelPath);
  const sheetName = workbook.SheetNames[0];
  const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
  
  let totalDownloads = 0;

  for (const row of data) {
    for (const key of Object.keys(row)) {
      const val = row[key];
      if (typeof val === 'string') {
        const matches = val.match(urlRegex);
        if (matches) {
          for (const url of matches) {
            if (!url.startsWith('http')) continue;

            let basename = url.split('/').pop().split('?')[0];
            basename = decodeURIComponent(basename);
            
            const uniqueName = getUniqueFilename(basename);
            const destPath = path.join(PROFILES_DIR, uniqueName);
            
            const success = await downloadAsset(url, destPath);
            if (success) {
              totalDownloads++;
              // update excel string
              row[key] = row[key].replace(url, `/assets/profiles/${uniqueName}`);
            }
          }
        }
      }
    }
  }
  
  // Write back Excel
  const newSheet = xlsx.utils.json_to_sheet(data);
  workbook.Sheets[sheetName] = newSheet;
  xlsx.writeFile(workbook, excelPath);
  console.log(`Finished processing Excel file. Downloaded ${totalDownloads} profile assets.`);
}

async function main() {
  await processSourceFiles();
  await processExcel();
  console.log('All done!');
}

main();
