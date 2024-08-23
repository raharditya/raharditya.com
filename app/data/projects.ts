type Project = {
  slug: string;
  name: string;
  stacks: { title: string; type: number }[];
  thumbnailPictureUrl: string;
  description: string;
  shortDescription: string;
  highligts: {
    title: string;
    items: string[];
  }[];
};

export default [
  {
    slug: 'skilroom',
    name: 'Skilroom',
    stacks: [{ title: 'react', type: 0 }],
    thumbnailPictureUrl: '/projects/skilroom-thumbnail.webp',
    description:
      'An educational SaaS within Skilvul that empowers educators to build their own learning platforms. These platforms enable educators to manage student admissions, organize learning activities, and create syllabuses—all while generating income from their customized educational space.',
    shortDescription:
      'An educational SaaS within Skilvul that empowers educators to build their own learning platforms. These platforms enable educators to manage student admissions, organize learning activities, and create syllabuses—all while generating income from their customized educational space.',
    highligts: [
      {
        title: 'Dynamic Subdomain Routing',
        items: [
          `Skilroom offers a user-customizable subdomain for accessing their learning platform (e.g., my-platform.skilroom.com). As Skilvul lacked this type of service, we had to develop this feature from scratch.`,
          `As the project lead and full-stack web developer for Skilvul, I needed to specify how to develop this feature. I researched its integration into Skilvul's existing infrastructure. After confirming its feasibility, I began coding.`,
          `I started by implementing a wildcard DNS setting for SkilRoom's EC2 instance and updated Traefik's routing configuration to direct wildcard traffic to SkilRoom's Docker container. Testing proved challenging as I couldn't replicate it locally. Initially, it failed due to an invalid SSL certificate, but I resolved this by adjusting Traefik's certificate generation and switching its certificate resolver to Cloudflare. Once wildcard routing succeeded, I implemented back-end checks for subdomain validity.`,
          `The feature launched successfully, meeting all expectations.`,
        ],
      },
      {
        title: 'Remix.js Migration',
        items: [
          `At Skilvul, we always strive to stay at the forefront of technology and implement the latest tools in our projects. For the development of Skilroom, we decided to upgrade to Next.js 13 with the new app router and Docker Swarm, as opposed to our usual Docker Compose setup.`,
          `As the lead developer, I needed to implement these new technologies and ensure they worked effectively for our project.`,
          `We began development using Next.js 13 with the app router. However, after deploying to our beta server, we encountered significant issues. There appeared to be a memory leak in Next.js 13, causing high RAM and CPU usage. We considered reverting to an earlier version of Next.js, but since we had already extensively used the app router, switching back to the pages router would require substantial refactoring and time.`,
          `After careful consideration, we decided to migrate from Next.js to Remix. We chose Remix because its routing system is similar to Next.js's app router, allowing us to maintain much of our existing file structure with minimal refactoring. We kept all other aspects of our tech stack unchanged during this migration.`,
          `The migration to Remix proved to be highly successful. We no longer experienced slowdowns on the web application, server health remained stable, and everything performed as expected in both beta and production environments. Following this positive experience, Skilvul adopted Remix for all new web projects moving forward.`,
        ],
      },
      {
        title: 'Midtrans Integration',
        items: [
          `Skilroom needed to implement a payment feature using Midtrans as the payment gateway. This was my first time handling such an integration.`,
          `As the lead developer, I took the initiative to implement this feature on the backend. The goal was to enable platform creators to monetize their products and provide immediate access to users upon purchase.`,
          `I began by thoroughly studying Midtrans' documentation to understand its functionality and best practices for implementation. Then, I developed a dedicated microservice to handle payments for all Skilroom sub-products, set up a database to support each sub-product for creating payable items, established an endpoint to receive callbacks from Midtrans for transaction updates, ensured that the database was always updated and valid according to Midtrans data, and implemented automatic access granting to purchased products upon successful transactions.`,
          `The integration with Midtrans was successful without any significant issues. By designing the payment system as a microservice detached from the main service and other Skilroom sub-products, it became universally applicable. This allowed it to process payments from all Skilroom sub-products, both existing and future, without requiring any modifications.`,
        ],
      },
      {
        title: 'Design Collaboration',
        items: [
          `At Skilvul, there is a strong emphasis on collaboration between different teams, particularly between the development team and the product and UI/UX teams.`,
          `As the lead developer of Skilroom, I was responsible for accommodating questions from other teams and providing solutions from a technical perspective during consultations with the UI/UX team.`,
          `Throughout the development process, there was frequent consultation between the product team and the development team. Many aspects of the design were influenced by input from the development team. I actively participated in discussions about the complexity of each feature to be developed and estimated the time required for completion, ensuring that features were delivered on time and within deadlines.`,
          `This collaborative approach resulted in the best output between the product team and development team. It ensured that what was being developed for our users was the best that could be made with the current resources and ideas, and highlights the importance of cross-team communication and how technical insights can significantly influence and improve product design and development.`,
        ],
      },
    ],
  },
  {
    slug: 'bootcamp-platform',
    name: 'Bootcamp Platform',
    stacks: [{ title: 'react', type: 0 }],
    thumbnailPictureUrl: '/projects/program-thumbnail.webp',
    description:
      'A holistic Learning Management System to manage all bootcamp activities in Skilvul. It ranges from the admin dashboard and student catalog page to the student dashboard. The platform allows admins to manage bootcamps as well as students to submit assignments, access bootcamp learning materials, view their scorecards, and request absences.',
    shortDescription: `A comprehensive Learning Management System for Skilvul that manages all bootcamp activities, including admin and student dashboards. It enables admins to manage bootcamps and allows students to submit assignments, access materials, view scores, and request absences.`,
    highligts: [
      {
        title: 'Handover Process',
        items: [
          `One of the features of this project is a syllabus editor where admins can provide a structure and build the syllabus based on that structure. At the time, there was a disconnect between the dev team and the product team regarding this feature.`,
          `During its initial development, the product team proposed a feature where admins could create their own structure for a syllabus and then build a syllabus for a bootcamp based on that structure. This wasn't communicated properly to the dev team initially, leading to confusion about how the feature should be implemented.`,
          `To address this miscommunication, we scheduled a meeting with the product team. After some back-and-forth discussions, we finally cleared up the confusion and realized that the dev team's understanding of the feature differed from the product team's requirements due to its complexity. We ultimately decided to use a linked list to connect the syllabuses, as we needed to know the parent and children of a given syllabus at any time. This could then be assembled in the front-end to form a tree view, complete with drag-and-drop functionality to reorder the syllabus components.`,
          `In the end, we developed this feature exactly as intended, without any issues. This experience served as a valuable lesson for both teams to improve the handover process between the product team and the development team.`,
        ],
      },
      {
        title: 'Requirement Changes',
        items: [
          `During the development of this platform, there was a change of requirement where the product team needs a better way to edit text content within the platform. The old text editor used in the platform is not suitable and not user friendly enough for the other team members who are not technologically inclined, since they will have to write the content in using raw markdown format.`,
          `As the web developer tasked to overhaul this feature, I needed to look for alternative text editor that is compatible with the new requirements. I eventually picked 3 of the best matches and compiled them to a single web page for the product team to try first hand. It was decided to use QuillJs text editor for its WYSIWYG capability and its ease of implementation and backward compatibility with the current database structure.`,
          `This was quickly made as a drop-in replacement to the old text editor. This made the platform easier to use overall for the other non-technical team members.`,
        ],
      },
      {
        title: 'Bootcamp Class Attendance',
        items: [
          `One of the key features of this platform is to have the bootcamp students attend their online classes through their designated Zoom meetings. This can be arranged with the existing feature where admins can create and manage bootcamp classes. The product team wanted to double down on this feature and also add an attendance list.`,
          `Initially the concept was that the admins would take note of the students attending the class and then manually checklists each students in the bootcamp dashboard. But upon further research made by both the product team and the developer team, it was decided that we would make use of Zoom’s export attendance feature to automatically read the student’s attendance and remove the hassle of manually checklisting the attendees. However, this comes with the limitation that the students can only join the Zoom session with the email that they registered with in the platform, otherwise their attendance will not be accounted for.`,
          `We started working on the endpoint to read the CSV exported by Zoom. For each student, a calculation will be made to determine the percentage of their attendance and whether that percentage meets the minimum amount required to count for “attending the class”. We realized early on that Zoom has two formats when they export this attendance information, so we also take this into account when reading the file.`,
          `The challenge didn’t stop there, since we ran into a problem where students can hop in and out of the Zoom session. This would lead to skewed result with the attendance percentage being more than 100%. This was quickly fixed by using the outer-most range for the join and leave time, as well as counting and adding the actual minutes spent inside the Zoom session instead of counting the delta between the join and leave time.`,
          `This feature rolled out successfully and resulted in eliminating hours potentially spent on manually inputting the student attendance.`,
        ],
      },
    ],
  },
  {
    slug: 'certificate-generator',
    name: 'Certificate Generator',
    stacks: [{ title: 'react', type: 0 }],
    thumbnailPictureUrl: '/projects/certificate-thumbnail.webp',
    description: `An internal tool used to generate PDF certificates in bulk and asynchronously, with seamless integration into Skilvul's user base. Generated certificates can be linked to any bootcamp in Skilvul and appear on individual students' bootcamp dashboards. This empowers Skilvul to efficiently create and distribute certificates for bootcamp participants upon program completion, ensuring students receive their credentials promptly and enhancing their overall platform experience.`,
    shortDescription: `An internal tool for bulk PDF certificate generation, integrated with Skilvul's user base. It allows seamless linking of certificates to bootcamps, displaying them on students' dashboards, and ensuring timely distribution upon program completion.`,
    highligts: [
      {
        title: 'Time Constraint',
        items: [
          `When this project was conceptualized, the product team faced a time constraint due to multiple projects in development, one of which was time-sensitive. Consequently, they needed to set a strict timeframe for this particular project. Before development began, it was crucial to determine if the project could be completed within the provided timeframe.`,
          `As the lead developer, I had to evaluate the product team's concept and assess whether it was realistic to deliver a finished product within the set time. To accomplish this, we organized meetings to discuss the complexity of the proposed concept and integrate the dev team's insights regarding the project's functionality and timeline. Initially, the concept was overly complex, including several non-essential functionalities. After several discussions between the two teams, we opted for a simplified approach to maintain the original timeframe.`,
          `I began by working on the fixed certificate template and then developed a method for admins to create new certificate items. Admins would provide a CSV file containing all the necessary certificate information, so I had to set up the backend to read this file and generate the PDF. The content was formatted in HTML and then converted to PDF, with the backend handling HTML generation based on the CSV data. We used a standard image for the certificate's background.`,
          `Ultimately, we completed the project successfully within the given timeframe. It was deployed to production and successfully integrated with other Skilvul services.`,
        ],
      },
      {
        title: 'Batch PDF Generation',
        items: [
          `As part of the key feature of this platform, this project requires a way to generate PDF files in bulk. This can range from just a few files to thousands of PDF files. This doesn’t have a precedent in any services owned by Skilvul, so this feature had to be planned and developed from scratch.`,
          `As the lead developer of this project, I needed to define how this feature will be developed. From the get-go, I knew that it had to be done from the backend and that the process had to be asynchronous. So I did a preliminary research into the tools that I can use to implement this feature. After rounding up a few choices, I tested them individually to get a grasp of their capabilities and shortcomings. Once it was done, I went ahead to plan the database structure as well as how all the puzzle pieces should come together.`,
          `I chose to use a PDF generator called pdf-turtle. This standalone program would be containerized and function as a microservice in Skilvul's system. Alongside this microservice, a worker subscribes to a Redis pub-sub channel and communicates directly with pdf-turtle to generate and upload PDF files to AWS S3.`,
          `The project's main back-end triggers the worker by sending a pub-sub message to the Redis channel. This message contains all the data for a particular PDF file and a counter for each file being generated. As each certificate is processed (successfully or not), the counter decreases. While the counter is non-zero, users are prevented from modifying or deleting the certificate. Only when the counter reaches zero or no longer exists is this limitation lifted, signaling that the entire certificate generation process is complete.`,
          `In the end, this feature worked well with only a minor hiccup in the testing phase due to a bug that made the generate process doesn’t get marked as completed despite the entire process being completed. This issue was fixed before the feature was rolled to production.`,
        ],
      },
    ],
  },
  {
    slug: 'kkn-covid-jogja',
    name: 'KKN Covid Jogja',
    stacks: [{ title: 'react', type: 0 }],
    thumbnailPictureUrl: '/projects/kkn-thumbnail.webp',
    description: `A progressive web app developed for my college's Community Service Program, conducted online due to the COVID-19 pandemic. This project aims to educate people about the novel coronavirus, featuring up-to-date data on COVID-19 cases and credible news from multiple outlets. It utilizes web scrapers that run automatically daily via cron jobs to keep the information current, making the app a reliable source during the rapidly evolving pandemic situation.`,
    shortDescription: `An online progressive web app for my college's Community Service Program that provides up-to-date COVID-19 data and news using daily automated web scrapers.`,
    highligts: [
      {
        title: 'Data Scraping',
        items: [
          `When creating this project, I envisioned it as a hub connecting various credible sources of COVID-19 information. However, most of this information wasn't available as a ready-to-use API, so I had to create it myself. This was achieved using web scrapers triggered automatically every day via CRON jobs. I employed Puppeteer and Cheerio as the web scraping tools for this project.`,
          `I developed two web scrapers. The first one fetched COVID-19 case data for every district and sub-district in Yogyakarta. This data came directly from the local government's website, where citizens could input their postal code to view the relevant COVID-19 status for their region. I created an automated web scraper that would input a postal code, extract the information, save it to an array, and then move to the next postal code until the process was complete. This scraper ran once daily, storing the data to a MongoDB database.`,
          `The second web scraper handled news information. It accessed five different news outlets using pre-selected links and extracted relevant articles. I carefully chose these links to include only COVID-19 related news within national and international scopes. This scraper ran every two hours daily to ensure the displayed news was always up to date.`,
        ],
      },
      {
        title: 'Public Education',
        items: [
          `In addition to providing up-to-date information about COVID-19 cases, this community service program required our team to share accurate, self-produced content about COVID-19 with the public. To meet this need, we created articles detailing the latest information and findings about COVID-19, as well as related internet trends. We also developed an "anti-hoax" page to debunk popular COVID-19 myths and explain why they're false.`,
          `We wrote the articles in Markdown format to make them accessible to other team members who might not have been able to directly alter the project's code. This approach enabled us to effectively disseminate crucial information about COVID-19, combat misinformation, and provide the public with reliable, fact-checked content.`,
        ],
      },
    ],
  },
] satisfies Project[];
