import bannerImage from "../../static/images/image2.jpg"
import { Link } from "react-router-dom";
const HeroSection = () => {
    return (
      <section className="w-full min-h-80 py-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-600">
            Little Lemon
          </h1>
          <h3 className="text-xl md:text-3xl text-gray-600">Chicago</h3>
          <p className="text-justify mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod quis
            natus eos ex aliquid ipsum, inventore optio repellendus, cupiditate
            dolorum facilis corporis odio eum eveniet doloremque porro dolore
            nulla excepturi! Itaque quidem aperiam ipsa modi inventore repellat
            tempore voluptatem accusantium cupiditate. Omnis quo commodi
            recusandae a voluptas eum corrupti totam asperiores, tempora nulla
            itaque? Officia fuga eaque labore dolore excepturi.
          </p>

          <Link
            to="/reserve-a-table"
            aria-label="On Click"
            className="bg-[#495E57] hover:bg-gray-950 text-white px-8 py-4 rounded-lg mt-4 inline-block"
          >
            Reserve a Table
          </Link>
        </div>

        <div className="w-full overflow-hidden border rounded-lg shadow-sm max-h-[23rem] h-full">
          <img
            src={bannerImage}
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
      </section>
    );
}

export default HeroSection
