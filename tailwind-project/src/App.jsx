/** @format */

import Card from "./components/Card";
import Nav from "./components/Nav";
import NewArrivalsSection from "./components/NewArrivalsSection";
import ShoeDetai from "./components/ShoeDetail";
import { SHOE_LIST } from "./constant";

function App() {
  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <Nav />
      <ShoeDetai />
      <NewArrivalsSection items={SHOE_LIST} />
    </div>
  );
}

export default App;
