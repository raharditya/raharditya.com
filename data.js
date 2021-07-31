const projectsData = [
  {
    id: 0,
    path: "kkn-covid-jogja",
    thumbnail: "/assets/projects/kkn-thumb.jpg",
    links: [
      {
        url: "https://kkncovidjogja.online",
      },
      {
        github: "",
      },
    ],
    title: "KKN Covid Jogja",
    titleFormat: "KKN Covid/Jogja",
    category: "PWA",
    stack: ["React JS", "Node JS", "Express"],
    role: "Fullstack Developer",
    shortDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    content: [
      {
        section: "Concept",
        sectionDescription:
          "Tidak seperti anggapan banyak orang, Lorem Ipsum bukanlah teks-teks yang diacak.",
        body: [
          {
            type: "p",
            content:
              "This is a progressive web app that I made in early 2020 for my Community Service Program in my college, which was done online due to the Covid-19 pandemic. This website aims to educate people about the new pandemic. With that in mind, I designed the outline of what this web app.",
          },
          {
            type: "p",
            content:
              "The initial concept of this PWA revolves around the information regarding Covid-19 and its total cases. So I decided to include information regarding Covid-19 cases on the scale of national and local. To keep it relevant to the local community I decided to include local covid-19 data such as per district and sub-district total cases, total recovery, and total covid-19 related deaths.",
          },
          {
            type: "p",
            content:
              "Up-to-date news is also crucial for the public’s education about the pandemic, so I decided to compile news related to Covid-19 from 5 different sources. These sources cover national news and local news, and the user will be able to filter the news by its source. I also decided to include hoax information to educate the local community about misinformation regarding Covid-19.",
          },
        ],
      },
      {
        section: "Implementation",
        sectionDescription:
          "Tidak seperti anggapan banyak orang, Lorem Ipsum bukanlah teks-teks yang diacak.",
        body: [
          {
            type: "p",
            content:
              "This full-stack project was made using the MERN stack. I used React to build the front-end, NodeJS and Express for the back-end, and MongoDB as the database for this PWA. But due to limited development time, the article part of the website was not linked to an actual database, but rather used a local file to manage the articles. However, this turned out to have its advantages as users would have some content to look at when they view this PWA in offline mode, as the article data has already been cached into the user’s browser.",
          },
          {
            type: "p",
            content:
              "In this project, the NodeJS server connects to the front-end via REST API. The back-end server also does a series of scheduled cron jobs. These cron jobs are required to run the web scraper to get news and covid data. I used Puppeteer and Cheerio as the web scraper to get data from various websites. The news scraper runs every 2 hours automatically and scrapes covid-19 related news from predefined sources (CNBC Indonesia, Detik, Kompas for national news, as well as Suara, and TribunNews for local news).",
          },
          {
            type: "p",
            content:
              "The covid-19 web scraper scrapes data from Pemerintah Daerah DIY’s website (no longer maintained) for the local Covid-19 cases data. The website itself accepts zip codes to look for covid-19 information, so I compiled every zip-codes in Daerah Istimewa Yogyakarta and programmed the scaper to automatically input those zip codes one by one and save the scraped data to the database. As for the Indonesia Covid-19 data, I used Mathdroid’s Indonesia COVID-19 API (no longer maintained) to show the current data. I also set a cron job each day to log that particular day’s Covid-19 data and save it to the database to create the line chart.",
          },
          {
            type: "p",
            content:
              "When it comes to deployment, I used Heroku to deploy the NodeJS server, Netlify to deploy the React front-end, and MongoDB Atlas as the database solution. I had initially planned to use Heroku to deploy both the front-end and back-end but ended up deploying the front-end to Netlify for better CDN. I also used the free tier for the Heroku deployment so the server will shut down after 15 minutes of inactivity, resulting in increased load time for the first user who accessed the PWA in that inactive state. I eventually got around this problem by pinging the backend server every 10 minutes using a cron job to make sure that the server never goes out of service.",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    path: "jadwal-pemadatan",
    thumbnail: "/assets/projects/pemadatan-thumb.jpg",
    links: [
      {
        url: "https://jadwal.raharditya.com",
      },
      {
        github: "",
      },
    ],
    title: "Jadwal Pemadatan",
    titleFormat: "Jadwal Pemadatan",
    category: "PWA",
    stack: ["React JS", "Sass"],
    role: "Fullstack Developer",
    shortDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    content: [
      {
        section: "Background",
        sectionDescription:
          "Tidak seperti anggapan banyak orang, Lorem Ipsum bukanlah teks-teks yang diacak.",
        body: [
          {
            type: "p",
            content:
              "In the year 2020, the Covid-19 pandemic forced schools and campuses to cancel their offline classes and eventually moved to online classes. This situation created the need for campuses to condense the curriculum so that the semester ends sooner than usual. My campus, for example, condensed two weeks’ worth of classes into one week. This of course means that the old schedule is no longer in use.",
          },
          {
            type: "p",
            content:
              "Unfortunately, my campus occasionally changed the “condensed” schedule during these times, making many students even more confused as to which schedule is the correct and newest one. It also didn’t help that the official schedule that they gave us was so badly formatted that it was borderline unreadable. Based on that, I wanted to create a system that everyone in my study program can use that can ensure the correctness and the readability of the schedule.",
          },
        ],
      },
      {
        section: "Concept",
        sectionDescription:
          "Tidak seperti anggapan banyak orang, Lorem Ipsum bukanlah teks-teks yang diacak.",
        body: [
          {
            type: "p",
            content:
              "I started working with the layout by drawing on paper then translating it to a designing software. For this project, I used Adobe XD. I mainly used light blue as a theme for this PWA, with an orange heading that resembles the color of my faculty. I only intended this project to be accessed from a smartphone, so I only made the mobile design with no dedicated desktop design.",
          },
          {
            type: "p",
            content:
              "About the schedule itself, I've decided to only include the current day’s schedule as well as tomorrow’s schedule. This was done to minimize the complexity of both the design process as well as the development time. I had initially planned to develop a way to view the schedule for the whole week but ended up scrubbing it as I was too busy with college.",
          },
        ],
      },
      {
        section: "Implementation",
        sectionDescription:
          "Tidak seperti anggapan banyak orang, Lorem Ipsum bukanlah teks-teks yang diacak.",
        body: [
          {
            type: "p",
            content:
              "I used React for this project and was deployed using Netlify. I coded this website to be a Single Page Application (SPA) so the user is not taken to a particular route when changing the schedule. Instead, the content of the DOM gets updated. I used react-transition-group to handle the view transition as well as the schedule day transition. This is also a Progressive Web App (PWA), so users can install this website on their device and access it offline. The service worker strategy used in this project was stale-while-revalidate.",
          },
          {
            type: "p",
            content:
              "This website does not use any database. Instead, it uses local files to store the schedule data. I preferred using this method since it significantly shortened the development time, as well as the fact that users can view the entire website while offline since the schedule data is already cached. One drawback is the delayed update when I push a new schedule due to the stale-while-revalidate service worker strategy that I used. But I didn’t see it as that big of a problem because it didn’t happen that often to be a problem. Furthermore, the stale-while-revalidate strategy ensures that the new schedule will be loaded on the next launch.",
          },
        ],
      },
    ],
  },

  // {
  //   id: 2,
  //   path: "doolan",
  //   thumbnail: "/assets/projects/admi-thumb.jpg",
  //   links: [
  //     {
  //       url: "",
  //     },
  //     {
  //       github: "",
  //     },
  //   ],
  //   title: "Doolan",
  //   titleFormat: "Doolan",
  //   category: "Concept",
  //   stack: ["React JS", "Node JS", "Express"],
  //   role: "Fullstack Developer",
  //   shortDescription:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //   content: [
  //     {
  //       section: "Concept",
  //       sectionDescription:
  //         "Tidak seperti anggapan banyak orang, Lorem Ipsum bukanlah teks-teks yang diacak.",
  //       body: [
  //         {
  //           type: "p",
  //           content:
  //             "Project ini merupakan hasil dari perlombaan yang saya ikuti, yaitu Kompetisi Inovasi Digital yang diadakan oleh Fintech Center UNS. Ini merupakan prototype UI/UX untuk sebuah konsep aplikasi bernama Doolan. Konsep aplikasi ini berkategori pariwisata.",
  //         },
  //         {
  //           type: "p",
  //           content:
  //             "Konsep dari aplikasi ini adalah supaya wisatawan dapat membeli tiket untuk wahana wisata dalam bentuk paket ataupun single. Wahana wisata yang masuk dalam konsep Doolan adalah seperti Jeep Wisata, Odong-odong Alun-alun, ATV Wisata, Andong, dan lain-lain.",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   path: "keluarga-mahahasiswa-administrasi-publik",
  //   thumbnail: "/assets/projects/admi-thumb.jpg",
  //   links: [
  //     {
  //       url: "https://kmap.fisip.uns.ac.id",
  //     },
  //     {
  //       github: "",
  //     },
  //   ],
  //   title: "Keluarga Mahasiswa Administrasi Publik",
  //   titleFormat: "Keluarga Mahasiswa/Administrasi Publik",
  //   category: "Website",
  //   stack: ["React JS", "Node JS", "Express"],
  //   role: "Fullstack Developer",
  //   shortDescription:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //   content: [
  //     {
  //       section: "Concept",
  //       sectionDescription:
  //         "Tidak seperti anggapan banyak orang, Lorem Ipsum bukanlah teks-teks yang diacak.",
  //       body: [
  //         {
  //           type: "p",
  //           content:
  //             "Website ini saya buat untuk organisasi mahasiswa yang saya ikuti, yaitu Keluarga Mahasiswa Administrasi Publik. Sebelumnya, website organisasi ini sudah tidak beroperasi sejak tahun 2015. Project ini bertujuan untuk membangun kembali website KMAP yang sudah lama mati sehingga informasi yang ingin disampaikan oleh organisasi dapat disampaikan lewat website.",
  //         },
  //         {
  //           type: "p",
  //           content:
  //             "Website ini menggunakan Wordpress. Tema yang digunakan merupakan tema yang saya buat sendiri dari awal khusus untuk organisasi ini. Website ini saya buat ketika saya menjabat menjadi Wakil Ketua Departemen Media dan Informasi.",
  //         },
  //       ],
  //     },
  //   ],
  // },

  {
    // id: 4,
    id: 2,
    path: "temu-admi-2019",
    thumbnail: "/assets/projects/admi-thumb.jpg",
    links: [
      {
        url: "https://archive.raharditya.com/admi",
      },
      {
        github: "",
      },
    ],
    title: "Temu AdMI 2019",
    titleFormat: "Temu/AdMI 2019",
    category: "Website",
    stack: ["React JS", "Node JS", "Express"],
    role: "Fullstack Developer",
    shortDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    content: [
      {
        section: "Background",
        sectionDescription:
          "Tidak seperti anggapan banyak orang, Lorem Ipsum bukanlah teks-teks yang diacak.",
        body: [
          {
            type: "p",
            content:
              "In 2019, I joined the committee for the Temu Admi 2019 event in the Publication, Decoration, and Documentation division. This event is a meeting place for public administration students from all over Indonesia. Temu Admi is held every year in a different place, and in 2019 my campus was chosen to host this event.",
          },
          {
            type: "p",
            content:
              "In the years prior, the implementation of the Temu Admi has always been simple in the field of technology, only using Instagram as a medium for delivering information. I feel that there are many shortcomings in this because participants have to scroll through many posts and Instagram posts cannot display in-depth information. Therefore, with the skills I have, I propose to the team about the making of this website. This is the first time this event has a website and email with a special domain.",
          },
        ],
      },
      {
        section: "Concept",
        sectionDescription:
          "Tidak seperti anggapan banyak orang, Lorem Ipsum bukanlah teks-teks yang diacak.",
        body: [
          {
            type: "p",
            content:
              "The core of this website was to publish information regarding this event. This information covers teaser videos, event descriptions, event rundown, proceeding, and information about the committee team. This website will also be used by the participants to register their team to join the event. The registration page will also have important information regarding registration requirements, terms of reference, and a full event timeline.",
          },
        ],
      },
      {
        section: "Implementation",
        sectionDescription:
          "Tidak seperti anggapan banyak orang, Lorem Ipsum bukanlah teks-teks yang diacak.",
        body: [
          {
            type: "p",
            content:
              "This website was made using traditional web tools, namely HTML, CSS, and Vanilla Javascript. This was one of my earlier works when it comes to web development. I have been studying web development since 2018 but have never made any real-life product. This was my first ever real-life project, so the tech stacks that I used were fairly simple. As for the registration page, I decided to use Firebase Firestore as a solution for a database due to its ease of use. Moreover, Firebase is designed to run on the front-end, making it a perfect choice for this website that didn’t have any back-end. I then made a dashboard for the ??? Division to monitor incoming registration for this event.",
          },
        ],
      },
    ],
  },
];

export default projectsData;
