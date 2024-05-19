import { Link } from 'react-router-dom';
import * as S from './styles';

function Navbar() {
    return (
        <S.Navbar>
            <Link to="/">GNVY</Link>
        </S.Navbar>
    )
}

export { Navbar };
