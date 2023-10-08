import { useEffect, useState } from "react";
import "./tickets.css";
import Barcode from "../../assets/barcode.png";

const Ticket = ({ ticket, clear, addToBasket }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (clear) {
      setCount(0);
    }
  }, [clear]);

  const handleTicketSelect = (event) => {
    const selectedCount = event.target.value;
    if (selectedCount) {
      setCount(selectedCount);
      addToBasket({
        id: ticket.ticketNumber,
        price: ticket.price,
        date: ticket.date,
        count: parseInt(selectedCount),
      });
    }
  };

  return (
    <div className="ticket" key={ticket.ticketNumber}>
      <div className="left">
        <div className="image">
          <p className="admit-one">
            <span>ADMIT ONE</span>
            <span>ADMIT ONE</span>
          </p>
          <div className="ticket-number">
            <p>#{ticket.ticketNumber}</p>
          </div>
        </div>
        <div className="ticket-info">
          <div>
            <p className="date">{ticket.date}</p>
          </div>

          <div className="show-name">
            <p className="title">{ticket.title}</p>
            <p className="actor">{ticket.actor}</p>
          </div>
          <div className="time">
            <p>
              {ticket.start} <span>TO</span> {ticket.end}
            </p>
          </div>
          <div className="location">
            <p>{ticket.place}</p>
            <p className="separator">
              <i className="far fa-smile"></i>
            </p>
            <p>{ticket.city}</p>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="right-info-container">
          <div className="barcode">
            <img src={Barcode} alt="QR code" />
          </div>
          <p className="price">${ticket.price}</p>
          <span className="select-number">
            Qty:
            <select
              name="select"
              className="select"
              onChange={handleTicketSelect}
              value={count}
            >
              {[0, 1, 2, 3, 4, 5, 6].map(function (n) {
                return <option value={n}>{n}</option>;
              })}
            </select>
          </span>
          <p className="ticket-number">#{ticket.ticketNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
