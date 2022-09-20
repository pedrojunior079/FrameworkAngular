import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NovoMomentoComponent } from "./components/page/novo-momento/novo-momento.component";
import { PrincipalComponent } from "./components/page/principal/principal.component";
import { SobreComponent } from "./components/page/sobre/sobre.component";

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'moments/novo', component: NovoMomentoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],   
})
export class AppRoutingModule{}