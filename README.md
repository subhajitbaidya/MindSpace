<div align="center">

# 🌿 MindSpace

**Discover, Read, Journal, Connect—Build a community for spreading positive mindset**

> A modern product e-commerce marketplace only focusing on mind ful products to promote mental well being.

![Express](https://img.shields.io/badge/-Express-black?logo=express&logoColor=white)
![JSON](https://img.shields.io/badge/-JSON-black?logo=json&logoColor=white)
![npm](https://img.shields.io/badge/-npm-CB3837?logo=npm&logoColor=white)
![.ENV](https://img.shields.io/badge/-.ENV-yellow?logo=dotenv&logoColor=black)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Nodemon](https://img.shields.io/badge/-Nodemon-3C873A?logo=nodemon&logoColor=white)
![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black)
![Python](https://img.shields.io/badge/-Python-3776AB?logo=python&logoColor=white)

![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white)
![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?logo=eslint&logoColor=white)

</div>

## 📖 Overview

**Mindmap** With an aim to help people with their mental well-being. Serves as a robust platform for buying, browsing, and managing different products, journaling and talking to AI powered therapist bot.

## 💻 Feature Overview

- Users
  Tech: Express, Typescript, MySQL, REST API, Jsonwebtokens
  Sub Features: Role based access of personal created resources like journals, purchased products, therapist conversations, liked community posts
  Approach: We will authenticate users with JWT tokens

  Future improvements: We will introduct seller features like dashboards to list their products

- Products
  Tech: Express, MongoDB, Redis, ElasticSearch, GraphQL
  Sub Features - Add to cart, payments, favorites, search products

- Journal
  Tech: Express, Typescript, MongoDB
  Sub Features - Write Journal, Save journal, concent to share to community

- Notifications -
  Tech: PubSub system
  Sub Features - Send one affirmation notification to users

### 🔍 Architecture and Planning

- **Modular Monorepo and SOA focused:** Scalable structure separating client and server apps.
- **Development:** Uses modern frameworks like express for handling API calls and business logic, react for UI, python, Langchain, Langgraph and Fast API for the large language model capabilities.
  Planning to use best practices of development for better handling of performance.
- **MERN Stack + Fast API + Langchain:** Services, Client, Database, Business logic and services in one place.
- **API:** Inter-communication between services using REST APIs and GraphQL.
- **Best Practices:** Readable code, docs, and extensibility in mind.

---

## 🚀 Getting Started

### Prerequisites

To set up the project:

- **Programming Language:** Python, Javascript, Typescript
- **Frameworks:** React, Express, Fast API, Langchain, Langgraph
- **Package Manager:** `pip`, `npm`, `uv`

---

## ⚙️ Installation

Clone the repository and install dependencies.

```bash
git clone https://github.com/subhajitbaidya/MindSpace.git
```

```bash
cd Mindspace
# Navigate to each directory and run commands accordingly.
npm install
pip install requirements.txt
```

Set environment variables or configure via `.env`.

---

## ▶️ Usage

Run the project locally:

```
In root directory it is configured with npm workspaces

run `npm run dev` in root directory.

```

---

## 🧪 Testing

Testing suite information coming soon

```

---

## 📬 Feedback

Thank you for checking out my repository. You are more than welcome to contribute to my idea and support me.

Here is how you can do that -
- Raise issues or suggest features via [GitHub Issues](https://github.com/subhajitbaidya/MindSpace/issues).

---
```
