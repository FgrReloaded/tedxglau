import { Event } from "./types";

export const speakers = [
    {
        name: "Pallavi Mahajan",
        designation: "Sustainability Pioneer",
        bioOne: "Driven by a passion for sustainability, social impact, and gender justice in business strategy and policy. With 8+ years of experience at the intersection of business, social impact, and public policy, I bring expertise in leadership, communication, and stakeholder engagement to promote a more inclusive and sustainable world.",
        bioTwo: "Core Skills: Business & Human Rights, ESG standards, Strategic partnerships and stakeholder engagement, Gender expertise in DEI and social norms, CSR program management and evaluation, Advocacy campaigns and public affairs, Keynote speaking and strategic communication.",
        image: "/images/speakers/pallavi.png"
    },
    {
        name: "Anant Deshpande",
        designation: "Fintech Innovator",
        bioOne: "Anant is a fintech entrepreneur focused on making finance inclusive. As co-founder of FinBox, he helps fintechs underwrite millions of borrowers using smartphone data, banking, and bureau insights. Since 2019, FinBox&apos;s alt-data score and APIs have powered credit decisions for over 25 million borrowers, originating INR 12,000 Cr in loans.",
        bioTwo: "In the past year, FinBox has become a leading Data & API Platform in India, enabling instant credit for micro-entrepreneurs via its lending SDK. Anant is passionate about ML, credit underwriting, and follows India&apos;s FinTech disruption closely.",
        image: "/images/speakers/anant.png",
    },
    {
        name: "Govind Krsna Das",
        designation: "Spiritual Chanter",
        bioOne: "Govind Krishna Das is a prominent spiritual leader and influencer with a deep connection to Kurukshetra, India.",
        bioTwo: "As a member of ISKCON, he spreads the teachings of Lord Krishna. His soulful voice and motivational speeches have captivated audiences, making him a beloved Kirtania.",
        image: "/images/speakers/govind.png"
    }
    ,
    {
        name: "Prateek Singhal",
        designation: "Entrepreneur",
        bioOne: "Prateek is a seasoned leader with experience at startups like Zomato and Tata 1mg, and a background in management consulting and data science.",
        bioTwo: "He founded Yoho to create high-quality, affordable footwear using advanced technology and AI. Prateek values work-life balance and enjoys classical Indian music, astrology, and meditation.",
        image: "/images/speakers/prateek.png"
    },
    {
        name: "Vimal Daga",
        designation: "Life Coach",
        bioOne: "Vimal Daga is a distinguished Technologist and Technology Motivational Speaker renowned for his expertise in advanced technologies such as Machine Learning, AI, Deep Learning, IoT, and NLP.",
        bioTwo: "He specializes in consulting and training senior management on high-end IT technologies, guiding companies to optimize their ROI through strategic technology adoption. His client roster includes major corporations like Wells Fargo, JP Morgan Chase, Bank of America, and GE.",
        image: "/images/speakers/vimal.png"
    },
    {
        name: "Saarthak Bakshi",
        designation: "Medical Innovator",
        bioOne: "Passionate about innovating at the crossroads of healthcare, technology, and entrepreneurship. With expertise in AI, IoT, and wearables, I focus on transforming healthcare and enhancing patient outcomes.",
        bioTwo: "My background includes strategic management, business development, and social impact in healthcare tech. Committed to fostering innovation, I mentor and invest in the next generation of entrepreneurs to drive meaningful change in the industry.",
        image: "/images/speakers/saarthak.png"
    }
    ,
    {
        name: "Rahul Bhargava",
        designation: "Educationist",
        bioOne: "Rahul Bhargava&apos;s journey from salesman to entrepreneur has shaped him into a leader committed to sharing his knowledge and empowering others.",
        bioTwo: "He founded SheKunj, a platform supporting over 80,000 women through free courses and counseling, and is passionate about educating youth through tech workshops.",
        image: "/images/speakers/rahul.png"
    },
    {
        name: "Ranjana Singh Rathore",
        designation: "Journalist",
        bioOne: "Ranjana Singh Rathore is a Popular TV Journalist from Udaipur, Rajasthan. She completed her Master&apos;s in broadcast journalism at MassCoMedia.",
        bioTwo: "She works with prominent media houses such as India Today, FM News, and recently joined News Nation. Skilled in communication, public relations, and content writing.",
        image: "/images/speakers/ranjana.png"
    },
    {
        name: "Indresh Upadhyay Ji",
        designation: "Spiritual Orator",
        bioOne: "Indresh Upadhyay Ji is revered for his profound spiritual wisdom and deep connection to the Bhagwat Katha, a sacred Hindu scripture.",
        bioTwo: "Through his devotional songs, he creates an atmosphere of divine bliss, inspiring joy and devotion among his audience.",
        image: "/images/speakers/indresh.png"
    }
]

export const events: Record<string, Event> = {
    "1.0": {
        tagLine: "My Idea Lives Forever",
        speakers: [
            {
                name: "Speaker 1",
                designation: "CEO",
                image: "/images/anant.webp",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae turpis nec felis vehicula lacinia. Integer sit amet orci auctor, ultricies eros ut, ultricies eros.",
            },
            {
                name: "Speaker 2",
                designation: "CTO",
                image: "/images/anant.webp",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae turpis nec felis vehicula lacinia. Integer sit amet orci auctor, ultricies eros ut, ultricies eros.",
            },
            {
                name: "Speaker 3",
                designation: "CFO",
                image: "/images/anant.webp",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae turpis nec felis vehicula lacinia. Integer sit amet orci auctor, ultricies eros ut, ultricies eros.",
            },
        ],
    },
    "2.0": {
        tagLine: "The Idea That Stays",
    },
    "3.0": {
        tagLine: "Breaking Our Own Barriers",
    },
    "4.0": {
        tagLine: "SILENT LEADERS UNTOLD TRUTH",
    },
    "5.0": {
        tagLine: "SILENT LEADERS UNTOLD TRUTH",
    },
}

export const socialMedia = [
    {
        id: 1,
        name: "Facebook",
        image: "/images/facebook.svg",
        designation: "Follow us on Facebook",
    },
    {
        id: 2,
        name: "Instagram",
        image: "/images/instagram.svg",
        designation: "Follow us on Instagram",
    },
    {
        id: 3,
        name: "LinkedIn",
        image: "/images/linkedin.svg",
        designation: "Follow us on LinkedIn",
    },
    {
        id: 4,
        name: "X",
        image: "/images/twitter.svg",
        designation: "Follow us on X",
    },
    {
        id: 5,
        name: "YouTube",
        image: "/images/youtube.svg",
        designation: "Follow us on YouTube",
    },
]

export const teamHeads = [
    {
        name: "Uday Gupta",
        designation: "Organiser",
        pic: "/images/heads/1.png",
    },
    {
        name: "Sneha Agarwal",
        designation: "Ambassador",
        pic: "/images/heads/3.png",
    },
    {
        name: "Ansh Gaur",
        designation: "Co-Organiser",
        pic: "/images/heads/2.png",
    },
    {
        name: "Drashya Kathuria",
        designation: "Curator",
        pic: "/images/heads/4.png",
    },
    {
        name: "Hardik Mishra",
        designation: "Head Data & Finance",
        pic: "/images/heads/5.png",
    },
    {
        name: "Bhuvnesh",
        designation: "Head Media & Publicity",
        pic: "/images/heads/8.png",
    },
    {
        name: "Saurav Kumar",
        designation: "Head Design",
        pic: "/images/heads/7.png",
    },
    {
        name: "Nitish Kumar",
        designation: "Web & IT Head",
        pic: "/images/heads/6.png",
    }
]

export const teams = [
    "/images/teams/1.png",
    "/images/teams/2.png",
    "/images/teams/3.png",
    "/images/teams/4.png",
    "/images/teams/5.png",
    "/images/teams/6.png",
    "/images/teams/7.png",
    "/images/teams/8.png",
    "/images/teams/9.png",
    "/images/teams/10.png",
    "/images/teams/11.png",
    "/images/teams/12.png",
    "/images/teams/13.png",
    "/images/teams/14.png",
    "/images/teams/15.png",
    "/images/teams/16.png",
    "/images/teams/17.png",
    "/images/teams/18.png",
    "/images/teams/19.png",
]