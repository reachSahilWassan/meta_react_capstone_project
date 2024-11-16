const RestaurantButtons = (props) => {
  return (
    <button className="max-w-sm py-1 px-4 text-[#495E57] text-xs border-[#495E57] hover:bg-[#495E57] hover:text-white border-2 rounded-lg">
      {props.icon} {props.children}
    </button>
  );
}

export default RestaurantButtons
