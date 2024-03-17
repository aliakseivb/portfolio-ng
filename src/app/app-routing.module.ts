import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from "./views/about/about.component";
import {SkillsComponent} from "./views/skills/skills.component";
import {ProjectsComponent} from "./views/projects/projects.component";
import {OffersComponent} from "./views/offers/offers.component";

const routes: Routes = [
    {path: '', component: AboutComponent},
    {path: 'skills', component: SkillsComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'offers', component: OffersComponent},
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
