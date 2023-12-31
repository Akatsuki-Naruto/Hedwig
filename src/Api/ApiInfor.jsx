import clsx from "clsx";
import { useState } from "react";
import { LeftIcon, RightIcon } from "../assets/svg/svg";

export default function ApiInfor(Book, props) { 
  const [showInfor1, setShowInfor1] = useState(true)


  const showdiv = clsx(
    "fixed text-black w-[28%] h-full flex flex-col top-12 right-0 bottom-0 z-40 bg-primary-155 px-5 items-center "
  );
  const showbtn = clsx(
    "text-black bg-primary-154 w-10 h-10 justify-center p-0 flex items-center fixed top-12 right-0 z-50 hover:bg-red-500"
  )

  const handleClick = () => {
    const handleSHow = () => {
      setShowInfor1(!showInfor1);
    };

    handleSHow()

  };

  return showInfor1 ? (
    <> 
      <button
        onClick={handleClick}
        className={showbtn}
      >
        X
      </button>
      <div className={showdiv}>
        <div className={clsx("authorBook text-lg font-bold text-black mb-5 mt-3")}>{Book.name}</div>

        <div>
          <img className={clsx("flex w-40 h-70")} src={Book.image} alt="" />
        </div>
        <div className={clsx("authorBook text-sm font-regular italic text-gray-600")}>{Book.author}</div>
        <div className={clsx("mt-3 w-2/3 h-40 overflow-auto mb-5")}>{Book.description}</div>
        <div className={clsx("priceBook flex rounded-lg w-10 font-bold text-white bg-primary-156 items-center justify-center")}>{Book.price}</div>
      </div>
      {/* {props.children} */}
    </>
  ) : ("");
}
