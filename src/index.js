//modified from statefarm bot toolkit :trollage:
import { username_terms, ShellShockersProxyList, tlds, userAgentList, charactersAll, emailProviders, charactersLowerUpperNumber, similarChars } from './lists.js';

function extendMath (passedMath = Math) {
    passedMath.mod = function (n, m) {
        var remain = n % m;
        return 0 <= remain ? remain : remain + m
    };
    passedMath.length2 = function (x, y) {
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
    };
    passedMath.length3 = function (x, y, z) {
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2))
    };
    passedMath.capVector2 = function (vec, len) {
        var l = passedMath.length2(vec.x, vec.y);
        return len < l && (vec.x *= len / l, vec.y *= len / l), vec
    };
    passedMath.capVector3 = function (vec, len) {
        var l = passedMath.length3(vec.x, vec.y, vec.z);
        return len < l && (vec.x *= len / l, vec.y *= len / l, vec.z *= len / l), vec
    };
    passedMath.normalize2 = function (vec, len) {
        len = len || 1;
        var l = passedMath.length2(vec.x, vec.y);
        return vec.x *= len / l, vec.y *= len / l, vec
    };
    passedMath.normalize3 = function (vec, len) {
        len = len || 1;
        var l = passedMath.length3(vec.x, vec.y, vec.z);
        return vec.x *= len / l, vec.y *= len / l, vec.z *= len / l, vec
    };
    passedMath.clamp = function (v, min, max) {
        return Math.max(Math.min(v, max), min)
    };
    passedMath.randomInt = function (low, high) {
        return Math.floor(Math.random() * (high - low) + low)
    };
    passedMath.seededRandom = function (min, max) {
        return min = min || 0, max = max || 1, passedMath.seed = (9301 * passedMath.seed + 49297) % 233280, min + passedMath.seed / 233280 * (max - min)
    };
    passedMath.seededRandomInt = function (min, max) {
        return Math.floor(passedMath.seededRandom(min, max))
    };
    passedMath.diff = function (a, b, threshold) {
        return b < a ? threshold - a + b : b - a;
    };
    passedMath.shuffleArray = function (array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        };
        return array;
    };
    passedMath.seededShuffleArray = function (array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = passedMath.seededRandomInt(0, i);
            [array[i], array[j]] = [array[j], array[i]];
        };
        return array;
    };
    
    //scrambled functions from sfbt
    passedMath.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    passedMath.getRandomChance = function (chance) {
        return (Math.random() <= chance);
    };
    passedMath.seededRandomChance = function (chance) {
        return (passedMath.seededRandom(0, 1) <= chance);
    };

    passedMath.getRandomChar = function () {
        return passedMath.getRandomFromList(charactersLowerUpperNumber.split(''));
    };
    
    passedMath.getRandomCode = function (long) {
        long = long || 7;
        const characters = charactersLowerUpperNumber;
        return Array.from({ length: long }, () => passedMath.getRandomFromList(characters.split(''))).join('');
    };
    
    passedMath.getScrambled = function (min, max) {
        min = min || 6;
        max = max || 12;
        return Array.from({ length: passedMath.getRandomInt(min, max) }, () => passedMath.getRandomChar()).join('');
    };

    passedMath.getRandomBool = function () {
        return Math.random() < 0.5;;
    };
    
    passedMath.getRandomName = function (moreRandom) {
        var name, num;
        var n1 = ["Captain", "Lord", "Supreme", "Master", "Pro", "Noob"];
        var n2 = ["Egg", "Yolk", "Shell", "Cluck", "Chick", "Bird"];
        do {
            num = passedMath.getRandomInt(1, 99);
        } while (num == 69);
        if (passedMath.getRandomInt(0, 2) == 0) {
            name = n1[passedMath.getRandomInt(0, n1.length - 1)] + (passedMath.getRandomBool() && moreRandom ? " " : "") + n2[passedMath.getRandomInt(0, n2.length - 1)] + (passedMath.getRandomBool() && moreRandom ? " " : "") + (passedMath.getRandomBool() && moreRandom ? " " : num);
        } else {
            name = n2[passedMath.getRandomInt(0, n2.length - 1)] + (passedMath.getRandomBool() && moreRandom ? " " : "") + n1[passedMath.getRandomInt(0, n1.length - 1)] + (passedMath.getRandomBool() && moreRandom ? " " : "") + (passedMath.getRandomBool() && moreRandom ? " " : num);
        };
        if (passedMath.getRandomBool() && moreRandom) name = name.toLowerCase();
        return name;
    };

    passedMath.getRandomFromList = function (list) {
        return list[passedMath.getRandomInt(0, list.length - 1)];
    };
    passedMath.seededRandomFromList = function (list) {
        return list[passedMath.seededRandomInt(0, list.length - 1)];
    };
    passedMath.seededRandomAlphaNumeric = function (count, uuid) {
        passedMath.seed = uuid;

        const charTypes = [
            { min: 65, max: 90 },  // A-Z
            { min: 97, max: 122 }, // a-z
            { min: 48, max: 57 },  // 0-9
        ];
        let result = '';
    
        for (let i = 0; i < count; i++) {
            const randomType = passedMath.getRandomFromList(charTypes);
            const randomCode = passedMath.seededRandomInt(randomType.min, randomType.max);
            result += String.fromCharCode(randomCode);
        };
    
        return result;
    };
    passedMath.getRandomAsciiChars = function (count) {
        const charTypes = [
            { min: 65, max: 90 },  // A-Z
            { min: 97, max: 122 }, // a-z
            { min: 48, max: 57 },  // 0-9
            { min: 33, max: 47 },  // !-/
            { min: 58, max: 64 },  // :-@
            { min: 91, max: 96 },  // [-`
            { min: 123, max: 126 },// {-~
        ];
        let result = '';
    
        for (let i = 0; i < count; i++) {
            const randomType = passedMath.getRandomFromList(charTypes);
            const randomCode = passedMath.getRandomInt(randomType.min, randomType.max);
            result += String.fromCharCode(randomCode);
        };
    
        return result;
    };
};

export const scrambled = {
    getRandomDomain: function() {
        return scrambled.getRandomFromList(ShellShockersProxyList);
    },

    getRandomOrigin: function(additionalHeaders = {}) {
        let headers = {
            "User-Agent": scrambled.getRandomFromList(userAgentList)
        };
        Object.assign(headers, additionalHeaders);
        return headers;
    },

    getRandomTLD: function () {
        return scrambled.getRandomFromList(tlds);
    },

    getRandomProvider: function () {
        return scrambled.getRandomFromList(emailProviders);
    },
    
    getRandomTerm: function () {
        return scrambled.getRandomFromList(username_terms);
    },
    
    getRandomEmail: function (simple) {
        if (simple) return scrambled.getScrambled(1, 2) + "@" + scrambled.getScrambled() + scrambled.getRandomTLD();
        else {
            let word1 = scrambled.getRandomTerm();
            let word2 = scrambled.getRandomTerm();
            let numbers = scrambled.getRandomInt(1,99);
            let username = word1 + (scrambled.getRandomBool() ? "_"+word2 : "") + (scrambled.getRandomBool() ? "_"+numbers : numbers);
            let email = username + "@" + scrambled.getRandomProvider();
            return email;
        };
    },

    getRandomPassword: function (min = 6, max = 12) {
        return Array.from({ length: scrambled.getRandomInt(min, max) }, () => scrambled.getRandomFromList(charactersAll)).join('');
    },

    generateReadableVariants: function(input, count = 5) {
        const punctuation = ['.', '_', '-'];

        function mutateChar(c, idx, len) {
            if (/[a-zA-Z0-9]/.test(c) && Math.random() < 0.25 && similarChars[c]) {
                return scrambled.getRandomFromList(similarChars[c]);
            }

            if (Math.random() < 0.05 && idx > 1 && idx < len - 2) {
                return scrambled.getRandomFromList(punctuation);
            }

            return c;
        }

        function insertPunctuation(str) {
            const arr = str.split('');
            for (let i = 1; i < arr.length - 1; i++) {
                if (Math.random() < 0.1 && /[a-zA-Z]/.test(arr[i])) {
                    arr.splice(i, 0, scrambled.getRandomFromList(punctuation));
                    i++;
                }
            }
            return arr.join('');
        }

        function swapOnePair(str) {
            const arr = str.split('');
            const candidates = [];

            for (let i = 1; i < arr.length - 2; i++) {
                if (/[a-zA-Z]/.test(arr[i]) && /[a-zA-Z]/.test(arr[i + 1])) {
                    candidates.push(i);
                }
            }

            if (candidates.length > 0 && Math.random() < 0.8) {
                const i = scrambled.getRandomFromList(candidates);
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }

            return arr.join('');
        }

        function mutate(input) {
            let result = input.split('')
            .map((c, i, arr) => mutateChar(c, i, arr.length))
            .join('');

            result = insertPunctuation(result);
            result = swapOnePair(result);

            return result;
        }

        return Array.from({ length: count }, () => mutate(input));
    },
};

extendMath(Math);
extendMath(scrambled);

export default scrambled;