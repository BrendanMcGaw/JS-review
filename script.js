const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring

// const book = getBook(3);
// const title = book.title;
// const author = book.author;

// This is destructuring, where you take the propertys from the objects and assign them to variables.
// const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
//   book;

// console.log(author, title, genres);

// // this is called a "rest operator" which makes sense as its grabbing the "rest" of the properties in the array.
// const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
// otherGenres;
// // const primaryGenre = genres[0];
// // const secondaryGenre = genres[1];

// console.log(primaryGenre, secondaryGenre);

// const newGenres = ["epic fantasy", ...genres];
// newGenres;

// // Adding new property to object book.
// const updatedBook = {
//   ...book,
//   moviePublicationDate: "2001-12-19",
//   // pages: 1210,
// };

// // const getYear = (str) => {
// //   return str.split("-")[0];
// // };

// // Look at this fancy boy arrow function. Both work the same way.

// const getYear = (str) => str.split("-")[0];

// console.log(getYear(publicationDate)); // publicationDate is just the argument we passed as str to the function.

// updatedBook;

// // Template literal example, pretty simple. Use backticks to make the string into a template literal, then use ${} to add javascript inside a string.
// const summary = `${title}, is a book with ${pages} pages, it was written by ${author} and published in ${getYear(
//   publicationDate
// )} The book has ${
//   hasMovieAdaptation == true ? "truly" : "not yet" // inline template literal ternary conditional.+
// } been adapted as a movie `;
// console.log(summary);

// // Ternary operation. If this > that ? "This is that" : "This is not that."
// // Basic if, else statement.
// const pagesRange =
//   pages > 1000 ? "over a thousand pages" : "less then a thousand";

// console.log(pagesRange);

// console.log(`The book has ${pagesRange} pages`);

//   return goodread + librarything;
// }

// console.log(getTotalReviewCount(book));
// Terneray can return a value where if / else statements cannot.

// const books = getBooks();
// books;

// // Mapping
// // const newArray = [1, 2, 3, 4, 5].map((element) => element * 2);
// // newArray;

// oldArray = [1, 2, 3, 4, 5];
// const newArray = oldArray.map((el) => el * 2);

// console.log(newArray);

// function getTotalReviewCount(book) {
//   const goodread = book.reviews?.goodreads?.reviewsCount; // initial ? is for optional chaining, to make sure that "goodreads" even exists.
//   const librarything = book.reviews?.librarything?.reviewsCount ?? 0; // knowledge coelescing allows us to give a value of 0 if there is nothing there.
//   librarything;
//   return goodread + librarything;
// }

// // Maps through the data of titles across each book and then stores those titles in a new array called "titles"
// const titles = books.map((book) => book.title);
// titles;

// // Creating a new object with multiple properties pulled from the initial object.
// const essentialData = books.map((book) => ({
//   // the paranthesis enclosing the {} allows us to automatically return the contents, since normally a {} following an arrow function would be considered a decleration
//   // we have to return the contents in order to store them in our new object array.
//   title: book.title,
//   author: book.author,
//   reviewsCount: getTotalReviewCount(book),
//   pages: book.pages,
// }));
// // essentialData is now a new object with properties assigned for both the title and author of each book.
// essentialData;

// const longBooks = books.filter((book) => book.pages > 500 && book.pages < 1000);
// // Conditional filtering to create a new array based on the conditional statement.

// const adventureBooks = books
//   .filter((book) => book.genres.includes("adventure"))
//   .map((book) => book.title); // mapping to new array for just titles to make it more readable.
// adventureBooks;

// const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0); // this 0 could also be an array[] or an object{} basically can do anything that we can do with map and filter with reduce instead.
// pagesAllBooks;

// const x = [3, 7, 1, 9, 6];
// const sorted = x.slice().sort((a, b) => a - b);
// // a - b == ascending order, lowest number minus the highest number to sort it that way.
// // sort is not a functional method, its a mutator, which is why x has also been modified. (We probably want to try and avoid this. So we use .slice() method to seperate the arrays.)
// sorted;
// x;

// const sortedByPages = books
//   .slice()
//   .sort((a, b) => b.pages - a.pages)
//   .map((book) => ({
//     title: book.title,
//     pages: book.pages,
//   }));
// // mapping the title and pages to the books from highest to lowest pages, allows for easier reading.
// sortedByPages;
// console.log(longBooks);

// // 1) Add book object to array.
// const newBook = {
//   id: 6,
//   title: "Harry Potter and the Chamber of Secrets",
//   author: "J. K. Rowling",
// };

// const booksAfterAdding = [...books, newBook];
// // Now we've created a new Array with our new addition to the array, without mutating or changing the original data.
// booksAfterAdding;

// // 2) Delete a book object from array.

// // Anything that doesn't have id 3, will be filtered out.
// const booksAfterDelete = booksAfterAdding.filter((book) => book.id !== 3);
// booksAfterDelete;

// // 3) Update book object in the array.
// // Mapping allows us to keep the same length and modify properties within the object.
// const booksAfterUpdate = booksAfterDelete.map((book) =>
//   book.id === 1 ? { ...book, pages: 1210 } : book
// );

// booksAfterUpdate;

// Asynchronous promises.
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
// Promises make it so that javascript can immediately move on to the next line, whilst it awaits the data request.

async function getTodos() {
  // await makes JavaScript wait until the fetch has been completed before it moves on with any further code running.
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);

  // Would normally update state from this function, rather then return some data.
  return data;
}

// This means
const todosData = getTodos();
console.log(todosData);
