const FoodCard = ({item}) => {
  const {image, name, price, recipe} = item;

  return (
    <div className="card w-full h-96 bg-base-100 shadow-xl my-10">
      <figure>
        <img
          src={image}
          alt="food"
        />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">Price: ${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">Dish Name: {name}</h2>
        <p>Ingredients: {recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-100 border-orange-400">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
