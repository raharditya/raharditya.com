import ProjectHeader from "../../components/ProjectHeader";
import ProjectNext from "../../components/ProjectNext";
import ProjectSection from "../../components/ProjectSection";
import Invitation from "../../components/Invitation";

function ProjectPage(props) {
  return (
    <div className="md:container md:mx-auto">
      <ProjectHeader />

      <div className="px-6 py-8 mt-6 backdrop">
        <ProjectSection
          title="Konsep"
          highlight="Tidak seperti anggapan banyak orang, Lorem Ipsum bukanlah teks-teks
          yang diacak."
        >
          <p className="mb-4 text-black">
            Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan
            dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi
            standar contoh teks sejak tahun 1500an, saat seorang tukang cetak
            yang tidak dikenal mengambil sebuah kumpulan teks dan mengacaknya
            untuk menjadi sebuah buku contoh huruf.
          </p>
          <p className="mb-4 text-black">
            Ia tidak hanya bertahan selama 5 abad, tapi juga telah beralih ke
            penataan huruf elektronik, tanpa ada perubahan apapun. Ia mulai
            dipopulerkan pada tahun 1960 dengan diluncurkannya lembaran-lembaran
            Letraset yang menggunakan kalimat-kalimat dari Lorem Ipsum, dan
            seiring munculnya perangkat lunak Desktop Publishing seperti Aldus
            PageMaker juga memiliki versi Lorem Ipsum
          </p>
        </ProjectSection>

        <ProjectSection
          title="Implementasi"
          highlight="Lorem Ipsum adalah contoh teks atau dummy dalam industri."
        >
          <p className="mb-4 text-black">
            Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan
            dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi
            standar contoh teks sejak tahun 1500an, saat seorang tukang cetak
            yang tidak dikenal mengambil sebuah kumpulan teks dan mengacaknya
            untuk menjadi sebuah buku contoh huruf.
          </p>
          <p className="mb-4 text-black">
            Ia tidak hanya bertahan selama 5 abad, tapi juga telah beralih ke
            penataan huruf elektronik, tanpa ada perubahan apapun. Ia mulai
            dipopulerkan pada tahun 1960 dengan diluncurkannya lembaran-lembaran
            Letraset yang menggunakan kalimat-kalimat dari Lorem Ipsum, dan
            seiring munculnya perangkat lunak Desktop Publishing seperti Aldus
            PageMaker juga memiliki versi Lorem Ipsum
          </p>
        </ProjectSection>
      </div>

      <ProjectNext />

      <Invitation />
    </div>
  );
}

export default ProjectPage;
