const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    try {
      filelist = fs.statSync(dirFile).isDirectory() ? walkSync(dirFile, filelist) : filelist.concat(dirFile);
    } catch (err) {
      if (err.code === 'ENOENT' || err.code === 'EACCES') return;
    }
  });
  return filelist;
};

const files = walkSync('./src').filter(f => f.endsWith('.tsx') || f.endsWith('.ts') || f.endsWith('.css') || f.endsWith('.html'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace colors
  content = content
    .replace(/cyan/g, 'blue')
    .replace(/purple/g, 'slate') // use slate instead of purple for a more professional look
    .replace(/fuchsia/g, 'slate')
    .replace(/#030712/g, '#020617') // slate-950
    .replace(/#38bdf8/g, '#3b82f6') // cyan-400 to blue-500
    .replace(/#c084fc/g, '#94a3b8'); // purple-400 to slate-400
    
  fs.writeFileSync(file, content, 'utf8');
});

console.log('Replaced colors.');
