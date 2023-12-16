/** @format */

function App() {
  return (
    <div>
      <button className="m-4 rounded-md bg-indigo-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-indigo-600 focus:ring-2 focus:ring-green-500 active:bg-indigo-400">
        Click me
      </button>

      <ul>
        <li className="first:bg-green-400 last:bg-blue-400 odd:bg-purple-400 even:bg-yellow-300">First</li>
        <li className="first:bg-green-400 last:bg-blue-400 odd:bg-purple-400 even:bg-yellow-300">Second</li>
        <li className="first:bg-green-400 last:bg-blue-400 odd:bg-purple-400 even:bg-yellow-300">Third</li>
      </ul>
    </div>
  );
}

export default App;
