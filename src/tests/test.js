import scrambled, { tlds } from 'puppyscrambled';
import { ShellShockersProxyList } from 'puppyscrambled/lists';

// basic random values

const email = scrambled.getRandomEmail();
const simpleEmail = scrambled.getRandomEmail(true);
const password = scrambled.getRandomPassword();

console.log('email:', email);
console.log('simple email:', simpleEmail);
console.log('password:', password);

// usernames and names

const name1 = scrambled.getRandomName();
const name2 = scrambled.getRandomName(true); // more randomness

console.log('name:', name1);
console.log('name (randomised):', name2);

// headers and user agents

// generates an object with a random User-Agent
const headers = scrambled.getRandomOrigin();

console.log(headers);

// you can merge your own headers in
const headersWithExtras = scrambled.getRandomOrigin({
    'Accept-Language': 'en-GB,en;q=0.9'
});

console.log(headersWithExtras);

// domains, providers, terms

const domain = scrambled.getRandomDomain();
const provider = scrambled.getRandomProvider();
const term = scrambled.getRandomTerm();

console.log('domain:', domain);
console.log('provider:', provider);
console.log('term:', term);

// readable string mutations
// useful for making variants that still look human

const base = 'onlypuppy7';
const variants = scrambled.generateReadableVariants(base, 6);

console.log('base:', base);
console.log('variants:', variants);

// math helpers are attached to scrambled too

const vec2 = { x: 5, y: 12 };
scrambled.normalize2(vec2); // normalises in place

console.log('normalised vec2:', vec2);

// random helpers

const randInt = scrambled.getRandomInt(10, 20);
const randBool = scrambled.getRandomBool();
const randChar = scrambled.getRandomChar();
const randCode = scrambled.getRandomCode(10);

console.log('random int:', randInt);
console.log('random bool:', randBool);
console.log('random char:', randChar);
console.log('random code:', randCode);

// seeded randomness
// same seed gives repeatable output

scrambled.seed = 12345;

const seeded1 = scrambled.seededRandomAlphaNumeric(12, 12345);
const seeded2 = scrambled.seededRandomAlphaNumeric(12, 12345);

console.log('seeded 1:', seeded1);
console.log('seeded 2:', seeded2); // same output as seeded1

console.log(ShellShockersProxyList.length, 'proxy domains available');