import { Wrapper } from "../../../components";
import { TeamMembersProps } from "../../../content/TeamMembers/teamMembers";
import * as S from "./styles";

function Header({ info }: { info: TeamMembersProps }) {
  const handleGoToAbout = () => {
    const aboutSection = document.getElementById('sobre');
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  }
  
  return (
    <S.Header>
      <Wrapper>
        <S.LeftContainer>
          <S.Title>Olá, eu sou <span>{info.firstName}</span></S.Title>
          <S.Subtitle>{info.role}</S.Subtitle>
          <S.LinkContainer>
            <S.EmailLink href={info.emailLink}>
              Entre em contato
            </S.EmailLink>
            <S.AboutLink onClick={() => handleGoToAbout()}>
              Sobre mim
            </S.AboutLink>
          </S.LinkContainer>
        </S.LeftContainer>
        <S.RightContainer>
          <S.Image
            src={info.imageSrc}
            alt=""
          />
        </S.RightContainer>
      </Wrapper>
    </S.Header>
  );
}

export { Header };
