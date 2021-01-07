import Link from "next/link";

function contactMe(props) {
  return (
    <div className="pt-24 flex flex-col md:flex-row">
      <div className="">
        <h2 className="px-6 text-heading-serif page-heading font-bold text-4xl">
          Contact
          <br />
          Me
        </h2>

        <div className="backdrop py-16 w-full flex items-center justify-center -mt-6 md:flex-grow">
          <div className="text-center">
            <p>I'm available at</p>
            <Link href="#">
              <a className="font-bold underline">contact@raharditya.com</a>
            </Link>

            <div className="flex gap-4 mt-16">
              <div className="social w-12 h-12 mx-auto flex items-center justify-center p-3 rounded-lg">
                <img
                  src="/assets/social/instagram.svg"
                  alt=""
                  className="w-full"
                />
              </div>

              <div className="social w-12 h-12 mx-auto flex items-center justify-center p-3 rounded-lg">
                <img
                  src="/assets/social/github.svg"
                  alt=""
                  className="w-full"
                />
              </div>

              <div className="social w-12 h-12 mx-auto flex items-center justify-center p-3 rounded-lg">
                <img
                  src="/assets/social/linkedin.svg"
                  alt=""
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <small className="my-10 px-6 text-center text-black">or</small>

      <form action="" className="px-6 md:flex-grow mb-10">
        <label htmlFor="name" className="block text-black font-semibold mb-4">
          Name
        </label>
        <input
          type="text"
          className="block custom-shadow w-full h-10 py-2 px-3 bg-white rounded-lg mb-8 focus:ring-2 focus:ring-red-200"
        />

        <label htmlFor="email" className="block text-black font-semibold mb-4">
          Email
        </label>
        <input
          type="text"
          className="block custom-shadow w-full h-10 py-2 px-3 bg-white rounded-lg mb-8"
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
        ></textarea>

        <input
          type="submit"
          value="Send"
          className="block py-2 px-10 bg-red-500 rounded-xl mx-auto text-white font-semibold"
        />
      </form>
    </div>
  );
}

export default contactMe;
