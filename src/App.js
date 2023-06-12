import { Link } from "react-router-dom";
import "./styles.css";

function App() {
  return (
    <section>
      <h1>Início</h1>

      <div>
        <Link to="../menu/index.js" className="button">
          Menu
        </Link>
      </div>

      <div>
        <Link to="../login/index.js" className="button">
          Login
        </Link>
      </div>

      <div>
        <Link to="../cadastro/index.js" className="button">
          Cadastro
        </Link>
      </div>

      <div>
        <Link to="../aluno/index.js" className="button">
          Aluno
        </Link>
      </div>

      <div>
        <Link to="../professor/index.js" className="button">
          Professor
        </Link>
      </div>

      <div>
        <Link to="../instituicao/index.js" className="button">
          Instituição
        </Link>
      </div>

      <div>
        <Link to="../pesquisa/index.js" className="button">
          Pesquisa
        </Link>
      </div>
    </section>
  );
}

export default App;
