import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { NgbDropdownModule, NgbNavModule } from "@ng-bootstrap/ng-bootstrap";
import { SimplebarAngularModule } from "simplebar-angular";
import { LanguageService } from "../core/services/language.service";
import { TranslateModule } from "@ngx-translate/core";

// Component pages
import { LayoutComponent } from "./layout.component";
import { VerticalComponent } from "./vertical/vertical.component";
import { TopbarComponent } from "./topbar/topbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FooterComponent } from "./footer/footer.component";
import { RightsidebarComponent } from "./rightsidebar/rightsidebar.component";
import { GeneralLoaderComponent } from "../shared/components/general-loader/general-loader.component";
import { Title } from "@angular/platform-browser";
import { HorizontalComponent } from "./horizontal/horizontal.component";
import { HorizontalTopbarComponent } from "./horizontal-topbar/horizontal-topbar.component";

@NgModule({
  declarations: [
    LayoutComponent,
    VerticalComponent,
    TopbarComponent,
    SidebarComponent,
    FooterComponent,
    RightsidebarComponent,
    GeneralLoaderComponent,
    HorizontalComponent,
    HorizontalTopbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbNavModule,
    SimplebarAngularModule,
    TranslateModule,
    NgbDropdownModule,
  ],
  providers: [LanguageService, Title],
})
export class LayoutsModule {}
