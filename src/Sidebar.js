import {
  PhoneIcon,
  StatusOnlineIcon,
  CheckIcon,
} from "@heroicons/react/outline";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import { discoveredSatellite } from "./storeSlice";

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
      summary:
        "Communications are satellites placed in orbit around the earth in order to relay television, radio, and phone signals. Communication satellites are designed to relay several, or more usually many, signals simultaneously. In some cases there may be a separate transponder for each carrier; this is typical of broadcasting satellites and of satellites used for distributing television signals to terrestrial broadcasting stations. ",
      image:
        "https://www.nato.int/nato_static_fl2014/assets/pictures/images_mfu/2021/4/stock/210423-satcom.jpg",
      source: "ScienceDirect",
      learnMore:
        "https://www.esa.int/Applications/Telecommunications_Integrated_Applications/Telecommunications_satellites",
      sourceLink:
        "https://www.sciencedirect.com/topics/engineering/communication-satellites",
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
      summary:
        "Remote sensing satellites are used as spy satellites or for environmental monitoring, meteorology, and cartography. The most common type are Earth-imaging satellites, which take satellite images similar to aerial photographs.",
      image:
        "https://cdn.thomasnet.com/insights-images/embedded-images/a243dfcc-dfd4-45ed-a3c2-ebb08d726348/1.png",
      source: "ThomasNet",
      learnMore:
        "https://earthdata.nasa.gov/learn/backgrounders/remote-sensing",
      sourceLink:
        "https://www.thomasnet.com/articles/plant-facility-equipment/remote-sensing-satellite/#:~:text=Remote%20sensing%20satellites%20are%20also,images%20similar%20to%20aerial%20photographs.",
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
      summary:
        "Global Navigation Satellite Systems (GNSS) include constellations of Earth-orbiting satellites that broadcast their locations in space and time, of networks of ground control stations, and of receivers that calculate ground positions by trilateration. GNSS are used in all forms of transportation: space stations, aviation, maritime, rail, road and mass transit. They are used to control computer networks, air traffic, power grids and more.      ",
      image:
        "https://www.hytera.com/iwov-resources/hytera/02_products/4_banner_image/catagory_satellite_banner.jpg",
      source: "UNOOSA",
      learnMore:
        "https://www.esa.int/Applications/Navigation/How_satellite_navigation_works",
      sourceLink: "https://www.unoosa.org/oosa/en/ourwork/psa/gnss/gnss.html",
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
      summary:
        "GPS satellites carry atomic clocks that provide extremely accurate time. The time information is placed in the codes broadcast by the satellite so that a receiver can continuously determine the time the signal was broadcast. The signal contains data that a receiver uses to compute the locations of the satellites and to make other adjustments needed for accurate positioning. The receiver uses the time difference between the time of signal reception and the broadcast time to compute the distance, or range, from the receiver to the satellite. ",
      image:
        "https://www.lockheedmartin.com/content/dam/lockheed-martin/space/photo/fifth-gps-iii/GPSIIIF_Landscape.jpg.pc-adaptive.full.medium.jpeg",
      source: "FAA",
      learnMore: "https://www.gps.gov/systems/gnss/",
      sourceLink:
        "https://www.faa.gov/about/office_org/headquarters_offices/ato/service_units/techops/navservices/gnss/gps/howitworks",
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
      summary:
        "A geostationary satellite is an earth-orbiting satellite, placed at an altitude of approximately 35,800 kilometers (22,300 miles) directly over the equator, that revolves in the same direction the earth rotates (west to east). At this altitude, one orbit takes 24 hours, the same length of time as the earth requires to rotate once on its axis. The term geostationary comes from the fact that such a satellite appears nearly stationary in the sky as seen by a ground-based observer. BGAN, the new global mobile communications network, uses geostationary satellites.",
      image:
        "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2021/11/agile_micro-geostationary_satellite/23821425-1-eng-GB/Agile_micro-geostationary_satellite_pillars.png",
      source: "ScienceDirect",
      learnMore:
        "https://www.esa.int/Applications/Telecommunications_Integrated_Applications/Small_Geostationary_Satellite_SGEO",
      sourceLink:
        "https://www.sciencedirect.com/topics/earth-and-planetary-sciences/geostationary-satellite",
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
      summary:
        "Satellites placed in geocentric orbit appear in the same spot in the sky relative to spectators on Earth. This is especially useful for global positioning satellites or surveillance satellites that are required to constantly acquire signals from a single, precise location on the surface of the Earth.",
      image:
        "https://www.worldatlas.com/r/w768/upload/fd/3a/fc/shutterstock-734071369-2.jpg",
      source: "World Atlas",
      learnMore:
        "https://www.esa.int/Enabling_Support/Space_Transportation/Types_of_orbits",
      sourceLink:
        "https://www.worldatlas.com/articles/what-is-geocentric-orbit.html",
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
      summary:
        "Voyager 1 is a space probe launched by NASA on September 5, 1977, as part of the Voyager program to study the outer Solar System and interstellar space beyond the Sun's heliosphere.",
      image:
        "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F210513191819-02-file-illustration-nasa-voyager-1.jpg",
      source: "NASA",
      learnMore: "https://www.space.com/17688-voyager-1.html",
      sourceLink: "https://voyager.jpl.nasa.gov/",
    },
    {
      icon: (
        <img
          className="block h-6 w-6"
          aria-hidden="true"
          src="https://www.svgrepo.com/show/275134/hubble-space-telescope.svg"
        />
      ),

      name: "Hubble Telescope",
      check: <CheckIcon className="block h-6 w-6" aria-hidden="true" />,
      state: "unchecked",
      summary:
        "The Hubble Space Telescope is a space telescope that was launched into low Earth orbit in 1990 and remains in operation. It was not the first space telescope, but it is one of the largest and most versatile, renowned both as a vital research tool and as a public relations boon for astronomy.",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HST-SM4.jpeg",
      source: "NASA",
      learnMore: "https://hubblesite.org/",
      sourceLink: "https://www.nasa.gov/mission_pages/hubble/main/index.html",
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
      summary:
        "Sputnik 1 was the first artificial Earth satellite. It was launched into an elliptical low Earth orbit by the Soviet Union on 4 October 1957 as part of the Soviet space program. It orbited for three weeks before its batteries ran out.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Sputnik_asm.jpg/800px-Sputnik_asm.jpg",
      source: "NASA",
      learnMore: "https://www.britannica.com/technology/Sputnik",
      sourceLink: "https://history.nasa.gov/sputnik.html",
    },
  ];
  const theDiscoveredSatellite = useSelector(discoveredSatellite);

  return (
    <>
      <script src="../path/to/flowbite/dist/flowbite.js"></script>

      <aside
        class="flex grow w-[25%] min-h-[100%] mr-1 flex shadow-lg rounded-lg "
        aria-label="Sidebar"
      >
        <div class="rounded-l-lg overflow-y-auto py-2 px-4 bg-gradient-to-l from-blue-900 to-gray-800 shadow-lg">
          <ul class="space-y-2">
            <li>
              <a class="block py-2  text-2xl font-bold leading-7 text-gray-300 sm:text-2xl sm:truncate">
                Assembled Satellite:
              </a>
            </li>
            {satellites.map((listElement) => (
              <>
                {theDiscoveredSatellite === listElement.name ? (
                  <li
                    id={listElement.name + 1}
                    className=" w-full text-gray-400 bg-green-300 hover:bg-gray-200  focus:ring-4 focus:ring-blue-300 transition ease-in-out 150 focus:outline-none transition ease-in-out 150 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
                  >
                    <button
                      onClick={() => setOpen(!open)}
                      type="button"
                      data-dropdown-toggle={listElement.name}
                      data-modal-toggle={listElement.name}
                      class="flex  justify-items-stretch items-center w-full p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-green-300 transition ease-in-out 150 dark:hover:bg-green-700 transition ease-in-out 150 hover:ring-4 hover:ring-green-200 transition ease-in-out 150 hover:outline-none transition ease-in-out 150  focus:outline-none "
                    >
                      {listElement.icon}
                      <span class="ml-3 grow text-left">
                        {listElement.name}
                      </span>
                      <span class=" ml-9 text-green-600">
                        {listElement.check}
                      </span>
                    </button>
                  </li>
                ) : (
                  <li
                    id={listElement.name + 1}
                    className=" w-full text-gray-400 bg-gray-300 hover:bg-gray-200  focus:ring-4 focus:ring-blue-300 transition ease-in-out 150 focus:outline-none transition ease-in-out 150 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
                  >
                    <button
                      onClick={() => setOpen(!open)}
                      type="button"
                      data-modal-toggle={listElement.name}
                      class="flex  justify-items-stretch items-center w-full p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 transition ease-in-out 150 dark:hover:bg-gray-700 transition ease-in-out 150 hover:ring-4 hover:ring-blue-300 transition ease-in-out 150 hover:outline-none transition ease-in-out 150  focus:outline-none "
                    >
                      {listElement.icon}
                      <span class="ml-3 grow text-left ">
                        {listElement.name}
                      </span>
                      <span class=" ml-9 text-gray-400">{listElement.check}</span>
                    </button>
                  </li>
                )}
                {/*"MODAL"*/}
                <div
                  id={listElement.name}
                  tabindex="-1"
                  aria-hidden="true"
                  className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto z-50 "
                >
                  <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                          {listElement.name} Satellite
                        </h3>
                        <button
                          type="button"
                          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          data-modal-toggle={listElement.name}
                          data-bs-target={listElement.name}
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
                        <img src={listElement.image} alt="Satellite"></img>
                        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          {listElement.summary}
                        </p>
                        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          Source:{" "}
                          <a className="italic" href={listElement.sourceLink}>
                            {listElement.source}
                          </a>
                        </p>
                      </div>
                      <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                        <button
                          data-modal-toggle={listElement.name}
                          type="button"
                          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Cool!
                        </button>
                        <a
                          href={listElement.learnMore}
                          type="button"
                          class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </ul>
          <div
            id="dropdown-cta"
            class="p-4 mt-6 mb-4 bg-blue-200 rounded-lg dark:bg-blue-900"
            role="alert"
          >
            <div class="flex items-center ">
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
              Welcome to Satellite Crafter! You'll have the opportunity to make
              a satellite from certain parts, and then see what kind of
              satellite it is! You may also get a special satellite...
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
