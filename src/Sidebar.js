import {
  PhoneIcon,
  StatusOnlineIcon,
  CheckIcon,
} from "@heroicons/react/outline";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import {
  discoveredSatellite,
  
} from "./storeSlice";

function Sidebar() {
  const [open, setOpen] = useState(false);

  const satellites = [
    {
      icon: (
        <img
          className="block h-6 w-6 opacity-60"
          aria-hidden="true"
          src="https://img.icons8.com/ios-glyphs/344/satellite-in-orbit.png"
        />
      ),
      name: "Communications",
      check: <CheckIcon className="block h-6 w-6" aria-hidden="true" />,
      state: "unchecked",
      popup: "",
    },
    {
      icon: (
        <img
          className="block h-6 w-6 opacity-60"
          aria-hidden="true"
          src="https://img.icons8.com/ios-glyphs/344/satellite-sending-signal.png"
        />
      ),
      name: "Remote Sensing",
      check: <CheckIcon className="block h-6 w-6" aria-hidden="true" />,
      state: "unchecked",
    },
    {
      icon: (
        <img
          className="block h-6 w-6 opacity-60"
          aria-hidden="true"
          src="https://img.icons8.com/ios-filled/344/satellite-sending-signal.png"
        />
      ),

      name: "Navigation",
      check: <CheckIcon className="block h-6 w-6" aria-hidden="true" />,
      state: "unchecked",
    },
    {
      icon: (
        <img
          className="block h-6 w-6 opacity-60"
          aria-hidden="true"
          src="https://img.icons8.com/glyph-neue/344/satellite-sending-signal.png"
        />
      ),

      name: "GPS",
      check: <CheckIcon className="block h-6 w-6" aria-hidden="true" />,
      state: "unchecked",
    },

    {
      icon: (
        <img
          className="block h-6 w-6 opacity-60"
          aria-hidden="true"
          src="https://img.icons8.com/ios-glyphs/344/satellite.png"
        />
      ),

      name: "Geostationary",
      check: <CheckIcon className="block h-6 w-6" aria-hidden="true" />,
      state: "unchecked",
    },
    {
      icon: (
        <img
          className="block h-6 w-6 opacity-60"
          aria-hidden="true"
          src="https://img.icons8.com/ios-filled/344/satellite-in-orbit.png"
        />
      ),

      name: "Geocentric Orbit",
      check: <CheckIcon className="block h-6 w-6" aria-hidden="true" />,
      state: "unchecked",
    },
    {
      icon: (
        <img
          className="block h-6 w-6"
          aria-hidden="true"
          src="https://www.svgrepo.com/show/50620/voyager.svg"
        />
      ),

      name: "Voyager 1",
      check: <CheckIcon className="block h-6 w-6" aria-hidden="true" />,
      state: "unchecked",
    },
    {
      icon: (
        <img
          className="block h-6 w-6"
          aria-hidden="true"
          src="https://www.svgrepo.com/show/275134/hubble-space-telescope.svg"
        />
      ),

      name: "Hubble S.T.",
      check: <CheckIcon className="block h-6 w-6" aria-hidden="true" />,
      state: "unchecked",
    },
    {
      icon: (
        <img
          className="block h-6 w-6"
          aria-hidden="true"
          src="https://www.svgrepo.com/show/37218/sputnik.svg"
        />
      ),

      name: "Sputnik",
      check: <CheckIcon className="block h-6 w-6" aria-hidden="true" />,
      state: "unchecked",
    },
  ];
  const theDiscoveredSatellite = useSelector(discoveredSatellite);

  return (
    <>
      <script src="../path/to/flowbite/dist/flowbite.js"></script>

      <aside class="flex grow w-[25%] min-h-[100%] mr-3 flex shadow-lg " aria-label="Sidebar">
        <div class="overflow-y-auto py-4 px-3 bg-gray-200 dark:bg-gray-800 ">
          <ul class="space-y-2">
            <li>
              <a
                
                class="block py-2  text-2xl font-bold leading-7 text-gray-900 sm:text-2xl sm:truncate"
              >
                Assembled Satellites:
              </a>
            </li>
            {satellites.map((listElement) => (
              <li
                id={listElement.name + 1}
                className=" w-full text-gray-400 bg-gray-300 hover:bg-gray-200  focus:ring-4 focus:ring-blue-300 transition ease-in-out 150 focus:outline-none transition ease-in-out 150 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
              >
                <button
                  onClick={() => setOpen(!open)}
                  type="button"
                  data-dropdown-toggle={listElement.name}
                  data-modal-toggle={listElement.name}
                  class="flex  justify-items-stretch items-center w-full p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 transition ease-in-out 150 dark:hover:bg-gray-700 transition ease-in-out 150 hover:ring-4 hover:ring-blue-300 transition ease-in-out 150 hover:outline-none transition ease-in-out 150  focus:outline-none "
                >
                  {listElement.icon}
                  <span class="ml-3 grow text-left">{listElement.name}</span>
                  <span class=" ml-9 ">
                    {listElement.check}
                  </span>
                </button>
                {/* MODAL STARTS HERE */}
                <div
                  id={listElement.name}
                  tabindex="-1"
                  aria-hidden="true"
                  className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0  md:h-full"
                >
                  <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                          {listElement.name} Satellites
                        </h3>
                        <button
                          type="button"
                          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          data-modal-toggle={listElement.name}
                        >
                          <svg
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <div class="p-6 space-y-6">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/1/18/AEHF_1.jpg"
                          alt="Communications Satellite"
                        ></img>
                        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          Communications are satellites placed in orbit around
                          the earth in order to relay television, radio, and
                          phone signals. Communication satellites are designed
                          to relay several, or more usually many, signals
                          simultaneously. In some cases there may be a separate
                          transponder for each carrier; this is typical of
                          broadcasting satellites and of satellites used for
                          distributing television signals to terrestrial
                          broadcasting stations.
                        </p>
                        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          Source:
                          <a
                            className="italic"
                            href="https://www.sciencedirect.com/topics/engineering/communication-satellites"
                          >
                            ScienceDirect
                          </a>
                        </p>
                      </div>
                      <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                        <button
                          data-modal-toggle="Communications"
                          type="button"
                          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Cool!
                        </button>
                        <a
                          href="https://www.sciencedirect.com/topics/engineering/communication-satellites"
                          type="button"
                          class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div
            id="dropdown-cta"
            class="p-4 mt-6 bg-blue-200 rounded-lg dark:bg-blue-900"
            role="alert"
          >
            <div class="flex items-center mb-3">
              <span class="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">
                Beta
              </span>
              <button
                type="button"
                class="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
                data-collapse-toggle="dropdown-cta"
                aria-label="Close"
              >
                <span class="sr-only">Close</span>
                <svg
                  class="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <p class="mb-3 text-sm text-blue-900 dark:text-blue-400">
              Welcome to Satellite Crafter! You'll have the opportunity to make a satellite from certain parts, and then see what kind of satellite it is! You may also get a special satellite...
            </p>
            <a
              class="text-sm text-blue-900 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              href="https://www.nasa.gov/audience/forstudents/5-8/features/nasa-knows/what-is-a-satellite-58.html"
            >
              Learn about Satellites
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
