import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./App";
import Menu from "./pages/menu";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import Aluno from "./pages/aluno";
import Professor from "./pages/professor";
import Instituicao from "./pages/instituicao";
import Pesquisa from "./pages/pesquisa";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/menu" component={Menu} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/aluno" component={Aluno} />
        <Route path="/professor" component={Professor} />
        <Route path="/instituicao" component={Instituicao} />
        <Route path="/pesquisa" component={Pesquisa} />
      </Switch>
    </BrowserRouter>
  );
}
