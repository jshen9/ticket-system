import {useState} from 'react';
import Ticket from './singleTicket';
import './tickets.css'
import { useDispatch, useSelector } from 'react-redux';
import { addBasket } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';

const TicketSystem = () => {
    const dispatch = useDispatch();
    const allTickets = useSelector(state => state.all);
    const [selectedItems, setSelectedItems] = useState([]);
    const [clear, setClear] = useState(false);
    const navigate = useNavigate();

    const proceedToCheckout = () => {        
        dispatch(addBasket(selectedItems));
        navigate('/checkout');
    }

    const addToBasket = item => {
        setClear(false);
        const idx = selectedItems.findIndex(it => it.ticketNumber === item.ticketNumber);        
        if (idx > 0) {
            selectedItems.splice(idx, 1, item);
            setSelectedItems([...selectedItems]);
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    }

    return (
        <div className='tickets-container'>
            <div className='tickets-layout'>
            {allTickets.tickets?.map((it) => 
                <Ticket key={it.ticketNumber} ticket={it} addToBasket={addToBasket} clear={clear}/>
            ) }
            </div>
            <div>
                <button className="button" onClick={() => {
                    setClear(true);
                }}>Clear</button>
                <button className="button" onClick={proceedToCheckout}>Checkout</button>
            </div>
        </div>
    )
}

export default TicketSystem;