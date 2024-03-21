import React, { useContext, useEffect, useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "../context";
import { FaStar } from "react-icons/fa";
import StarRating from "./star";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/bazaarSlice";
import { ToastContainer, toast } from "react-toastify";

const Product = () => {
  const dispatch = useDispatch();
  const { handleAddToFavorite, favoritesList } = useContext(GlobalContext);
  let [baseQty, setBaseQty] = useState(1);
  const [details, setDetails] = useState([]);
  const location = useLocation();
  useEffect(() => {
    setDetails(location.state.item);
    console.log(location.state.item);

    //eslint-disable-next-line
  }, []);
  return (
    <div className=' '>
      <div className='max-w-screen-xl mx-10 my-10 flex flex-col lg:flex-row gap-10'>
        <div className='lg:w-2/5 relative'>
          <img
            className='w-full h-full  object-cover'
            src={details?.image}
            alt='detailsImage'
          />
          <div className='absolute top-4 right-0'>
            {/* {details.rating.rate < "1.0" && (
              <p className='bg-red-500 text-white font-semibold font-titleFont px-6 py-1 italic'>
                limited
              </p>
            )} */}
          </div>
        </div>
        <div className='lg:w-3/5  flex flex-col justify-center gap-12 relative'>
          <div className=''>
            <div className=' flex justify-between'>
              <div>
                <h2 className='text-4xl font-semibold'>{details?.title}</h2>
                <p className='text-gray-500'>{details?.category}</p>
              </div>

              <div
                className='text-[36px] mt-1.5'
                onClick={() => handleAddToFavorite(details)}
              >
                {favoritesList &&
                favoritesList.length > 0 &&
                favoritesList.findIndex(
                  (productItem) => productItem.id === details?.id
                ) !== -1 ? (
                  <BsHeartFill className='text-red-600' />
                ) : (
                  <BsHeart />
                )}
              </div>
            </div>

            <div className='flex items-center justify-between '></div>
            <div className='flex items-center gap-4 mt-3 '>
              <p className='font-medium text-2xl text-gray-900'>
                ${Math.floor(details.price)}
              </p>
              <p className='text-gray-500 flex items-center text-2xl'>
                {/* {details.rating.rate} */}
                <FaStar className='text-[22px] text-yellow-600 pb-1' />
              </p>
            </div>
          </div>
          <div className='flex items-center gap-2 text-base'>
            <StarRating noOfStars={5} />
            {/* <p className='text-xs text-gray-500'>
              ({details?.rating.count} customers' review)
            </p> */}
          </div>
          <p className='text-base text-gray-500 -mt-3 capitalize'>
            {details?.description}
          </p>
          <div className='flex  flex-col lg:flex-row gap-4'>
            <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
              <p className='text-sm'>Quantity</p>
              <div className='flex items-center gap-4 text-sm font-semibold'>
                <button
                  onClick={() =>
                    setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)
                  }
                  className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'
                >
                  -
                </button>
                <span>{baseQty}</span>
                <button
                  onClick={() => setBaseQty(baseQty + 1)}
                  className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black '
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: details?.id,
                    title: details?.title,
                    image: details?.image,
                    price: details?.price,
                    quantity: baseQty,
                    description: details?.description,
                  })
                ) & toast.success(`${details?.title} is added`)
              }
              className='bg-black   text-white py-3 px-6 active:bg-gray-800'
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
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

export default Product;
