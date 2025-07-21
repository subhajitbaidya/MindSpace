## Benefits of Microservices, Service Oriented Architecture, Monorepo and Dependency Injection

- Loose coupling: Controllers don’t care about how services or DB work.

- Testable: You can mock dependencies in services and controllers.

- Scalable: Easy to add more services/models/controllers via the DI container.

- Readable: Each layer has a clear responsibility.

| Aspect                     | Practice                                                                                          |
| -------------------------- | ------------------------------------------------------------------------------------------------- |
| **Structure**              | Organize into `Controllers`, `Services`, `Routes`, `Models`                                       |
| **Design Pattern**         | Use **MVC**, and apply **Dependency Injection**, **Singleton**, and **Factory** where appropriate |
| **Separation of Concerns** | Keep business logic in services, not in routes                                                    |
| **Security**               | Use `bcrypt` for password hashing, and `jsonwebtoken` (JWT) for auth                              |
