import { Link } from 'react-router-dom';
import * as S from './styles';
import { teamMembers } from '../../content/teamMembers';

function Footer() {
    return (
        <S.Footer>
            <S.Logo>GNVY</S.Logo>
            <Link to="tel:+55119987654321">+55 11 9987654321</Link>
            <Link to="mailto:contato@gnvy.com">contato@gnvy.com</Link>
            <nav>
                {teamMembers.map((member) => (
                    <Link key={member.id} to={member.url}>{member.name}</Link>
                ))}
            </nav>
        </S.Footer>
    )
}

export { Footer };