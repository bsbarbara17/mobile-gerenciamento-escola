import "./styled.css";

export default function Login() {
  return (
    <main id="mobile" class="min-height">
      <div class="login">
        <div class="text-inicial">Vamos começar.</div>
        <div class="faixa">
          <div class="nome">
            <img
              src="https://raw.githubusercontent.com/bsbarbara17/mobile-gerenciamento-escola/master/src/components/images/usuario.png"
              alt="test"
            />
            <input type="text" placeholder="Seu usuário"></input>
          </div>
          <div class="nome">
            <div class="img-logina">
              <img
                src="https://raw.githubusercontent.com/bsbarbara17/mobile-gerenciamento-escola/master/src/components/images/senha.png"
                alt="test"
              />
            </div>
            <input type="password" placeholder="Sua senha"></input>
          </div>
        </div>

        <div class="botao">
          <a href="../menu/menu.html">Entrar</a>
        </div>
      </div>
      <div class="text-final">Ou Cadastra-se</div>
    </main>
  );
}
