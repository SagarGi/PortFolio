const fs = require('fs');
const { join } = require('path');

if (fs.existsSync('docs')) {
    try {
        fs.writeFileSync(join('docs', 'CNAME'), 'saagargurung.com.np');
        console.info('\n\x1b[32m\x1b[1m[post-build] CNAME created!\x1b[0m\n');
        process.exit(0);
    } catch (e) {
        console.error(`\n\x1b[1m\x1b[31m[post-build] ${e.message}\x1b[0m\n`);
        process.exit(1);
    }
}