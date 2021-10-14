import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

function contactMe(props) {
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState({});

  function formHandler(e) {
    e.preventDefault();

    setLoading(true);

    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLoading(false);

        if (data.error || data.errors?.length > 0) {
          toast.error(`Error: All fields are required!`);
        } else {
          toast.success("Contact form submitted succesfully!");

          setForm({
            sender: "",
            email: "",
            msg: "",
            error: false,
            errorMsg: "",
          });
        }
      });
  }

  function handleChange(field, body) {
    const currForm = { ...form };
    currForm[field] = body;
    setForm(currForm);
  }

  const [form, setForm] = useState({
    sender: "",
    email: "",
    msg: "",
    error: false,
    errorMsg: "",
  });

  return (
    <div
      className="py-12 md:py-16"
      id="top"
      style={{ backgroundColor: "#DBC4F8", minHeight: "92vh" }}
    >
      <Head>
        <title>Contact Me - Raharditya's</title>
        <link rel="icon" href="/icons/icon192.png" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Muhammad Raharditya is a full-stack web developer based in Yogyakarta, Indonesia."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#FCFCFD" />
        <meta property="og:url" content="https://raharditya.com/contact-me" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Me - Raharditya's" />
        <meta
          property="og:description"
          content="Muhammad Raharditya is a full-stack web developer based in Yogyakarta, Indonesia."
        />
      </Head>

      <div className="flex md:container md:mx-auto px-6 mb-8">
        <Link href="/">
          <a
            className="flex items-center hover:bg-white hover:shadow-lg transition duration-150 ease-in-out py-2 px-3 rounded-xl"
            style={{ color: "#463160" }}
          >
            <img src="/assets/left-arrow.svg" alt="" className="h-6 mr-4" />
            Back to portfolio
          </a>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row md:container md:mx-auto px-6">
        <div className="md:w-1/2 ">
          <h1
            className="milliard-bold text-3xl mb-8 leading-none"
            style={{ color: "#463160" }}
          >
            Contact
            <br />
            Me
          </h1>

          <div className="lg:w-3/5">
            <a
              href="mailto:contact@raharditya.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="header-btn transition duration-150 flex items-center py-3 md:py-4 px-4 md:px-5 rounded-2xl mb-5">
                <img
                  src="/assets/social/mail-contact.svg"
                  alt=""
                  className="h-6 mr-4"
                />
                <p className="text-white">contact@raharditya.com</p>
              </div>
            </a>

            <a
              href="https://github.com/Asebodi"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="header-btn transition duration-150 flex items-center py-3 md:py-4 px-4 md:px-5 rounded-2xl mb-5">
                <img
                  src="/assets/social/github-contact.svg"
                  alt=""
                  className="h-6 mr-4"
                />
                <p className="text-white">Asebodi</p>
              </div>
            </a>

            <a
              href="https://www.instagram.com/a.raharditya/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="header-btn transition duration-150 flex items-center py-3 md:py-4 px-4 md:px-5 rounded-2xl mb-5">
                <img
                  src="/assets/social/instagram-contact.svg"
                  alt=""
                  className="h-6 mr-4"
                />
                <p className="text-white">a.raharditya</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/muhammad-raharditya-athafitra-a17b201a9/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="header-btn transition duration-150 flex items-center py-3 md:py-4 px-4 md:px-5 rounded-2xl">
                <img
                  src="/assets/social/linkedin-contact.svg"
                  alt=""
                  className="h-6 mr-4"
                />
                <p className="text-white">Muh. Raharditya</p>
              </div>
            </a>
          </div>
        </div>

        <form
          action=""
          className="md:px-6 md:flex-grow mb-10 mt-10 md:mt-0 md:w-1/2"
        >
          <label htmlFor="name" className="block text-black font-semibold my-4">
            Name
          </label>
          <input
            type="text"
            className="block custom-shadow w-full h-10 py-2 px-3 bg-white rounded-lg mb-8 "
            value={form.sender}
            onChange={(e) => handleChange("sender", e.target.value)}
            required
          />

          <label
            htmlFor="email"
            className="block text-black font-semibold mb-4"
          >
            Email
          </label>
          <input
            type="text"
            className="block custom-shadow w-full h-10 py-2 px-3 bg-white rounded-lg mb-8"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            required
          />

          <label
            htmlFor="message"
            className="block text-black font-semibold mb-4"
          >
            Message
          </label>
          <textarea
            name="message"
            rows="4"
            className="w-full custom-shadow py-2 px-3 bg-white rounded-lg mb-8"
            value={form.msg}
            onChange={(e) => handleChange("msg", e.target.value)}
            required
          ></textarea>

          <button
            // type="submit"
            // value="Send"
            className="block py-2 px-10 bg-green-500 hover:bg-green-600 hover:shadow-lg transition duration-150 ease-in-out rounded-xl mx-auto text-white font-semibold relative"
            onClick={formHandler}
            // style={{ backgroundColor: "#81AB83" }}
            // onSubmit={(e) => formHandler(e)}
          >
            Send
            <div
              className={`absolute ${loading ? "block" : "hidden"}`}
              style={{ top: "1px", right: "-4rem" }}
            >
              <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default contactMe;
