let items = [];
let idCount = 1;
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
        createBook: (_, { input }) => {
            const newBook = {
                id: idCount++,
                title: input.title,
                description: input.description,
                author: input.author,
                price: input.price,
                category: input.category,
                image: input.image,
                rating: input.rating,
                reviews: input.reviews,
            };
            items.push(newBook);
            return newBook;
        },
    },
};
//# sourceMappingURL=resolvers.js.map