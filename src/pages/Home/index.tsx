import { Link } from "react-router-dom";
import * as S from './styles';
import { Footer, Navbar } from "../../components";
import { teamMembers } from "../../content/teamMembers";

function Home() {
    return (
        <main>
            <Navbar />
            <S.Header>
                <S.Heading>Crie seu site ou aplicativo conosco!</S.Heading>
            </S.Header>
            <S.IntroSection>
                <S.IntroText>A GNVY é uma agência de freelancing especializada no desenvolvimento de sites e aplicativos para iOS e Android. Com uma equipe talentosa de profissionais, a GNVY oferece soluções personalizadas para atender às necessidades específicas de seus clientes. Se você está buscando criar um site moderno e funcional ou desenvolver um aplicativo móvel inovador, a GNVY está pronta para transformar suas ideias em realidade. Com uma abordagem ágil e foco na qualidade, a GNVY se destaca no mercado de freelancers, garantindo resultados excepcionais para seus clientes. Explore o mundo digital com a GNVY e leve sua presença online para o próximo nível!</S.IntroText>
            </S.IntroSection>
            <S.TeamSection>
                <S.TeamTitle>Equipe:</S.TeamTitle>
                <S.TeamDetails>Escolha um membro para saber mais detalhes.</S.TeamDetails>

                <S.TeamList>
                    {teamMembers.map((member) => (
                        <S.TeamMember key={member.id}>
                            <Link to={member.url}>
                                <img src={member.imageSrc} alt="" />
                                <p>{member.name}</p>
                            </Link>
                            <p>Tecnologias:</p>
                            <S.MemberTechs>
                                {member.technologies.map((t) => (
                                    <li key={t}>{t}</li>
                                ))}
                            </S.MemberTechs>
                        </S.TeamMember>
                    ))}
                </S.TeamList>
            </S.TeamSection>
            <Footer />
        </main>
    )
}

export { Home };
