import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import contact from "../../images/contact.svg";
import {
  MailIcon,
  PhoneIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(phonenumber);
    console.log(message);
  };

  return (
    <div>
      <Navbar transparent />
      <main className="dark:bg-gray-900">
        <div
          className="relative pt-16 pb-32 md:px-36 px-4 flex content-center items-center justify-center"
          style={{
            minHeight: "75vh",
          }}
        >
          <div className="absolute top-0 w-full h-full bg-center bg-cover">
            <span
              id="blackOverlay"
              className="w-full h-full absolute bg-gradient-to-r from-indigo-200 to-blue-400"
            ></span>
          </div>
          <div className="container relative mx-auto pt-8">
            <div className="items-center flex md:flex-row flex-col my-auto justify-between">
              <div className="w-full text-center">
                <div className="md:pr-12 pr-0">
                  <h1 className="text-gray-800 font-semibold text-5xl">
                    Tell us about your project.
                  </h1>
                  <p className="mt-4 text-lg text-gray-900">
                    Tell us about your project or venture, we will be glad to
                    help. Fill out the form below send send us an email.
                  </p>
                </div>
              </div>
              <div className="img">
                <img
                  src={contact}
                  className="md:w-80 w-40 md:mt-auto mt-8"
                  alt="contact"
                />
              </div>
            </div>
          </div>
        </div>
        <section className="pb-20 -mt-36">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap flex-col items-center">
              <div className="lg:pt-12 pt-6 w-full md:px-36 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-800 w-full mb-8 shadow rounded-lg">
                  <div className="grid md:grid-cols-5 col-span-1 rounded-lg">
                    <form
                      onSubmit={sendMessage}
                      className="col-span-3 bg-white dark:bg-gray-800 px-4 py-5 rounded-l-lg"
                    >
                      <span className="flex flex-row items-center mb-8">
                        <h4 className="font-bold text-gray-800  dark:text-gray-300 text-xl">
                          Send a message
                        </h4>
                        <MailIcon
                          width={30}
                          height={30}
                          className="text-indigo-800 dark:text-blue-700"
                        />
                      </span>
                      <div className="first grid grid-cols-2 mb-4 gap-4 items-center w-full">
                        <input
                          type="text"
                          placeholder="Your Name"
                          onChange={(e) => setName(e.target.value)}
                          className="p-2 w-full border col-span-1 border-gray-400 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-700 rounded outline-none"
                        />
                        <input
                          type="text"
                          placeholder="Phonenumber"
                          onChange={(e) => setPhonenumber(e.target.value)}
                          className="p-2 w-full border col-span-1 border-gray-400 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-700 rounded outline-none"
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-2 w-full border border-gray-400 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-700 mb-4 rounded outline-none"
                      />
                      <textarea
                        name="message"
                        onChange={(e) => setMessage(e.target.value)}
                        className="p-2 w-full border border-gray-400 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-700 mb-4 rounded outline-none"
                        placeholder="Type your message here..."
                        id="message"
                        cols="30"
                        rows="5"
                      />
                      <button
                        className="bg-indigo-700 w-full p-2 rounded border-none outline-none text-white"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </form>
                    <div className="col-span-2 bg-indigo-600 px-4 py-5 flex flex-col  rounded-r-lg flex-1">
                      <p className="text-white text-lg font-semibold">
                        Contact Info
                      </p>
                      <div className="below flex flex-col text-gray-300 items-start flex-1 justify-around">
                        <div className="flex flex-row items-center">
                          <MailIcon width={24} height={24} className="mr-2" />
                          <p>tatendabakozw@gmail.com</p>
                        </div>
                        <div className="flex flex-row items-center">
                          <PhoneIcon width={24} height={24} className="mr-2" />
                          <p>+263771445411</p>
                        </div>
                        <div className="flex flex-row items-center">
                          <LocationMarkerIcon
                            width={24}
                            height={24}
                            className="mr-2"
                          />
                          <p>Available for both remote and relocation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contact;
