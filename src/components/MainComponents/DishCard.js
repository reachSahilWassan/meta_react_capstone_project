import image3 from "../../static/images/image3.jpg"
import deliveryLogo from "../../static/images/delivery.svg"

const DishCard = (props)=>{
    return (
      <div className="card shadow-sm h-full border rounded-lg grid gap-3 mx-auto max-w-sm md:max-w-lg">
        <figure className="w-full">
          <img
            src={image3}
            alt=""
            className="object-cover h-56 rounded-t-lg rounded-r-lg w-full"
          />
        </figure>

        <div className="wrapper px-3 grid gap-3">
          <div className="flex justify-between">
            <h4 className="font-bold">{props.dishName}</h4>
            <div className="text-amber-400 font-bold">{props.price}</div>
          </div>
          <div className="text-start">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa totam
            non, eos sapiente neque ex ullam minima mollitia. In expedita
            voluptate dicta vel repellat ad molestias nam quidem accusamus
            ducimus?
          </div>

          <button className="mx-auto mb-4 p-2 flex items-center text-sm bg-[#495E57] hover:bg-black text-white rounded-lg focus:outline-none focus:bg-gray-100">
            <span>Order a Delivery</span>{" "}
            <img src={deliveryLogo} alt="" className="h-6" />
          </button>
        </div>
      </div>
    );
}

export default DishCard