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

Service: Service Layer for business logic
Repository: Direct Data Access Layer
Queries: Low level Data Access Layer
DB/Layer: Base reusable queries

📦 Design Pattern:

- Repository: [Learn](https://www.geeksforgeeks.org/system-design/repository-design-pattern/)

- Builder: [Learn](https://www.geeksforgeeks.org/system-design/builder-design-pattern/)
