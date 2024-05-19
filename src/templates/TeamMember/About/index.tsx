import { Link } from "../../../components";
import { TeamMembersProps } from "../../../content/TeamMembers/teamMembers";
import * as S from "./styles";

function About({ info }: { info: TeamMembersProps }) {
  return (
    <S.About id="sobre">
      <S.AboutWrapper>
        <S.AboutMe>Sobre mim</S.AboutMe>
        <S.Text>Eu sou <strong>{info.name}</strong></S.Text>
        <S.Text>{info.role}</S.Text>
        <S.AddressText>{info.address}</S.AddressText>
        <S.Description>{info.about}</S.Description>
        <S.SocialMediaTitle>Minhas redes: </S.SocialMediaTitle>
        <S.SocialMediaLinkContainer>
          {info.socialMediaLinks.map((link, index) => (
            <Link key={index} href={link.href} target="_blank">
              {link.text}
            </Link>
          ))}
        </S.SocialMediaLinkContainer>
      </S.AboutWrapper>
    </S.About>
  );
}

export { About };
