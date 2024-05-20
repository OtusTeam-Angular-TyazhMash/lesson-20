import {Route} from "@angular/router";
import {AdminComponent} from "../admin/admin.component";
import {UserSettingsComponent} from "./user-settings/user-settings.component";

export default [
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'user',
    component: UserSettingsComponent
  }
] satisfies Route[]
