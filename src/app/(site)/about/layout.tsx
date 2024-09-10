import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | TEDxGLAU",
    description: "TEDxGLAU is an initiative started in 2016, dedicated to spreading innovative ideas and fostering creativity within our community. Each year, we organize a series of events that bring together diverse speakers, performers, and thought leaders to share their unique insights on a wide range of topics, from science and technology to art and social issues. Since its inception, TEDxGLAU has become a beacon of intellectual and creative activity, continually striving to elevate the quality and impact of our programming. Join us on this journey to ignite minds and transform ideas into action. Organized by the Entrepreneurship Cell (E-CELL) at GLA University",
};

export default function AboutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (children)
}