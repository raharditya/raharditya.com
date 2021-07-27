import React from "react";

function HomeIntroduction(props) {
  return (
    <div className="px-6 py-8 my-10 md:container md:mx-auto">
      <h3 className="md:hidden text-center text-heading-serif section-heading text-2xl mb-8 relative z-10">
        Who am I
      </h3>

      <div className="md:flex md:flex-row-reverse md:gap-16">
        <img
          src="/assets/header/hero.jpg"
          alt=""
          className="w-full h-64 md:h-64 md:w-auto img-object rounded-lg shadow-lg"
        />
        <div className="">
          <h3 className="hidden md:block text-heading-serif section-heading text-2xl mb-8 relative z-10">
            Who am I
          </h3>

          <h4 className="font-bold mb-4 mt-8 text-lg">
            Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan
            dan penataan huruf atau typesetting.
          </h4>

          <p>
            Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan
            dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi
            standar contoh teks sejak tahun 1500an, saat seorang tukang cetak
            yang tidak dikenal mengambil sebuah kumpulan teks dan mengacaknya
            untuk menjadi sebuah buku contoh huruf.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeIntroduction;
