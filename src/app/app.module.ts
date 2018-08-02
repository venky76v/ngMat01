import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule,
         MatExpansionModule, MatInputModule, MatRadioModule, MatSelectModule, MatCheckboxModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UnderwritingComponent } from './underwriting/underwriting.component';
import { ClaimsComponent } from './claims/claims.component';
import { CashComponent } from './cash/cash.component';


const appRoutes: Routes = [
  {path: 'underwriting', component: UnderwritingComponent },
  {path: 'claims', component: ClaimsComponent },
  {path: 'cash', component: CashComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    UnderwritingComponent,
    CashComponent,
    ClaimsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
