import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 4000
app.use(cors())
app.use(express.json())

app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body

  console.log('recieved: ', { name, email, password })

  return res.status(201).json({ message: "User created successfully" })
})

app.listen(PORT, () => console.log('server is running on port: ', PORT))
