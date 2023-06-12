import "./styled.css";

export default function Cadastro() {
  return (
    <main id="mobile" class="min-height">
      <div class="login">
        <div class="text-inicial">Crie sua Conta</div>
        <div class="faixa">
          <div class="nome">
            <div class="nome-text">Nome completo</div>
            <input type="text" placeholder=""></input>
          </div>
          <div class="nome">
            <div class="nome-text">Email</div>
            <input type="text" placeholder=""></input>
          </div>
          <div class="nome">
            <div class="nome-text">Senha</div>
            <input type="password" placeholder=""></input>
          </div>
        </div>

        <div class="botao">
          <a href="">cadastrar</a>
        </div>
      </div>
      <div class="text-final">Já tem conta? Faça o login</div>
    </main>
  );
}
