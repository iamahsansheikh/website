export const configuration = {
    home: {
        heading: 'Ahsan Ijaz',
        headingtext: 'Lead/Consultant - Java Full Stack Developer (Java Spring Boot, JavaScript, Angular 8, Node)',
        description: "I developed this site using Angular 7 to start my own blog. I will keep improving the site and add more stuff!",
        buttontext: 'do some action',
        buttonlink: '\Home'
    },
    about: {
        tagline: 'Who Is Ahsan Ijaz',
        title: 'Background',
        description: `I am a Lead/Consultant Java Full Stack Developer, with Masters degree in Software Systems Engineering from University of Regina (Canada).
                        `,
        
        experience: `TechStack: Java Spring Boot, Angular 8, NodeJs, JavaScript, NgRx, Hibernate, JPA, OpenShift, Consul Registry,
        Jenkins, Github, Rest API, Microservices, SQL Server, CSS, HTML, Bootstrap`,

        features: [
            { icon: 'mortar-board', title: 'Education', description: 'I have Masters degree in Software Engineering from University of Regina (Canada). I did my Bachelors in Computer Science from COMSATS University, Pakistan ' },
            { icon: 'briefcase', title: 'Work History', description: 'I have more than 5 years of experience working in Financial Institutions. I have worked in CIBC and RBC and currently working in CITI Bank as Consultant - Java Full Stack Developer' },
            { icon: 'star', title: 'Hobbies', description: 'I am passionate about sports and travelling. I love playing Squash, Cricket, and Soccer. Other than that, I am passionate about technologies and in my leasure time I try to learn new technologies' },
            { icon: 'bar-chart', title: 'Career Goals', description: 'I am passionate about technologies, my aim is to learn new technologies and enhance my skill set ' }
        ]
    },
    services: {
        tagline: 'BELIEVING',
        title: 'Focusing On What Matters Most',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'
    },
    testimonials: {
        tagline: 'FEEDBACK',
        title: 'What our customers are saying',
        description: '',
        feedbacks: [
            { name: 'John Doe', userimage: 'user-1.jpg', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'XYZ' },
            { name: 'Roslyn Doe', userimage: 'user-2.jpg', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'ABC' },
            { name: 'Thomas Doe', userimage: 'user-3.jpg', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'DEF' },
        ]
    },
    workhistory: {
        tagline: 'Work History',
        title: 'Companies I worked with',
        description: 'I have been working in major Financial Institutions of Canada. I am working in CITI Bank, previously I worked with CIBC and RBC in their Digital Teams',
        company: [
            { name: 'CITI Bank', weblink: 'https://www.citigroup.com/canada/en/', logo: 'citibank-logo.png'},
            { name: 'CIBC', weblink: 'https://www.cibc.com/', logo: 'company-logo1.png' },
            { name: 'Royal Bank of Canada', weblink: 'https://www.rbcroyalbank.com/personal.html', logo: 'company-logo2.png' },
        ]
    },
    pricing: {
        tagline: 'YOUR CHOICE',
        title: 'We have the right package for you',
        plans: [
            {
                title: 'PERSONAL', subtitle: 'The standard version', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '19', currency: '$', feature: {
                    downloads: '5 Downloads', extensions: '2 Extensions', tutorials: 'Tutorials', support: 'Forum Support', updates: '1 year free updates'
                },
                buttonlink: '', buttontext: 'Buy Today', featured: true
            },
            {
                title: 'STUDENT', subtitle: 'Most popular choice', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '29', currency: '$', feature: {
                    downloads: '15 Downloads', extensions: '5 Extensions', tutorials: 'Tutorials with Files', support: 'Forum Support', updates: '2 years free updates'
                },
                buttonlink: '', buttontext: 'Buy Today', featured: true
            },
            {
                title: 'BUSINESS', subtitle: 'For the whole team', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '49', currency: '$', feature: {
                    downloads: 'Unlimited Downloads', extensions: 'Unlimited Extensions', tutorials: 'HD Video Tutorials', support: 'Chat Support', updates: 'Lifetime free updates'
                },
                buttonlink: '', buttontext: 'Buy Today', featured: true
            },
        ]
    },
    gallery: {
        images: [
            'gallery-image-1.jpg',
            'gallery-image-2.jpg',
            'gallery-image-3.jpg',
            'gallery-image-4.jpg',
            'gallery-image-5.jpg',
            'gallery-image-6.jpg'

        ]
    },
    footer: {
        copyrighttext: "Developed by ",
        developer: "Ahsan Ijaz",
        developerlinkedin: "https://www.linkedin.com/in/iamahsanijaz/"
    },
    social: [
        { link: 'https://github.com/', target: '_blank', title: 'Instagram"', username: 'iamahsansheikh', icon: 'github' },
        { link: 'https://www.linkedin.com/in/', target: '_blank', title: 'Linkedin', username: 'iamahsanijaz', icon: 'linkedin' },
        { link: 'https://www.instagram.com/', target: '_blank', title: 'Instagram"', username: 'iamahsansheikh', icon: 'instagram' },

    ],
    blog: {
        tagline: 'MY BLOG', title: 'My World in nutshell!',
        posts: [
            { id: 1, title: 'The first Article', author: 'Ahsan Ijaz', image: 'gallery-image-1.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article' },
            { id: 2, title: 'The second Article', author: 'Ahsan Ijaz', image: 'gallery-image-2.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article' },
            { id: 3, title: 'The third Article', author: 'Ahsan Ijaz', image: 'gallery-image-3.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article' },
            { id: 4, title: 'The fourth Article', author: 'Ahsan Ijaz', image: 'gallery-image-4.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article' },
            { id: 5, title: 'The fifth Article', author: 'Ahsan Ijaz', image: 'gallery-image-5.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article' },
            { id: 6, title: 'The sixth Article', author: 'Ahsan Ijaz', image: 'gallery-image-6.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article' },
            { id: 7, title: 'The seventh Article', author: 'Ahsan Ijaz', image: 'gallery-image-1.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article' },
            { id: 8, title: 'The eight Article', author: 'Ahsan Ijaz', image: 'gallery-image-2.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article' },
            { id: 9, title: 'The ninth Article', author: 'Ahsan Ijaz', image: 'gallery-image-3.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article' },
            { id: 10, title: 'The tenth Article', author: 'Ahsan Ijaz', image: 'gallery-image-4.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article' },
            { id: 11, title: 'The eleventh Article', author: 'Ahsan Ijaz', image: 'gallery-image-5.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article' },

        ]
    }
}