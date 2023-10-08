// redux/reducers.js

import { combineReducers } from "redux";
import { ADD_TICKETS, ADD_BASKET } from "./actionTypes";

// define an initial state
const initialState = {
  checkoutBasket: [],
  tickets: [
    {
      ticketNumber: "20030220",
      date: "06/29/2023",
      title: "SOUR Prom",
      actor: "Olivia Rodrigo",
      start: "8:00 PM",
      end: "11:00 PM",
      place: "East High School",
      city: "Salt Lake City, Utah",
      price: 40.0,
    },
    {
      ticketNumber: "20030221",
      date: "07/29/2023",
      title: "Lion King",
      actor: "Broadway show",
      start: "8:00 PM",
      end: "11:00 PM",
      place: "Broadway Theater",
      city: "New York City, NY",
      price: 240.0,
    },
    {
      ticketNumber: "20030221",
      date: "07/29/2023",
      title: "Some Like It Hot",
      actor: "Marc Shaiman and Scott Wittman",
      start: "8:00 PM",
      end: "11:00 PM",
      place: "Broadway Theater",
      city: "New York City, NY",
      price: 240.0,
    },
    {
      ticketNumber: "20030221",
      date: "07/29/2023",
      title: "Lion King",
      actor: "Broadway show",
      start: "8:00 PM",
      end: "11:00 PM",
      place: "Broadway Theater",
      city: "New York City, NY",
      price: 240.0,
    },
    {
      ticketNumber: "20030221",
      date: "07/29/2023",
      title: "Some Like It Hot",
      actor: "Marc Shaiman and Scott Wittman",
      start: "8:00 PM",
      end: "11:00 PM",
      place: "Broadway Theater",
      city: "New York City, NY",
      price: 240.0,
    },
    {
      ticketNumber: "20030221",
      date: "07/29/2023",
      title: "Shucked",
      actor: "Brandy Clark and Shane McAnally",
      start: "8:00 PM",
      end: "11:00 PM",
      place: "Broadway Theater",
      city: "New York City, NY",
      price: 240.0,
    },
    {
      ticketNumber: "20030221",
      date: "07/29/2023",
      title: "Spamalot",
      actor: "Eric Idle",
      start: "8:00 PM",
      end: "11:00 PM",
      place: "Broadway Theater",
      city: "New York City, NY",
      price: 240.0,
    },
    {
      ticketNumber: "20030221",
      date: "07/29/2023",
      title: "Back to the Future",
      actor: "Alan Silverstri and Glen Ballard",
      start: "8:00 PM",
      end: "11:00 PM",
      place: "Broadway Theater",
      city: "New York City, NY",
      price: 240.0,
    },
  ],
};

const updateState = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BASKET: {
      const { basket } = action.data;
      return {
        checkoutBasket: basket,
      };
    }
    case ADD_TICKETS: {
      const { ticket } = action.ticket;
      return {
        tickets: [...state.tickets, ticket],
      };
    }
    default:
      return state;
  }
};

// rootReducer combines all the reducers, but currently
// we've got just 1 reducer
const rootReducer = combineReducers({ all: updateState });
export default rootReducer;
