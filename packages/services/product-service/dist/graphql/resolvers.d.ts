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
export declare const resolvers: {
    Query: {
        books: () => Promise<{
            id: number;
            title: string;
            author: string;
            price: number;
            category: string;
            rating: number;
            reviews: number;
            image: string;
            description: string;
        }[]>;
    };
    Mutation: {
        createBook: (_: any, { input }: {
            input: AddBook;
        }) => Book;
    };
};
export {};
//# sourceMappingURL=resolvers.d.ts.map