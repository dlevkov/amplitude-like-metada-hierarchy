import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompAComponent } from './comp-a/comp-a.component';

const routes: Routes = [
  { path: '', redirectTo: 'a', pathMatch: 'full' },
  { component: CompAComponent, path: 'a', data: { subTitle: "i'm a" } },
  { component: CompAComponent, path: 'b', data: { subTitle: "i'm b" } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
