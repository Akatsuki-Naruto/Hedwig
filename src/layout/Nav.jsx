import React, { useState } from "react";
import { Sidenav, Nav } from "rsuite";

import clsx from "clsx";

const SideNav = (props) => {
  const textTabBav = clsx("py-4")

  return props.trigger ? (
    <>
      <div className={clsx("bg-primary-150 h-full pr-6")}>
        <div className={clsx("focus:outline-none flex flex-col text-black border-none rounded-xl items-stretch bg-white w-32 ...")}>
          <div className={textTabBav}>Hedwig</div>
          <div className={textTabBav}>Dashboard</div>
          <div className={textTabBav}>Catalog</div>
          <div className={textTabBav}>Saved</div>
          <div className={textTabBav}>Profile</div>
          <div className={textTabBav}>Book Plans</div>
          <div className={textTabBav}>History</div>
          <div className={textTabBav}>Setting</div>
        </div>
      </div>

      {props.children}
    </>
  ) : (
    ""
  );
};

export default SideNav;
