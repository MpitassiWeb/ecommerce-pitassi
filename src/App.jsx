import { Toaster } from "sonner";
import { Layout } from "./components/layout/Layout";
import { CartContextProvider } from "./context/CartContext";
import { Cart } from "./pages/cart/Cart";
import { Checkout } from "./pages/checkout/Checkout";
import { Error404 } from "./pages/error/Error404";
import { ItemDetailContainer } from "./pages/itemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./pages/itemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { light, dark } from "../theme";
import { SwitchMode } from "./components/switchMode/SwitchMode";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <BrowserRouter>
        <Toaster position="top-center" expand richColors />
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
              <Route path="/checkout" element={<Checkout />} />
            </Route>
            <Route path="*" element={<Error404 />} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
