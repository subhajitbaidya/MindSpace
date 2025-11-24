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
};
//# sourceMappingURL=resolvers.d.ts.map