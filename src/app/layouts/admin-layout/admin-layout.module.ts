import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { MusicComponent } from '../../music/music.component';
import { PlayersComponent } from '../../players/players.component';
import { TournamentsComponent } from '../../tournaments/tournaments.component';
import { CardsComponent } from '../../cards/cards.component';
import { LocationsComponent } from '../../locations/locations.component';
import { DefaultImgPipe } from "../../pipes/default-img.pipe";
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    MusicComponent,DefaultImgPipe,
    PlayersComponent,
    TournamentsComponent,
    CardsComponent,
    LocationsComponent
  ],
  providers: [DefaultImgPipe]
})

export class AdminLayoutModule {}
