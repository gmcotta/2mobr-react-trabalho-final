import { TeamMembersProps } from "../../../content/TeamMembers/teamMembers";
import * as S from "./styles";

function Experiences({ info }: { info: TeamMembersProps }) {
  return (
    <S.Experiences id="experiencias">
      <S.ExperiencesWrapper>
        <S.Title>Experiências</S.Title>
        <S.ExperiencesList>
          {info.experiences.map((experience, index) => (
            <S.ExperiencesListItem key={index}>
              <S.ExperiencesListItemBullet></S.ExperiencesListItemBullet>
              <div>
                <S.Company>{experience.company}</S.Company>
                <S.Role>{experience.role}</S.Role>
                <S.Period>{experience.period}</S.Period>
              </div>
            </S.ExperiencesListItem>
          ))}
        </S.ExperiencesList>
      </S.ExperiencesWrapper>
    </S.Experiences>
  );
}

export { Experiences };
