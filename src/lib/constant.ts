import { Event } from "./types";

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