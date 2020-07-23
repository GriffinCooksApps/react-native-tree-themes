const { StatusBarIOS } = require("react-native");
const { buildTheme } = require("../../manager/themeBuilder");
const { defaultTheme } = require("../../themes/defaultTheme.js");


const results = buildTheme(defaultTheme);

console.println(results);