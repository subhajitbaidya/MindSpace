interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  description: string;
}

let items: Book[] = [];
let idCount = 1;

interface AddBook {
  title: string;
  author: string;
  price: number;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  description: string;
}

let books: Book[] = [];
let nextId = 1;

export const resolvers = {
  Query: {
    books: async () => {
      return [
        {
          id: 1,
          title: "Bad Code",
          author: "Me",
          price: 2.56,
          category: "Bakchodi",
          rating: 2.4,
          reviews: 4,
          image: "my image",
          description: "How can you write so bad code? Man? ",
        },
      ];
    },
  },
  Mutation: {
    createBook: (_: any, { input }: { input: AddBook }): Book => {
      const newBook: Book = {
        id: nextId++,
        title: input.title,
        description: input.description,
        author: input.author,
        price: input.price,
        category: input.category,
        image: input.image,
        rating: input.rating,
        reviews: input.reviews,
      };
      books.push(newBook);
      return newBook;
    },
  },
};
