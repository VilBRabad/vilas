export const project_data = [
    {
        id: 1,
        title: "Vidstream",
        sort_hand: "A film streaming platform",
        date: "20 Aug 2024",
        github_link: "https://github.com/VilBRabad/VidStream-client",
        cover_video: "assets/vidstream_vid.webm",
        Logo: "assets/vidstream_logo.png",
        home_img: "assets/vidstream_home.png",
        second_img: "assets/vidstream_sec.png",
        description: "This project allows users to explore a vast library of movies, all categorized by genre and user ratings. Users can create personal accounts, enabling them to curate watchlists. Vidstream features a responsive and intuitive interface, ensuring that users can easily navigate through the content on any device. Additionally, Vidstream includes a robust search functionality, allowing users to find specific titles or discover new content through filters like genre, and ratings. This project is a comprehensive exploration of modern web development techniques.",
        functionalities: [
            "Create and sign in with email address",
            "Search movies by movie name",
            "Filters by the genre and rating.",
            "Make personal watchlist and manage it",
        ],
        tools: [
            "React", "MongoDB", "Tailwind CSS", "Redux", "Express", "Mongoose", "JWT", "Cloudinary"
        ],
        diagram: {
            name: "User model diagram",
            link: "assets/vidtsream_dia.png"
        },
        note: "UI inspired from crunchyroll and netflix"
    },
    {
        id: 2,
        title: "Twitter Clone",
        sort_hand: "Social media platoform - clone of twitter",
        date: "30 Jul 2024",
        github_link: "https://github.com/VilBRabad/twitter-clone-client",
        cover_video: "assets/twitter_cov.png",
        Logo: null,
        home_img: "assets/twitter_cov.png",
        second_img: "assets/twitter_sec.png",
        description: "The project is centered around the creation of a Twitter clone, built using ReactJS and NodeJs, offering a feature-rich social media platform where users can interact, share, and stay connected. This clone allows users to register, create profiles, and engage with the community by posting tweets. The real-time feed keeps users updated with the latest posts from the accounts they follow, providing a dynamic and interactive experience. Key features include user authentication, enabling secure login and profile management. The project also includes an intuitive dashboard where users can manage their profiles, view their tweet history on the platform.",
        functionalities: [
            "Secure login with google account (OAuth)",
            "Posting posts (news) with image",
            "Follow/Unfollow to other users",
            "Show latest posts or show posts of followed users",
            "Show basic profile recomendation system"
        ],
        tools: [
            "Next", "Tailwind CSS", "Express", "Tanstack Query", "Prisma ORM", "GraphQL", "PostgreSQL", "AWS S3"
        ],
        diagram: {
            name: "User model diagram",
            link: "assets/twitter_dia.png"
        },
        note: null
    },
    {
        id: 3,
        title: "Donate.me",
        sort_hand: "Blood management system",
        date: "01 Dec 2023",
        github_link: "https://github.com/VilBRabad/blood-bank-system",
        cover_video: "assets/donate_cov.png",
        Logo: null,
        home_img: "assets/donate_cov.png",
        second_img: "assets/donate_sec.png",
        description: "The project revolves around the vital domain of blood donation and management within a ReactJs and Flask framework. It facilitates the seamless interaction between hospitals, donors and normal users by providing a robust online platform. Hospitals and donors alike can register on the site, creating dedicated accounts to streamline the blood donation process. Donors have the added convenience of scheduling appointments for blood donations, while hospitals can efficiently manage and accept these appointments. The project incorporates an insightful dashboard feature for hospitals, enabling them to monitor the availability of blood units categorized by blood group. As an additional feature, regular users can access information regarding available blood units in their specific areas by entering the relevant area pin code. This project serves as a comprehensive exploration and implementation of advanced MySQL concepts, furthering our understanding of sophisticated database management systems.",
        functionalities: [
            "User registration for hospitals and donors.",
            "Appointment booking functionality for blood donation.",
            "Dashboard for hospitals to manage and accept donor appointments.",
            "Real-time display of available blood units categorized by blood group.",
            "Area-specific blood unit availability for regular users through pin code entry.",
            "Pin code-based search functionality for users to view available blood units in specific areas."
        ],
        tools: [
            "React", "CSS", "Flask", "MySQL", "Figma"
        ],
        diagram: {
            name: "ER Diagram",
            link: "assets/donate_dia.png"
        },
        note: null
    },
    {
        id: 4,
        title: "Big-Mart Sales Visualization",
        sort_hand: "A data visualization platform",
        date: "29 May 2023",
        github_link: "https://github.com/VilBRabad/Big-Mart-Sales-Visualization",
        cover_video: "assets/big_mart_cov.png",
        Logo: null,
        home_img: "assets/big_mart_cov.png",
        second_img: "assets/big_mart_sec.png",
        description: "This project focuses on the visualization of sales data for a fictional retail chain, Big Mart, using the Python programming language and the Matplotlib data visualization library. The main objective of this project is to provide insights into the sales trends of the retail chain using graphical representations such as line charts, bar charts, scatter plots, and histograms. The project first cleans and preprocesses the data to make it suitable for analysis and visualization. Then, using Matplotlib, the project creates various visualizations that can help stakeholders understand the sales trends of the retail chain. These visualizations include sales 4 by product category, sales by store size, sales by location, and sales trends over time. The project concludes by summarizing the insights gained from the visualizations and discussing the implications of these insights for the business. Overall, this project demonstrates the power of Python and Matplotlib for analyzing and visualizing complex datasets and providing valuable insights to businesses.",
        functionalities: [
            "User can able to insert dataset.",
            "The System is able to generate graphical representation of inserted dataset.",
            "The system is be able to analyze sales data to identify trends, patterns and insights.",
            "It should analyze the data and give most profitable items & most loss-making items."
        ],
        tools: [
            "Django", "Python", "MySQL", "HTML", "CSS"
        ],
        diagram: {
            name: "Flow diagram",
            link: "assets/big_mart_dia.png"
        },
        note: null
    },
]

import { color } from "framer-motion";
import { SiFlask, SiExpress, SiReact, SiMysql, SiPython, SiJsonwebtokens, SiDjango, SiPrisma, SiTailwindcss, SiHtml5, SiNextdotjs, SiCss3, SiFigma, SiGraphql, SiReactquery, SiPostgresql, SiMongodb, SiMongoose, SiCloudinary, SiRedux } from "react-icons/si";

export const icons = {
    React: {
        icon: SiReact,
        color: "#3795BD"
    },
    Express: {
        icon: SiExpress,
        color: "#FFFFFF"
    },
    Flask: {
        icon: SiFlask,
        color: "#FFFFFF"
    },
    Python: {
        icon: SiPython,
        color: "#3795BD"
    },
    Django: {
        icon: SiDjango,
        color: "#0D7C66"
    },
    MySQL: {
        icon: SiMysql,
        color: "#125B9A"
    },
    HTML: {
        icon: SiHtml5,
        color: "#E4552E"
    },
    CSS: {
        icon: SiCss3,
        color: "#1C76B8"
    },
    Figma: {
        icon: SiFigma,
        color: "#FFFFFF"
    },
    Next: {
        icon: SiNextdotjs,
        color: ""
    },
    "Tailwind CSS": {
        icon: SiTailwindcss,
        color: "#3EBFF8"
    },
    "Prisma ORM": {
        icon: SiPrisma,
        color: "#FFFFFF"
    },
    GraphQL: {
        icon: SiGraphql,
        color: "#E63BAE"
    },
    "Tanstack Query": {
        icon: SiReactquery,
        color: "#1F495E"
    },
    PostgreSQL: {
        icon: SiPostgresql,
        color: "#1F495E"
    },
    MongoDB: {
        icon: SiMongodb,
        color: "#499C3A"
    },
    Mongoose: {
        icon: SiMongoose,
        color: "#8C0808"
    },
    Cloudinary: {
        icon: SiCloudinary,
        color: "#3A4EC7"
    },
    "AWS S3": {
        icon: null,
        color: "#FFFFFF"
    },
    JWT: {
        icon: SiJsonwebtokens,
        color: "#FFFFFFF"
    },
    Redux: {
        icon: SiRedux,
        color: "#A020F0"
    },
}