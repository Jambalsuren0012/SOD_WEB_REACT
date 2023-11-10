import React from "react";

const Contactsection = () => {
  const inputItems = [
    {
      name: "Нэр",
      image: "../../images/name.png",
    },
    {
      name: "Имайл",
      image: "../../images/mail.png",
    },
    {
      name: "Утасны дугаар",
      image: "../../images/phone.png",
    },
    {
      name: "Шаардлагатай мэдээлэл",
      image: "../../images/book-open.png",
    },
    {
      name: "Тэмдэглэл",
      image: "../../images/edit.png",
    },
  ];
  return (
    <div class="bg-neutral-50 px-6 py-12 text-center dark:bg-sky-100 md:px-12 lg:text-left">
      <div class="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <div class="grid  items-center gap-12 lg:grid-cols-2">
          <div class="mt-12 lg:mt-0 flex bg-white justify-between items-center">
            <div class="">
              <div>
                <div class="flex items-center">
                  <img class="h-2" src="../../images/pattern.png" alt="" />
                  <p class="px-4">Имайл хаяг</p>
                </div>
                <div class="flex items-center">
                  <img class="h-2" src="../../images/pattern.png" alt="" />
                  <p class="px-4">Утасны дугаар</p>
                </div>
              </div>
            </div>
            <div>
              <img class="h-40 w-40" src="../../images/sod logo.png" alt="" />
            </div>
          </div>

          <div class="my-12 lg:mb-0 rounded-lg bg-white ">
            <form
              class="w-full rounded-lg shadow-lg py-12 px-4 "
              id="contactForm w-full rounded-lg shadow-lg "
            >
              {inputItems.map((item, index) => (
                <div key={index} class="mb-6">
                  <div class="mx-0 mb-1 sm:mb-4">
                    <label
                      for={item.name.toLowerCase()}
                      class="pb-1 text-xs uppercase tracking-wider "
                    ></label>
                    <div class="flex relative items-center ">
                      <img
                        class="absolute ml-3 pointer-events-none"
                        src={item.image}
                        alt=""
                      />
                      <input
                        type="text"
                        id={item.name.toLowerCase()}
                        autocomplete={item.name.toLowerCase()}
                        placeholder={item.name}
                        class="mb-2 w-full rounded-md border border-sky-400 py-2 pl-10 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name={item.name.toLowerCase()}
                      />
                    </div>
                  </div>
                </div>
              ))}
              <button className="bg-sky-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4">
                Хүсэлт илгээх
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactsection;
// class="w-full rounded-lg shadow-lg dark:shadow-black/20"
