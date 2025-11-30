import type { IBook } from "../models/book.model.js";
export declare const resolvers: {
    Query: {
        books: () => Promise<(import("mongoose").Document<unknown, {}, IBook, {}, {}> & IBook & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[]>;
    };
    Mutation: {
        createBook: (_: any, { input }: {
            input: Omit<IBook, "id">;
        }) => Promise<import("mongoose").Document<unknown, {}, IBook, {}, {}> & IBook & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }>;
    };
};
//# sourceMappingURL=gql.resolvers.d.ts.map