"use client";

import Image from "next/image";
import Wrapper from "../components/subComponents/Wrapper";
import Background from "../components/Background";

const projectList = [
  {
    heading: "Heading 1",
    image: "image/heading/alt",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae rerum aliquam porro eveniet nobis culpa, earum optio. Unde nesciunt rem itaque officia possimus sit blanditiis sunt. Laborum explicabo veniam quod aperiam obcaecati!",
    destination: "/",
  },
  {
    heading: "Heading 2",
    image: "image/heading/alt",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae rerum aliquam porro eveniet nobis culpa, earum optio. Unde nesciunt rem itaque officia possimus sit blanditiis sunt. Laborum explicabo veniam quod aperiam obcaecati!",
    destination: "/",
  },
  {
    heading: "Heading 3",
    image: "image/heading/alt",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae rerum aliquam porro eveniet nobis culpa, earum optio. Unde nesciunt rem itaque officia possimus sit blanditiis sunt. Laborum explicabo veniam quod aperiam obcaecati!",
    destination: "/",
  },
  {
    heading: "Heading 4",
    image: "image/heading/alt",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae rerum aliquam porro eveniet nobis culpa, earum optio. Unde nesciunt rem itaque officia possimus sit blanditiis sunt. Laborum explicabo veniam quod aperiam obcaecati!",
    destination: "/",
  },
];

export default function Page() {
  let position = 0;
  console.log((projectList.length - 1) * 110);

  const translateRight = () => {
    if (position === (projectList.length - 1) * 110) {
      position = 0;
      console.log("Right Clicked");
      console.log(position);
    } else {
      position = position + 110;
      console.log("Right Clicked");
      console.log(position);
    }
  };

  const translateLeft = () => {
    if (position === 0) {
      position = 330;
      console.log("Left Clicked");
      console.log(position);
    } else {
      position = position - 110;
      console.log("Left Clicked");
      console.log(position);
    }
  };

  return (
    <div className="relative flex items-center justify-start w-full h-screen overflow-hidden text-primary">
      <Background />
      <Wrapper>
        <div className="flex flex-col gap-10 z-50">
          {/* Navigation Start */}
          <div className="flex justify-start items-center gap-5">
            <div>
              <svg
                onClick={translateLeft}
                width="18"
                height="34"
                viewBox="0 0 18 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 17L18 0V34L0 17Z" fill="black" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-anta">Projects</h1>
            </div>
            <div>
              <svg
                onClick={translateRight}
                width="18"
                height="34"
                viewBox="0 0 18 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 17L-3.8147e-06 34L-8.42323e-07 -1.57361e-06L18 17Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          {/* Navigation End*/}
          <div className="flex overflow-hidden w-full">
            {projectList.map((index) => (
              <div
                key={index.heading}
                className="flex flex-col gap-10 mb-[15vh] w-full"
              >
                <div>
                  <Image
                    src=""
                    alt={index.image}
                    className="w-full rounded-3xl h-[30vh]"
                  />
                </div>
                <div className="font-anta gap-1 flex flex-col text-base">
                  <h1 className="font-black">{index.heading}</h1>
                  <p></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
