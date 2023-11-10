import React from "react";

const Webcard = () => {
  const webCardItems = [
    {
      name: "Мэдээлэл технологий үйлчилгээ",
      text: "Сервер, сторэйж загварчлал, Виртуал сервер, клауд системийн тохиргоо тохируулга",
      image: "../../images/web1.png",
    },
    { name: "24/7 onsite", text: "no data", image: "../../images/web2.png" },
    {
      name: "Мэдээлэл технологийн аудит тухай",
      text: "Мэдээлэл технологийн Аудит, Эрсдлийн үнэлгээ,",
      image: "../../images/web3.png",
    },
  ];
  return (
    <div>
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">Веб Хөгжүүлэлт</h1>
      </div>
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {webCardItems.map((card, index) => (
          <div
            key={index}
            className="w-72 bg-white shadow-md duration-500 hover:scale-105 hover:shadow-xl"
          >
            <a href="#">
              <img
                src={card.image}
                alt={card.name}
                className="h-80 w-72 object-cover"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  Brand
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  {card.name}
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    {card.text}
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Webcard;
