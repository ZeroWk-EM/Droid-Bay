import { Selling } from "../../interfaces/selling.interface";
import AuctionComponet from "../Auction/Auction";

const Card = (props: Selling) => {
  const {
    name,
    category,
    image,
    status,
    price,
    auction,
    shipping_price,
    seller,
  } = props;
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={image}
            className="img-fluid rounded-start"
            alt={`portrait of ${name} droid`}
          />
        </div>
        <div className="col-md-8">
          <div
            className="card-body"
            style={{ fontSize: "14px", padding: "12px" }}
          >
            <div className="d-flex justify-content-between">
              <h5 className="card-title">{name}</h5>
              <div className="d-flex gap-4">
                <button className="btn btn-dark">Buy {name}</button>
                <button className="btn btn-primary" disabled={!auction}>
                  Take offert for {name}
                </button>
              </div>
            </div>
            <p>
              <b>Category</b> {category}
            </p>
            <p>
              <b>Status</b> {status}
            </p>
            <p>
              <b>Price</b> {price} $
            </p>
            <div>
              {auction ? (
                <AuctionComponet
                  minPrice={auction.minPrice}
                  startAuct={auction.startAuct}
                  endAuct={auction.endAuct}
                />
              ) : (
                <p>
                  <b>NO AUCTION FOR THIS PRODUCT</b>
                </p>
              )}
            </div>
            <div className="d-flex justify-content-around">
              <p>
                <b>Shipping price</b> {shipping_price} $
              </p>
              <p>
                <b>Seller</b> {seller}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
