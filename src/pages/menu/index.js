import "./styled.css";

export default function Menu() {
  return (
    <main id="mobile" class="min-height">
      <div class="menu">
        <div class="text-inicial">bem-vindo.</div>
        <div class="faixa">
          <div class="botao">
            <a href="../aluno/index.js">Pesquisar aluno</a>
          </div>
          <div class="botao">
            <a href="../professor/index.js">Pesquisar Professor</a>
          </div>
          <div class="botao">
            <a href="../instituicao/index.js">Pesquisar Instituições</a>
          </div>
        </div>
      </div>
      <div class="botao-voltar">
        <a href="">Voltar</a>
      </div>
    </main>
  );
}
