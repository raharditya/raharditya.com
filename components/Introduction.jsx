import React from "react";

function Introduction(props) {
  return (
    <section className="px-6 my-16">
      <img src="/assets/hero-2.jpg" alt="" className="w-full rounded-t-lg" />
      <div className="bg-white rounded-b-md shadow-lg px-6 pt-6 pb-10 -mt-40 z-10 relative">
        <h2 className="section-title title-color mb-4 font-bold text-5xl">
          Who
          <br />
          Am I?
        </h2>
        <p className="mb-4">
          Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan
          dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar
          contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak
          dikenal mengambil sebuah kumpulan teks dan mengacaknya untuk menjadi
          sebuah buku contoh huruf.
        </p>
        <p>
          Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan
          dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar
          contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak
          dikenal mengambil sebuah kumpulan teks dan mengacaknya untuk menjadi
          sebuah buku contoh huruf.
        </p>
      </div>
    </section>
  );
}

export default Introduction;
