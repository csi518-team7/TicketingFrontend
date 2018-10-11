import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { TodayEventsComponent } from "./today-events/today-events.component";
import { GalleryComponent } from './gallery/gallery.component';
import { SignUpComponent } from "./sign-up/sign-up.component";
import { SearchResComponent } from "./search-res/search-res.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { EventDetailComponent } from "./event-detail/event-detail.component";
import { HistoryComponent } from "./history/history.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { HomepageComponent } from "./homepage/homepage.component";


import { LoginComponent } from "./login/login.component";
import { GlobalHeaderComponent } from './global-header/global-header.component';
import { GlobalFooterComponent } from './global-footer/global-footer.component';
import { Hero01Component } from './hero01/hero01.component';
import { RecentVideosComponent } from './recent-videos/recent-videos.component';
import { UpcomingEventComponent } from './upcoming-event/upcoming-event.component';
import { HomeAdvertisementComponent } from './home-advertisement/home-advertisement.component';
import { HomeEventCatComponent } from './home-event-cat/home-event-cat.component';
import { HomeLiveVideoComponent } from './home-live-video/home-live-video.component';
import { HomeMapComponent } from './home-map/home-map.component';

import { TheatreComponent } from './theatre/theatre.component';
import { PartiesComponent } from './parties/parties.component';
import { PageSearchResultComponent } from './page-search-result/page-search-result.component';
import { PageTodayEventsComponent } from './page-today-events/page-today-events.component';
import { PageCheckoutComponent } from './page-checkout/page-checkout.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PageCategoryComponent } from './page-category/page-category.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { PageEventdetailsComponent } from './page-eventdetails/page-eventdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    TodayEventsComponent,
    SignUpComponent,
    SearchResComponent,
    CheckoutComponent,
    EventDetailComponent,
    HistoryComponent,
    NotFoundComponent,
    HomepageComponent,
    LoginComponent,
    GlobalHeaderComponent,
    GlobalFooterComponent,
    Hero01Component,
    RecentVideosComponent,
    UpcomingEventComponent,
    HomeAdvertisementComponent,
    HomeEventCatComponent,
    HomeLiveVideoComponent,
    HomeMapComponent,

    GalleryComponent,
    TheatreComponent,
    PartiesComponent,
    PageSearchResultComponent,
    PageTodayEventsComponent,
    PageCheckoutComponent,
    PaginationComponent,
    PageCategoryComponent,
    CategoryCardComponent,
    PageEventdetailsComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "", component: HomepageComponent },

      { path: "gallery", component: GalleryComponent},
      { path: "parties", component: PartiesComponent},
      { path: "theatre", component: TheatreComponent},
      { path: "schedule", component: PageTodayEventsComponent },

      { path: "signup", component: SignUpComponent },
      { path: "login", component: LoginComponent },
      { path: "results", component: PageSearchResultComponent },
      { path: "checkout", component: PageCheckoutComponent },
      { path: "category", component: PageCategoryComponent },
      { path: "details", component: PageEventdetailsComponent },
      { path: "**", component: NotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
