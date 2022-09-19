import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PrincipalComponent } from "./components/page/principal/principal.component";
import { SobreComponent } from "./components/page/sobre/sobre.component";

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'sobre', component: SobreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],   
})
export class AppRoutingModule{}