import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddComponent} from './add/add.component';
import {ListComponent} from './list/list.component';
import {EditComponent} from './edit/edit.component';
import {WeatherComponent} from './weather/weather.component';

const routes: Routes = [
  {
    path: '',
    component: AddComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'weather',
    component: WeatherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
