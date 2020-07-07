import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SubOneComponent } from './sub-one/sub-one.component';
import { SubTwoComponent } from './sub-two/sub-two.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'sub-one',
        component: SubOneComponent,
      },
      {
        path: 'sub-two',
        component: SubTwoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
