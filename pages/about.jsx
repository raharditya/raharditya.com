function about(props) {
  return (
    <div className="pt-24">
      <h2 className="px-6 text-heading-serif page-heading font-bold text-4xl mb-8">
        About
        <br />
        Me
      </h2>

      <div className="flex md:flex-col-reverse md:gap-10 justify-center items-center px-6 mb-10">
        <div className="about-social flex-grow flex flex-col md:flex-row gap-4">
          <div className="social w-12 h-12 mx-auto flex items-center justify-center p-3 rounded-lg">
            <img src="/assets/social/instagram.svg" alt="" className="w-full" />
          </div>

          <div className="social w-12 h-12 mx-auto flex items-center justify-center p-3 rounded-lg">
            <img src="/assets/social/github.svg" alt="" className="w-full" />
          </div>

          <div className="social w-12 h-12 mx-auto flex items-center justify-center p-3 rounded-lg">
            <img src="/assets/social/linkedin.svg" alt="" className="w-full" />
          </div>
        </div>

        <div className="about-img flex-grow">
          <img
            src="/assets/about-img.jpg"
            alt=""
            className="h-48 md:h-auto md:w-48 rounded-lg shadow-xl block mx-auto"
          />
        </div>
      </div>

      <div className="w-11/12 backdrop py-16 px-8 mb-8">
        <p className="text-black mb-8">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
        <p className="text-black mb-8">
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years, sometimes by accident, sometimes on purpose
          (injected humour and the like).
        </p>
        <p className="text-black mb-8">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
        </p>
        <p className="text-black">
          Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
          Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written
          in 45 BC. This book is a treatise on the theory of ethics, very
          popular during the Renaissance. The first line of Lorem Ipsum, "Lorem
          ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </p>
      </div>
    </div>
  );
}

export default about;
