import React, { useEffect } from "react";
import { useState } from "react";

import "./App.css";
import SideNav from "./layout/Nav";
import CallApiBook from "./Api/callApiBook";
import clsx from "clsx";
import {
  BookPlanIcon,
  CatalogIcon,
  DashboardIcon,
  ExitIcon,
  HistoryIcon,
  IndexIcon,
  MenuIcon,
  ProfileIcon,
  SavedIcon,
  SearchIcon,
  SettingIcon,
  ShoppingIcon,
} from "./assets/svg/svg";

function App() {
  // Khai bao clsx
  const sidebav = clsx(
    "focus:outline-none bg-primary-155 text-black w-14 h-14 border-none"
  );
  const button = clsx(
    "flex justify-center w-15 h-8 flex-wrap content-center mr-2 bg-white border-solid border-[1px] border-black rounded-3xl hover:bg-primary-152 hober:border-[1px] hover:border-solid hover:border-black"
  );
  const genreA = clsx("text-sm text-black");
  const genreButton = clsx(
    "flex justify-center w-17 h-8 flex-wrap content-center ml-2 bg-white border-solid border-[1px] border-black rounded-3xl hover:bg-primary-152 hober:border-[1px] hover:border-solid hover:border-black"
  );

  // useState

  const [isActive2, setIsActive2] = useState(true);
  const [isShow, setisShow] = useState(false);

  // Function

  const handleClick2 = () => {
    const handleSHow = () => {
      setisShow(!isShow);
    };
    setIsActive2((current1) => !current1);
    handleSHow();
  };

  return (
    <>
      <div className="Sidebav fixed left-0 top-0 right-auto bottom-0 z-50 w-fit h-auto">
        <div
          className={clsx(
            "sidebav flex flex-col top-0 bottom-0 items-center bg-primary-155 absolute pr-[10px"
          )}
        >
          <button className={sidebav}>
            <a href="index.html">
              <IndexIcon />
            </a>
          </button>
          <button className={sidebav}>
            <DashboardIcon />
          </button>
          <button className={sidebav}>
            <CatalogIcon />
          </button>
          <button className={sidebav}>
            <SavedIcon />
          </button>
          <button className={sidebav}>
            <ProfileIcon />
          </button>
          <button className={sidebav}>
            <BookPlanIcon />
          </button>
          <button className={sidebav}>
            <HistoryIcon />
          </button>
          <button className={sidebav}>
            <SettingIcon />
          </button>

          <button className={`${sidebav} `} onClick={handleClick2}>
            {isActive2 ? <MenuIcon /> : <ExitIcon />}
          </button>
        </div>
        <div className={clsx("Tabbav fixed top-0 left-14 bottom-0")}>
          <SideNav trigger={isShow} setTrigger={setisShow} />
        </div>
      </div>
      <div className={clsx("Index ml-12 w-full h-auto")}>
        <div
          className={clsx(
            "Header fixed top-0 left-14 w-11/12 mr-2 py-2 bg-white z-30"
          )}
        >
          <div className={clsx("header flex justify-between")}>
            <div
              className={clsx(
                "genre flex justify-center items-center flex-row"
              )}
            >
              <button className={genreButton}>
                <a className={genreA} href="#">
                  Journey
                </a>
              </button>
              <button className={genreButton}>
                <a className={genreA} href="#">
                  Biography
                </a>
              </button>
              <button className={genreButton}>
                <a className={genreA} href="#">
                  Business
                </a>
              </button>
              <button className={genreButton}>
                <a className={genreA} href="#">
                  Romance
                </a>
              </button>
            </div>
            <div
              className={clsx("profile text-right flex items-center flex-row")}
            >
              <div className={clsx("search flex")}>
                <input
                  className={clsx(
                    "rounded-2xl bg-primary-151 text-black mr-3 border-solid border-[1px] border-black pl-2"
                  )}
                  type="Text"
                  placeholder=" Search"
                />
                <button className={button}>
                  <SearchIcon />
                </button>
              </div>
              <button
                className={clsx(
                  "flex justify-center h-8 flex-wrap content-center mr-2 bg-white border-solid border-[1px] border-black rounded-full hover:bg-primary-152 hober:border-[1px] hover:border-solid hover:border-black"
                )}
              ></button>
              <button className={button}>
                <ShoppingIcon />
              </button>
            </div>
          </div>
        </div>
        <div className={clsx("Main flex mt-6 w-11/12 mr-0")}>
          <CallApiBook />
        </div>
      </div>
    </>
  );
}

export default App;
