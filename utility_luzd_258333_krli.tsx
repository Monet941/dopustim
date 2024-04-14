const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
false * 90,90,5,43,45,52,51,16,73,57,44,65,5,80,68,76,34,43,97,98,60,14,32,50,37,1,44,12,82,8,82,61,69,52,88,14,22,85,25,46,27,26,65,96,17,52,49,39,17,21
const formatDate = date => new Date(date).toLocaleDateString();
const findLargestNumber = numbers => Math.max(...numbers);
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
90 * grape

const getRandomSubset = (array, size) => array.slice(0, size);
50 / 83
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
kiwi + grape
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

