# InvoiceAI 
AI-Powered Invoice Generator & Invoice Management SaaS

InvoiceAI is a full-stack MERN application that helps freelancers, small businesses, and agencies create, manage, and generate professional invoices using AI.  
It supports authentication, invoice creation/editing, invoice preview + PDF printing, business profile branding (logo/stamp/signature), and AI-based invoice generation from raw text.

## Features

### Authentication (Clerk)
- Secure login/signup using Clerk Authentication
- Token-based secure API access
- Protects invoice & profile routes

### Invoice Management
- Create new invoices
- Edit invoices
- Delete invoices
- View invoice list with:
  - Search
  - Filters
  - Sorting
  - Pagination

### Invoice Preview
- Preview invoice in professional printable format
- Print / Save as PDF
- Supports currency (INR / USD)

### Business Profile Module
- Save business details (name, email, GST, address, phone)
- Upload branding assets:
  - Company Logo
  - Digital Stamp
  - Signature
- Default tax percentage settings

### AI Invoice Generation (Gemini / AI Backend)
- Paste raw text
- AI extracts invoice details (client, items, prices, qty)
- Automatically creates invoice in backend
- Handles quota & error messages gracefully

---

## Tech Stack

### Frontend
- React.js
- React Router DOM
- Tailwind CSS
- Clerk Authentication

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT verification using Clerk token
- Multer (for file uploads: logo/stamp/signature)
- AI API integration (Gemini/OpenAI depending on backend config)

---

##  Project Structure
InvoiceAI/
│
├── backend/
│ ├── src/
│ │ ├── routes/
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── middleware/
│ │ ├── utils/
│ │ └── server.js
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ │ ├── assets/
│ │ ├── styles/
│ │ └── App.jsx
│ └── package.json
│
└── README.md


