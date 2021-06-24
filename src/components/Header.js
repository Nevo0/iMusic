import SearchForm from "./SearchForm";
import Card from "./Card";

function Header() {
  return (
    <header className="App-header">
      <h1>iTuneSearch</h1>
      <Card/>
      <SearchForm />

    </header>
  );
}

export default Header;
