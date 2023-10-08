// redux/actions.js 
import { ADD_TICKETS, ADD_BASKET } from './actionTypes';

export const addTickets = ticket => ({
    type: ADD_TICKETS, 
    data: {
        ticket
    }
});

export const addBasket = basket => ({
    type: ADD_BASKET,
    data: {
        basket
    }
})