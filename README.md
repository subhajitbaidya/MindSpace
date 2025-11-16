<div align="center">

# 🌿 MindSpace

**Discover, Purchase, Journal, Meditate, Connect—Build a community for spreading positive mindset**

> A modern product e-commerce marketplace only focusing on mind ful products to promote mental well being.

<!-- Big / "for-the-badge" style -->

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![LangChain](https://img.shields.io/badge/LangChain-111111?style=for-the-badge&logo=langchain&logoColor=white)
![LangGraph](https://img.shields.io/badge/LangGraph-6C63FF?style=for-the-badge&logo=langgraph&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![REST API](https://img.shields.io/badge/REST_API-109989?style=for-the-badge&logo=rest&logoColor=white)
![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)

![npm](https://img.shields.io/badge/-npm-CB3837?logo=npm&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)
![.ENV](https://img.shields.io/badge/-.ENV-yellow?logo=dotenv&logoColor=black)
![Nodemon](https://img.shields.io/badge/-Nodemon-3C873A?logo=nodemon&logoColor=white)
![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white)

</div>

## 💻 Services Overview

**Auth-Service**

- Tech: Express, Typescript, Jsonwebtokens, OAuth
- Overview: Role based access, validating tokens, security for routes and services.

**User-Service**

- Tech: Express, Typescript, REST API, PostgreSQL
- Overview: Maintains user data, logins and signup and other details, details modifications.

**Products-Service**

- Tech: Express, MongoDB, Redis, ElasticSearch, GraphQL
- Overview: Maintains products inventory and shows it to the UI from where users can order, save and pay for items.
- Sub Systems: Orders, Cart, Payment

**Journal-Service**

- Tech: Express, Typescript, MongoDB, GraphQL, Redis, AWS S3
- Overview: Write Journal, Save journal, Upload related images, consent to share to community.

**Community-Service**

- Tech: Express, Typescript, MongoDB, GraphQL, Redis, AWS S3
- Overview: Community page where Journals made public by users will be displayed where other users can read their stories.

**Therapist-Service**

- Tech: Python, Langchain, FastAPI, LangGraph, ChromaDB
- Overview: Chat interface where users can talk to a therapist AI powered chatbot which will have context of the users and it will respond accordingly.

**Mindfullness-Service**

- Tech: Express, Typescript, MongoDB, AWS S3.
- Overview: Chat interface where users can talk to a therapist AI powered chatbot which will have context of the users and it will respond accordingly.

**Notifications-Service**

- Tech: PubSub/Queue system, Redis, Typescript
- Sub Features - Payment done or not, Order placed, one daily notification
- Approach - We will do a publish subscribe event for this to send a notification a day to users for positivity and for other notifications as well.

### 🔍 Architecture and Planning

- **Modular Monorepo and SOA focused:** Scalable structure separating client and server apps.
- **MERN Stack + Fast API + Langchain:** Services, Client, Database, Business logic and services in one place.
- **API:** Inter-communication between services using REST APIs and GraphQL.
- **Best Practices:** Readable code, using low level design concepts, documentation, and extensibility in mind.

---

## 🚀 Getting Started

### Prerequisites

To set up the project:

- **Programming Language:** Python, Javascript, Typescript
- **Frameworks:** React, Express, Fast API, Langchain, Langgraph
- **Package Manager:** `pip`, `npm`, `uv`

## 📬 Feedback

Thank you for checking out my repository. You are more than welcome to contribute to my idea and support me.

- Raise issues or suggest features via [GitHub Issues](https://github.com/subhajitbaidya/MindSpace/issues).

---
