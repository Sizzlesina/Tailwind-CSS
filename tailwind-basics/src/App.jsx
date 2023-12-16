/** @format */

function App() {
  return (
    <div className="text-4xl">
      <div className="invisible">base</div>
      <div className="invisible sm:visible">sm</div>
      <div className="invisible md:visible">md</div>
      <div className="invisible lg:visible">lg</div>
      <div className="invisible xl:visible">xl</div>
      <div className="invisible 2xl:visible">2xl</div>
    </div>
  );
}

export default App;
