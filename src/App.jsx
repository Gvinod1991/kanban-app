import { useState } from "react";
import "./App.css";
import { Layout } from "./layout";

function App() {
  const [boardCount] = useState([1, 2, 3, 4]);

  return (
    <Layout>
      <div class="h-screen p-2">
        <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 gap-5">
          <div>
            <div class="flex flex-row justify-between items-center mb-2 mx-1">
              <div class="flex items-center">
                <h2 class="text-sm w-max px-1 rounded mr-2 text-[#717480]">
                  TO DO(4)
                </h2>
                <p class="text-gray-400 text-sm"></p>
              </div>
              <div class="flex items-center text-gray-300"></div>
            </div>
            <div class="grid grid-rows-2 gap-2">
              {boardCount.map((board) => (
                <div
                  key={board}
                  class="p-4 rounded shadow-sm rounded-md bg-[#2c2c37]"
                >
                  <h3 class="text-sm mb-3 text-[#e0e1e6]">
                    Build Ui for onboarding flow
                  </h3>
                  <p class="text-xs text-gray-500 mt-2">0 of 1 subtask</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div class="flex flex-row justify-between items-center mb-2 mx-1">
              <div class="flex items-center">
                <h2 class="text-sm w-max px-1 rounded mr-2 text-[#717480]">
                  DOING(4)
                </h2>
                <p class="text-gray-400 text-sm"></p>
              </div>
              <div class="flex items-center text-gray-300"></div>
            </div>
            <div class="grid grid-rows-2 gap-2">
              {boardCount.map((board) => (
                <div
                  key={board}
                  class="p-4 rounded shadow-sm rounded-md bg-[#2c2c37]"
                >
                  <h3 class="text-sm mb-3 text-[#e0e1e6]">
                    Build Ui for onboarding flow
                  </h3>
                  <p class="text-xs text-gray-500 mt-2">0 of 1 subtask</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div class="flex flex-row justify-between items-center mb-2 mx-1">
              <div class="flex items-center">
                <h2 class="text-sm w-max px-1 rounded mr-2 text-[#717480]">
                  DONE(4)
                </h2>
                <p class="text-gray-400 text-sm"></p>
              </div>
              <div class="flex items-center text-gray-300"></div>
            </div>
            <div class="grid grid-rows-2 gap-2">
              {boardCount.map((board) => (
                <div
                  key={board}
                  class="p-4 rounded shadow-sm rounded-md bg-[#2c2c37]"
                >
                  <h3 class="text-sm mb-3 text-[#e0e1e6]">
                    Build Ui for onboarding flow
                  </h3>
                  <p class="text-xs text-gray-500 mt-2">0 of 1 subtask</p>
                </div>
              ))}
            </div>
          </div>
          <div class="rounded px-2 py-2">
            <div class="flex flex-row justify-between items-center mb-0 mx-1">
              <div class="flex items-center">
                <h2 class="text-sm w-max px-1 rounded mr-2 text-[#717480]"></h2>
                <p class="text-gray-400 text-sm"></p>
              </div>
              <div class="flex items-center text-gray-300"></div>
            </div>
            <div class="grid align-center bg-[#2c2c37] justify-center">
              <div>+ New Column</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
