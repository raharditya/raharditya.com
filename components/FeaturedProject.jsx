function FeaturedProject(props) {
  return (
    <div className="px-6 md:container md:mx-auto py-16">
      <h3 className="text-center text-heading-serif section-heading text-2xl mb-8 relative z-10">
        Featured Project
      </h3>

      <div
        className="featured-project relative rounded-lg flex gap-6"
        style={{ backgroundColor: "#FF8FB0" }}
      >
        <div className="featured-ss-container ">
          <img src="/assets/featured/ss1.png" alt="" className="featured-ss" />
          <img src="/assets/featured/ss2.png" alt="" className="featured-ss" />
          <img src="/assets/featured/ss3.png" alt="" className="featured-ss" />
          <img src="/assets/featured/ss2.png" alt="" className="featured-ss" />
          <img src="/assets/featured/ss3.png" alt="" className="featured-ss" />
          <img src="/assets/featured/ss4.png" alt="" className="featured-ss" />
        </div>

        <div className="flex flex-col justify-center">
          <small className="text-white">PWA</small>

          <h2 className="font-bold text-5xl text-white">
            KKN Covid
            <br />
            Jogja
          </h2>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProject;
