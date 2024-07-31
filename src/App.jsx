import { Toaster } from "sonner";
import { Layout } from "./components/layout/Layout";
import { CartContextProvider } from "./context/CartContext";
import { Cart } from "./pages/cart/Cart";
import { Checkout } from "./pages/checkout/Checkout";
import { Error404 } from "./pages/error/Error404";
import { ItemDetailContainer } from "./pages/itemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./pages/itemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { theme, dark } from "../theme";
import { SwitchMode } from "./components/switchMode/SwitchMode";
import { useState } from "react";

function App() {
  const [lightMode, setDarkMode] = useState(false);

  theme.palette.mode = lightMode ? "dark" : "light";

  return (
    <ThemeProvider theme={theme}>
      <SwitchMode
        check={lightMode}
        change={() => {
          setDarkMode(!lightMode);
        }}
      />
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
