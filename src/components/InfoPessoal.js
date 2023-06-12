function InfoPessoal() {
  return (
    <div>
      <div class="titulo-um">Informações pessoais</div>
      <div class="nome-inicial">
        <div class="nome-text">Nome completo:</div>
        <input type="text" placeholder="" />
        <div class="nome-text">Data de Nascimento</div>
        <input type="text" placeholder="" />
        <div class="nome-text">CPF:</div>
        <input type="text" placeholder="" />
        <div class="nome-text">RG:</div>
        <input type="text" placeholder="" />
        <div class="nome-text">Sexo:</div>
        <select>
          <option value="selecione">masculino</option>
          <option value="selecione">feminino</option>
        </select>
        <div class="nome-text">Email:</div>
        <input type="text" placeholder="" />
      </div>
    </div>
  );
}

export default InfoPessoal;
