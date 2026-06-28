import xlsx from 'xlsx';

const workbook = xlsx.readFile('./public/c4gt_projects_2024_detailed.xlsx');
const sheetName = workbook.SheetNames[0];
const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

const uniqueUrls = new Set();
const urlRegex = /https?:\/\/(www\.)?(codeforgoodtech\.in|codeforgovtech\.in)[^"'\s\)]+/gi;

data.forEach(row => {
  Object.values(row).forEach(val => {
    if (typeof val === 'string') {
      const matches = val.match(urlRegex);
      if (matches) {
        matches.forEach(match => uniqueUrls.add(match));
      }
    }
  });
});

console.log(`Found ${uniqueUrls.size} unique URLs in Excel:`);
Array.from(uniqueUrls).forEach(url => console.log(url));
