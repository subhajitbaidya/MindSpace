import type { IBook } from "../models/book.model.js";
export declare const resolvers: {
    Query: {
        books: () => Promise<any>;
    };
    Mutation: {
        createBook: (_: any, { input }: {
            input: Omit<IBook, "id">;
        }) => Promise<import("mongoose").Document<unknown, {}, IBook, {}, {}> & IBook & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }>;
        createBooksBulk: (_: any, { input }: {
            input: {
                books: any[];
            };
        }) => Promise<{
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
//# sourceMappingURL=gql.resolvers.d.ts.map