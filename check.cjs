const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'dist'),html=fs.readFileSync(path.join(root,'index.html'),'utf8'),css=fs.readFileSync(path.join(root,'style.css'),'utf8');
for(const ref of [...html.matchAll(/(?:src|href)="(assets\/[^"#]+|style\.css|app\.js)"/g)].map(m=>m[1]))assert(fs.existsSync(path.join(root,ref)),ref+' missing');
for(const ref of [...css.matchAll(/url\(['"]?(assets\/[^'"\)]+)['"]?\)/g)].map(m=>m[1]))assert(fs.existsSync(path.join(root,ref)),ref+' missing');
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(new Set(ids).size,ids.length,'duplicate IDs');
for(const m of html.matchAll(/href="#([^"]+)"/g))assert(ids.includes(m[1]),'broken anchor '+m[1]);
assert.equal((html.match(/data-animal=/g)||[]).length,4);assert(html.includes('확장 후보'));assert(html.includes('출시일 및 지원 플랫폼 미정'));
new Function(fs.readFileSync(path.join(root,'app.js'),'utf8'));
console.log('PASS: asset references, unique IDs, anchors, 4 animals, development disclosures, JS syntax');
