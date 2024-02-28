"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const busTrackerProject = {
  id: 1,
  color: "from-red-300 to-blue-300",
  title: "Bus Tracker",
  desc: "An innovative application with two distinct interfaces – one for regular users and another for drivers. Developed with Flutter and using Firebase for a real-time database, it provides efficient real-time tracking of buses.",
  img: "/projects/bus.jpeg",
};
const salesManagementApp = {
  id: 2,
  color: "from-blue-300 to-violet-300",
  title: "Sales Management Application",
  desc: "Designed as an independent project for a client, this application facilitates the management of coffee stocks. Developed with Flutter and integrating Firebase, it provides an effective solution for sales management.",
  img: "/projects/coffe.jpg",
};
const bacCompetitionApp = {
  id: 3,
  color: "from-violet-300 to-purple-300",
  title: "Bac Competition",
  desc: "An application available on the Play Store dedicated to students who have passed the baccalaureate and are looking to access Moroccan prestigious schools. Developed using Flutter and Firebase, it includes two distinct interfaces: one for users and one for administrators.",
  img: "/projects/qcm.jpg",
};
const ecommerceApp = {
  id: 4,
  color: "from-purple-300 to-red-300",
  title: "E-commerce App",
  desc: "A versatile e-commerce application for all types of businesses. Includes three distinct applications: administrator, user, and delivery personnel. Developed with Flutter and integrating Node.js, Express, MongoDB, and Firebase for a comprehensive and efficient experience.",
  img: "/projects/ecommerce.png",
};

const digitalCampusProject = {
  id: 6,
  color: "from-blue-300 to-violet-300",
  title: "Digital Campus",
  desc: "A comprehensive application to simplify the management of courses, exams, tutorials (TD), and practical work (TP) for teachers and students. Facilitates file sharing and communication between professors and students. Available as a web and mobile application, developed with MongoDB, Node.js, Express.js, React.js, and Flutter.",
  img: "/projects/campus.png",
};
const studentManagementApp = {
  id: 7,
  color: "from-violet-300 to-purple-300",
  title: "Student Management Application",
  desc: "A tool designed for teachers to facilitate the management of students, sessions, absences, etc. Developed as a desktop application with WPF and also in a cross-platform version with MAUI for flexible use on different platforms, using SQL Server and SQLite as databases.",
  img: "/projects/student_management.jpeg",
};
const expressNewsApp = {
  id: 8,
  color: "from-purple-300 to-red-300",
  title: "Express News",
  desc: "A mobile application for viewing the latest news in all fields. Offers two distinct interfaces: one for the administrator and one for the regular user. Developed with Kotlin, MongoDB, Node.js, and Express.js for a fast and efficient experience.",
  img: "/projects/news.jpeg",
};

const bacDocsApp = {
  id: 10,
  color: "from-blue-300 to-violet-300",
  title: "Bac Docs",
  desc: "An app for Moroccan students across all disciplines. It provides access to all documents, tutorials, assignments, previous national exams, and tools to help them succeed in the baccalaureate.",
  img: "/projects/bac.jpg",
};
const more = {
  id: 11,
  color: "from-violet-300 to-purple-300",
  title: "Other Projects",
  desc: "I have developed many other projects, for both clients and personal use. I am always ready to take on new challenges and develop new projects.",
  img: "/projects/more.jpg",
};

const items = [
  busTrackerProject,
  salesManagementApp,
  bacCompetitionApp,
  ecommerceApp,
  digitalCampusProject,
  studentManagementApp,
  expressNewsApp,
  bacDocsApp,
  more,
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl text-center">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image
                      src={item.img}
                      alt=""
                      layout="fill"
                      objectFit="scale-down"
                      className="rounded-md"
                    />
                  </div>
                  <div className="w-80 md:w96 lg:w-[500px] text-sm text-center">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                mobile & web development
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center cursor-pointer"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
