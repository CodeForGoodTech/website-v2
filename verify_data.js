import * as cheerio from 'cheerio';
import xlsx from 'xlsx';

async function verify() {
  try {
    // Read local data
    const workbook = xlsx.readFile('./public/c4gt_projects_2024_detailed.xlsx');
    const sheetName = workbook.SheetNames[0];
    const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
    console.log(`Loaded ${data.length} projects from local Excel.`);

    // Fetch live site
    console.log('Fetching live site...');
    const response = await fetch('https://codeforgoodtech.in/dedicated-mentoring-program-2024-all-projects/');
    const html = await response.text();
    const $ = cheerio.load(html);

    const liveProjects = [];
    $('.elementor-post').each((i, el) => {
      const title = $(el).find('.elementor-post__title a').text().trim();
      const excerpt = $(el).find('.elementor-post__excerpt').text().trim();
      const readMoreLink = $(el).find('.elementor-post__read-more').attr('href');
      
      if (title) {
        liveProjects.push({ title, excerpt, readMoreLink });
      }
    });

    console.log(`Found ${liveProjects.length} projects on the first page of live site.`);

    let matchCount = 0;
    liveProjects.forEach(live => {
      const local = data.find(d => d['Project Name'] && d['Project Name'].trim() === live.title);
      if (local) {
        matchCount++;
      } else {
        console.log(`\nNO LOCAL MATCH FOR: ${live.title}`);
      }
    });

    console.log(`\nMatched ${matchCount} out of ${liveProjects.length} live projects.`);

    // Let's do a more robust comparison of card fields on the live site vs local
    // To see if the UI elements exist in Excel.
    const missingData = data.filter(d => !d['Contributor Name'] || !d['Mentor Name'] || !d['Project URL']);
    console.log(`\nFound ${missingData.length} projects with missing basic info in Excel.`);

  } catch (err) {
    console.error('Error:', err.message);
  }
}

verify();
