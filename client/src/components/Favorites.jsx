import React, { useContext } from "react";
import { GlobalContext } from "../context";
import { BsArrowRight, BsHeart, BsHeartFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const Favorites = () => {
  const { favoritesList, handleAddToFavorite } = useContext(GlobalContext);
  return (
    <div className='max-w-screen-xl text-center py-10 grid lg:grid-cols-4  grid-cols-2 gap-3 mx-10'>
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((favorite) => (
          <div key={favorite?.id} className='group  '>
            <div className='w-full h-80 cursor-pointer overflow-hidden flex items-center justify-center'>
              <img
                className='w-60 h-64 group-hover:scale-110 duration-500'
                src={favorite?.image}
                alt='productImage'
              />
            </div>
            <div className='w-full border-[1px] px-2 py-4 text-left'>
              <div className='flex justify-between items-center'>
                <div>
                  <h2 className='font-titlefont text-base font-bold truncate'>
                    {favorite?.title.substring(0, 12)}
                  </h2>
                </div>
                <div className='flex justify-end   gap-2 relative overflow-hidden w-28'>
                  <div className='flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500 items-center '>
                    <p className='text-gray-500 flex items-center '>
                      {favorite?.rating?.rate}
                      <FaStar className='text-[20px] text-yellow-600 pb-1' />
                    </p>

                    <p className='font-semibold'>
                      ${Math.floor(favorite.price)}
                    </p>
                  </div>
                  <p className='absolute z-20 w-[110px] text-gray-500 hover:text-gray-900 flex flex-row items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500 '>
                    add to cart
                    <span>
                      <BsArrowRight />
                    </span>
                  </p>
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <p className='text-gray-500'>{favorite?.category}</p>
                <div onClick={() => handleAddToFavorite(favorite)}>
                  {favoritesList &&
                  favoritesList.length > 0 &&
                  favoritesList.findIndex(
                    (productItem) => productItem.id === favorite?.id
                  ) !== -1 ? (
                    <BsHeartFill className='text-red-600' />
                  ) : (
                    <BsHeart />
                  )}
                </div>
              </div>
              <div></div>
            </div>
          </div>
        ))
      ) : (
        <div className=''>
          <p className='lg:text-4xl text-xl text-center text-black font-extrabold'>
            No favorite recipes yet!
          </p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
