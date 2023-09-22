import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlossarioHomeComponent } from './components/glossario-home/glossario-home.component';

const routes: Routes = [
  {
    path: '',
    component: GlossarioHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
