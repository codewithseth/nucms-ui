import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

const CitizenTrend = () => {
  return (
    <div>
      <Navbar />
      <section className="py-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg font-semibold text-gray-900">Trending Now</h2>
          <section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6">
            <div className="flex flex-wrap items-center justify-between mb-8">
              <h2 className="mr-10 text-4xl font-bold leading-none md:text-5xl">Continually Scale Results</h2>
              <Link
                to={"#"}
                className="block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
              >
                Go to insights
              </Link>
            </div>

            <div className="flex flex-wrap -mx-4">
              <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABbXr4i-QODqhy7tofHYmTYh05rYPktzacw&s"
                  alt="Card img"
                  className="object-cover object-center w-full h-48"
                />
                <div className="flex flex-grow">
                  <div className="triangle"></div>
                  <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text">
                    <div>
                      <Link
                        to={"#"}
                        className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600"
                      >
                        Reliable Schemas
                      </Link>
                      <Link
                        to={"#"}
                        className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600"
                      >
                        What Zombies Can Teach You About Food
                      </Link>
                      <p className="mb-4">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla delectus corporis commodi
                        aperiam, amet cupiditate?
                      </p>
                    </div>
                    <div>
                      <Link
                        to={"#"}
                        className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
                      >
                        Read More{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                <img
                  src="https://www.pacegallery.com/media/images/16_9-2.width-2000.png"
                  alt="Card img"
                  className="object-cover object-center w-full h-48"
                />
                <div className="flex flex-grow">
                  <div className="triangle"></div>
                  <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                    <div>
                      <Link
                        to={"#"}
                        className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600"
                      >
                        Client-based Adoption
                      </Link>
                      <Link
                        to={"#"}
                        className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600"
                      >
                        Old School Art
                      </Link>
                      <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla delectus.</p>
                    </div>
                    <div>
                      <Link
                        to={"#"}
                        className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
                      >
                        Read More{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                <img
                  src="https://ioflood.com/blog/wp-content/uploads/2023/10/java_logo_dice_random.jpg"
                  alt="Card img"
                  className="object-cover object-center w-full h-48"
                />
                <div className="flex flex-grow">
                  <div className="triangle"></div>
                  <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                    <div>
                      <Link
                        to={"#"}
                        className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600"
                      >
                        Intellectual Capital
                      </Link>
                      <Link
                        to={"#"}
                        className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600"
                      >
                        5 Things To Do About Rain
                      </Link>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, neque. Eius, ea possimus.
                      </p>
                    </div>
                    <div>
                      <Link
                        to={"#"}
                        className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
                      >
                        Read More{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CitizenTrend;
