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
    <div className="pt-24 mb-16 flex flex-col md:flex-row" id="top">
      <div className="md:w-1/2 ">
        <h2 className="px-6 md:text-right text-heading-serif page-heading font-bold text-4xl md:relative md:left-4">
          Contact
          <br />
          Me
        </h2>

        <div className="backdrop py-16 md:py-24 w-full flex items-center justify-center -mt-6 md:flex-grow">
          <div className="text-center">
            <p>I'm available at</p>
            <Link href="mailto:contact@raharditya.com">
              <a className="font-bold underline">contact@raharditya.com</a>
            </Link>

            <div className="flex justify-between gap-4 mt-16">
              <Link href="https://instagram.com/a.raharditya">
                <a target="_blank" rel="noopener noreferrer">
                  <div className="social w-12 h-12 mx-auto flex items-center justify-center p-3 rounded-lg">
                    <img
                      src="/assets/social/instagram-contact.svg"
                      alt=""
                      className="w-full"
                    />
                  </div>
                </a>
              </Link>

              <Link href="https://github.com/Asebodi">
                <a target="_blank" rel="noopener noreferrer">
                  <div className="social w-12 h-12 mx-auto flex items-center justify-center p-3 rounded-lg">
                    <img
                      src="/assets/social/github-contact.svg"
                      alt=""
                      className="w-full"
                    />
                  </div>
                </a>
              </Link>

              <Link href="#">
                <a target="_blank" rel="noopener noreferrer">
                  <div className="social w-12 h-12 mx-auto flex items-center justify-center p-3 rounded-lg">
                    <img
                      src="/assets/social/linkedin-contact.svg"
                      alt=""
                      className="w-full"
                    />
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <small className="my-10 px-6 text-center text-black md:self-center">
        or
      </small>

      <form action="" className="px-6 md:flex-grow mb-10w-1/2 md:mr-32">
        <label htmlFor="name" className="block text-black font-semibold mb-4">
          Name
        </label>
        <input
          type="text"
          className="block custom-shadow w-full h-10 py-2 px-3 bg-white rounded-lg mb-8 focus:ring-2 focus:ring-red-200"
          value={form.sender}
          onChange={(e) => handleChange("sender", e.target.value)}
          required
        />

        <label htmlFor="email" className="block text-black font-semibold mb-4">
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
          className="block py-2 px-10 bg-red-500 rounded-xl mx-auto text-white font-semibold relative"
          onClick={formHandler}
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
  );
}

export default contactMe;
