import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";
import {
  decrementQuantity,
  deleteItem,
  incrementQuantity,
  resetCart,
} from "../redux/bazaarSlice";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
// import { decrementQuantity, incrementQuantity } from "../redux/bazaarSlice";

const CartItem = () => {
  const productData = useSelector((state) => state.bazaar.productData);
  const dispatch = useDispatch();
  return (
    <div className='lg:w-2/3 w-full '>
      <div className='w-full'>
        <h2 className='font-titleFont text-2xl'>Shopping Cart</h2>
      </div>
      <div className='overflow-hidden scrollbar-none overflow-x-scroll lg:overflow-x-hidden'>
        {productData.map((item) => (
          <div
            key={item.id}
            className='flex  items-center justify-between gap-6 mt-6'
          >
            <div className='flex items-center gap-2'>
              <MdOutlineClose
                onClick={() =>
                  dispatch(deleteItem(item.id)) &
                  toast.error(`${item.title} is removed`)
                }
                className='text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300'
              />
              <img
                className='lg:w-32 lg:h-32 sm:w-24 sm:h-24 object-cover'
                src={item?.image}
                alt='itemImage'
              />
            </div>
            <div className='flex lg:items-center lg:flex-row flex-col'>
              <h2 className='w-40 truncate'>{item?.title.substring(0, 12)}</h2>
              <p className='w-10'>${item?.price}</p>
            </div>
            <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
              <p className='text-sm'>Quantity</p>
              <div className='flex items-center gap-4 text-sm font-semibold'>
                <span
                  onClick={() =>
                    dispatch(
                      decrementQuantity({
                        id: item?.id,
                        title: item?.title,
                        image: item?.image,
                        price: item?.price,
                        quantiy: 1,
                        description: item?.description,
                      })
                    )
                  }
                  className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'
                >
                  -
                </span>
                <span>{item.quantity}</span>
                <span
                  onClick={() =>
                    dispatch(
                      incrementQuantity({
                        id: item?.id,
                        title: item?.title,
                        image: item?.image,
                        price: item?.price,
                        quantiy: 1,
                        description: item?.description,
                      })
                    )
                  }
                  className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'
                >
                  +
                </span>
              </div>
            </div>
            <p className='w-14'>${Math.round(item.quantity * item.price)}</p>
          </div>
        ))}
      </div>

      {productData && productData.length > 0 ? (
        <button
          onClick={() =>
            dispatch(resetCart()) & toast.error("Your Cart is Empty")
          }
          className='bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300'
        >
          Reset Cart
        </button>
      ) : (
        ""
      )}
      <Link to='/'>
        <button className='mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300'>
          <span>
            <HiOutlineArrowLeft />
          </span>
          go shopping
        </button>
      </Link>

      <ToastContainer
        position='top-left'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </div>
  );
};

export default CartItem;
