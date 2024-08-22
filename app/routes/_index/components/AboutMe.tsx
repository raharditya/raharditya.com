import Container from '../../../components/Container';

const AboutMe = () => {
  return (
    <Container>
      <div className="space-y-6 py-14">
        <h2 className="text-2xl font-bold text-accent-3 lg:text-3xl">About Me</h2>

        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="flex w-full items-center justify-center lg:w-[40%]">
            <div className="h-48 w-full overflow-hidden rounded-2xl bg-gray-300 lg:h-[264px]">
              <img src="/self.webp" alt="" className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="space-y-6 lg:w-[60%]">
            <p className="rounded-xl border border-card-border bg-card-white px-6 py-4 leading-7 opacity-75">
              I have been making websites since 2018. Apart from being a full-stack developer, I am also skilled in
              UI/UX design. In 2018, I became the Vice Chair of the Media and Information division in my college study
              program organization. In 2019, me and my team won a silver medal in the 2019 KIWIE innovation competition
              held in Seoul, South Korea.
            </p>

            <div className="space-y-4">
              <h4 className="text-center text-xl font-semibold">Contact Me</h4>

              <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
                <a
                  href=""
                  className="flex items-center gap-2 rounded-full border border-card-border bg-card-white p-2 pr-4 text-body-dark"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-light">
                    <img src="/email.svg" alt="" />
                  </div>
                  contact@raharditya.com
                </a>

                <a
                  href=""
                  className="flex items-center gap-2 rounded-full border border-card-border bg-card-white p-2 pr-4 text-body-dark"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-light">
                    <img src="/linkedin.svg" alt="" />
                  </div>
                  Muhammad Raharditya A.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;
