import { Link } from "react-router-dom";

function Home() {
    return (
        <main>
            <h1>Página de freelancer</h1>
            <p>Texto introdutório</p>
            <p>Freelancers:</p>
            <ul>
                <li>
                    <Link to="/gustavo-matias">Gustavo Matias</Link>
                </li>
                <li>
                    <Link to="/nayara-pereira">Nayara Pereira</Link>
                </li>
                <li>
                    <Link to="/vinicius-lima">Vinicius Lima</Link>
                </li>
                <li>
                    <Link to="/yuri-cunha">Yuri Cunha</Link>
                </li>
            </ul>
        </main>
    )
}

export { Home };
