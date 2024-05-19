import { Footer, Navbar } from "../../components";
import { TeamMembersProps } from "../../content/TeamMembers/teamMembers";
import { About, Experiences, Header } from "../../templates/TeamMember";

function TeamMember({ memberInfo }: { memberInfo: TeamMembersProps }) {
    return (
        <main>
            <Navbar />
            <Header info={memberInfo} />
            <About info={memberInfo} />
            <Experiences info={memberInfo} />
            <Footer />
        </main>
    )
}

export { TeamMember };