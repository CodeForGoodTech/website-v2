import fs from 'fs';
import path from 'path';

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

const allFiles = walk('./src');
allFiles.push('./public/c4gt_projects_2024_detailed.xlsx'); // if we want to check it, but xlsx is binary. Let's skip xlsx for regex.

const urlRegex = /https?:\/\/(www\.)?(codeforgoodtech\.in|codeforgovtech\.in)[^"'\s\)]+/gi;
const uniqueUrls = new Set();
const fileMap = {};

allFiles.forEach(file => {
  if (file.endsWith('.xlsx')) return; // Skip binary
  const content = fs.readFileSync(file, 'utf-8');
  const matches = content.match(urlRegex);
  if (matches) {
    matches.forEach(match => {
      uniqueUrls.add(match);
      if (!fileMap[file]) fileMap[file] = new Set();
      fileMap[file].add(match);
    });
  }
});

console.log('Unique URLs found:');
Array.from(uniqueUrls).forEach(url => console.log(url));

console.log('\nFiles to modify:');
Object.keys(fileMap).forEach(file => {
  console.log(`- ${file} (${fileMap[file].size} unique URLs)`);
});
