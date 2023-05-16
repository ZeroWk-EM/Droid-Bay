import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Filter from "./components/Filter/Filter";
import List from "./components/Product_list/List";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState<"New" | "Used">();
  const [category, setCategory] = useState<
    | "Interrogation"
    | "Pilot"
    | "Scout"
    | "Astromech"
    | "Battle"
    | "Assassin"
    | "Protocol"
    | "Torture"
  >();

  const handleSearchTextChange = (text: any) => {
    setSearchText(text);
  };

  return (
    <div className="App">
      <Navbar />
      <Search onSearchTextChange={handleSearchTextChange} />
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-md-3">
            <Filter setStatus={setStatus} setCategory={setCategory} />
          </div>
          <div className="col-12 col-md-9">
            <List name={searchText} status={status} category={category} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
