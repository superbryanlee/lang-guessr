import {franc, francAll} from 'franc';
import langs from 'langs';
import colors from 'colors';

// Remove first two arguments
const args = process.argv.slice(2);

// Extract text to be analyzed:
const text = args[0];

// Pass text to franc and return String representing language code;
// NOTE: langCode returned in ISO 639-3 format
const langCode = franc(text);

console.log("Let's see...")

// If not und, pass language code to langs and print to console:
if (langCode === 'und') {
    console.log("Undeterminable. Sorry! May require more text.".red);
} else {
    try {
        const langObject = langs.where("3", langCode);
        console.log("Our guess is: " + langObject.name.blue);
    } catch(e) {
        console.log("Undeterminable. Sorry! May require more text.".red);
    }
}














