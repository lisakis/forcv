import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {HomeComponent} from './home/home.component';
import {ListComponent} from './list/list.component';
import {MembersComponent} from './members/members.component';
import {SearchComponent} from './search/search.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'members',
    component: ListComponent
  },
  {
    path: 'members/add',
    component: MembersComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
];

export const router: ModuleWithProviders = RouterModule.forRoot(routes);
