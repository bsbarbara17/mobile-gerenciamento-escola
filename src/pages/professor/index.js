import "./styled.css";

import InfoPessoal from "../../components/InfoPessoal";
import ObsAcademica from "../../components/ObsAcademica";
import InfoAcademicaProfessor from "../../components/InfoAcademicaProfessor";
import BotaoCancelar from "../../components/BotaoCancelar";

export default function Professor() {
  return (
    <main id="mobile" class="min-height">
      <div class="aluno">
        <div class="text-inicial">Professor</div>
        <div class="faixa">
          <InfoPessoal />
          <InfoAcademicaProfessor />
          <ObsAcademica />
          <BotaoCancelar />
        </div>
      </div>
    </main>
  );
}
