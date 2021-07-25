import Link from "next/link";

function Projects(props) {
  return (
    <div className={`px-6 relative pt-10 ${props.bgColor}`}>
      <div className=" md:container md:mx-auto">
        <small className="text-defocused">Mobile Application</small>
        <h2 className="font-bold text-2xl md:text-4xl mt-6 md:mt-4 md:mb-6 title-color">
          Sapasampah.id
        </h2>

        <div className="md:flex md:flex-row-reverse">
          <div className="grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 mt-4 md:mt-0 mb-8 md:mb-0 md:ml-auto">
            <div className="md:mb-6">
              <h3 className="font-bold mb-1 title-color">Stacks:</h3>
              <ul className="text-defocused">
                <li>Java</li>
                <li>Android Studio</li>
                <li>Firebase</li>
              </ul>
            </div>
            <div className="">
              <h3 className="font-bold mb-1 title-color">Role:</h3>
              <ul className="text-defocused">
                <li>Java</li>
                <li>Android Studio</li>
                <li>Firebase</li>
              </ul>
            </div>
          </div>

          <div className="w-4/5">
            <p className="mb-4">
              Lorem Ipsum adalah contoh teks atau dummy dalam industri
              percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah
              menjadi standar contoh teks sejak tahun 1500an, saat seorang
              tukang cetak yang tidak dikenal mengambil sebuah kumpulan teks dan
              mengacaknya untuk menjadi sebuah buku contoh huruf.
            </p>

            <Link href="/project">
              <a>Lebih Lanjut</a>
            </Link>
          </div>
        </div>

        <img src="/assets/projectTemp.png" alt="" className="mt-8" />
      </div>
    </div>
  );
}

export default Projects;
