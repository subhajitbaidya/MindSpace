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
};
//# sourceMappingURL=resolvers.js.map