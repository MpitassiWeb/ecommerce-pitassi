import { Layout } from "./components/layout/Layout";
import { CartContextProvider } from "./context/CartContext";
import { Cart } from "./pages/cart/Cart";
import { Error404 } from "./pages/error/Error404";
import { ItemDetailContainer } from "./pages/itemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./pages/itemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                <ItemListContainer
                  greeting={"¡Bienvenidos a Optitech Store!"}
                />
              }
            />
            <Route
              path="/category/:name"
              element={
                <ItemListContainer
                  greeting={"¡Bienvenidos a Optitech Store!"}
                />
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
