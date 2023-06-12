import "./styled.css";

import InfoPessoal from "../../components/InfoPessoal";
import ObsAcademica from "../../components/ObsAcademica";
import InfoAcademicaAluno from "../../components/InfoAcademicaAluno";
import BotaoCancelar from "../../components/BotaoCancelar";

export default function Aluno() {
  return (
    <main id="mobile" class="min-height">
      <div class="aluno">
        <div class="text-inicial">Aluno</div>
        <div class="faixa">
          <div>
            <div class="titulo-um">Informações pessoais</div>
          </div>
          <div class="nome-inicial">
            <div class="nome-text1">
              Nome completo:
              <input type="text" placeholder=""></input>
            </div>
            <div class="nome-text2">Data de Nascimento</div>
            <input type="text" placeholder=""></input>
            <div class="nome-text3">CPF:</div>
            <input type="text" placeholder=""></input>
            <div class="nome-text4">RG:</div>
            <input type="text" placeholder=""></input>
            <div class="nome-text5">Sexo:</div>
            <select>
              <option value="selecione">masculino</option>
              <option value="selecione">felicidade</option>
            </select>
            <div class="nome-text">Email:</div>
            <input type="text" placeholder=""></input>
          </div>
          <div class="faixa">
            <div class="titulo-dois">Informações Academicas</div>
            <div class="nome-dois">
              <div class="nome-texto">Série:</div>
              <input type="text" placeholder=""></input>
              <div class="nome-texto">Sala:</div>
              <input type="text" placeholder=""></input>
              <div class="nome-texto">Turma:</div>
              <input type="text" placeholder=""></input>
            </div>
            <div class="faixa">
              <div class="titulo-tres">Observaçoes Academicas</div>
              <div class="nome">
                <div class="nome-obs"></div>
                <input class="obsaca" type="text" placeholder=""></input>
              </div>
            </div>
          </div>
          <div class="botao-voltar">
            <a href="../menu/menu.html">Cancelar</a>
          </div>
        </div>
      </div>
    </main>
  );
}
