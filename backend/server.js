import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import { clerkMiddleware } from '@clerk/express'
import { connectDB } from './config/db.js';
import path from 'path';
import invoiceRoutes from './routes/invoiceRouter.js';
import businessProfileRouter from './routes/businessProfileRouter.js';
import aiInvoiceRouter from './routes/aiInvoiceRouter.js';

const app = express();
app.use((req, res, next) => { console.log('Request:', req.method, req.url); next(); });
app.get('/', (req, res) => { console.log('Hit root route'); res.send("API Working"); });
const port = 4001;

// ✅ middlewares
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:5173',
    'https://invoice-ai-rose.vercel.app'  // ✅ Added Vercel frontend URL
  ],
  credentials: true,
}));

app.use(clerkMiddleware());
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ limit: '20mb', extended: true }));

// ✅ DB config
connectDB();

// ✅ routes
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));
app.use('/api/invoices', invoiceRoutes);
app.use('/api/businessProfile', businessProfileRouter);
app.use('/api/aiInvoice', aiInvoiceRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
