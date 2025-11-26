import EventPageClient from "@/components/EventPageClient";
import { events } from "@/lib/constant";

export function generateStaticParams() {
    return Object.keys(events).map((event) => ({
        event: event,
    }));
}

export default function EventPage({ params }: { params: { event: string } }) {
    const event = events[params.event];
    if (!event) {
        return <div className="flex items-center justify-center h-screen text-white text-2xl">Event not found</div>;
    }
    
    return <EventPageClient event={event} eventKey={params.event} />;
}