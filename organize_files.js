import fs from 'fs';
import path from 'path';

const pagesDir = './src/components/Pages';

const structure = {
  Blogs: [
    'BlogsPage.jsx',
    'AirbyteConnectorJourneyPage.jsx',
    'BecknProtocolContributorPage.jsx',
    'ButIfYouTrySometimesPage.jsx',
    'C4GTHalfwayCheckpointPage.jsx',
    'C4GTJourneyBlog.jsx',
    'ExploringNewHorizonsPage.jsx',
    'GlificSprintPage.jsx',
    'GlificUdaipurSprintPage.jsx',
    'MyExperienceContributingToAITools.jsx',
    'TurboRepoMonorepoPage.jsx',
    'UnlockingOpportunitiesPage.jsx',
    'WarpSQL.jsx'
  ],
  Initiatives: [
    'DMP.jsx',
    'DMP2024.jsx',
    'DMP2024Detailed.jsx',
    'dmp2024projects.jsx',
    'DMP2025.jsx',
    'DMP2026.jsx',
    'C4GTHubs.jsx',
    'CampusLeadersProgram.jsx',
    'community.jsx',
    'Workshops.jsx'
  ],
  About: [
    'AngelMentors.jsx',
    'ContactUs.jsx',
    'contributor.jsx',
    'HowToJoin.jsx'
  ],
  ReportsAndResources: [
    'DPGReport2025.jsx',
    'EventsPage.jsx',
    'ProductDirectory.jsx'
  ]
};

// Create folders and move files
for (const [folder, files] of Object.entries(structure)) {
  const folderPath = path.join(pagesDir, folder);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  for (const file of files) {
    const oldPath = path.join(pagesDir, file);
    const newPath = path.join(folderPath, file);
    
    if (fs.existsSync(oldPath)) {
      fs.renameSync(oldPath, newPath);
      
      // Update relative imports in the moved file
      let content = fs.readFileSync(newPath, 'utf-8');
      
      // Replace `from "../something"` with `from "../../something"`
      // Replace `import "../something"` with `import "../../something"`
      content = content.replace(/(from|import)\s+['"]\.\.\/([^'"]+)['"]/g, '$1 "../../$2"');
      
      fs.writeFileSync(newPath, content, 'utf-8');
    }
  }
}

// Update App.jsx imports
const appPath = './src/App.jsx';
if (fs.existsSync(appPath)) {
  let appContent = fs.readFileSync(appPath, 'utf-8');
  
  for (const [folder, files] of Object.entries(structure)) {
    for (const file of files) {
      const baseName = file.replace('.jsx', '');
      
      // Need to find import statements like: import Something from "./components/Pages/FileName"
      // and replace with "./components/Pages/FolderName/FileName"
      const regex = new RegExp(`(from\\s+['"]\\.\\/components\\/Pages\\/)${baseName}(['"])`, 'g');
      appContent = appContent.replace(regex, `$1${folder}/${baseName}$2`);
    }
  }
  
  fs.writeFileSync(appPath, appContent, 'utf-8');
}

console.log('Files organized and imports updated.');
