// Inferred type: string
let bestSong = Math.random() > 0.5
 ? "Broken"
 : "Respect";
console.log(bestSong);//infering type is string

//Unions
let best = Math.random() > 0.5
 ? undefined
 : "Respect";
console.log(bestSong);//infering type is string | undefined 

let song = Math.random() > 0.5
 ? null
 : "Respect";
console.log(bestSong);//infering type is string | null

let Song = Math.random() > 0.5
 ? 1234
 : "Respect";
console.log(bestSong);//infering type is string | number

let nmae = "Satrangi";
nmae.length;
console.log(nmae);

let thinker: string | null = null;
if (Math.random() > 0.5) {
 thinker = "Susanne Langer"; // Ok
}

// Type of scientist: number | string
let scientist = Math.random() > 0.5
 ? "Rosalind Franklin"
 : 51;
if (scientist === "Rosalind Franklin") {
 // Type of scientist: string
 scientist.toUpperCase(); // Ok
} else {
// Type of scientist: number | string
scientist.toUpperCase();
}
// ~~~~~~~~~~~
// Error: Property 'toUpperCase' does not exist on type 'string | number'.
// Property 'toUpperCase' does not exist on type 'number'.

let scientists = Math.random() > 0.5
 ? "Franklin"
 : 51;
if (scientists === 51) {
 // Type of scientist: number
 scientists.toFixed() // Ok
} else {
// Type of scientist: number | string
scientists.toFixed();
}
// ~~~~~~~~~~~
// Error: Property 'toUpperCase' does not exist on type 'string | number'.
// Property 'toUpperCase' does not exist on type 'string'.

//Narrowing
//string example
let researcher = Math.random() > 0.5
 ? "Rosalind Franklin"
 : 51;
 typeof researcher === "string"
 ? researcher.toUpperCase() // Ok: string
 : researcher.toFixed(); // Ok: number

if (typeof researcher === "string") {
 researcher.toUpperCase(); // Ok: string
}
//Logical negations from ! and else statements work as well:
if (!(typeof researcher === "string")) {
 researcher.toFixed(); // Ok: number
} else {
 researcher.toUpperCase(); // Ok: string
}
console.log(researcher);

//number example
let ans = Math.random() > 0.5
? "Cake"
: 2;
typeof ans === "number"
? ans.toFixed() // ok number
: ans.toUpperCase() //ok string

if(typeof ans === "number") {
    ans.toFixed();
} 
if(! (typeof ans === "number")) {
    ans.toUpperCase();
} 
 else {
    ans.toFixed();
 }
 console.log(ans);
 
 //Literal Types

 const mathematician = "Sadiq Mian";
 //TypeScript reporting a const variable as being specifically its literal type

 let student = "Farhan Mian";
 //TypeScript reporting a let variable as being generally its primitive type

 //Literal Assignbility

 let lifespan: number | "ongoing" | "uncertain";
lifespan = 89; // Ok
lifespan = "ongoing"; // Ok
lifespan = true;
// Error: Type 'true' is not assignable to
// type 'number | "ongoing" | "uncertain"'

let specificallyAda: "Ada";
specificallyAda = "Ada"; // Ok
specificallyAda = "Byron";
// Error: Type '"Byron"' is not assignable to type '"Ada"'.
let someString = ""; // Type: string
specificallyAda = someString;
// Error: Type 'string' is not assignable to type '"Ada"'.

let nameMaybe = Math.random() > 0.5
 ? "Tony Hoare"
 : undefined;
nameMaybe.toLowerCase();
// Potential runtime error: Cannot read property 'toLowerCase' of undefined.

//Truthiness

let geneticist = Math.random() > 0.5
 ? "Barbara McClintock"
 : undefined;
if (geneticist) {
 geneticist.toUpperCase(); // Ok: string
}
geneticist.toUpperCase();
// Error: Object is possibly 'undefined'.
//Logical operators that perform truthiness checking work as well, namely && and ?.:
geneticist && geneticist.toUpperCase(); // Ok: string | undefined
geneticist?.toUpperCase(); // Ok: string | undefined

let biologist = Math.random() > 0.5 && "Rachel Carson";
if (biologist) {
 biologist; // Type: string
} else {
 biologist; // Type: false | string
}

let mathematicians: string;
mathematicians?.length;
// Error: Variable 'mathematician' is used before being assigned.
mathematicians = "Mark Goldberg";
mathematician.length; // Ok

//The previous code snippet wouldn’t emit any errors if the type of mathematician is string | undefined:
let Mathematician: string | undefined;
Mathematician?.length; // Ok
Mathematician = "Mark Goldberg";
Mathematician.length; // Ok

//union type/alias type
type RawData = boolean | number | string | null | undefined;
let a: RawData = true; 
let b: RawData = 10;
let c: RawData = "Sindhi";
let d: RawData = null;
let e: RawData = undefined;

type SomeType = string | undefined;
console.log(SomeType);
// ~~~~~~~~
// Error: 'SomeType' only refers to a type, but is being used as a value here.

//This IdMaybe type is a union of the types within Id as well as undefined and null:
type Id = number | string;
// Equivalent to: number | string | undefined | null
type IdMaybe = Id | undefined | null | boolean;
let aa: IdMaybe = true; 
let bb: IdMaybe = 10;
let cc: IdMaybe = "Sindhi";
let dd: IdMaybe = null;
let ee: IdMaybe = undefined;

//object 

const poet = {
    born: 1935,
    name: "Mary Oliver",
   };
   poet['born']; // Type: number
   poet.name; // Type: string
   poet.end;
   // ~~~
   // Error: Property 'end' does not exist on
   // type '{ born: number; name: string; }'.
   
   //Decalaring Object Types
    
let poetLater: {
 born: number;
 name: string;
};
// Ok
poetLater = {
 born: 1935,
 name: "Mary Oliver",
};
poetLater = "Sappho";
// Error: Type 'string' is not assignable to
// type '{ born: number; name: string; }'

//Type Aliased

type Poet = {
born: number;
name: string;
};
let poetMessage: Poet;
// Ok
poetLater = {
born: 2004,
name: "Farhan",
};
poetMessage = "Alina";
// Error: Type 'string' is not assignable to 'Poet'.

//Structural Typing

type WithFirstName = {
 firstName: string;
};
type WithLastName = {
 lastName: string;
};
const hasBoth = {
 firstName: "Lucille",
 lastName: "Clifton",
};
// Ok: `hasBoth` contains a `firstName` property of type `string`
let withFirstName: WithFirstName = hasBoth;
// Ok: `hasBoth` contains a `lastName` property of type `string`
let withLastName: WithLastName = hasBoth;

//Usage checking

type FirstAndLastNames = {
 first: string;
 last: string;
};
// Ok
const HasBoth: FirstAndLastNames = {
    first: "Sarojini",
    last: "Naidu",
   };
   const HasOnlyOne: FirstAndLastNames = {
    first: "Sappho",
   };
   // Property 'last' is missing in type '{ first: string; }'
   // but required in type 'FirstAndLastNames'.
   
//    Mismatched types between the two are not allowed either. Object types specify both
// the names of required properties and the types those properties are expected to be. If
// an object’s property doesn’t match, TypeScript will report a type error.

type TimeRange = {
 start: Date;
};
const hasStartString: TimeRange = {
 start: "1879-02-13",
 // Error: Type 'string' is not assignable to type 'Date'.
};//????????????????????????????????????????????????????????????????????????????????????

//Excess property checking

property:
type Biodata = {
 born: number;
 name: string;
}
// Ok: all fields match what's expected in Biodata
const poetMatch: Biodata = {
 born: 1928,
 name: "Maya Angelou"
};

const extraProperty: Biodata = {
    activity: "walking",
    born: 1935,
    name: "Mary Oliver",
   };
   // Error: Type '{ activity: string; born: number; name: string; }'
   // is not assignable to type 'Biodata'.
   // Object literal may only specify known properties,
   // and 'activity' does not exist in type 'Poet'.
//    Note that excess property checks only trigger for object literals being created in
//    locations that are declared to be an object type. Providing an existing object literal
//    bypasses excess property checks.

const existingObject = {
 activity: "walking",
 born: 1935,
 name: "Mary Oliver",
};
const extraPropertyButOk: Biodata = existingObject; // Ok

//Nested Object

type Poem = {
    author: {
    firstName: string;
    lastName: string;
    };
   
    name: string;
};
// Ok
const poemMatch: Poem = {
 author: {
 firstName: "Sylvia",
 lastName: "Plath",
 },
 name: "Lady Lazarus",
};
const poemMismatch: Poem = {
 author: {
 name: "Sylvia Plath",
 },
 // Error: Type '{ name: string; }' is not assignable
 // to type '{ firstName: string; lastName: string; }'.
 // Object literal may only specify known properties, and 'name'
 // does not exist in type '{ firstName: string; lastName: string; }'.
 name: "Tulips",
};
//an other way
type Author = {
 firstName: string;
 lastName: string;
};
type poem = {
 author: Author;
 name: string;
};//ok
const poemMismatch: poem = {
 author: {
 name: "Sylvia Plath",
 },
 // Error: Type '{ name: string; }' is not assignable to type 'Author'.
 // Object literal may only specify known properties,
 // and 'name' does not exist in type 'Author'.
 name: "Tulips",
};

//Optional Properties

type Book = {
    author?: string;
    pages: number;
   };
   // Ok
   const ok: Book = {
    author: "Rita Dove",
    pages: 80,
   };
   const missing: Book = {
    author: "Rita Dove",
   };
   // Error: Property 'pages' is missing in type
   // '{ author: string; }' but required in type 'Book'.
   
type Writers = {
 author: string | undefined;
 editor?: string;
};
// Ok: author is provided as undefined
const hasRequired: Writers = {
    author: undefined,
   };
   const missingRequired: Writers = {};
   // ~~~~~~~~~~~~~~~
   // Error: Property 'author' is missing in type
   // '{}' but required in type 'Writers'.
   
   //Inferred object type unions
   //This poem value always has a name property of type string, and may or may not have pages and rhymes properties:
const poem = Math.random() > 0.5
 ? { name: "The Double Image", pages: 7 }
 : { name: "Her Kind", rhymes: true };
// Type:
// {
// name: string;
// pages: number;
// rhymes?: undefined;
// }
// |
// {
// name: string;
// pages?: undefined;
// rhymes: boolean;
// }
poem.name; // string
poem.pages; // number | undefined
poem.rhymes; // booleans | undefined

//Explicite object type unions

type PoemWithPages = {
    name: string;
    pages: number;
   };
   type PoemWithRhymes = {
    name: string;
    rhymes: boolean;
   };
   type Nazam = PoemWithPages | PoemWithRhymes;
   const nazam: Nazam = Math.random() > 0.5
    ? { name: "The Double Image", pages: 7 }
    : { name: "Her Kind", rhymes: true };
   nazam.name; // Ok
   nazam.pages;
   // ~~~~~
   // Property 'pages' does not exist on type 'nazam'.
   // Property 'pages' does not exist on type 'PoemWithRhymes'.
   nazam.rhymes;
   // ~~~~~~
   // Property 'rhymes' does not exist on type 'nazam'.
   // Property 'rhymes' does not exist on type 'PoemWithPages'
   if ("pages" in nazam) {
    nazam.pages; // Ok: poem is narrowed to PoemWithPages
   } else {
    nazam.rhymes; // Ok: poem is narrowed to PoemWithRhymes
   }
   if (nazam.pages) { /* ... */ }
// ~~~~~
// Property 'pages' does not exist on type 'PoemWithPages | PoemWithRhymes'.
// Property 'pages' does not exist on type 'PoemWithRhymes'.

//Discriminated Unions

type PoemWithPage = {
    name: string;
    pages: number;
    type: 'pages';
   };
   type PoemWithRhyme = {
    name: string;
    rhymes: boolean;
    type: 'rhymes';
   };
   type bet = PoemWithPage | PoemWithRhyme;
   const bete: bet = Math.random() > 0.5
    ? { name: "The Double Image", pages: 7, type: "pages" }
    : { name: "Her Kind", rhymes: true, type: "rhymes" };
   if (bete.type === "pages") {
    console.log(`It's got pages: ${bete.pages}`); // Ok
   } else {
    console.log(`It rhymes: ${bete.rhymes}`);
   }
   bete.type; // Type: 'pages' | 'rhymes'
   bete.pages;
   // ~~~~~
   // Error: Property 'pages' does not exist on type 'bet'.
   // Property 'pages' does not exist on type 'PoemWithRhymes'.

   //Intersection Type

   type Artwork = {
    genre: string;
    name: string;
   };
   type Writing = {
    pages: number;
    name: string;
   };
   type WrittenArt = Artwork & Writing;
   // Equivalent to:
   // {
   // genre: string;
   // name: string;
   // pages: number;
   // }

   type ShortPoem = { author: string } & (
    | { kigo: string; type: "haiku"; }
    | { meter: number; type: "villanelle"; }
   );
   // Ok
   const morningGlory: ShortPoem = {
    author: "Fukuda Chiyo-ni",
    kigo: "Morning Glory",
    type: "haiku",
   };
   const oneArt: ShortPoem = {
    author: "Elizabeth Bishop",
    type: "villanelle",
    
   };
   // Error: Type '{ author: string; type: "villanelle"; }'
   // is not assignable to type 'ShortPoem'.
   // Type '{ author: string; type: "villanelle"; }' is not assignable to
   // type '{ author: string; } & { meter: number; type: "villanelle"; }'.
   // Property 'meter' is missing in type '{ author: string; type: "villanelle"; }'
   // but required in type '{ meter: number; type: "villanelle"; }'.

   type ShortPoemBase = { author: string };
type Haiku = ShortPoemBase & { kigo: string; type: "haiku" };
type Villanelle = ShortPoemBase & { meter: number; type: "villanelle" };
type ShortPoem = Haiku | Villanelle;
const oneArt: ShortPoem = {
 author: "Elizabeth Bishop",
 type: "villanelle",
};
// Type '{ author: string; type: "villanelle"; }'
// is not assignable to type 'ShortPoem'.
// Type '{ author: string; type: "villanelle"; }'
// is not assignable to type 'Villanelle'.
// Property 'meter' is missing in type
// '{ author: string; type: "villanelle"; }'
// but required in type '{ meter: number; type: "villanelle"; }'.

//never

type NotPossible = number & string;
// Type: never
let notNumber: NotPossible = 0;
// ~~~~~~~~~
// Error: Type 'number' is not assignable to type 'never'.
let notString: never = "";
// ~~~~~~~~~
// Error: Type

//Function Parameters

function sing(song) {
    console.log(`Singing: ${song}!`);
   }
   function sings(song: string) {
    console.log(`Singing: ${song}!`);
   }

   //Parameter Arguments

   function singTwo(first: string, second: string) {
    console.log(`${first} / ${second}`);
   }
   // Logs: "Ball and Chain / undefined"
   singTwo("Ball and Chain");
   // ~~~~~~~~~~~~~~~~
   // Error: Expected 2 arguments, but got 1.
   // Logs: "I Will Survive / Higher Love"
   singTwo("I Will Survive", "Higher Love"); // Ok
   // Logs: "Go Your Own Way / The Chain"
   singTwo("Go Your Own Way", "The Chain", "Dreams");
   // ~~~~~~~~
   // Error: Expected 2 arguments, but got 3.

   //Optional Parameters

   function announceSong(song: string, singer?: string) {
    console.log(`Song: ${song}`);
    if (singer) {
    console.log(`Singer: ${singer}`);
    }
   }
   announceSong("Greensleeves"); // Ok
   announceSong("Greensleeves", undefined); // Ok
   announceSong("Chandelier", "Sia"); // Ok

function announceSongBy(song: string, singer: string | undefined) { /* ... */ }
announceSongBy("Greensleeves");
// Error: Expected 2 arguments, but got 1.
announceSongBy("Greensleeves", undefined); // Ok
announceSongBy("Chandelier", "Sia"); // Ok
function announceSinger(singer?: string, song: string) {}
// ~~~~
// Error: A required parameter cannot follow an optional parameter.

//Defualt Prameters

function rateSong(song: string, rating = 0) {
    console.log(`${song} gets ${rating}/5 stars!`);
   }
   rateSong("Photograph"); // Ok
   rateSong("Set Fire to the Rain", 5); // Ok
   rateSong("Set Fire to the Rain", undefined); // Ok
   rateSong("At Last!", "100");
   // ~~~~~
   // Error: Argument of type '"100"' is not assignable
   // to parameter of type 'number | undefined'.

   //Rest Parameter (...)
function singAllTheSongs(singer: string, ...songs: string[]) {
 for (const song of songs) {
 console.log(`${song}, by ${singer}`);
 }
}
singAllTheSongs("Alicia Keys"); // Ok
singAllTheSongs("Lady Gaga", "Bad Romance", "Just Dance", "Poker Face"); // Ok
singAllTheSongs("Ella Fitzgerald", 2000);
// ~~~~
// Error: Argument of type 'number' is not
// assignable to parameter of type 'string'.

//Return Type

// Type: (songs: string[]) => number
function singSongs(songs: string[]) {
    for (const song of songs) {
    console.log(`${song}`);
    }
    return songs.length;
   }

// Type: (songs: string[], index: number) => string | undefined
function getSongAt(songs: string[], index: number) {
    return index < songs.length
    ? songs[index]
    : undefined;
   }
   getSongAt(["w","","",""],1)

//Explicit return type 

function singSongsRecursive(songs: string[], count = 0): number {
    return songs.length ? singSongsRecursive(songs.slice(1), count + 1) : count;
}

const singSongsRecursiv = (songs: string[], count = 0): number =>
 songs.length ? singSongsRecursiv(songs.slice(1), count + 1) : count;

 function getSongRecordingDate(song: string): Date | undefined {
    switch (song) {
    case "Strange Fruit":
    return new Date('April 20, 1939'); // Ok
    case "Greensleeves":
    return "unknown";
    // Error: Type 'string' is not assignable to type 'Date'.
    default:
    return undefined; // Ok
    }
   }

   //Function Types

let nothingInGivesString: () => string;

//This inputAndOutput variable’s type describes a function with a string[] parameter, an optional count parameter, and a returned number value:
let inputAndOutput: (songs: string[], count?: number) => number;

//Function types are frequently used to describe callback parameters (parameters meant to be called as functions)

const songs = ["Juice", "Shake It Off", "What's Up"];
function runOnSongs(getSongAt: (index: number) => string) {
 for (let i = 0; i < songs.length; i += 1) {
 console.log(getSongAt(i));
 }
}
function getSongAt(index: number) {
 return `${songs[index]}`;
}
runOnSongs(getSongAt); // Ok
function logSong(song: string) {
 return `${song}`;
}
runOnSongs(logSong);
// ~~~~~~~
// Error: Argument of type '(song: string) => string' is not
// assignable to parameter of type '(index: number) => string'.
// Types of parameters 'song' and 'index' are incompatible.
// Type 'number' is not assignable to type 'string'.

//Function Type Parenthesis

// Type is a function that returns a union: string | undefined
let returnsStringOrUndefined: () => string | undefined;
// Type is either undefined or a function that returns a string
let maybeReturnsString: (() => string) | undefined;

//Inferences Function Type

let singer: (song: string) => string;
singer = function (song) {
 // Type of song: string
 return `Singing: ${song.toUpperCase()}!`; // Ok
};

const songa = ["Call Me", "Jolene", "The Chain"];
// song: string
// index: number
songa.forEach((song, index) => {
 console.log(`${song} is at index ${index}`);
});

//Type Aliased Function

type StringToNumber = (input: string) => number;
let stringToNumber: StringToNumber;
stringToNumber = (input) => input.length; // Ok
stringToNumber = (input) => input.toUpperCase();
// ~~~~~~~~~~~~~~~~~~~
// Error: Type 'string' is not assignable to type 'number'.

type NumberToString = (input: number) => string;
function usesNumberToString(numberToString: NumberToString) {
 console.log(`The string is: ${numberToString(1234)}`);
}
usesNumberToString((input) => `${input}! Hooray!`); // Ok
usesNumberToString((input) => input * 2);
// ~~~~~~~~~
// Error: Type 'number' is not assignable to type 'string'.

//Void Returns

function logSongs(song: string | undefined): void {
    if (!song) {
    return; // Ok
    }
    console.log(`${song}`);
    return true;
    // Error: Type 'boolean' is not assignable to type 'void'
}
// void can be useful as the return type in a function type declaration. When used in a
// function type declaration, void indicates that any returned value from the function
// would be ignored.

// For example, this songLogger variable represents a function that takes in a song: string and doesn’t return a value:
let songLogger: (song: string) => void;
songLogger = (song) => {
 console.log(`${songs}`);
};
songLogger("Heart of Glass"); // Ok

// void means the return type of a function will be ignored, while undefined is a literal value to be returned. Trying to assign a value of type void to a value whose type instead includes undefined is a type error:

function returnsVoid() {
 return;
}
let lazyValue: string | undefined;
lazyValue = returnsVoid();
// Error: Type 'void' is not assignable to type 'string | undefined'

const records: string[] = [];
function saveRecords(newRecords: string[]) {
 newRecords.forEach(record => records.push(record));
}
saveRecords(['21', 'Come On Over', 'The Bodyguard'])
// The void type is not JavaScript. It’s a TypeScript keyword used to declare return types of functions. Remember, it’s an indication that a function’s returned value isn’t meant to be used, not a value that can itself be returned.

//Never Returns

function fail(message: string): never {
 throw new Error(`Invariant failure: ${message}.`);
}
function workWithUnsafeParam(param: unknown) {
 if (typeof param !== "string") {
 fail(`param should be a string, not ${typeof param}`);
 }
 // Here, param is known to be type string
 param.toUpperCase(); // Ok
}
// never is not the same as void. void is for a function that returns nothing. never is for a function that never returns.

//Overloads Functions

function createDate(timestamp: number): Date;
function createDate(month: number, day: number, year: number): Date;
function createDate(monthOrTimestamp: number, day?: number, year?: number) {
 return day === undefined || year === undefined
 ? new Date(monthOrTimestamp)
 : new Date(year, monthOrTimestamp, day);
}
createDate(554356800); // Ok
createDate(7, 27, 1987); // Ok
createDate(4, 1);
// Error: No overload expects 2 arguments, but overloads
// do exist that expect either 1 or 3 arguments.

// The previous code snippet’s function would compile to roughly the following JavaScript:
function createDated(monthOrTimestamp, day, year) {
 return day === undefined || year === undefined
 ? new Date(monthOrTimestamp)
 : new Date(year, monthOrTimestamp, day);
}

function format(data: string): string; // Ok
function format(data: string, needle: string, haystack: string): string; // Ok
function format(getData: () => string): string;
// ~~~~~~
// This overload signature is not compatible with its implementation signature.
function format(data: string, needle?: string, haystack?: string) {
 return needle && haystack ? data.replace(needle, haystack) : data;
}

//Arrays

const elements = [true, null, undefined, 42];
elements.push("even", ["more"]);
// Value of elements: [true, null, undefined, 42, "even", ["more"]]

const warriors = ["Artemisia", "Boudica"];
// Ok: "Zenobia" is a string
warriors.push("Zenobia");
warriors.push(true);
// ~~~~
// Argument of type 'boolean' is not assignable to parameter of type 'string'.

//Array Types

let arrayOfNumbers: number[];
arrayOfNumbers = [4, 8, 15, 16, 23, 42];

//Array and Function Types
// The createStrings type here, which is a function type, is not the same as
// stringCreators, which is an array type:

// Type is a function that returns an array of strings
let createStrings: () => string[];
// Type is an array of functions that each return a string
let stringCreators: (() => string)[];

//Union Type Array
// Type is either a number or an array of strings
let stringOrArrayOfNumbers: string | number[];
// Type is an array of elements that are each either a number or a string
let arrayOfStringOrNumbers: (string | number)[];

// Here, namesMaybe is (string | undefined)[] because it has both string values and
// an undefined value:
// Type is (string | undefined)[]
const namesMaybe = ["Aqualtune", "Blenda", undefined,];

//Evolving Any Arrays
// Type: any[]
let values = [];
// Type: string[]
values.push('');
// Type: (number | string)[]
values[0] = 0;

// Multidimensional Arrays
// A 2D array, or an array of arrays, will have two “[]”s:
let arrayOfArraysOfNumbers: number[][];
arrayOfArraysOfNumbers = [
 [1, 2, 3],
 [2, 4, 6],
 [3, 6, 9],
];
// A 3D array, or an array of arrays of arrays, will have three “[]”s. 4D arrays have four “[]”s. 5D arrays have five “[]”s. You can guess where this is going for 6D arrays and beyond.

// These multidimensional array types don’t introduce any new concepts to array types. Think of a 2D array as taking in the original type, which just so happens to have [] at the end, and adding a [] after it.

// This arrayOfArraysOfNumberss array is of type number[][], which is also
// representable by (number[])[]:

// Type: number[][]
let arrayOfArraysOfNumberss: (number[])[];

//Array Members 
const defenders = ["Clarenza", "Dina"];
// Type: string
const defender = defenders[0];

const soldiersOrDates = ["Deborah Sampson", new Date(1782, 6, 3)];
// Type: Date | string
const soldierOrDate = soldiersOrDates[0];

Caveat:Unsound Menbers
//This code gives no complaints with the default TypeScript compiler settings:
function withElements(elements: string[]) {
 console.log(elements[9001].length); // No type error
}
withElements(["It's", "over"]);

//Spread and Rests aading two type arrays in one
// Type: string[]
const soldiers = ["Harriet Tubman", "Joan of Arc", "Khutulun"];
// Type: number[]
const soldierAges = [90, 19, 45];
// Type: (string | number)[]
const conjoined = [...soldiers, ...soldierAges];

//Spreading Rest Perameters

function logWarriors(greeting: string, ...names: string[]) {
    for (const name of names) {
    console.log(`${greeting}, ${name}!`);
    }
   }
   const warrior = ["Cathay Williams", "Lozen", "Nzinga"];
   logWarriors("Hello", ...warriors);
   const birthYears = [1844, 1840, 1583];
   logWarriors("Born in", ...birthYears);
   // ~~~~~~~~~~~~~
   // Error: Argument of type 'number' is not
   // assignable to parameter of type 'string'.

   //Tuples 
   let yearAndWarrior: [number, string];
yearAndWarrior = [530, "Tomyris"]; // Ok

yearAndWarrior = [false, "Tomyris"];
// ~~~~~
// Error: Type 'boolean' is not assignable to type 'number'.
yearAndWarrior = [530];
// Error: Type '[number]' is not assignable to type '[number, string]'.
// Source has 1 element(s) but target requires 2.
   
//Tuple Assignbility
// Type: (boolean | number)[]
const pairLoose = [false, 123];
const pairTupleLoose: [boolean, number] = pairLoose;
// ~~~~~~~~~~~~~~
// Error: Type '(number | boolean)[]' is not
// assignable to type '[boolean, number]'.
// Target requires 2 element(s) but source may have fewer.

const tupleThree: [boolean, number, string] = [false, 1583, "Nzinga"];
const tupleTwoExact: [boolean, number] = [tupleThree[0], tupleThree[1]];

const tupleTwoExtra: [boolean, number] = tupleThree;
// ~~~~~~~~~~~~~
// Error: Type '[boolean, number, string]' is
// not assignable to type '[boolean, number]'.
// Source has 3 element(s) but target allows only 2.

//Tuples as rest parameters
function logPair(name: string, value: number) {
    console.log(`${name} has ${value}`);
   }
   const pairArray = ["Amage", 1];
   logPair(...pairArray);
   // Error: A spread argument must either have a
   // tuple type or be passed to a rest parameter.
   const pairTupleIncorrect: [number, string] = [1, "Amage"];
   logPair(...pairTupleIncorrect);
   // Error: Argument of type 'number' is not
   // assignable to parameter of type 'string'.
   const pairTupleCorrect: [string, number] = ["Amage", 1];
   logPair(...pairTupleCorrect); // Ok

   function logTrio(name: string, value: [number, boolean]) {
    console.log(`${name} has ${value[0]} (${value[1]}`);
   }
   const trios: [string, [number, boolean]][] = [
    ["Amanitore", [1, true]],
    ["Æthelflæd", [2, false]],
    ["Ann E. Dunwoody", [3, false]]
   ];
   trios.forEach(trio => logTrio(...trio)); // Ok
   trios.forEach(logTrio);
   // ~~~~~~~
   // Argument of type '(name: string, value: [number, boolean]) => void'
   // is not assignable to parameter of type
   // '(value: [string, [number, boolean]], ...) => void'.
   // Types of parameters 'name' and 'value' are incompatible.
   // Type '[string, [number, boolean]]' is not assignable to type 'string'.

   //Tuple Inferences

   // Return type: (string | number)[]
function firstCharAndSize(input: string) {
    return [input[0], input.length];
   }
   // firstChar type: string | number
   // size type: string | number
   const [firstChar, size] = firstCharAndSize("Gudit");
   // Return type: [string, number]
function firstCharAndSizeExplicit(input: string): [string, number] {
    return [input[0], input.length];
   }
   // firstChar type: string
   // size type: number
   const [firstCharz, sizez] = firstCharAndSizeExplicit("Cathay Williams");

   // Type: (string | number)[]
const unionArray = [1157, "Tomoe"];
// Type: readonly [1157, "Tomoe"]
const readonlyTuple = [1157, "Tomoe"] as const;

const pairMutable: [number, string] = [1157, "Tomoe"];
pairMutable[0] = 1247; // Ok
const pairAlsoMutable: [number, string] = [1157, "Tomoe"] as const;
// ~~~~~~~~~~~~~~~
// Error: The type 'readonly [1157, "Tomoe"]' is 'readonly'
// and cannot be assigned to the mutable type '[number, string]'.
const pairConst = [1157, "Tomoe"] as const;
pairConst[0] = 1247;
// ~
// Error: Cannot assign to '0' because it is a read-only property.

// Return type: readonly [string, number]
function firstCharAndSizeAsConst(input: string) {
    return [input[0], input.length] as const;
   }
   // firstChar type: string
   // size type: number
   const [firstCharzs, sizezs] = firstCharAndSizeAsConst("Ching Shih");