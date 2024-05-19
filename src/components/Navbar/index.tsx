import { Link } from 'react-router-dom';
import * as S from './styles';

function Navbar() {
    return (
        <S.Navbar>
            <Link to="/" onClick={() => window.scrollTo(0,0)}>GNVY</Link>
        </S.Navbar>
    )
}

export { Navbar };
