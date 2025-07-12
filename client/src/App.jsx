import TopBanner from './components/Banner/TopBanner'

function App() {
  return (
    <div className="w-full">
      <TopBanner />
      <main className="flex justify-center items-center min-h-screen bg-base-100 text-center p-8">
        <h1 className="text-3xl md:text-5xl font-bold text-primary">
          Welcome to All Da Smoke Barbecue
        </h1>
      </main>
    </div>
  )
}

export default App
