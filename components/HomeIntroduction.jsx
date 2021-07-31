import React from "react";

function HomeIntroduction(props) {
  return (
    <div className="px-6 py-8 my-10 md:container md:mx-auto">
      <h3 className="md:hidden text-center text-heading-serif section-heading text-2xl mb-8 relative z-10">
        Who am I
      </h3>

      <div className="md:flex md:flex-row-reverse md:justify-between md:gap-16">
        <div className="w-full flex justify-center">
          <img
            src="/assets/about-img.jpg"
            alt=""
            className="w-full h-64 md:h-64 md:w-auto rounded-lg shadow-lg object-cover object-top"
          />
        </div>

        <div className="md:max-w-2xl">
          <h3 className="hidden md:block text-heading-serif section-heading text-2xl mb-8 relative z-10">
            Who am I
          </h3>

          <h4 className="font-bold mb-4 mt-8 text-lg">
            I am a full-stack developer based in Yogyakarta, Indonesia. I Mainly
            work with the MERN Stack.
          </h4>

          <p>
            I have been making websites since 2018. Apart from being a
            full-stack developer, I am also skilled in UI/UX design. In 2018, I
            became the Vice Chair of the Media and Information division in my
            college study program organization. In 2019, me and my team won a
            silver medal in the 2019 KIWIE innovation competition held in Seoul,
            South Korea.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeIntroduction;
