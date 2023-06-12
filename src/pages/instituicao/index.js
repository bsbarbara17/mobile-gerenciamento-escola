import "./styled.css";

export default function Instituicao() {
  return (
    <main id="mobile" class="min-height">
      <form class="instituicao">
        <h1>INSTITUIÇÕES</h1>

        <div class="teste">
          <div class="esquerda">
            <h3>Cursos:</h3>
            <select>
              <option value="opcao1">Opção 1</option>
              <option value="opcao2">Opção 2</option>
              <option value="opcao3">Opção 3</option>
            </select>
          </div>

          <div class="esquerda">
            <h3>Estado:</h3>
            <select>
              <option value="opcao1">Opção 1</option>
              <option value="opcao2">Opção 2</option>
              <option value="opcao3">Opção 3</option>
            </select>
          </div>

          <div class="esquerda">
            <h3>Região:</h3>
            <select>
              <option value="opcao1">Opção 1</option>
              <option value="opcao2">Opção 2</option>
              <option value="opcao3">Opção 3</option>
            </select>
          </div>

          <div class="esquerda">
            <h3>Faixa de Preço:</h3>
            <select>
              <option value="opcao1">Opção 1</option>
              <option value="opcao2">Opção 2</option>
              <option value="opcao3">Opção 3</option>
            </select>
          </div>
        </div>

        <div class="tabela">
          <table>
            <thead>
              <tr>
                <th>INSTITUIÇÕES</th>
                <th>LOCALIZAÇÃO</th>
                <th>CURSO</th>
                <th>MENSALIDADE</th>
                <th>VAGAS DISPONIVEIS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span>teste</span>
                </td>
                <td>
                  <span>teste</span>
                </td>
                <td>
                  <span>teste</span>
                </td>
                <td>
                  <span>teste</span>
                </td>
                <td>
                  <span>teste</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="botoes-finais">
          <a href="">SELECIONAR</a>
          <a href="../menu/menu.html">CANCELAR</a>
        </div>
      </form>
    </main>
  );
}
