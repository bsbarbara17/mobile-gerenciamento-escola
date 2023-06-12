import "./styled.css";

export default function Pesquisa() {
  return (
    <main id="mobile" class="min-height">
      <div class="professor">
        <div class="text-inicial">Pesquisar</div>
        <div class="faixa">
          <input type="text" placeholder="Nome, CPF, Instituição..."></input>
        </div>

        <div class="botao">
          <a href="../instituicao/index.js">Buscar</a>
        </div>
      </div>
      <div class="botao-voltar">
        <a href="../menu/menu.html">Voltar</a>
      </div>
    </main>
  );
}
