import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const contRef = useRef(null);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2i1edhy",
        "template_3hfzy2d",
        form.current,
        "tUJ4gzC6m5Wh8bXbK"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: name + " your message sent",
            showConfirmButton: false,
            timer: 1500,
          });
          setname("");
          setemail("");
          setmessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <section ref={contRef} id="contact-section" class="bg-pdark">
        <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div class="mb-4 items-start">
            <div class="mb-6  text-start sm:text-center md:mx-auto md:mb-12">
              <p class="text-start font-bold uppercase tracking-wide text-plight">
                Get In Touch
              </p>
              <h2 class="text-start font-heading mb-4 text-white font-bold tracking-tight text-3xl sm:text-8xl">
                Feel free to reach out if you wanna collaborate with me, or
                simply have a chat.
              </h2>
            </div>
          </div>
          <div class="flex items-stretch justify-start mb-0">
            <div class="grid md:grid-cols-2  w-full mb-0">
              <div class="h-full pr-6 text-start align-middle flex-col flex justify-center items-start mb-0">
                <p class="mt-3 mb-4 font-bold text-lg text-white">
                  START A PROJECT
                </p>
                <ul class="mb-0 md:mb-0 font-bold text-plight ">
                  <li>
                    <a href="mailto:sarathteja14@gmail.com">
                      <p class="text-plight"> Mail : Sarathteja14@gmail.com</p>
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="tel:+918500430354" className="text-plight">
                      <p class="text-plight">Mobile : +91 8500430354</p>
                    </a>
                  </li>

                  <li>
                    <div class="mt-5 mb-5 text-start">
                      <h3 class="mb-2 text-lg  font-bold leading-6 text-white">
                        Connect{" "}
                      </h3>
                      <a
                        href="https://www.linkedin.com/in/revus-t-7b6670183/"
                        target="new"
                      >
                        <p class="text-plight">LinkedIn</p>
                      </a>
                      <a href="https://github.com/revuss" target="new">
                        <p class="text-plight">Github </p>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="card h-fit max-w-6xl px-5 md:px-12" id="form" mb-0>
                <h2 class="mb-4 text-2xl font-bold text-plight">
                  Quick Message
                </h2>
                <form id="contactForm" ref={form} onSubmit={sendEmail}>
                  <div class="mb-6">
                    <div class="mx-0 mb-1 sm:mb-4">
                      <div class="mx-0 mb-1 sm:mb-4">
                        <label
                          for="name"
                          class="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="text"
                          required
                          id="name"
                          value={name}
                          onChange={(e) => {
                            setname(e.target.value);
                          }}
                          autocomplete="given-name"
                          placeholder="Your name"
                          class="mb-2 w-full focus:outline-none focus:ring-2 focus:ring-plight focus:border-transparent rounded-md placeholder-plight bg-pdark  border border-plight py-2 pl-2 pr-4 shadow-md text-white sm:mb-0"
                          name="name"
                        />
                      </div>
                      <div class="mx-0 mb-1 sm:mb-4">
                        <label
                          for="email"
                          class="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setemail(e.target.value);
                          }}
                          id="email"
                          autocomplete="email"
                          placeholder="Your email address"
                          class="mb-2 focus:outline-none focus:ring-2 focus:ring-plight focus:border-transparent w-full placeholder-plight  rounded-md border border-plight py-2 pl-2 pr-4 shadow-md text-white bg-pdark sm:mb-0"
                          name="email"
                          required
                        />
                      </div>
                    </div>
                    <div class="mx-0 mb-1 sm:mb-4">
                      <label
                        for="textarea"
                        class="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <textarea
                        id="textarea"
                        name="textarea"
                        value={message}
                        onChange={(e) => {
                          setmessage(e.target.value);
                        }}
                        cols="30"
                        rows="5"
                        placeholder="Write your message..."
                        class="mb-2 focus:outline-none focus:ring-2 focus:ring-plight focus:border-transparent
                        w-full rounded-md placeholder-plight text-white border border-white py-2 pl-2 pr-4 shadow-md bg-pdark sm:mb-0 focus:border-white"
                      ></textarea>
                    </div>
                  </div>
                  <div class="text-center">
                    <button
                      type="submit"
                      class="w-full bg-pdark text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
