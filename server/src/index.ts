import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
)

app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'Zynqora API',
    time: new Date().toISOString(),
  })
})

app.post('/api/contact', (req, res) => {
  const { name, email, company, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Name, email and message are required.',
    })
  }

  return res.json({
    success: true,
    message: 'Thank you. The Zynqora team will contact you shortly.',
  })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Zynqora API is running on http://localhost:${PORT}`)
})