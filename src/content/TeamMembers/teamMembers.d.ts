export interface TeamMembersProps {
    id: number;
    name: string;
    url: string;
    imageSrc: string;
    technologies: string[];
    firstName: string;
    role: string;
    emailLink: string;
    about: string;
    address: string;
    socialMediaLinks: {
        text: string;
        href: string;
    }[]
    experiences: {
        company: string;
        role: string;
        period: string;
    }[]
}