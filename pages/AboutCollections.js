import React from "react";

const AboutCollections = () => {
  return (
    <>
      <div className="carousel-inner px-5 relative overflow-hidden w-full flex justify-center">
        {/* <!--Slide 1--> */}
        <input
          className="carousel-open"
          type="radio"
          id="carousel-1"
          hidden
          name="carousel"
          defaultChecked
        />
        <div className="style-2 carousel-item absolute opacity-0">
          <h1 className="text-4xl text-yellow-50 font-bold mb-4">OUR STEPS</h1>
          <br />

          <ul className="list-disc leading-relaxed text-yellow-50 text-left ml-8 pl-8">
            <li>Track down and understand Client's requirements</li>
            <li>
              Plan and recommended customized solutions on each design
              requested.
            </li>
            <li>
              Be determined, always looking straight to pursuit ambitious goals{" "}
            </li>
          </ul>
        </div>
        <label
          htmfor="carousel-4"
          className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold home-text hover:text-white rounded-full hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
        >
          ‹
        </label>
        <label
          htmfor="carousel-2"
          className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold home-text hover:text-white rounded-full  hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
        >
          ›
        </label>

        {/* <!--Slide 2--> */}
        <input
          className="carousel-open"
          type="radio"
          id="carousel-2"
          name="carousel"
          hidden
          defaultChecked
        />
        <div className="style-2 carousel-item absolute opacity-0 bg-cover bg-right">
          <h1 className="text-4xl text-yellow-50 font-bold mb-4">
            OUR MISSION
          </h1>
          <br />

          <ul className="leading-relaxed text-yellow-50 text-left ml-8 pl-8">
            <li>
              ❖ To create values African fabrics to an international market and
              make a difference
            </li>
            <li>
              ❖ To promote emerging designers and re-launching of established
              brands
            </li>
            <li>
              ❖ To inspire moments of optimism, joy and happiness in Fashion
              Design
            </li>
          </ul>
        </div>
        <label
          htmfor="carousel-1"
          className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold home-text hover:text-white rounded-full  hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto"
        >
          ‹
        </label>
        <label
          htmfor="carousel-3"
          className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold home-text hover:text-white rounded-full  hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto"
        >
          ›
        </label>

        {/* <!--Slide 3--> */}
        <input
          className="carousel-open"
          type="radio"
          id="carousel-3"
          name="carousel"
          hidden
          defaultChecked
        />
        <div className="style-2 carousel-item absolute opacity-0 ">
          <h1 className="text-4xl text-yellow-50 font-bold mb-4">OUR VISION</h1>
          <br />

          <ul className="leading-relaxed text-yellow-50 text-left ml-8 pl-8">
            <li>
              ❖ To be a leading Fashion House with creative designs that defines
              the uniqueness of African fabrics
            </li>
            <li>
              ❖Connecting people around the World to enjoy African Fabrics
            </li>
            <li>❖ Helping people to realize their dreams in fashion</li>
          </ul>
        </div>
        <label
          htmfor="carousel-2"
          className="prev control-3 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold home-text hover:text-white rounded-full  hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto"
        >
          ‹
        </label>
        <label
          htmfor="carousel-4"
          className="next control-3 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold home-text hover:text-white rounded-full  hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto"
        >
          ›
        </label>

        {/* <!--Slide 4--> */}
        <input
          className="carousel-open"
          type="radio"
          id="carousel-4"
          name="carousel"
          hidden
          defaultChecked
        />
        <div className="style-2 carousel-item absolute opacity-0 bg-cover bg-right">
          <h1 className="text-4xl text-yellow-50 font-bold mb-4">
            OUR PHILOSOPHY
          </h1>
          <br />

          <ul className="list-disc leading-relaxed text-yellow-50 text-left ml-8 pl-8">
            <li>Be creative and innovative: coming up with new ideas</li>
            <li>Be Passionate and motivated: committed in heart and mind</li>
            <li>
              Be determined, always looking straight to pursuit ambitious goals
            </li>
            <li>Excellence is the quality of our products and services</li>
          </ul>
        </div>
        <label
          htmfor="carousel-3"
          className="prev control-4 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold home-text hover:text-white rounded-full  hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto"
        >
          ‹
        </label>
        <label
          htmfor="carousel-1"
          className="next control-4 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold home-text hover:text-white rounded-full  hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto"
        >
          ›
        </label>
        {/* <!-- Add additional indicators htmfor each slide--> */}
        {/* <ol className="carousel-indicators">
              <li className="inline-block mr-3">
                <label
                  htmfor="carousel-1"
                  className="carousel-bullet cursor-pointer block text-6xl text-gray-400 hover:text-gray-900"
                >
                  •
                </label>
              </li>
              <li className="inline-block mr-3">
                <label
                  htmfor="carousel-2"
                  className="carousel-bullet cursor-pointer block text-6xl text-gray-400 hover:text-gray-900"
                >
                  •
                </label>
              </li>
              <li className="inline-block mr-3">
                <label
                  htmfor="carousel-3"
                  className="carousel-bullet cursor-pointer block text-6xl text-gray-400 hover:text-gray-900"
                >
                  •
                </label>
              </li>
            </ol> */}
        <style jsx>
          {`
            .carousel-open:checked + .carousel-item {
              position: static;
              opacity: 100;
            }
            .carousel-item {
              •webkit-transition: opacity 0.6s ease-out;
              transition: opacity 0.6s ease-out;
            }
            #carousel-1:checked ~ .control-1,
            #carousel-2:checked ~ .control-2,
            #carousel-3:checked ~ .control-3,
            #carousel-4:checked ~ .control-4 {
              display: block;
            }
            .carousel-indicators {
              list-style: none;
              margin: 0;
              padding: 0;
              position: absolute;
              bottom: 2%;
              left: 0;
              right: 0;
              text-align: center;
              z-index: 10;
            }
            #carousel-1:checked
              ~ .control-1
              ~ .carousel-indicators
              li:nth-child(1)
              .carousel-bullet,
            #carousel-2:checked
              ~ .control-2
              ~ .carousel-indicators
              li:nth-child(2)
              .carousel-bullet,
            #carousel-3:checked
              ~ .control-3
              ~ .carousel-indicators
              li:nth-child(3)
              .carousel-bullet,
            #carousel-4:checked
              ~ .control-4
              ~ .carousel-indicators
              li:nth-child(4)
              .carousel-bullet {
              color: #880e4f;
            }
          `}
        </style>
      </div>
      {/* <style jsx>
        {`
             .carousel-open:checked+.carousel-item {
              position: static;
              opacity: 100;
            }
    
            .carousel-item {
              -webkit-transition: opacity 0.6s ease-out;
              transition: opacity 0.6s ease-out;
            }
    
            #carousel-1:checked~.control-1,
            #carousel-2:checked~.control-2,
            #carousel-3:checked~.control-3 {
              display: block;
            }
    
            .carousel-indicators {
              list-style: none;
              margin: 0;
              padding: 0;
              position: absolute;
              bottom: 2%;
              left: 0;
              right: 0;
              text-align: center;
              z-index: 10;
            }
    
            #carousel-1:checked~.control-1~.carousel-indicators li:nth-child(1) .carousel-bullet,
            #carousel-2:checked~.control-2~.carousel-indicators li:nth-child(2) .carousel-bullet,
            #carousel-3:checked~.control-3~.carousel-indicators li:nth-child(3) .carousel-bullet {
              color: #2b6cb0;
            }
        `}
      </style> */}
    </>
  );
};
export default AboutCollections;
