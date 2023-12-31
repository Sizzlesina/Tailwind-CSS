/** @format */

function App() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="rounded bg-white p-6 shadow-lg dark:bg-indigo-950 dark:shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white ">Card Title</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          This is the main content of the card.
        </p>
        <p className="mt-2 text-gray-400">
          Subtext or additional information goes here.
        </p>

        <button
          onClick={() => document.documentElement.classList.toggle("dark")}
          className="mt-4 rounded bg-indigo-500 px-4 py-2 font-semibold text-white hover:bg-indigo-600"
        >
          Button
        </button>
      </div>
    </div>
  );
}

export default App;
