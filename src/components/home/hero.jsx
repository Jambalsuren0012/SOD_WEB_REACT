import React from "react";

const Herosection = () => {
  return (
    <section
      style={{
        backgroundImage: `url("../../images/herobg5.png")`,
        height: "100vh", // Set height to full viewport height
      }}
      className="bg-sky-500 bg-cover bg-no-repeat bg-center flex justify-center items-center"
    >
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mx-auto my-auto lg:col-span-7 ">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Технологи өөд тэмүүлнэ
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Технологийн чиг хандлагад тулгуурлан хэрэглэгчдийн <br /> хүсэл
            зорилгод нийцэж ажиллана
          </p>

          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white border bg-sky-500 hover:bg-gray-100 focus:ring-4 dark:hover:bg-sky-700"
          >
            Дэлгэрэнгүй
          </a>
        </div>
        <div
          style={{ height: 590, width: 590 }}
          className="hidden lg:mt-0 lg:col-span-5 lg:flex  -mr-40"
        >
          <video autoPlay loop muted className="object-cover">
            <source src="../../video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
