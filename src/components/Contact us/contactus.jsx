// ... (your other imports and code)

const Contactus = () => {
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
    <div class="bg-sky-200">
      <div class="grid grid-flow-col grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-4">
        <div class="flex items-center justify-center">
          <main class="max-w-screen-xl px-4 lg:px-16">
            <div class="text-left">
              <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                Enter Your
                <br />
                <span class="text-indigo-600">Headline</span>
              </h2>
              <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo.
              </p>
              <div class="mt-5 sm:mt-8 sm:flex justify-start">
                <div class="rounded-md shadow">
                  <a
                    href="#"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div class="w-full object-cover h-72 lg:w-full md:h-screen bg-cover bg-center">
          {" "}
          <section
            class="bg-blue-50 grid  max-w-xl  dark:bg-sky-200"
            id="contact"
          >
            <div class=" max-w-2xl p-12  ">
              <h1>hello</h1>
            </div>
            <div class="card h-fit max-w-xl p-5 md:p-12 bg-white" id="form">
              <form id="contactForm">
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
              </form>
              <a
                href="#"
                class="inline-flex items-center justify-center max-w-4xl px-5 py-3 text-base font-medium text-center text-white border bg-sky-500 hover:bg-gray-100 focus:ring-4 dark:hover:bg-sky-700 "
              >
                Дэлгэрэнгүй
              </a>
            </div>
          </section>{" "}
        </div>
      </div>
    </div>
  );
};

export default Contactus;
