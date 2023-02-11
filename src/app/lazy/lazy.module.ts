import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy/lazy.component';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  {
    path: '',
    component: ParentComponent,
  },
];

@NgModule({
  declarations: [LazyComponent, ParentComponent, ChildComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LazyModule {}
