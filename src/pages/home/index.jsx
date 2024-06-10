import React from "react";
import Layout from "../../layouts/Layout";
import Hero from "../../components/Hero";
// import { datas } from "../../data/datas";

function Home() {
  // const data = datas;
  return (
    <Layout>
      <div>
        <Hero />
      </div>

      <div className="flex justify-center relative lg:py-10 ">
        <div className="stats stats-vertical lg:stats-horizontal lg:absolute shadow w-full lg:w-[800px] -top-10  lg:flex">
          <div className="stat flex flex-col items-center">
            <div className="stat-title">Downloads</div>
            <div className="stat-value">31K</div>
          </div>

          <div className="stat flex flex-col items-center">
            <div className="stat-title">New Users</div>
            <div className="stat-value">4,200</div>
          </div>

          <div className="stat flex flex-col items-center">
            <div className="stat-title">Pengguna</div>
            <div className="stat-value">1,200</div>
          </div>
        </div>
      </div>

      <div className="py-20 px-5">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          <div className="lg:col-span-2 lg:flex ">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-4xl text-white font-bold">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                quibusdam.
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-10 text-blue-400 flex "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                />
              </svg>

              <h1 className="text-2xl text-white font-bold">Keamanan</h1>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                quibusdam.
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-10 text-blue-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>

              <h1 className="text-2xl text-white font-bold">Efisien</h1>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                quibusdam.
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-10 text-blue-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                />
              </svg>

              <h1 className="text-2xl text-white font-bold">Terkontrol</h1>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                quibusdam.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <div className="w-full p-5">
              <img
                src="assets/foto/tracker.jpeg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <div className=" flex flex-col gap-2 p-5">
              <h1 className="text-white font-extrabold text-4xl">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <p className="text-gray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
                quo esse quasi itaque eaque!. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Debitis deserunt error ipsam
                quisquam soluta molestiae aliquid, omnis odit quod nostrum?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div
          className=" h-auto w-full"
          style={{
            backgroundImage: "url(assets/image/mikebirdy.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="h-full w-full bg-slate-200 bg-opacity-60 p-5">
            <div className="flex justify-center">
              <h2 className="font-semibold text-2xl">
                Haridkan beragam fitur canggih
              </h2>
            </div>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 pt-10">
                <div className="flex justify-center border-b-2 border-r-2 p-5 border-blue-400">
                  <div>
                    <div className="flex justify-center">
                      <div className="bg-blue-300 p-4 rounded-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="size-8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 pt-2">
                      <h3 className="font-semibold text-center">
                        Lorem ipsum dolor sit.
                      </h3>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center border-b-2 border-r-2 p-5 border-blue-400">
                  <div>
                    <div className="flex justify-center">
                      <div className="bg-blue-300 p-4 rounded-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="size-8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 pt-2">
                      <h3 className="font-semibold text-center">
                        Lorem ipsum dolor sit.
                      </h3>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center border-b-2 border-r-2 p-5 border-blue-400">
                  <div>
                    <div className="flex justify-center">
                      <div className="bg-blue-300 p-4 rounded-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="size-8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 pt-2">
                      <h3 className="font-semibold text-center">
                        Lorem ipsum dolor sit.
                      </h3>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center border-b-2 border-r-2 p-5 border-blue-400">
                  <div>
                    <div className="flex justify-center">
                      <div className="bg-blue-300 p-4 rounded-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="size-8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 pt-2">
                      <h3 className="font-semibold text-center">
                        Lorem ipsum dolor sit.
                      </h3>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center border-b-2 border-r-2 p-5 border-blue-400">
                  <div>
                    <div className="flex justify-center">
                      <div className="bg-blue-300 p-4 rounded-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="size-8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 pt-2">
                      <h3 className="font-semibold text-center">
                        Lorem ipsum dolor sit.
                      </h3>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center border-b-2 border-r-2 p-5 border-blue-400">
                  <div>
                    <div className="flex justify-center">
                      <div className="bg-blue-300 p-4 rounded-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="size-8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 pt-2">
                      <h3 className="font-semibold text-center">
                        Lorem ipsum dolor sit.
                      </h3>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <div className=" flex flex-col gap-2 p-5">
              <h1 className="text-white font-extrabold text-4xl">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <p className="text-gray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
                quo esse quasi itaque eaque!. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Debitis deserunt error ipsam
                quisquam soluta molestiae aliquid, omnis odit quod nostrum?
              </p>
            </div>
          </div>
          <div>
            <div className="w-full p-5">
              <img
                src="assets/foto/tracker.jpeg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
