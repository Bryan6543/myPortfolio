"use client";

import Image from "next/image";
import Wrapper from "../components/subComponents/Wrapper";
import ButtonV1 from "../components/subComponents/ButtonV1";
import { ImInstagram } from "react-icons/im";
import { MdMail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

export default function Page() {
  return (
    // global container
    <div className="bg-black w-full h-screen">
      {/* Main Container */}
      <div>
        {/* Picture and Who I am Section */}
        <div className="w-full flex justify-center items-center">
          <Wrapper>
            <div className="text-primary flex text-center h-[94.2vh] justify-center items-center flex-col gap-4">
              <Image
                src="/bryan_fernando_professional_robotic.png"
                width={1024}
                height={1536}
                alt="bryan_fernando_professional_robotic_image"
                priority
                className="w-[230px]"
              />
              <h2 className="text-sm font-antic">Follower of my Passion</h2>
              <h1 className="text-5xl font-anta">Who I am</h1>
              <p className="text-sm font-antic">
                Always have been interested and in love to Code.
              </p>
              <p className="text-sm font-antic">
                A breif introductions to who I am and what I do as a developer
              </p>
            </div>
          </Wrapper>
        </div>
        {/* About Me Description */}
        <div className="text-primary py-10 flex justify-center items-center bg-black">
          <Wrapper>
            <div className="flex flex-col text-center gap-10 border border-l-0 border-b-0 rounded-3xl py-20 px-5">
              <h1 className="text-5xl font-anta">About Me</h1>
              <p className="text-sm font-antic leading-6">
                Description about me and what I like to do Description about me
                and what I like to do Description about me and what I like to do
                Description about me and what I like to do Description about me
                and what I like to do Description about me and what I like to do
                Description about me and what I like to do Description about me
                and what I like to do Description about me and what I like to do
              </p>
            </div>
          </Wrapper>
        </div>
        {/* Caption Wording */}
        <div className="text-primary py-32 flex justify-center items-center bg-black">
          <Wrapper>
            <h2 className="text-4xl font-anton text-center leading-[55px]">
              Out of the Ordinary and Creative side of Web Development
            </h2>
          </Wrapper>
        </div>
        {/* End Main Container */}
        <div className="bg-black py-10">
          <Wrapper>
            {/* View my CV Section */}
            <div className="flex justify-center items-center flex-col gap-14 w-full h-full py-10">
              <h1 className="text-4xl text-center font-anton text-primary">
                View My CV
              </h1>
              <ButtonV1 className="text-white " />
            </div>
            {/* Contact Section */}
            <div className="pt-28 flex flex-col justify-center items-center py-10">
              <div className="flex flex-col gap-10 items-center">
                <h1 className="text-center font-anton text-primary text-5xl">
                  Contact
                </h1>
                <p className="text-center font-antic text-primary w-[80%] ">
                  If you want to know anything more out of curiosity. I invite
                  you to contact me
                </p>
                <div className="flex *:size-6 *:fill-white justify-center gap-5">
                  <MdMail /> <BsGithub /> <LiaLinkedin /> <ImInstagram />
                </div>
                <div className="w-full">
                  <form action="" className="flex flex-col w-full gap-5">
                    <input
                      className="bg-black border-b py-3 pl-4"
                      type="text"
                      placeholder="Name"
                    />
                    <input
                      className="bg-black border-b py-3 pl-4"
                      type="email"
                      name=""
                      id=""
                      placeholder="Email"
                    />
                    <input
                      className="bg-black border-b pb-20 pt-5 pl-4"
                      type="text"
                      placeholder="How can I help you?"
                    />
                    <input
                      type="submit"
                      value="Send"
                      className="bg-black px-8 self-end py-3 rounded-3xl text-white border"
                    />
                  </form>
                </div>
              </div>
            </div>
          </Wrapper>
          {/* Copywrigt Section */}
          <div className="text-[10px] text-primary flex justify-between bg-white/5 p-2">
            <p>@Bryan Fernando 2025</p>
            <p>Powered by PygeonSolutions.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
