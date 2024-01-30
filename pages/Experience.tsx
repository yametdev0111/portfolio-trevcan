import { NextPage } from "next";
import { Scrollbars } from "react-custom-scrollbars";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/legacy/image";
import { useMediaQuery } from "react-responsive";
import Head from "next/head";

const MyWork: NextPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 943px)" });
  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      universal={true}
    >
      <div>
        <Head>
          <title>Professional Experience</title>
          <meta name="description" content={`Professional Experience`} />
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:title" content={"Professional Experience"} />
          <meta name="description" content={`Professional Experience`} />
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
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="twitter:widgets:csp" content="on" />
        </Head>
        <div className={"text-center " + (isTabletOrMobile ? "p-3 pl-5 pb-60" : "pt-5")}>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block lg:text-5xl  font-bold leading-tight text-3xl text-white">
              Work
            </span>
            <span className="block pt-3 text-indigo-500 text-2xl">
              Industry Experience
            </span>
          </h2>
          <div className={"pt-3 w-full " + (isTabletOrMobile ? "timeline" : "h-full pb-60")}>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "linear-gradient(to right, #4A00E0, #8E2DE2)",
                  color: "#fff",
                }}
                contentArrowStyle={{ borderRight: "7px solid  #4A00E0", }}
                date="Feb 2022 - present"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={
                  <Image
                    src={"/megastream.png"}
                    width="500"
                    height="500"
                    className="rounded-full"
                    alt="MegaStream"
                  />
                }
              >
                <h3 className="vertical-timeline-element-title font-bold">
                  Full Stack Developer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  MegaStream
                </h4>
                <div className="text-left">
                  <p>• Developed and implemented a new reusable component library using storybook, tailwindcss, headless-ui, and resulting in a 20% reduction in development time and increased consistency across projects.</p>
                  <p>• Implemented React Js components, Redux ToolKit, GraphQL, PostgreSql, and Unit Testing.</p>
                  <p>• Collaborated with the database team to optimize database queries, resulting in a 30% reduction in query times and improved website performance.</p>
                  <p>• Integrated user-facing elements with server-side logic, resulting in a 25% reduction in development time and improved website performance using next.js SSR.</p>
                  <p>• Virtualized the servers using Docker for the test environments and dev environments needs, also configuration automation using Docker container.</p>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "linear-gradient(to right, #4A00E0, #8E2DE2)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  #4A00E0",
                }}
                date="May 2021 - Dec 2021"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={
                  <Image
                    src={"/devtown.png"}
                    width="500"
                    height="500"
                    className="rounded-full"
                    alt="DeveloperTown"
                  />
                }
              >
                <h3 className="vertical-timeline-element-title font-bold">
                  Software Engineer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  DeveloperTown
                </h4>
                <div className="text-left">
                  <p>• Developed a responsive website UI using HTML, CSS, and JavaScript that reduced overall page load speed by 15%.</p>
                  <p>• Designed CSS templates for use in all pages on the website working with CSS Background, positioning, text, border, margin, padding, and table.</p>
                  <p>• Have worked on Big data to generate the Rest API and integrated that API to Client side code using Node JS, Express JS.</p>
                  <p>• MEAN stack implementation, Angular JS Full-Stack generator, and actually run, edit, and deploy an application Responsible for design and development of the web pages from mock- ups.</p>
                  <p>• Used React Axios to call Web APIs to fetch data from backend and update the states in the store of Redux.</p>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "linear-gradient(to right, #4A00E0, #8E2DE2)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  #4A00E0",
                }}
                date="Mar 2019 - Apr 2021"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={
                  <Image
                    src={"/devtown.png"}
                    width="500"
                    height="500"
                    className="rounded-full"
                    alt="DeveloperTown"
                  />
                }
              >
                <h3 className="vertical-timeline-element-title font-bold">
                  Front-End Developer Intern
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  DeveloperTown
                </h4>
                <div className="text-left">
                  <p>• Responsible for creating RESTful Web Services to serve data to the front-end application in JSON format.</p>
                  <p>• Designed dynamic and multi-browser compatible pages using HTML, CSS, MVC, ReactJS, Backbone.js and JavaScript and also developer responsive interface using Bootstrap and used LESS, SASS for CSS .</p>
                </div>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </Scrollbars>
  );
};

export default MyWork;
