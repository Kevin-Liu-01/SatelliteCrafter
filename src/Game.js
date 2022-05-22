import "./App.css";
import Map from "./Map.js";
import SideBar from "./Sidebar.js";

import { Fragment, useState } from "react";

function Simulator() {
  const [start, setStart] = useState(true);
  const [planetPage, setPlanetPage] = useState(0);
  const [exoplanetPage, setExoplanetPagePage] = useState(0);

  return (
    <>
        <div className="animate-fade bg-black ease-in-out min-h-screen">
          <div className="flex grow shadow-sm relative justify-center ">
            <div className="grow inline-block bg-black  text-white  content-around  items-center justify-items-center">
              <div className="flex grow mx-4 my-4 bg-gray-100 rounded-lg border-2 border-dashed ">
              <SideBar />
              <div className="grow h-full px-4 w-full "> <Map /></div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Simulator;
