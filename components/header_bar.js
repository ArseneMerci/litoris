import React, { useState, useEffect } from "react";
const HeaderBar = () => {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  return (
    <>
      <nav className="text-sm text-white bg-pink-900 py-2 flex flex-nowrap w-full text-center ">
        <p className="pl-4"> Time : {date.toLocaleTimeString()}</p>
        <p className="w-3/4">
          Order today and get a discount of ALL orders <span id="spin"></span>
        </p>
        <p className=""> Date : {date.toLocaleDateString()}</p>
      </nav>
    </>
  );
};
export default HeaderBar;
