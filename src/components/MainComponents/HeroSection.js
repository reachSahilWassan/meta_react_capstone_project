import bannerImage from "../../static/images/image2.jpg"
const HeroSection = () => {
    return (
        <section className="w-full min-h-80 py-4 px-24 flex gap-52">
            <div className="w-3/5">
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

                <button className="bg-gray-700 hover:bg-gray-950 text-white px-8 py-4 rounded-lg mt-4">
                    Reserve a Table
                </button>
            </div>

            <div className="w-2/5 overflow-hidden border rounded-lg shadow-sm aspect-square">
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
