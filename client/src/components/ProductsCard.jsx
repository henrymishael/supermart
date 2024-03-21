import React, { useContext } from "react";
import { BsArrowRight, BsHeart, BsHeartFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { GlobalContext } from "../context";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/bazaarSlice";
import { ToastContainer, toast } from "react-toastify";

const ProductsCard = ({ product }) => {
  const dispatch = useDispatch();
  const { handleAddToFavorite, favoritesList } = useContext(GlobalContext);
  const navigate = useNavigate();
  const __id = product.title;
  const idString = (__id) => {
    return String(__id).toLowerCase().split(" ").join("");
  };

  const rootId = idString(__id);
  console.log(rootId);
  const handleDetails = () => {
    // console.log("details");
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };

  return (
    <div className='group relative '>
      <div
        onClick={() => handleDetails()}
        className='w-full h-80 cursor-pointer overflow-hidden flex items-center justify-center shadow-sm'
      >
        <img
          className='w-80 h-full group-hover:scale-110 duration-500'
          src={product?.image}
          alt='productImage'
        />
      </div>
      <div className='w-full border-[1px] px-2 py-4 text-left'>
        <div className='flex justify-between items-center'>
          <div>
            <h2 className='font-titlefont text-base font-bold truncate'>
              {product?.title.substring(0, 12)}
            </h2>
          </div>
          <div className='flex justify-end   gap-2 relative overflow-hidden w-28'>
            <div className='flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500 items-center '>
              <p className='text-gray-500 flex items-center '>
                {product?.rating.rate}
                <FaStar className='text-[20px] text-yellow-600 pb-1' />
              </p>

              <p className='font-semibold'>${Math.floor(product.price)}</p>
            </div>
            <p
              onClick={() =>
                dispatch(
                  addToCart({
                    id: product?.id,
                    title: product?.title,
                    image: product?.image,
                    price: product?.price,
                    quantity: 1,
                    description: product?.description,
                  })
                ) & toast.success(`${product?.title} is added`)
              }
              className='absolute z-20 w-[110px] text-gray-500 hover:text-gray-900 flex flex-row items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500 '
            >
              add to cart
              <span>
                <BsArrowRight />
              </span>
            </p>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <p className='text-gray-500'>{product?.category}</p>
          <div onClick={() => handleAddToFavorite(product)}>
            {favoritesList &&
            favoritesList.length > 0 &&
            favoritesList.findIndex(
              (productItem) => productItem.id === product?.id
            ) !== -1 ? (
              <BsHeartFill className='text-red-600' />
            ) : (
              <BsHeart />
            )}
          </div>
        </div>
        <div className='absolute top-4 right-0'>
          {product.rating.rate < "4.0" && (
            <p className='bg-black text-white font-semibold font-titleFont px-6 py-1 italic'>
              limited
            </p>
          )}
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

export default ProductsCard;
