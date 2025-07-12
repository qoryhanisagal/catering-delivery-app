// Import required libraries
import express from 'express' // Express.js framework to handle server and routing
import cors from 'cors' // Middleware to handle Cross-Origin Resource Sharing

const app = express() // Create an instance of an Express application

// CORS configuration for allowing requests from frontend (Vite dev server)
const corsOptions = {
  origin: 'http://localhost:5173', // Allow requests only from this origin (your Vite app)
  credentials: true, // Allow cookies and other credentials to be included in requests
}

// Apply middleware
app.use(cors(corsOptions)) // Apply CORS middleware with the defined options
app.use(express.json()) // Automatically parse incoming JSON request bodies

// In-memory data store for fruits (no database needed for now)
let fruits = ['apple', 'banana', 'orange'] // Default fruit list for demo/testing

// Route to handle GET requests to /api
app.get('/api', (req, res) => {
  // Respond with the current list of fruits
  res.json(fruits)
})

// Route to handle POST requests to /api
app.post('/api', (req, res) => {
  // Extract 'item' from the request body
  const { item } = req.body

  // Validate the item: must be a non-empty string
  if (item && typeof item === 'string') {
    fruits.push(item) // Add the new fruit to the list
    // Respond with success status and the added item
    res.status(201).json({ message: 'Added successfully', item })
  } else {
    // If validation fails, send a 400 Bad Request response
    res.status(400).json({ error: 'No item provided' })
  }
})

// Start the server and listen on port 8080
const PORT = 8080
app.listen(PORT, () => {
  console.log(`Server is started on port ${PORT}`) // Confirm server is running
})
