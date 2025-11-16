# Mindspace

We have an ecommerce platform and a community driven application which helps people suffering from depression, loneliness and other issues. In this application, people can also journal, see community post, meditate and do yoga, talk to a therapist AI bot.

## Services

- Auth - Handles authentication
- Users - Handles user data
- Products - List of products available to purchase. Sub systems - Payments, Cart, Orders
- Journal - Page where users can write and express
- Therapist - AI bot chat interface
- Community - All people posts top posts etc.
- Notifications - Pub sub queue for sending notifications.
- Mindfulness - Meditate, yoga etc. (Pre Dev Concept)

## Development Ideas and Approaches

## Development Ideas and Approaches

| Service           | Development Ideas                                                              | Tech & Approach                                                    |
| ----------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| **Auth**          | Implement JWT auth, refresh tokens, OAuth login, role-based access             | FastAPI / Node.js, JWT, Redis blacklist, MongoDB/PostgreSQL        |
| **Users**         | Manage profiles, avatars, preferences, streaks, activity logs                  | CRUD APIs, S3 for images, Redis caching, rate limiting             |
| **Products**      | Product catalog, filters, search, recommendations                              | MongoDB/PostgreSQL, ElasticSearch/Meilisearch, REST API            |
| **Payments**      | UPI/Card payments, refunds, wallet support                                     | Razorpay/Stripe, webhooks, secure signature verification           |
| **Cart**          | Add/remove items, persistent cart, guest cart migration                        | Redis for fast ops, MongoDB for persistence, optimistic updates    |
| **Orders**        | Order creation, tracking, invoices, history                                    | Event-driven flow, PDF invoices, notification integration          |
| **Journal**       | Rich text editor, mood tags, private entries, mood analytics                   | Quill/TipTap editor, encryption, optional NLP mood detection       |
| **Therapist**     | AI chatbot for mental support, CBT-based flows, sentiment/escalation detection | LLM (OpenAI/Local), RAG memory, safety filters, sentiment analysis |
| **Community**     | Posts, likes, comments, trends, moderation, anonymous posting                  | MongoDB/PostgreSQL, WebSockets, AI profanity/sentiment filter      |
| **Notifications** | Real-time notifications, reminders, community/activity alerts                  | Kafka/NATS/RabbitMQ, push notifications, cron jobs                 |
| **Mindfulness**   | Meditation audio, yoga poses, daily challenges, progress tracking              | CDN for audio/video, streaks system, optional PWA offline mode     |
