import { NextPage } from "next";
import { Scrollbars } from "react-custom-scrollbars";
import Head from "next/head";

const Startup: NextPage = () => {
  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      universal={true}
    >
      {" "}
      <Head>
        <title>Startup</title>
        <meta name="description" content={`Startup`} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={"Startup"} />
        <meta name="description" content={`Startup`} />
        <link rel="canonical" href={"https://helios-yamet.onrender.com"} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={"https://helios-yamet.onrender.com"} />
        <meta property="og:site_name" content="Trevion Cannon" />
        <meta property="og:image" content="/mainthumbnail.PNG" />
        <meta property="og:image:width" content="1040" />
        <meta property="og:image:height" content="600" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:widgets:csp" content="on" />
      </Head>
      <article className="ml-3 scrollbar text-left ">
        <section className="pr-5  mt-5 mb-12">
          <div className="flex flex-row justify-center items-center h-full rounded-lg bg-applearn bg-center bg-no-repeat bg-cover">
            <main className="flex flex-col lg:flex-row  backdrop-filter backdrop-blur-md bg-opacity-20 rounded-xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6">
              <div className="flex-1 p-4 lg:p-6">
                <div className="text-lg text-white mb-4 flex items-center">
                  <div className="md:flex items-cente text0 ">
                    <h1 className="pl-3 text-4xl font-bold block w-full py-2  lg:inline">
                    I wanna grow my career
                    </h1>
                    <ul>
                      <li>• Contribute to the success</li>
                      <li>• Clear and compelling vision</li>
                      <li>• Rapid growth and change</li>
                      <li>• Develop a unique value proposition</li>
                      <li>• Build a strong team with diverse skills and a shared passion for the startup's mission</li>
                      <li>• Collaborative and dynamic environment</li>
                      <li>• focus on customer feedback and continuous improvement</li>
                      <li>• Build and test product</li>
                      <li>• High level of responsibility</li>
                      <li>• Continuous learning and personal growth</li>
                      <li>• Building a network</li>
                    </ul>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </section>{" "}
      </article>
    </Scrollbars>
  );
};

export default Startup;
