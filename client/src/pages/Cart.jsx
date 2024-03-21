import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
// import Footer from "../components/Footer";

const Cart = () => {
  const productData = useSelector((state) => state.bazaar.productData);
  const userInfo = useSelector((state) => state.bazaar.userInfo);
  const [totalAmt, setTotalAmt] = useState("");
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price);
  }, [productData]);

  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please sign in to Checkout");
    }
  };

  const payment = async (token) => {
    await axios.post("http://localhost:8000/pay", {
      amount: totalAmt * 100,
      token: token,
    });
  };
  return (
    <div>
      <img
        className='w-full h-60 object-cover'
        src='https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress'
        alt='cartImg'
      />
      <div className='max-w-screen-xl mx-3 py-20 flex  flex-col lg:flex-row '>
        <CartItem />
        <div className='lg:w-1/3 bg-[#fafafa] py-6 px-4'>
          <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
            <h2 className='text-2xl font-medium'>Cart Total</h2>
            <p className='flex items-center gap-4 text-base'>
              Subtotal
              <span className='font-titleFont font-bold text-lg'>
                ${Math.round(totalAmt)}
              </span>
            </p>
            <p className='flex items-start gap-4 text-base'>
              Shipping
              <span className='font-titleFont font-bold text-lg'>
                Please be informed that your shipment will be scheduled for
                delivery to your address. Pls expect delivery within the next
                24-48 hours.
              </span>
            </p>
          </div>
          <p className='font-titleFont font-semibold flex justify-between mt-6'>
            Total{" "}
            <span className='text-xl font-bold'>${Math.round(totalAmt)}</span>
          </p>
          <button
            onClick={handleCheckout}
            className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300'
          >
            proceed to checkout
          </button>
          {payNow && (
            <div className='w-full mt-6 flex items-center justify-center'>
              <StripeCheckout
                stripeKey='pk_test_51Ot5seP3yi6HIklRvQrh8zdfbsFM4xkqqqjfyPlUrNVCePTF52a32LskUeXrmYcugBNbqWAyNv1zibir4owVRswH001w1bUcp3'
                name='Vespi Online Shopping'
                amount={totalAmt * 100}
                label='Pay to Vespi'
                description={`Your Payment amount is ${totalAmt}`}
                token={payment}
                email={userInfo.email}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
