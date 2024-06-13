import Navbar from "./components/navbar/Navbar";
import { ItemListContainer } from "./pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"¡Bienvenidos a Optitech Store!"} />
    </div>
  );
}

export default App;
