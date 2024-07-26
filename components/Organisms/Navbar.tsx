/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Squeeze as Hamburger } from "hamburger-react";
import { LegacyRef, useEffect, useState } from "react";
import { FaRegLifeRing } from "react-icons/fa";
import { Transition } from "@headlessui/react";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";
import { useRouter } from "next/router";
import { scaleRotate as Menu } from "react-burger-menu";
import Image from "next/image";
import { GoHome, GoPeople } from "react-icons/go";
import { SiReacthookform } from "react-icons/si";
import { motion } from "framer-motion";
import { RiBuildingLine } from "react-icons/ri";
import { MdOutlineLeaderboard } from "react-icons/md";
import { GrDocument } from "react-icons/gr";
import { BiCalendar, BiNews, BiSupport } from "react-icons/bi";
import { TbBellSchool } from "react-icons/tb";
import SocialMedia from "../Atoms/SocialMedia";
import { GiGraduateCap } from "react-icons/gi";
import axios from "axios";

export default function Nav() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [navigationLogo, setNavigationLogo] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseNav = await axios.get<any[]>("/api/navigationLogo");
        setNavigationLogo(responseNav.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navElement = document.getElementById("nav");

      if (navElement && !navElement.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen === false) {
      setIsDropdownOpen(false);
    }
  };
  const isBlueIb = [
    "/news",
    "/contact",
    "/about",
    "/about/accreditation",
    "/about/leadership_tab",
    "/credits",
    "/calendar",
    "/docs",
  ].includes(router.pathname);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Set initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav id="nav" className="z-50 absolute w-full">
      <section className="flex justify-center w-full">
        <div
          className={`bg-primary text-white ${
            router.pathname === "/" ? "w-[100%]" : "w-[100%]"
          } flex justify-between items-center md:px-12 py-2`}
        >
          <div className="flex sm:hidden items-center md:space-x-8">
            <Link
              href="/"
              className={`${
                router.pathname === "/" ? "border-b-2 border-[yellow]" : ""
              } hover:border-[yellow] hover:border-b-2 text-white`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${
                router.pathname === "/about" ? "border-b-2 border-[yellow]" : ""
              } hover:border-[yellow] hover:border-b-2 text-white`}
            >
              About&nbsp;us
            </Link>
            <Link
              href="/education"
              className={`${
                router.pathname === "/education"
                  ? "border-b-2 border-[yellow]"
                  : ""
              } hover:border-[yellow] hover:border-b-2 text-white`}
            >
              Education
            </Link>
            <Link
              href="/admission"
              className={`${
                router.pathname === "/admission"
                  ? "border-b-2 border-[yellow]"
                  : ""
              } hover:border-[yellow] hover:border-b-2 text-white`}
            >
              Admissions
            </Link>
            <Link
              href="/boarding"
              className={`${
                router.pathname === "/boarding"
                  ? "border-b-2 border-[yellow]"
                  : ""
              } hover:border-[yellow] hover:border-b-2 text-white`}
            >
              Boarding
            </Link>
            <Link
              href="/news"
              className={`${
                router.pathname === "/news" ? "border-b-2 border-[yellow]" : ""
              } hover:border-[yellow] hover:border-b-2 text-white`}
            >
              News&nbsp;&&nbsp;Events
            </Link>
            <Link
              href="/contact"
              className={`${
                router.pathname === "/contact"
                  ? "border-b-2 border-[yellow]"
                  : ""
              } hover:border-[yellow] hover:border-b-2 text-white`}
            >
              Contact&nbsp;Us
            </Link>

            <motion.button
              onClick={() => {
                window.location.href =
                  "https://greenhillsacademy.openapply.com/";
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-[yellow] bg-primary border hover:border-[yellow] rounded-full py-2 px-4"
            >
              Apply
            </motion.button>
          </div>
          <div className="flex items-center sm:justify-between sm:w-full">
            <div
              className="flex items-center space-x-4 cursor-pointer"
              onClick={handleMenuToggle}
            >
              <div className="">
                <Hamburger
                  toggled={isMenuOpen}
                  toggle={handleMenuToggle}
                  size={24}
                />
              </div>
              <Link href={""} className="inline font-[600]">
                MENU
              </Link>
            </div>
            <div className="md:hidden flex gap-4 pr-2">
              <Link href={"/"} className="h-12">
                <img
                  src="https://greenhillsacademy.rw:8081/images/logo_pjrxda.png"
                  alt="Logo Top"
                  className="object-cover sm:object-contain h-full w-full"
                />
              </Link>
              <Link
                href={"https://www.ibo.org/"}
                target="_blank"
                passHref
                className="h-12"
              >
                <img
                  src="https://greenhillsacademy.rw:8081/images/white_ib.png"
                  alt="Logo Top"
                  className="object-cover h-full w-full"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="sm:hidden bg-transparent w-full flex justify-center pb-6 px-12">
        <section
          className={`text-white ${
            router.pathname === "/" ? "w-[100%]" : "w-[100%]"
          } flex sm:flex-wrap items-center sm:justify-center md:justify-between`}
        >
          <div className="flex sm:justify-center md:justify-between items-center md:space-x-8 w-full">
            <div className="md:hidden bg-gradient-to-l from-primary to-transparent h-2 w-1/4" />
            {navigationLogo.map(
                (logo, index) =>
                  logo.layoutSection === "left" && (<Link href={"/"} key={index} className="h-[130px] sm:h-[60px]">
              <img
src={logo.image[0]}                alt="Logo Top"
                className="object-cover sm:object-contain h-full w-full"
              />
            </Link> )
              )}
            {navigationLogo.map(
                (logo, index) =>
                  logo.layoutSection === "right" && (<Link  key={index}
                    href={logo.url}
              target="_blank"
              passHref
              className="h-[130px] sm:h-[60px]"
            >
                <img
                  src={logo.image[0]}
                  alt="Logo Top"
                  className="object-cover h-full w-full"
                />
            </Link>)
              )}
            <div className="md:hidden bg-gradient-to-r from-primary to-transparent h-2 w-1/4" />
          </div>
        </section>
      </section>
      <section className="flex md:justify-end absolute top-0">
        <Menu
          right
          isOpen={isMenuOpen}
          onStateChange={(state: {
            isOpen: boolean | ((prevState: boolean) => boolean);
          }) => setIsMenuOpen(state.isOpen)}
          menuClassName="menu-scale-rotate z-50"
          width={isSmallScreen ? "" : "25vw"}
        >
          <div className="bg-white shadow-xl px-2 md:overflow-hidden">
            <div className="flex justify-center py-2">
              <Link href={"/"} passHref className="bg-white rounded-full p-0">
                <img
                  src="https://greenhillsacademy.rw:8081/images/logo_pjrxda.png"
                  alt="Logo Top"
                  className="h-[100px] sm:object-contain object-cover w-full"
                />
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  window.location.href = "/";
                }}
                className={`group flex gap-2 items-center w-full p-4 text-start ${
                  router.pathname === "/"
                    ? "bg-primary text-[yellow]"
                    : "bg-[#EAFBF3]"
                } hover:bg-primary hover:text-[yellow] uppercase`}
              >
                <GoHome
                  className={` ${
                    router.pathname === "/"
                      ? "text-[yellow]"
                      : "text-primary hover:text-[yellow]"
                  }`}
                />{" "}
                HOME
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`group w-full text-start p-4 hover:bg-primary hover:text-[yellow] font-medium ${
                  isDropdownOpen ? "bg-primary text-[yellow]" : " bg-[#EAFBF3]"
                }`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <div className=" flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <GoPeople
                      className={`group-hover:text-[yellow] ${
                        router.pathname !== "/about" ? "text-primary" : ""
                      }`}
                    />{" "}
                    ABOUT
                  </div>
                  {isDropdownOpen ? (
                    <BsChevronDown className="text-[yellow]" />
                  ) : (
                    <BsChevronRight />
                  )}
                </div>
              </motion.button>
              <Transition
                show={isDropdownOpen}
                enter="transition-opacity duration-300 ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300 ease-out"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                {(ref: LegacyRef<HTMLDivElement> | undefined) => (
                  <div
                    ref={ref}
                    className="z-10 absolute right-0 mt-2 py-2 w-[80%] bg-white divide-y divide-gray-100 rounded-lg shadow"
                  >
                    <ul className="py-2 text-gray-700">
                      <li className="py-2">
                        <Link
                          href="/about"
                          className="block px-4 py-3 hover:bg-primary hover:text-white"
                        >
                          General
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/about/#head"
                          className="block px-4 py-3 hover:bg-primary hover:text-white"
                        >
                          Head of School’s Welcome
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/about/#alumni"
                          className="block px-4 py-3 hover:bg-primary hover:text-white"
                        >
                          GHA Alumni
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/about/#alumni_registration_form                          "
                          className="block px-4 py-3 hover:bg-primary hover:text-white"
                        >
                          Alumni Registration Form
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </Transition>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  window.location.href = "/education";
                }}
                className={`group flex gap-2 items-center w-full p-4 text-start ${
                  router.pathname === "/education"
                    ? "bg-primary text-[yellow]"
                    : "bg-[#EAFBF3]"
                } hover:bg-primary hover:text-[yellow] font-medium uppercase`}
              >
                <GiGraduateCap
                  className={`group-hover:text-[yellow] ${
                    router.pathname !== "/education" ? "text-primary" : ""
                  }`}
                />
                School EDUCATION
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  window.location.href = "/admission";
                }}
                className={`group flex gap-2 items-center w-full p-4 text-start ${
                  router.pathname === "/admission"
                    ? "bg-primary text-[yellow]"
                    : "bg-[#EAFBF3]"
                } hover:bg-primary hover:text-[yellow] font-medium uppercase`}
              >
                <SiReacthookform
                  className={`group-hover:text-[yellow] ${
                    router.pathname !== "/admission" ? "text-primary" : ""
                  }`}
                />
                School ADMISSION
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  window.location.href = "/about/learners_tab";
                }}
                className={`group flex gap-2 items-center w-full p-4 text-start ${
                  router.pathname === "/about/learners_tab"
                    ? "bg-primary text-[yellow]"
                    : "bg-[#EAFBF3]"
                } hover:bg-primary hover:text-[yellow] font-medium uppercase`}
              >
                <FaRegLifeRing
                  className={`group-hover:text-[yellow] ${
                    router.pathname !== "/admission" ? "text-primary" : ""
                  }`}
                />{" "}
                Learners life
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  window.location.href = "/about/leadership_tab";
                }}
                className={`group flex gap-2 items-center w-full p-4 text-start ${
                  router.pathname === "/about/leadership_tab"
                    ? "bg-primary text-[yellow]"
                    : "bg-[#EAFBF3]"
                } hover:bg-primary hover:text-[yellow] font-medium uppercase`}
              >
                <MdOutlineLeaderboard
                  className={`group-hover:text-[yellow] ${
                    router.pathname !== "/admission" ? "text-primary" : ""
                  }`}
                />
                school leadership
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  window.location.href = "/about/facilities_tab";
                }}
                className={`group flex gap-2 items-center w-full p-4 text-start ${
                  router.pathname === "/about/facilities_tab"
                    ? "bg-primary text-[yellow]"
                    : "bg-[#EAFBF3]"
                } hover:bg-primary hover:text-[yellow] font-medium uppercase`}
              >
                <RiBuildingLine
                  className={`group-hover:text-[yellow] ${
                    router.pathname !== "/admission" ? "text-primary" : ""
                  }`}
                />
                School Facilities
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  window.location.href = "/about/accreditation";
                }}
                className={`group flex gap-2 items-center w-full p-4 text-start ${
                  router.pathname === "/about/accreditation"
                    ? "bg-primary text-[yellow]"
                    : "bg-[#EAFBF3]"
                } hover:bg-primary hover:text-[yellow] font-medium uppercase`}
              >
                <SiReacthookform
                  className={`group-hover:text-[yellow] ${
                    router.pathname !== "/admission" ? "text-primary" : ""
                  }`}
                />
                School Accreditation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  window.location.href = "/boarding";
                }}
                className={`group flex gap-2 items-center w-full p-4 text-start ${
                  router.pathname === "/boarding"
                    ? "bg-primary text-[yellow]"
                    : "bg-[#EAFBF3]"
                } hover:bg-primary hover:text-[yellow] font-medium uppercase`}
              >
                <TbBellSchool
                  className={`group-hover:text-[yellow] ${
                    router.pathname !== "/admission" ? "text-primary" : ""
                  }`}
                />
                BOARDING School
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  window.location.href = "/news";
                }}
                className={`group flex gap-2 items-center w-full p-4 text-start ${
                  router.pathname === "/news"
                    ? "bg-primary text-[yellow]"
                    : "bg-[#EAFBF3]"
                } hover:bg-primary hover:text-[yellow] font-medium uppercase`}
              >
                <BiNews
                  className={`group-hover:text-[yellow] ${
                    router.pathname !== "/admission" ? "text-primary" : ""
                  }`}
                />
                NEWS AND EVENTS
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  window.location.href = "/calendar";
                }}
                className={`group flex gap-2 items-center w-full p-4 text-start ${
                  router.pathname === "/calendar"
                    ? "bg-primary text-[yellow]"
                    : "bg-[#EAFBF3]"
                } hover:bg-primary hover:text-[yellow] font-medium uppercase`}
              >
                <BiCalendar
                  className={`group-hover:text-[yellow] ${
                    router.pathname !== "/calendar" ? "text-primary" : ""
                  }`}
                />
                SCHOOL CALENDAR
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  window.location.href = "/docs";
                }}
                className={`group flex gap-2 items-center w-full p-4 text-start ${
                  router.pathname === "/docs"
                    ? "bg-primary text-[yellow]"
                    : "bg-[#EAFBF3]"
                } hover:bg-primary hover:text-[yellow] font-medium uppercase`}
              >
                <GrDocument
                  className={`group-hover:text-[yellow] ${
                    router.pathname !== "/docs" ? "text-primary" : ""
                  }`}
                />
                GHA Docs
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  window.location.href = "/contact";
                }}
                className={`group flex gap-2 items-center w-full p-4 text-start ${
                  router.pathname === "/contact"
                    ? "bg-primary text-[yellow]"
                    : "bg-[#EAFBF3]"
                } hover:bg-primary hover:text-[yellow] font-medium uppercase`}
              >
                <BiSupport
                  className={`group-hover:text-[yellow] ${
                    router.pathname !== "/admission" ? "text-primary" : ""
                  }`}
                />
                CONTACT US
              </motion.button>

              <div className="bg-[#EAFBF3] w-full p-4">
                <div className="md:w-1/2">
                  <SocialMedia />
                </div>
              </div>
            </div>
          </div>
        </Menu>
      </section>
    </nav>
  );
}
