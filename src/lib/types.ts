export type Event = {
    tagLine: string;
    youtube?: string;
    organizer: string;
    day: string;
    date: string;
    speakers?: {
        name: string;
        designation: string;
        image: string;
        description: string;
    }[];
}

