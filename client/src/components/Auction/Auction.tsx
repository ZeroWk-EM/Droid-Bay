import { Auction } from "../../interfaces/selling.interface";

const dateHandler = (inputDate: Date) => {
  const date = {
    year: inputDate.getFullYear(),
    month: inputDate.toLocaleString("en-US", { month: "2-digit" }),
    day: inputDate.toLocaleString("en-US", { day: "2-digit" }),
    hour: inputDate.getHours(),
    minutes: inputDate.getMinutes(),
  };
  return `${date.day}/${date.month}/${date.year}`;
};

const AuctionComponet = (props: Auction) => {
  const { minPrice, startAuct, endAuct } = props;

  return (
    <div className="d-flex justify-content-around">
      <p>
        <b>Auction price</b> {minPrice} $
      </p>
      <p>
        <b>Start Auction</b> {dateHandler(new Date(startAuct))}
      </p>
      <p>
        <b>End Auction</b> {dateHandler(new Date(endAuct))}
      </p>
    </div>
  );
};

export default AuctionComponet;
