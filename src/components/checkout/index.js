import { useSelector } from "react-redux";
import "./checkout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import {
  faCircleCheck,
  faCreditCard,
} from "@fortawesome/free-regular-svg-icons";
import VisaLogo from "../../assets/visa-logo.png";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Checkout = () => {
  const { checkoutBasket } = useSelector((state) => state.all);
  const [totalPay, setTotalPay] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    setTotalPay(
      checkoutBasket.reduce(
        (acc, basket) => acc + basket.price * basket.count,
        0
      )
    );

    setTotalCount(
      checkoutBasket.reduce((acc, basket) => acc + basket.count, 0)
    );
  }, [checkoutBasket]);

  return (
    <div className="checkout-container">
      <div className="content">
        <div className="col-60">
          <div className="delivery">
            <div className="row">
              <p>Delivery</p>
              <FontAwesomeIcon icon={faCircleCheck} size="2x" color="green" />
            </div>
            <div className="row">
              <p class="mobile">Mobile Entry - Free</p>
            </div>
            <div className="row description">
              <p>Tickets available by {checkoutBasket?.[0]?.date || ""}</p>
              <p>
                These mobile ticket will be transferred directly to you from
                trusted seller. We wil email you instructions on how to accept
                them on the original ticket provider's mobile app.
              </p>
            </div>
          </div>
          <div className="payment">
            <div className="row">
              <p>Payment</p>
              <FontAwesomeIcon icon={faCircleCheck} size="2x" color="green" />
            </div>
            <div className="row">
              <p className="credit-label">Use Credit/Debit Card</p>
            </div>
            <div className="row">
              <div className="credit">
                <div className="col-10">
                  <input type="checkbox" checked onChange={() => {}} />
                </div>
                <div className="col-90">
                  <div className="container">
                    <div className="row">
                      <div className="logo">
                        <img src={VisaLogo} alt="" />
                      </div>
                      <div className="credit-card-container">
                        <div className="row cardinfo">Visa - 9999</div>
                        <div className="row cardname">
                          <span>User Name | exp 00/11</span>
                        </div>
                        <div className="row edit">
                          <span>
                            <a href="">Edit</a>
                          </span>
                          <span className="separator">|</span>
                          <span>
                            <a href="">Delete</a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="row security-code-label">Security Code</div>
                    <div className="row">
                      <div className="security-code-container">
                        <div className="security-code-placeholder">...</div>
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          size="2x"
                          color="green"
                        />
                      </div>
                      <div className="creditcard-icon">
                        <FontAwesomeIcon icon={faCreditCard} size="2x" />
                      </div>
                      <div className="security-code-desc">
                        <span>3 digits on back of card</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="add-new-card-container">
                <span className="m-10">
                  <FontAwesomeIcon icon={faPlus} size="2x" color="#1460c8" />
                </span>
                <span className="m-10">
                  <FontAwesomeIcon icon={faCreditCard} size="2x" />
                </span>
                <span className="m-10 blue">
                  <a href="">Add New Card</a>
                </span>
              </div>
            </div>
            <div className="row">
              <div className="digit-wallet-container">
                <div class="line"></div>
                <h3>Or Pay With</h3>
                <p>
                  By using a digital Wallet and continuing past this page, you
                  have read and accepting the{" "}
                  <span className="blue"> term of use </span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-40">
          <div className="summary">
            <div className="row">
              <div className="col">
                <p className="large">Total</p>
              </div>
              <div class="col align-right large">
                <p>${totalPay}</p>
              </div>
            </div>
            <div className="row m-t-20">
              <div className="col-100">
                <p className="medium">Tickets</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="b-500">Count</p>
              </div>
              <div class="col align-right">
                <p className="b-500">{totalCount}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-100">
                <p className="medium">Notes From Seller</p>
              </div>
            </div>
            <div className="row">
              <p>Congraulation! not mask is required</p>
            </div>
            <div className="row">
              <div className="col-100">
                <p className="medium">Fees</p>
              </div>
            </div>
            <div className="row height-10">
              <div className="col">
                <p className="b-500">Service Fees: $20 x {totalCount}</p>
              </div>
              <div class="col align-right">
                <p className="b-500">${20 * totalCount}</p>
              </div>
            </div>
            <div className="row height-10">
              <div className="col">
                <p className="b-500">Order processing fee</p>
              </div>
              <div class="col align-right">
                <p className="b-500">$20.00</p>
              </div>
            </div>
            <div className="row cancel-order">
              <a href="">Cancel Order</a>
            </div>
            <div className="row">
              <div className="col-100">
                <p className="b-500">*All Sales Final - No Refund</p>
              </div>
            </div>
            <div className="row">
              <div className="col-100">
                <div className="agreement">
                  <span>
                    <input type="checkbox" onChange={() => {}} />
                  </span>
                  <p className="b-500">
                    I have read and agree to the current{" "}
                    <span className="blue"> term of use </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="row grow">
              <div className="place-order">
                <button className="button">Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
