import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setAntenna,
  setCamera,
  setInfared,
  setNuclear,
  setRadiation,
  setSolar,
  setThrusters,
  setTransponder,
  setPartData,
  setClock,
  setPartClicked,
  partData,
  setGridClicked,
} from "./storeSlice";

const PartsBar = () => {
  const dispatch = useDispatch();
  const selector = useSelector;

  const data = useSelector(partData);

  const onPartSelection = (element) => {
    console.log("Part selected");
    dispatch(setPartClicked(true));
    dispatch(setGridClicked(true));

    dispatch(setPartData(element));
    console.log("DATA:", data);
    dispatch(element.function);
    console.log("Select new grid");
  };
  const parts = [
    {
      icon: (
        <img
          className="block h-6 w-6 opacity-50"
          aria-hidden="true"
          src="https://www.svgrepo.com/show/81016/antenna.svg"
        />
      ),
      name: "Antenna",
      add: selector((state) => state.component.antenna),
      function: setAntenna(),
      picture:
        "https://www.pngkey.com/png/full/175-1750668_satellite-dish-png.png",
    },
    {
      icon: (
        <img
          className="block h-6 w-6 opacity-50"
          aria-hidden="true"
          src="https://www.svgrepo.com/show/149493/voice-recorder.svg"
        />
      ),
      name: "Transponder",
      add: selector((state) => state.component.transponder),
      function: setTransponder(),
      picture:
        "https://cdn.pixabay.com/photo/2021/04/22/21/10/radio-6200198_960_720.png",
    },
    {
      icon: (
        <img
          className="block h-6 w-6 opacity-50"
          aria-hidden="true"
          src="      https://www.svgrepo.com/show/195613/solar-panel.svg
          "
        />
      ),
      name: "Solar Panel",
      add: selector((state) => state.component.solar),
      function: setSolar(),
      picture: "https://pngimg.com/uploads/solar_panel/solar_panel_PNG141.png",
    },
    {
      icon: (
        <img
          className="block h-6 w-6 opacity-50"
          aria-hidden="true"
          src="  https://www.svgrepo.com/show/216429/radiation-nuclear.svg
          "
        />
      ),
      name: "Nuclear Reactor",
      add: selector((state) => state.component.nuclear),
      function: setNuclear(),
      picture:
        "https://www.nsenergybusiness.com/wp-content/uploads/sites/3/2020/10/Ed8VqJ0UwAA9-NZ-e1601654171214.png",
    },
    {
      icon: (
        <img
          className="block h-6 w-6 opacity-50"
          aria-hidden="true"
          src="https://www.svgrepo.com/show/100366/telescope.svg
      "
        />
      ),
      name: "Camera",
      add: selector((state) => state.component.camera),
      function: setCamera(),
      picture: "https://pngimg.com/uploads/camera_lens/camera_lens_PNG101.png",
    },
    {
      icon: (
        <img
          className="block h-6 w-6 opacity-50"
          aria-hidden="true"
          src="https://cdn-icons-png.flaticon.com/512/3325/3325008.png
      "
        />
      ),
      name: "Radiation Sensor",
      add: selector((state) => state.component.radiation),
      function: setRadiation(),
      picture:
        "https://www.baumer.com/medias/sys_master/images/images/h71/h7c/8961031766046/mamfile-1619743-720Wx540H-c.png",
    },
    {
      icon: (
        <img
          className="block h-6 w-6 opacity-50"
          aria-hidden="true"
          src="https://pic.onlinewebfonts.com/svg/img_500868.png
      "
        />
      ),
      name: "Infared Sensor",
      add: selector((state) => state.component.infared),
      function: setInfared(),
      picture: "https://i.stack.imgur.com/Pgokk.png",
    },
    {
      icon: (
        <img
          className="block h-6 w-6 opacity-50"
          aria-hidden="true"
          src="https://www.svgrepo.com/show/323125/rocket-thruster.svg
      "
        />
      ),
      name: "Thrusters",
      add: selector((state) => state.component.thrusters),
      function: setThrusters(),
      picture: "https://i.redd.it/ibs8lce7ik3z.png",
    },
    {
      icon: (
        <img
          className="block h-6 w-6 opacity-50"
          aria-hidden="true"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Doomsday_clock_%282_minutes%29.svg/1200px-Doomsday_clock_%282_minutes%29.svg.png
      "
        />
      ),
      name: "Atomic Clock",
      add: selector((state) => state.component.clock),
      function: setClock(),
      picture:
        "https://www.microchip.com/en-us/products/clock-and-timing/atomic-clocks/_jcr_content/root/responsivegrid/container/cardgrid/card2/image.coreimg.png/1606931393099/r1-v1-200106-ftd-graph-csac-5071a-lg-fig.png",
    },
  ];
  function sum () {
    const arr = parts.filter((part) => part > 0);
    console.log("Sum:"+arr)
    const reducer = (accumulator, curr) => accumulator + curr;
    return ( 9-arr.reduce(reducer));
  };
  return (
    <>
      <script src="../path/to/flowbite/dist/flowbite.js"></script>
      <aside class="w-[23%] min-h-[100%] mb-4" aria-label="Sidebar">
        <div class="overflow-y-auto pb-3 mt-4 bg-gray-300 dark:bg-gray-800 rounded-lg">
          <div className="shadow-lg mb-3 py-2 w-full text-gray-900 bg-gray-200 text-center font-bold text-xl">
            Available Parts: {parts.sum}
          </div>
          <ul class="space-y-2 px-3">
            {parts.map((listElement) => (
              <li
                className={
                  "w-full text-gray-400 bg-gray-200 hover:bg-gray-400 transition ease-in-out 150 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600  disabled:cursor-not-allowed opacity-90"
                }
              >
                <button
                  onClick={() => onPartSelection(listElement)}
                  disabled={selector((state) => state.component.partClicked)}
                  class={
                    selector((state) => state.component.partClicked)
                      ? "cursor-not-allowed flex w-full items-center p-2 text-base font-normal text-gray-400 bg-gray-200 transition ease-in-out 150 rounded-lg dark:text-white "
                      : "flex bg-gray-200 transition ease-in-out 150 w-full items-center p-2 text-base text-gray-700 font-normal rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
                  }
                >
                  {listElement.icon}
                  <span class="ml-3 flex grow text-left">
                    {listElement.name}
                  </span>
                  <span class="place-content-right ">
                    <span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                      {listElement.add}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default PartsBar;
