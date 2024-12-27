const fs = require("fs");
const { execSync } = require("child_process");

function runTests(folder) {
    const files = fs.readdirSync(folder);
    files.forEach((file) => {
        const filePath = `${folder}/${file}`;
        const input = fs.readFileSync(filePath, "utf-8");

        console.log(`Testing ${file}...`);
        try {
            execSync(`echo '${input}' | node parser.js`);
        } catch {
            console.log(`${file}: Invalid JSON`);
        }
    });
}

runTests("tests/step5");
