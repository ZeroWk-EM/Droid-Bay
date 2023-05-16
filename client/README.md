# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Transfer of status components between two child components

Search component to List component

### Search

1. In the **Search** component, it creates a **searchText** prop and passes the text value as an argument to the prop when the click event of the 'Search' button is **executed**.

```
const Search = ({ searchText }) => {
  const [text, setText] = useState('');
  const [textInInput, setTextInInput] = useState('');

  const handleSearch = () => {
    searchText(textInInput);
    setText(textInInput);
  };
```

TSX Element

```
        <input
        type="text"
        className="form-control"
        placeholder="Insert droid name"
        onChange={(event) => setTextInInput(event.target.value)}
        />
        <button className="btn btn-outline-light"
        type="button"
        id="search-droid"
        onClick={handleSearch}>Search</button>
```

2. In the **App** component, it creates a state to store the search value and a state handler to update it. It then passes the search value as a prop to the List component.

```
function App() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  return (
    <div className="App">
      <Navbar />
      <Search searchText={handleSearch} />
      <Filter />
      <List searchValue={searchValue} />
      <Footer />
    </div>
  );
}
```

3. In the **List** component, use the prop searchValue to filter products according to the search value. You can use a filtering method to obtain only products that match the search value.

```
const List = ({ searchValue }) => {
  const product = useProduct({ name: searchValue });
}

//CODE...
```
