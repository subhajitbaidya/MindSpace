Architecture

GraphQL Resolver
↓
BookService
↓
BookRepository
↓
BookQueryBuilder (extends BaseQueryBuilder)
↓
Mongoose Model
↓
MongoDB

Learning and Advantage: We can remove MongoDB layer and replace it with another database whenever needed.
Design Patterns used: Builder and Repository.

Service: Service Layer for business logic
Repo: Direct Data Access Layer
Queries: Low level Data Access Layer
DB/Layer: Base reusable queries
