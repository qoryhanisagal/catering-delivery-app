function App() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-base-100 text-center p-8 space-y-8">
      <h1 className="text-3xl md:text-5xl font-bold text-primary">
        Welcome to All Da Smoke Barbecue
      </h1>

      <div className="p-4 space-y-4">
        <button className="btn btn-primary">Primary Button</button>
        <button className="btn btn-accent">Accent Button</button>
        <div className="alert alert-info">Info Alert</div>
        <div className="alert alert-success">Success Alert</div>
        <div className="alert alert-error">Error Alert</div>
      </div>
    </main>
  );
}

export default App;