export const configuration = {
    home: {
        heading: 'Ahsan Ijaz',
        headingtext: 'Lead Full Stack Developer (Angular 7, Node, Rest API, Java Spring, .Net)',
        description: "I developed this site using Angular 7 to start my own blog. I will keep improving the site and add more stuff!",
        buttontext: 'do some action',
        buttonlink: '\Home'
    },
    about: {
        tagline: 'Who Is Ahsan Ijaz',
        title: 'Background',
        description: 'I am a Lead Full Stack Developer at CIBC (Canada), with a Masters degree in Software Systems Engineering from University of Regina (Canada).',
        features: [
            { icon: 'mortar-board', title: 'Education', description: 'I have Masters degree in Software Engineering from University of Regina (Canada). I did my Bachelors in Computer Science from COMSATS University, Pakistan ' },
            { icon: 'briefcase', title: 'Work History', description: 'I started my career as a Freenlance Developer in 2012. In 2015, I started working with Royal Bank of Canada as Full Stack Developer. Currently, I am working with CIBC as Lead Full Stack Developer in Toronto  ' },
            { icon: 'star', title: 'Hobbies', description: 'I am passionate about sports and travelling. I love playing Squash, Cricket, and Soccer. Other than that, I am passionate about technologies and in my leasure time I try to learn new technologies' },
            { icon: 'bar-chart', title: 'Career Goals', description: 'I want to grow in my career by taking little steps to get to the goal that I have set for myself ' }
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
        description: 'I have worked in two major Financial Institutions of Canada. I started my career in Canada with Royal Bank of Canada. Currently, I am working with CIBC',
        company: [
            { name: 'CIBC', weblink: 'https://www.cibc.com/', logo: 'company-logo1.png' },
            { name: 'Royal Bank of Canada', weblink: 'https://www.rbcroyalbank.com/personal.html', logo: 'company-logo2.png' },
            { name: 'Freelancer', weblink: 'company-logo3.png', logo: 'company-logo3.png' },
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
        developerlinkedin: "https://www.linkedin.com/in/ahsanshiekh"
    },
    social: [
        { link: 'https://github.com/', target: '_blank', title: 'Instagram"', username: 'iamahsansheikh', icon: 'github' },
        { link: 'https://www.linkedin.com/in/', target: '_blank', title: 'Linkedin', username: 'ahsanshiekh', icon: 'linkedin' },
        { link: 'https://www.instagram.com/', target: '_blank', title: 'Instagram"', username: 'ahsanshiekh', icon: 'instagram' },

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