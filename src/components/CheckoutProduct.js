import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct(props) {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id: props.id,
      title: props.title,
      price: props.price,
      rating: props.rating,
      description: props.description,
      category: props.category,
      image: props.image,
      hasPrime: props.hasprime,
    };
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id: props.id }));
  };
  return (
    <div className="grid grid-cols-5">
      <Image src={props.image} height={200} width={200} objectFit="contain" />

      {/* Middle */}
      <div className="col-span-3 mx-5">
        <p>{props.title}</p>
        <div className="flex">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs mt-2 mb-2 line-clamp-3">{props.description}</p>
        <Currency quantity={props.price} currency="GBP" />
        {props.hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https:/links.papareact.com/fdw"
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      {/* Right add/remove buttons */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={addItemToBasket} className="button">
          Add to Basket
        </button>
        <button onClick={removeItemFromBasket} className="button">
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
