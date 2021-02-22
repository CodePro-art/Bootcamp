// Complete the method/function so that it converts dash/underscore delimited words into camel
// casing. The first word within the output should be capitalized only if the original word was
// capitalized (known as Upper Camel Case, also often referred to as Pascal case).

const toCamelCase = (str) => str.split(/[-_]/).map(string => string.charAt(0).toUpperCase() + string.slice(1)).join('');


console.log(toCamelCase("Hello_world_my-nam-is_ouet"));