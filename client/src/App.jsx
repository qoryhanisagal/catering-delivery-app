// First, I import the React hooks I'll need:
// - useState lets me store and update state (like form input and data from the server).
// - useEffect lets me run a function when the component first loads.
import { useEffect, useState } from 'react'

// I also import Axios to handle HTTP requests (GET and POST to my backend server).
import axios from 'axios'

// This is my main App component — everything inside here gets rendered on the page.
function App() {

  // I set up state to hold the array of items (e.g., fruit) coming from my backend.
  const [array, setArray] = useState([])

  // I also need to track what the user types into the input field.
  const [inputValue, setInputValue] = useState('')

  // This useEffect runs *once* when the component loads.
  // I use it to fetch the current array of items from my Express backend.
  useEffect(() => {
    axios.get('http://localhost:8080/api') // Send a GET request to my server
      .then(res => setArray(res.data))     // On success: store the returned array in my state
      .catch(err => console.error('GET error:', err)) // On error: log the error to the console
  }, []) // Empty dependency array means this only runs on first load

  // This function handles the form submission when the user adds an item
  const handleSubmit = (e) => {
    e.preventDefault() // Prevent the default browser reload behavior

    // I send a POST request to my backend with the item typed by the user
    axios.post('http://localhost:8080/api', { item: inputValue })
      .then(() => {
        // On success, I update the array in state by adding the new item
        setArray([...array, inputValue])

        // I clear the input field so it's ready for the next item
        setInputValue('')
      })
      .catch(err => console.error('POST error:', err)) // Log any error that happens
  }

  // This is the JSX that renders the app UI
  return (
    <div className="p-8 space-y-4">
      {/* Header */}
      <h1 className="text-3xl font-bold">Vite + React</h1>

      {/* Form to submit new items */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full max-w-sm">
        {/* Input field bound to inputValue state */}
        <input
          type="text"
          placeholder="Add a fruit..."
          className="input input-bordered"
          value={inputValue} // What the user types gets tracked in state
          onChange={(e) => setInputValue(e.target.value)} // Update state on input change
        />

        {/* Submit button */}
        <button type="submit" className="btn btn-primary">
          Add Item
        </button>
      </form>

      {/* Display the list of items */}
      <div className="mt-4 space-y-1">
        {/* Loop through each item in the array and display it in a <p> tag */}
        {array.map((item, index) => (
          <p key={index}>{item}</p> // Key helps React track items in the list efficiently
        ))}
      </div>
    </div>
  )
}

// I export the App component so it can be used by main.jsx to render on the page
export default App