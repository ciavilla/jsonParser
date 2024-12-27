const fs = require("fs");
const input = fs.readFileSync(0, "utf-8");
isValidJson(input);

function isValidJson(input) {
    input = input.trim();
    if (input === "{}") {
        console.log("Valid JSON");
        process.exit(0);
    } else {
        console.log("Invalid JSON");
        process.exit(1);
    }
}
//Tests if key-value pairs , numbers, booleans, and null
function isValidJson(input) {
    input = input.trim();
    const regex = /^\{("[a-zA-Z0-9_]+":\s*(true|false|null|"-?\d+(\.\d+)?(e[+-]?\d+)?|".*?"))(,\s*"[a-zA-Z0-9_]+":\s*(true|false|null|"-?\d+(\.\d+)?(e[+-]?\d+)?|".*?"))*\}$/;

    if (regex.test(input)) {
        console.log("Valid JSON");
        process.exit(0);
    } else {
        console.log("Invalid Json");
        process.exit(1);
    }
}

//Recursive parsing for nested objects and arrays
function isValidJson(input) {
    try {
        JSON.parse(input);
        console.log("Valid JSON");
        process.exit(0);
    } catch (e) {
        console.log("Invalid JSON");
        process.exit(1);
    }
}
