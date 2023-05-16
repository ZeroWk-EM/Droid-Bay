import Card from "../Card/Card";
import { UrlParams, useProduct } from "../../hooks/productHook";

const List = (props: UrlParams) => {
  const { name, status, category } = props;
  let index = 0;
  const urlParams: UrlParams = {
    name: name,
    status: status,
    category: category,
  };
  const product = useProduct(urlParams);

  return (
    <div>
      {product.map((item: any) => {
        return (
          <Card
            key={index++}
            name={item.name}
            category={item.category}
            image={item.image}
            status={item.status}
            price={item.price}
            auction={
              item.auction
                ? {
                    minPrice: item.auction.minPrice,
                    startAuct: item.auction.startAuct,
                    endAuct: item.auction.endAuct,
                  }
                : undefined
            }
            shipping_price={item.shipping_price}
            seller={item.seller}
          />
        );
      })}
    </div>
  );
};

export default List;
