/* eslint-disable react/jsx-no-target-blank */
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/main/ItemListContainer";
import "./index.css";
function App() {
  return (
    <>
      <header className="w-full  bg-white border-black border-solid border-2 border-t-0">
        <NavBar />
      </header>
      <main>
        <ItemListContainer name={"Lucas"} />
      </main>
    </>
  );
}

export default App;
