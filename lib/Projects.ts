export const projectsData: FrontProject[] = [
    {
        id: 0,
        title: 'Frozal Foods',
        desc: 'Frozal Food Company Producing and exporting frozen Egyptian agricultural products Worldwide',
        img: 'https://iili.io/JVAjkFe.png',
        live_link: 'http://frozal.com/',
        github_link: undefined,
        tech: ['ReactJs', 'Vite', 'Tailwind'],
        reverce: true
    },
    {
        id: 1,
        title: 'CarHub',
        desc: 'Car rental service',
        img: 'https://iili.io/HycgLYu.png',
        live_link: 'https://car-hub-karim.vercel.app/',
        github_link: 'https://github.com/Karem-Mohamed-Dev/CarHub',
        tech: ['NextJs', 'TypeScript', 'Tailwind'],
        reverce: false
    },
    {
        id: 2,
        title: 'Architecture',
        desc: 'Architecture portfolio Website',
        img: 'https://iili.io/HQHkUCv.png',
        live_link: 'https://nourhan.vercel.app/',
        github_link: 'https://github.com/Karem-Mohamed-Dev/Architecture-portfolio',
        tech: ['React', 'TypeScript', 'Sass', 'react-router'],
        reverce: true
    },
    {
        id: 3,
        title: 'Jopyfi',
        desc: 'Jopyfi is a demo for jops website. with working search, filter and save jop button ',
        img: 'https://iili.io/HQHeHil.png',
        live_link: 'https://jopify-4ea7d.web.app/',
        github_link: 'https://github.com/Karem-Mohamed-Dev/Jopyfi',
        tech: ['React', 'JavaScript', 'Css', 'react-router', 'redux'],
        reverce: false
    },
]

export const backendData: BackEndData[] = [
    {
        id: 0,
        title: 'E-Commerce API',
        desc: "Developed a versatile Node.js-based e-commerce API supporting role-based access (Admin, Seller, User) with functionalities including secure user authentication, image management via Cloudinary, Stripe payment integration, robust product management, cart handling, and efficient order processing. Leveraged MongoDB for data management, ensuring scalability and seamless operations across user roles for an enhanced shopping experience.",
        documintation: 'https://documenter.getpostman.com/view/27899740/2s9YkuXxNe#e46747c4-d61f-4b6e-a70c-4653ce99fb84',
        github_link: 'https://github.com/Karem-Mohamed-Dev/E-Commerce',
        tech: ['NodeJs', 'ExpressJs', 'MongoDb', 'Stripe']
    },
    {
        id: 1,
        title: 'Social Media API',
        desc: "Engineered a robust Node.js-based Social Media API with a focus on user engagement and content sharing. The API features a personalized feed that aggregates latest posts from user followings, displays random content when no followings exist, facilitates seamless image and video uploads, supports nested comments, and offers comprehensive functionalities for user, post, and comment management. Prioritizing dynamic content delivery and user interaction, this API fosters an engaging social media experience.",
        documintation: undefined,
        github_link: 'https://github.com/Karem-Mohamed-Dev/Social-Media-Api',
        tech: ['NodeJs', 'ExpressJs', 'MongoDb']
    },
    {
        id: 1,
        title: 'Jop Portal API',
        desc: "Developed a robust Job Portal API using Node.js catering to both companies and job seekers. The API facilitates secure login/signup for companies and seekers, comprehensive user profile management (add, edit, delete), job management functionalities (add, edit, delete), and implements an advanced search system allowing seekers to explore job listings with sorting and filtering capabilities. This API is designed to streamline the job search process, empowering users with intuitive functionalities tailored to both companies and job seekers.",
        documintation: undefined,
        github_link: 'https://github.com/Karem-Mohamed-Dev/Jobs-Portal',
        tech: ['NodeJs', 'ExpressJs', 'MongoDb']
    }
]
