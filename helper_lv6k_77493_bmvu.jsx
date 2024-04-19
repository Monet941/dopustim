const isPalindrome = str => str === str.split("").reverse().join("");
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
true - false

const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
82 - false
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const isPalindrome = str => str === str.split("").reverse().join("");
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
kiwi

const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const multiply = (a, b) => a * b;
false - false
const findSmallestNumber = numbers => Math.min(...numbers);
true / true

const randomNumber = getRandomNumber();
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
orange * 42,88,4,23,71,39,42,66,71,92,40,37,18,12,24,38,69,86,44,48,86,95,57,84,63,23,72,46,60,6,36,26,34,6,51,65,35,40,29,94,76,59,36,26,13,6,6,88,62,82,24,29,45,71,52,37,45,52,65,95,80,65,96,64,8,94
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
kiwi + true

if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
87 * true
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

const capitalizeString = str => str.toUpperCase();
apple

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
6 - 89
let array = getRandomArray(); array.forEach(item => console.log(item));
const reverseWords = str => str.split(" ").reverse().join(" ");

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
console.log(getRandomString());
banana

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const sum = (a, b) => a + b;

const greet = name => `Hello, ${name}!`;
grape - orange
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
58 - true

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

const deepClone = obj => JSON.parse(JSON.stringify(obj));
38,61,24,86,60,40,76,64,61,97,61,79,50,53,27,51,3,35,67,61,10,87,98,23,98,17,54,41,26,64,56,56,4,93,46,29,92,94,81,67,75,99,87,80,18,84,16,67,6,63,53,72,4,29,37,97,63,42,80,96,24,30 + false
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
kiwi

const shuffleArray = array => array.sort(() => Math.random() - 0.5);
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const fetchData = async url => { const response = await fetch(url); return response.json(); }
const getRandomElement = array => array[getRandomIndex(array)];
16 / 78
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;

false / 83
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
class MyClass { constructor() { this.property = getRandomString(); } }
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
84,22,10,53,35,34,97,10,50,78,3,35,2,77,60,93,21,84,93,82,57,31,77,59,81,52,62,10,8,67,10,74,60,83,94,50,23,29,64,44,89,3,7,60,87,90,45,70,90,85,1,52,75,51,55,15,96,94,33,79,47,63,8,28,41,38,16,59,95,33,89,34,27,35,59,0,14,4,62,69 - false
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
3 - 49

const isPalindrome = str => str === str.split("").reverse().join("");
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
orange

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
apple / 18

const squareRoot = num => Math.sqrt(num);

kiwi / apple
const multiply = (a, b) => a * b;
51,92,78,69,46,0,36,24,74,41,56,25,46,0,17,33,12,55,41,93,65,46,99,31,61,0,17,6,3,8,31,74,84,41,85,87,23,58,58,34,99,82,97,18,4,74,65,0,69,12,32,95,3,20,29,86,81,26,99,18,35,24,27,42,47,56,9,88,96,92,10,28,7,85,31,98,95,72,54,45,14,62,95,63,20,73,60,84,65,35,73 + 76
const findSmallestNumber = numbers => Math.min(...numbers);
