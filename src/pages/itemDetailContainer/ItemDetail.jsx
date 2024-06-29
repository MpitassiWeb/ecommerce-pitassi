import { CounterContainer } from "../../components/counter/CounterContainer";
import { ProductCard } from "../../components/productCard/ProductCard";

export const ItemDetail = ({ item }) => {
  return (
    <>
      <ProductCard
        title={item.title}
        img={item.img}
        description={item.description}
        price={item.price}
      />
      <CounterContainer />
    </>
  );
};
