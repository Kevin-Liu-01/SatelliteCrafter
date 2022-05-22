import './App.css';
import { ClockIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon,ChatIcon } from '@heroicons/react/outline'



function Main() {
  return ( <>
        <script src="../path/to/flowbite/dist/flowbite.js"></script>

  <div className="grow py-12 bg-white">
  <div className="grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:text-center" >
      <h2 className="text-base text-blue-500  font-semibold tracking-wide uppercase">Satellite Crafter</h2>
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Game Instructions
      </p>

    </div>

    <div className=" border-4 border-dashed border-gray-300 rounded-lg shadow-sm  mt-10 bg-gradient-to-l from-blue-800 to-blue-600 p-4">
      <div  className="bg-white rounded-lg" >
  <h2 >
    <button type="button" class="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" >
      <span>What is Satellite Crafter?</span>
    </button>
  </h2>
    <div class="p-5 border border-b-0 border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-900">
      <p class="mb-2 text-gray-500 dark:text-gray-400">Satellite Crafter is simply an interface for you to design satellites. Your designs may resemble existing satellites enough to replicate them!</p>
      <p class="text-gray-500 dark:text-gray-400">You can click on each satellite type in the sidebar on the left to learn more about each respective satellite.</p>
    </div>
  <h2 >
    <button type="button" class="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
      <span>How do you play?</span>
    </button>
  </h2>
  <div >
    <div class="p-5 border border-b-0 border-gray-200 bg-gray-100 dark:border-gray-700">
      <p class="mb-2 text-gray-500 dark:text-gray-400">First, you select a part for your satellite from the available parts column. Once selected, you can select an area on the crafting grid for you to place the part. You can repeat this up to 9 times until you are satisfied with your design. Click the "Identify" button to see if your satellite is a match.</p>
      <p class="text-gray-500 dark:text-gray-400">Indeed, this process is inspired by Minecraft's crafting system, but there are no defined "recipes."</p>
    </div>
  </div>
  <h2 id="">
    <button type="button" class="flex  justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
      <span>How do I learn about the satellites?</span>
    </button>
  </h2>
  <div>
  <div class="p-5 bg-gray-100 border border-b-0 border-gray-200 dark:border-gray-700">
      <p class="mb-2 text-gray-500 dark:text-gray-400">If you click on the list of satellites, you can bring up an individual satellite's information. </p>
      <p class="text-gray-500 dark:text-gray-400">You will have access to a brief explanation and additional resources.</p>
    </div>
  </div>
</div>
    </div>
  </div>
  
</div></>
)
        }

export default Main;
