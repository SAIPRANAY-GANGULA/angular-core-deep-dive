import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { NgForDirectiveComponent } from './ng-for-directive/ng-for-directive.component';
import { TableRowComponent } from './ng-for-directive/table-row/table-row.component';
import { CoursesService } from './services/courses.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    NgForDirectiveComponent,
    TableRowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [CoursesService], // not TreeShakable, we can still see CoursesService included in the bundle
  bootstrap: [AppComponent],
})
export class AppModule {}
