import type { IBook } from "../models/book.model.js";
export declare const resolvers: {
    Query: {
        books: () => Promise<any>;
    };
    Mutation: {
        createBook: (_: any, { input }: {
            input: IBook;
        }) => Promise<any>;
    };
};
//# sourceMappingURL=gql.resolvers.d.ts.map