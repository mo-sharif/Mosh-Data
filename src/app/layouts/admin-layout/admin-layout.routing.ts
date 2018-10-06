import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';

import { MusicComponent } from '../../music/music.component';
import { PlayersComponent } from '../../players/players.component';
import { TournamentsComponent } from '../../tournaments/tournaments.component';
import { CardsComponent } from '../../cards/cards.component';
import { LocationsComponent } from '../../locations/locations.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'music',  component: MusicComponent },
    { path: 'players',  component: PlayersComponent },
    { path: 'tournaments',  component: TournamentsComponent },
    { path: 'cards',  component: CardsComponent },
    { path: 'locations',  component: LocationsComponent },
];
