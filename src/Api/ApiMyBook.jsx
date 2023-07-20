import React from "react";
import { PlayIcon } from "../assets/svg/svg";
import clsx from "clsx";

export default function ApiMyBook(MyBook) {
  return (
    <>
      <div className={clsx("text-black grid grid-flow-col")} >
        <div className={clsx("flex pr-4")}>
          <img className={clsx("flex w-24 h-40")} src={MyBook.image} alt="" />
        </div>
        <div className={clsx("grid grid-flow-row grid-rows-2 items-center ")}>
          <div className={clsx("flex flex-col")}>
            <div className={clsx(" font-bold text-lg")}>{MyBook.name}</div>
            <div
              className={clsx(
                "authorBook text-sm font-regular italic text-gray-600"
              )}
            >
              {MyBook.author}
            </div>
          </div>

          <button
            className={clsx("bg-white p-0 hover:bg-white")}
            onClick={() => MyBook.getMyBooks(MyBook.id)}
          >
            <img
              className={clsx(
                "bg-primary-154 hover:bg-white xl:w-16 xl:h-16 lg:w-10 lg:h-10 md:w-8 md:h-8 flex rounded-full"
              )}
              src={MyBook.button}
              alt=""
            />
          </button>
        </div>
      </div>

    </>
  );
}
