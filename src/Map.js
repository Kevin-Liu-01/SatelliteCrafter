import "./App.css";
import PartsBar from "./PartsBar.js";
import { useSelector, useDispatch } from "react-redux";
import React, { Fragment, useState } from "react";
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  LocationMarkerIcon,
  PencilIcon,
} from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";
import {
  partData,
  discoveredSatellite,setDiscoveredSatellite,
  gridClicked,
  gridOnePlaced,
  gridTwoPlaced,
  gridThreePlaced,
  gridFourPlaced,
  gridFivePlaced,
  gridSixPlaced,
  gridSevenPlaced,
  gridEightPlaced,
  gridNinePlaced,
  setGridOneContent,
  setGridTwoContent,
  setGridThreeContent,
  setGridFourContent,
  setGridFiveContent,
  setGridSixContent,
  setGridSevenContent,
  setGridEightContent,
  setGridNineContent,
  setPartClicked,
  setGridClicked,
  setOnePlaced,
  setTwoPlaced,
  setThreePlaced,
  setFourPlaced,
  setFivePlaced,
  setSixPlaced,
  setSevenPlaced,
  setEightPlaced,
  setNinePlaced,
} from "./storeSlice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MapChart = () => {
  const dispatch = useDispatch();
  const selector = useSelector;
  const gridClickedStatus = useSelector(gridClicked);
  const theDiscoveredSatellite = useSelector(discoveredSatellite);

  const satelliteGrid = [
    {
      id: 1,
      function: setGridOneContent,
      content: selector((state) => state.component.gridOneContent),
      status: useSelector(gridOnePlaced),
      updater: setOnePlaced(),
    },
    {
      id: 2,
      function: setGridTwoContent,
      content: selector((state) => state.component.gridTwoContent),
      status: useSelector(gridTwoPlaced),
      updater: setTwoPlaced(),
    },
    {
      id: 3,
      function: setGridThreeContent,
      content: selector((state) => state.component.gridThreeContent),
      status: useSelector(gridThreePlaced),
      updater: setThreePlaced(),
    },
    {
      id: 4,
      function: setGridFourContent,
      content: selector((state) => state.component.gridFourContent),
      status: useSelector(gridFourPlaced),
      updater: setFourPlaced(),
    },
    {
      id: 5,
      function: setGridFiveContent,
      content: selector((state) => state.component.gridFiveContent),
      status: useSelector(gridFivePlaced),
      updater: setFivePlaced(),
    },
    {
      id: 6,
      function: setGridSixContent,
      content: selector((state) => state.component.gridSixContent),
      status: useSelector(gridSixPlaced),
      updater: setSixPlaced(),
    },
    {
      id: 7,
      function: setGridSevenContent,
      content: selector((state) => state.component.gridSevenContent),
      status: useSelector(gridSevenPlaced),
      updater: setSevenPlaced(),
    },
    {
      id: 8,
      function: setGridEightContent,
      content: selector((state) => state.component.gridEightContent),
      status: useSelector(gridEightPlaced),
      updater: setEightPlaced(),
    },
    {
      id: 9,
      function: setGridNineContent,
      content: selector((state) => state.component.gridNineContent),
      status: useSelector(gridNinePlaced),
      updater: setNinePlaced(),
    },
  ];
  const data = useSelector(partData);
  const onClickGrid = (element) => {
    console.log("Tile selected.");
    console.log("DATA:", data);
    console.log("Clicked Before?:", gridClickedStatus);
    dispatch(element.updater);
    dispatch(setGridClicked(false));
    dispatch(element.function(data.picture));
    dispatch(setPartClicked(false));
    console.log("Clicked After?:", gridClickedStatus);
  };
  const finishBar = satelliteGrid.filter(
    (satPart) => satPart.status == true
  ).length;
  const identifier = () => {
    if(satelliteGrid.filter((satellitePart)=>((satellitePart.content.lastIndexOf("https://www.pngkey.com/png/full/175-1750668_satellite-dish-png.png"))>-1))){
      console.log("Comms detected")
      dispatch(setDiscoveredSatellite("Communications"))
    }
  };

  return (
    <div className="w-full mr-2 bg-gray-100">
      <div className="lg:flex lg:items-center lg:justify-between grow mt-3 bg-gray-100 pr-3">
        <div className="flex-1 min-w-0 ">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            {theDiscoveredSatellite}
          </h2>
          <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
            <div className="mt-2 flex items-center text-md text-gray-500">
              <BriefcaseIcon
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              Full-time
            </div>
            <div className="mt-2 flex items-center text-md text-gray-500">
              <LocationMarkerIcon
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              Remote
            </div>
            <div className="mt-2 flex items-center text-md text-gray-500">
              <CurrencyDollarIcon
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              $120k &ndash; $140k
            </div>
            <div className="mt-2 flex items-center text-md text-gray-500">
              <CalendarIcon
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              Closing on January 9, 2020
            </div>
          </div>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="hidden sm:block ml-3">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <LinkIcon
                className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
              Restart
            </button>
          </span>

          <span className="sm:ml-3">
            <button
              type="button"
              onClick={()=>identifier()}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Identify
            </button>
          </span>

          {/* Dropdown */}
          <Menu as="div" className="ml-3 relative sm:hidden">
            <Menu.Button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              More
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Edit
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      View
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      <div class="w-full my-4 bg-gray-200 rounded-full h-3 ">
        <div
          class="bg-gradient-to-r from-blue-400 to-blue-500  h-3 rounded-full"
          style={{ width: (finishBar / 9) * 100 + "%" }}
        ></div>
      </div>
      <nav
        class="flex py-3 px-5 text-gray-700 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Breadcrumb"
      >
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <a
              href="#"
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                class="mr-2 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Design
            </a>
          </li>
          <li>
            <div class="flex items-center">
              <svg
                class="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <a
                href="#"
                class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                Test
              </a>
            </div>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <svg
                class="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">
                Your Satellite
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div class="flex grow">
        <PartsBar />
        <div class="grow p-4 m-4 border-4 border-gray-400 border-dashed rounded-lg bg-[url(https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] grow grid grid-cols-3 rows-5 gap-4 inline-block">
          {satelliteGrid.map((tile) => (
            <button
              disabled={!gridClickedStatus || tile.status}
              onClick={() => onClickGrid(tile)}
              className={
                !tile.status
                  ? "cursor-not-allowed flex bg-gradient-to-r from-gray-500 to-blue-800 bg-gray-400 opacity-50 place-content-center text-2xl bold rounded-lg hover:opacity-60"
                  : "flex bg-gradient-to-r from-gray-500 to-blue-800 bg-gray-400 opacity-90 place-content-center text-2xl bold rounded-lg hover:opacity-100 transition ease-in-out 150"
              }
            >
              <div className="self-center font-bold ">
                {!tile.status?tile.content:
                <img
                  className="block h-24 w-24"
                  aria-hidden="true"
                  src={tile.content}
                />}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapChart;
