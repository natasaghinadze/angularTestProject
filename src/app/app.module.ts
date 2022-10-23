import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { TaskFillerFormComponent } from './task-manager/task-filler-form/task-filler-form.component';
import { TasksTableComponent } from './task-manager/tasks-table/tasks-table.component';
import { TaskTableCardComponent } from './shared-components/cards/task-table-card/task-table-card.component';
import { FormsModule } from '@angular/forms';
import { TaskManagerService } from './shared-services/task-manager.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskManagerComponent,
    TaskFillerFormComponent,
    TasksTableComponent,
    TaskTableCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // პროვაიდერებში ამ სერვისის დამატებით განვსაზღვრე ის, რომ TasnManagerService-ის
  // მარტო ერთი ობიექტი შეიქმნება ყველა ჯერზე როცა მისი ობიექტის გამოყოფას დაინჯექთების გზით შევეცდები
  providers: [
    TaskManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
