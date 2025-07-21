import BookImg from "../assets/images/atomic.png";
import NotGiving from "../assets/images/notgiving.png";
import Dad from "../assets/images/dad.png";
import Fault from "../assets/images/fault.png";
import Ikigai from "../assets/images/ikigai.png";

const Dashboard = () => {
  return (
    <div>
      <div class>
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h1>
          <br />

          <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div class="group relative">
              <img
                src={BookImg}
                alt="Front of men&#039;s Basic Tee in black."
                class="aspect-square w-full rounded-md object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Atomic Habits
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Black</p>
                </div>
              </div>
            </div>
            <div class="group relative">
              <img
                src={NotGiving}
                alt="Front of men&#039;s Basic Tee in white."
                class="aspect-square w-full rounded-md object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Subtle Art
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Mindfulness</p>
                </div>
              </div>
            </div>
            <div class="group relative">
              <img
                src={Ikigai}
                alt="Front of men&#039;s Basic Tee in dark gray."
                class="aspect-square w-full rounded-md object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Ikigai
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Productivity</p>
                </div>
                <p class="text-sm font-medium text-gray-900">Rs 250</p>
              </div>
            </div>
            <div class="group relative">
              <img
                src={Fault}
                alt="Front of men&#039;s Artwork Tee in peach with white and brown dots forming an isometric cube."
                class="aspect-square w-full rounded-md object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Artwork Tee
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Iso Dots</p>
                </div>
                <p class="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
