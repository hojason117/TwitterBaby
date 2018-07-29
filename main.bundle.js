webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n    width: 85%;\n    margin: 0 auto;\n    margin-top: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-nav-bar></app-nav-bar>\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_guard_logged_service__ = __webpack_require__("../../../../../src/app/services/auth-guard-logged.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_router__ = __webpack_require__("../../../../../src/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_media_service__ = __webpack_require__("../../../../../src/app/services/media.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_user_info_user_info_component__ = __webpack_require__("../../../../../src/app/components/user-info/user-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_tweetlist_tweetlist_component__ = __webpack_require__("../../../../../src/app/components/tweetlist/tweetlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_postarea_postarea_component__ = __webpack_require__("../../../../../src/app/components/postarea/postarea.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_user_page_user_page_component__ = __webpack_require__("../../../../../src/app/components/user-page/user-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_followlist_followlist_component__ = __webpack_require__("../../../../../src/app/components/followlist/followlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_followerlist_followerlist_component__ = __webpack_require__("../../../../../src/app/components/followerlist/followerlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_page_split_page_split_component__ = __webpack_require__("../../../../../src/app/components/page-split/page-split.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_userlogin_userlogin_component__ = __webpack_require__("../../../../../src/app/components/userlogin/userlogin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/components/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_notfound_notfound_component__ = __webpack_require__("../../../../../src/app/components/notfound/notfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_userprofile_userprofile_component__ = __webpack_require__("../../../../../src/app/components/userprofile/userprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_edit_user_profile_dialog_edit_user_profile_dialog_component__ = __webpack_require__("../../../../../src/app/components/edit-user-profile-dialog/edit-user-profile-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_edit_comments_dialog_edit_comments_dialog_component__ = __webpack_require__("../../../../../src/app/components/edit-comments-dialog/edit-comments-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_commentlist_commentlist_component__ = __webpack_require__("../../../../../src/app/components/commentlist/commentlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_retweet_dialog_retweet_dialog_component__ = __webpack_require__("../../../../../src/app/components/retweet-dialog/retweet-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_nav_bar_nav_bar_component__["a" /* NavBarComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_user_info_user_info_component__["a" /* UserInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_tweetlist_tweetlist_component__["a" /* TweetlistComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_postarea_postarea_component__["a" /* PostareaComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_user_page_user_page_component__["a" /* UserPageComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_followlist_followlist_component__["a" /* FollowlistComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_followerlist_followerlist_component__["a" /* FollowerlistComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_page_split_page_split_component__["a" /* PageSplitComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_userlogin_userlogin_component__["a" /* UserloginComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_sign_up_sign_up_component__["a" /* SignUpComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_notfound_notfound_component__["a" /* NotfoundComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_userprofile_userprofile_component__["a" /* UserprofileComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_edit_user_profile_dialog_edit_user_profile_dialog_component__["a" /* EditUserProfileDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_edit_comments_dialog_edit_comments_dialog_component__["a" /* EditCommentsDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_commentlist_commentlist_component__["a" /* CommentlistComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_retweet_dialog_retweet_dialog_component__["a" /* RetweetDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_footer_footer_component__["a" /* FooterComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["m" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["j" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["k" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["i" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["b" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["c" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["h" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["l" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["d" /* MatChipsModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["n" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["f" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_11__app_router__["a" /* rooting */],
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_27__components_edit_user_profile_dialog_edit_user_profile_dialog_component__["a" /* EditUserProfileDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_edit_comments_dialog_edit_comments_dialog_component__["a" /* EditCommentsDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_retweet_dialog_retweet_dialog_component__["a" /* RetweetDialogComponent */],
        ],
        providers: [
            { provide: 'data', useClass: __WEBPACK_IMPORTED_MODULE_6__services_data_service__["a" /* DataService */] },
            { provide: 'auth', useClass: __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */] },
            { provide: 'media', useClass: __WEBPACK_IMPORTED_MODULE_12__services_media_service__["a" /* MediaService */] },
            { provide: "notify", useClass: __WEBPACK_IMPORTED_MODULE_10__services_notification_service__["a" /* NotificationService */] },
            __WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__["a" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_9__services_auth_guard_logged_service__["a" /* AuthGuardLoggedService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rooting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_page_user_page_component__ = __webpack_require__("../../../../../src/app/components/user-page/user-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_followerlist_followerlist_component__ = __webpack_require__("../../../../../src/app/components/followerlist/followerlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_followlist_followlist_component__ = __webpack_require__("../../../../../src/app/components/followlist/followlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_userlogin_userlogin_component__ = __webpack_require__("../../../../../src/app/components/userlogin/userlogin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_notfound_notfound_component__ = __webpack_require__("../../../../../src/app/components/notfound/notfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/components/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_guard_logged_service__ = __webpack_require__("../../../../../src/app/services/auth-guard-logged.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_userprofile_userprofile_component__ = __webpack_require__("../../../../../src/app/components/userprofile/userprofile.component.ts");











var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'user/:id', component: __WEBPACK_IMPORTED_MODULE_2__components_user_page_user_page_component__["a" /* UserPageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'user/follower/:id', component: __WEBPACK_IMPORTED_MODULE_3__components_followerlist_followerlist_component__["a" /* FollowerlistComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'user/following/:id', component: __WEBPACK_IMPORTED_MODULE_4__components_followlist_followlist_component__["a" /* FollowlistComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: '404', component: __WEBPACK_IMPORTED_MODULE_6__components_notfound_notfound_component__["a" /* NotfoundComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__components_userlogin_userlogin_component__["a" /* UserloginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__services_auth_guard_logged_service__["a" /* AuthGuardLoggedService */]] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_7__components_sign_up_sign_up_component__["a" /* SignUpComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__services_auth_guard_logged_service__["a" /* AuthGuardLoggedService */]] },
    { path: 'userprofile', component: __WEBPACK_IMPORTED_MODULE_10__components_userprofile_userprofile_component__["a" /* UserprofileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: '**', redirectTo: '/home' },
];
var rooting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.router.js.map

/***/ }),

/***/ "../../../../../src/app/components/commentlist/commentlist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-image {\n    background-image: url('http://s7d2.scene7.com/is/image/PetSmart/PB1201_STORY_CARO-Authority-HealthyOutside-DOG-20160818?$PB1201$');\n    background-size: cover;\n}\n\n.comments{\n    height: 20px;\n}\n\nmat-card:hover{\n    background-color:rgba(47, 137, 179,0.2);\n}\n\n.continue{\n    text-align: center;\n    height: 4px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/commentlist/commentlist.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <mat-spinner *ngIf=\"!commentslist\" class=\"spinner\"></mat-spinner> -->\n<div *ngFor=\"let comment of commentlist; let i=index\">\n  <mat-card  class=\"comments\" *ngIf=\"i<3\" >\n      <mat-card-header >\n          <!-- <div mat-card-avatar class=\"header-image\"></div> -->\n          <mat-card-title>{{ comment.fromusername }}   {{ comment.timestamp | date: 'short'}}</mat-card-title>\n          <mat-card-subtitle class=\"commentContent\">{{ comment.message }}</mat-card-subtitle>\n      </mat-card-header> \n  </mat-card>\n  <mat-card class=\"continue\" *ngIf=\"i===4\" >\n        <mat-card-header >\n            <mat-card-subtitle (click)='showAllComments()'>{{showCommentOrNot}}</mat-card-subtitle>\n        </mat-card-header> \n  </mat-card>\n  <mat-card  class=\"comments\" *ngIf=\"i>3 && toggle\" >\n        <mat-card-header >\n            <!-- <div mat-card-avatar class=\"header-image\"></div> -->\n            <mat-card-title>{{ comment.fromusername }}   {{ comment.timestamp | date: 'short'}}</mat-card-title>\n            <mat-card-subtitle>{{ comment.message }}</mat-card-subtitle>\n         </mat-card-header> \n  </mat-card>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/commentlist/commentlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentlistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var CommentlistComponent = (function () {
    function CommentlistComponent(data) {
        this.data = data;
    }
    CommentlistComponent.prototype.ngOnInit = function () {
        this.toggle = false;
        this.showCommentOrNot = "Show More comments...";
        // this.getComments(this.tweet.id);
    };
    /**
     * Get Comments for the tweet
     */
    CommentlistComponent.prototype.getComments = function (tweetid) {
        var _this = this;
        this.subscriptComments = this.data.fetchComment(tweetid)
            .subscribe(function (list) {
            _this.commentsList = list.commentlist;
        });
    };
    CommentlistComponent.prototype.showAllComments = function () {
        this.toggle = !this.toggle;
        if (this.toggle) {
            this.showCommentOrNot = "Show less...";
        }
        else {
            this.showCommentOrNot = "Show More Comments...";
        }
    };
    return CommentlistComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CommentlistComponent.prototype, "commentlist", void 0);
CommentlistComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-commentlist',
        template: __webpack_require__("../../../../../src/app/components/commentlist/commentlist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/commentlist/commentlist.component.css")]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('data')),
    __metadata("design:paramtypes", [Object])
], CommentlistComponent);

//# sourceMappingURL=commentlist.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/edit-comments-dialog/edit-comments-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "textarea {\n    width: 95%;\n    height: 60px;\n    font-size: 14px;\n}\n.header-image {\n    background-image: url('http://s7d2.scene7.com/is/image/PetSmart/PB1201_STORY_CARO-Authority-HealthyOutside-DOG-20160818?$PB1201$');\n    background-size: cover;\n}\n\n.comments{\n    color: #00ADA7;\n    float: left;\n    size: 48;\n}\n.like{\n    color: #00ADA7;\n    float: left;\n    size: 48;\n}\n\n#closeBtn {\n    color: #00ADA7;\n    margin-top: 1px;\n    margin-right: 2px;\n    position: absolute;\n    top:0;\n    right:0;\n}\n\n.image {\n    border-radius: 50%;\n    width: 50px;\n    height: 50px;\n    margin-right: 10px;\n    padding: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit-comments-dialog/edit-comments-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\n    <div>\n      <mat-dialog-actions id=\"closeBtn\">\n            <button  mat-icon-button matTooltip=\"Close\"  (click)=\"onCloseCancel()\" name=\"Cancel\" >\n                <mat-icon>cancel</mat-icon>\n            </button>\n      </mat-dialog-actions>\n     <mat-card class=\"card\">\n      <mat-card-header>\n        <mat-card-title>{{tweet.owner}}</mat-card-title>\n        <mat-card-subtitle>{{ tweet.timestamp | date: 'short'}}</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n          <p class=\"tweetMessage\">\n            {{ tweet.message }}\n          </p>\n        </mat-card-content>\n      </mat-card>\n    </div>\n    <mat-expansion-panel class=\"expansionpanel2\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            New Comment\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <mat-form-field class=\"example-full-width\">\n          <textarea class=\"commenttextarea\" matInput placeholder=\"Write a comment\" [(ngModel)]=\"commentContent\"></textarea>\n        </mat-form-field>\n        <button class='disBtn' disabled mat-raised-button *ngIf=\"commentContent === ''\" (click)=\"postComment()\">\n          Comment\n        </button>\n        <button class='actBtn2' mat-raised-button *ngIf=\"commentContent !== ''\" (click)=\"postComment()\">\n          Comment\n        </button>\n      </mat-expansion-panel>\n      <div style=\"overflow-y: scroll; height:300px;\" >\n         <app-commentlist [commentlist]='list'></app-commentlist>\n      </div>\n    <mat-dialog-actions>\n        <button mat-raised-button (click)=\"onCloseCancel()\" class=\"dialogBtnCancel\">Cancel</button>\n    </mat-dialog-actions>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/edit-comments-dialog/edit-comments-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCommentsDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EditCommentsDialogComponent = (function () {
    function EditCommentsDialogComponent(thisDialogRef, tweet, data) {
        this.thisDialogRef = thisDialogRef;
        this.tweet = tweet;
        this.data = data;
        this.commentContent = '';
        this.url = 'http://s7d2.scene7.com/is/image/PetSmart/PB1201_STORY_CARO-Authority-HealthyOutside-DOG-20160818?$PB1201$';
    }
    EditCommentsDialogComponent.prototype.ngOnInit = function () {
        this.freshData();
    };
    /**
     * Add a comment
     */
    EditCommentsDialogComponent.prototype.postComment = function () {
        var _this = this;
        this.data.addNewComment(this.commentContent, this.tweet.id)
            .then(function (res) {
            _this.freshData();
            _this.commentContent = '';
            console.log("Adding comment is done");
            console.log(res);
        });
    };
    /**
     * Fresh Comment list
     */
    EditCommentsDialogComponent.prototype.freshData = function () {
        var _this = this;
        this.commentsSubscription = this.data.fetchComment(this.tweet.id)
            .subscribe(function (list) {
            _this.list = list.commentlist;
        });
    };
    EditCommentsDialogComponent.prototype.onCloseSubmit = function () {
        this.data.addNewComment(this.commentContent, this.tweet.id)
            .then(function (res) {
            console.log("Adding comment is done");
            console.log(res);
        });
        this.thisDialogRef.close('Confirm');
    };
    /**
     * Cancel updating user profile
     */
    EditCommentsDialogComponent.prototype.onCloseCancel = function () {
        this.thisDialogRef.close('Cancel');
    };
    return EditCommentsDialogComponent;
}());
EditCommentsDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-comments-dialog',
        template: __webpack_require__("../../../../../src/app/components/edit-comments-dialog/edit-comments-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/edit-comments-dialog/edit-comments-dialog.component.css")]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('data')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */]) === "function" && _a || Object, Object, Object])
], EditCommentsDialogComponent);

var _a;
//# sourceMappingURL=edit-comments-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/edit-user-profile-dialog/edit-user-profile-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#dialogHead{\n    text-align: center;\n}\n\n.dialogBtnConf{\n    float: left;\n}\n\n.dialogBtnCanc{\n    float: right;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit-user-profile-dialog/edit-user-profile-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\n  <h3 mat-dialog-title id=\"dialogHead\">Edit Your Profile</h3>\n  <form (ngSubmit)='onCloseConfirm()' > \n    <!-- <mat-form-field> \n      <input [(ngModel)]='userName' placeholder=\"User Name\" id=\"dialogInputFirstName\" name='userName'>\n    </mat-form-field>  -->\n    <mat-form-field>\n      <input matInput [(ngModel)]='userFirstName' placeholder=\"Input First Name\" name='userFirstName' >\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput [(ngModel)]='userLastName' placeholder=\"Input Last Name\" name='userLastName' >\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput [(ngModel)]='userEmail' name='userEmail' placeholder=\"Edit Your Email\" >\n    </mat-form-field>\n    <mat-form-field>\n      <textarea matInput [(ngModel)]='userBio' name='userBio'placeholder=\"Bio\" value=\"\" ></textarea>\n    </mat-form-field>\n    <mat-dialog-actions>\n      <button mat-raised-button type=\"submit\" class=\"dialogBtnConf\">Confirm</button>\n      <button mat-raised-button (click)=\"onCloseCancel()\" class=\"dialogBtnCanc\">Cancel</button>\n    </mat-dialog-actions>\n  </form>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/edit-user-profile-dialog/edit-user-profile-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserProfileDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var EditUserProfileDialogComponent = (function () {
    function EditUserProfileDialogComponent(thisDialogRef, dataDilog, data) {
        this.thisDialogRef = thisDialogRef;
        this.dataDilog = dataDilog;
        this.data = data;
        this.dialogResult = "";
    }
    EditUserProfileDialogComponent.prototype.ngOnInit = function () {
        var userinfo = JSON.parse(localStorage.getItem("user_info_object"));
        if (userinfo) {
            this.userName = userinfo.username;
            this.userFirstName = userinfo.firstname;
            this.userLastName = userinfo.lastname;
            this.userEmail = userinfo.email;
            this.userBio = userinfo.bio;
        }
    };
    /**
     * Update User Profile
     */
    EditUserProfileDialogComponent.prototype.onCloseConfirm = function () {
        var userNewInfo = { "firstname": this.userFirstName,
            "lastname": this.userLastName,
            "bio": this.userBio,
        };
        this.data.updateUserInfo(userNewInfo)
            .then(function (userinfo) {
            console.log("Update successfully!");
        });
        this.thisDialogRef.close('Confirm');
    };
    /**
     * Cancel updating user profile
     */
    EditUserProfileDialogComponent.prototype.onCloseCancel = function () {
        this.thisDialogRef.close('Cancel');
    };
    return EditUserProfileDialogComponent;
}());
EditUserProfileDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-user-profile-dialog',
        template: __webpack_require__("../../../../../src/app/components/edit-user-profile-dialog/edit-user-profile-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/edit-user-profile-dialog/edit-user-profile-dialog.component.css")]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('data')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */]) === "function" && _a || Object, String, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _b || Object])
], EditUserProfileDialogComponent);

var _a, _b;
//# sourceMappingURL=edit-user-profile-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/followerlist/followerlist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-card {\n    margin: 10px auto;\n    width: 60%;\n    outline:none;\n}\n\n.spinner {\n    position: absolute;\n    margin-left: 40%;\n    margin-top: 10%;\n}\n\n.header-image {\n    background-image: url('http://s7d2.scene7.com/is/image/PetSmart/PB1201_STORY_CARO-Authority-HealthyOutside-DOG-20160818?$PB1201$');\n    background-size: cover;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/followerlist/followerlist.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"!followerList\" class=\"spinner\"></mat-spinner>\n<mat-card *ngFor='let follower of followerList' class=\"example-card\" [routerLink]=\"['/user/', follower.username]\">\n  <mat-card-header>\n    \n    <mat-card-title>{{ follower.username }}</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <p class='flBio'>\n      {{ follower.bio }}\n    </p>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/components/followerlist/followerlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowerlistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var FollowerlistComponent = (function () {
    function FollowerlistComponent(route, data) {
        this.route = route;
        this.data = data;
    }
    FollowerlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.data.showFollower(params['id'])
                .then(function (list) {
                _this.followerList = list;
            });
        });
    };
    return FollowerlistComponent;
}());
FollowerlistComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-followerlist',
        template: __webpack_require__("../../../../../src/app/components/followerlist/followerlist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/followerlist/followerlist.component.css")]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('data')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, Object])
], FollowerlistComponent);

var _a;
//# sourceMappingURL=followerlist.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/followlist/followlist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-card {\n    margin: 10px auto;\n    width: 60%;\n    outline:none;\n}\n\n.spinner {\n    position: absolute;\n    margin-left: 40%;\n    margin-top: 10%;\n}\n\n.header-image {\n    background-image: url('http://s7d2.scene7.com/is/image/PetSmart/PB1201_STORY_CARO-Authority-HealthyOutside-DOG-20160818?$PB1201$');\n    background-size: cover;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/followlist/followlist.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"!followingList\" class=\"spinner\"></mat-spinner>\n<mat-card *ngFor='let follow of followingList' class=\"example-card\" [routerLink]=\"['/user/', follow.username]\">\n  <mat-card-header>\n    \n    <mat-card-title>{{ follow.username }}</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <p class='folBio'>\n      {{ follow.bio }}\n    </p>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/components/followlist/followlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowlistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var FollowlistComponent = (function () {
    function FollowlistComponent(route, data) {
        this.route = route;
        this.data = data;
    }
    FollowlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.data.showFollowing(params['id'])
                .then(function (list) {
                _this.followingList = list;
            });
        });
    };
    return FollowlistComponent;
}());
FollowlistComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-followlist',
        template: __webpack_require__("../../../../../src/app/components/followlist/followlist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/followlist/followlist.component.css")]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('data')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, Object])
], FollowlistComponent);

var _a;
//# sourceMappingURL=followlist.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\n    display: block;\n    position: relative;\n    border-top: 1px solid #efefef;\n    width: 80%;\n    margin: 0 auto;\n    top: 250px;\n    padding-bottom: 20px;\n    text-align: center;\n    line-height: 200%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<p>@ 2017 University of Florida</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<app-user-info [isHost]=true [userInfo]='userInfo'></app-user-info>\n<app-postarea></app-postarea>\n<app-tweetlist [tweetlist]='list' [username]='username'></app-tweetlist>\n<app-page-split [totalPage]='totalPage' [mongoid]='username'></app-page-split>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var LoginComponent = (function () {
    function LoginComponent(route, data) {
        this.route = route;
        this.data = data;
        this.username = "";
        this.userInfo = null;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // this.data.mockLogin()
        //       .then(() => {
        //         let userinfo = JSON.parse(localStorage.getItem("user_info_object"));
        //         this.username = userinfo.username;
        //         return this.username;
        //       }).then((username) => {
        var _this = this;
        //         this.data.getUserInfo(username)
        //         .then(userinfo => 
        //           {
        //             this.userInfo = userinfo;
        //           }
        //         );
        //         this.subscriptionTweets = this.data.getTweetListTimeLine(username, 1)
        //         .subscribe(list => 
        //           {
        //             this.list = list.tweetlist;
        //             this.totalPage = list.totalpage;
        //             //console.log(list);
        //           }
        //         );
        //       });
        var userinfo = JSON.parse(localStorage.getItem("user_info_object"));
        if (userinfo) {
            this.username = userinfo.username;
        }
        this.data.getUserInfo(this.username)
            .then(function (userinfo) {
            _this.userInfo = userinfo;
            console.log(userinfo);
        });
        this.subscriptionTweets = this.data.getTweetListTimeLine(this.username, 1)
            .subscribe(function (list) {
            _this.list = list.tweetlist;
            _this.totalPage = list.totalpage;
            //console.log(list);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('data')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-spacer {\n    -ms-flex: 1 1 auto;\n        flex: 1 1 auto;\n}\n\n.navRightButton {\n    margin-right: 80px;\n}\n\n.form {\n    margin-right: 60px;\n    font-size: 17px;\n    max-width: 170px;\n}\n\n.search {\n    color: white;\n}\n\n.brand {\n    margin-left: 70px;\n    border: 0;\n    font-size: 26px;\n    width: 15%;\n}\n\n.navbar{\n    color:#00ADA7;\n}\n\n.input{\n    color:#00ADA7;\n}\n\n.refresh {\n    margin-right: 3px;\n}\n\n.notifications {\n    margin-right: 8px;\n}\n\n.redPoint {\n    position: relative;\n    right: -26px;\n    top: -32px;\n    width: 7px;\n    height: 7px;\n    border-radius: 3.5px;\n    background-color: red;\n}\n\n.notification {\n    color: red;\n    line-height: 110%;\n    position: relative;\n    right: -22px;\n    top: -42px;\n    font-size: 10px;\n    font-weight: bold;\n    width: 10px;\n    border-radius: 1px;\n}\n\n.notify {\n    font-size: 13px;\n    padding-left: 10px;\n    font-weight: bold;\n    border-bottom: 1px #efefef solid;\n}\n\n.clear {\n    font-size: 12px;\n}\n\n.message {\n    border-bottom: 1px #efefef solid;\n    font-size: 12px;\n    line-height: 100%;\n}\n\n.followerName {\n    font-weight: bold;\n}\n\n.noNotify {\n    text-align: center;\n    font-size: 12px;\n    color: #bfbfbf;\n}\n\nimg:focus {outline:0 !important;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar *ngIf=\"shouldBeShowed\" class=\"navbar\">\n  <img class=\"brand\" routerLink=\"/home\" src=\"assets/images/twitterbabylogo.png\">\n  <span class=\"example-spacer\"></span>\n\n  <form matTooltip=\"Find an user through his/her username\" class=\"form\" (submit)=\"onSubmit()\" autocomplete=\"off\">\n    <mat-form-field class=\"search\">\n      <input name=\"search\" matInput placeholder=\"Search a friend\" class=\"input\" id=\"input\" [(ngModel)]='username'>\n    </mat-form-field>\n    <input type='submit' [routerLink]=\"['/user', username]\" style=\"display:none\">\n  </form>\n  \n  <button matTooltip=\"Refresh your timeline\" class=\"refresh\" (click)=\"refresh()\" mat-icon-button>\n    <mat-icon>refresh</mat-icon>\n    <div *ngIf=\"rcvnewTweet\" class=\"redPoint\"></div>\n  </button>\n\n  <button matTooltip=\"View notifications\" class=\"notifications\" mat-icon-button [matMenuTriggerFor]=\"notificationList\">\n    <mat-icon>notifications</mat-icon>\n    <p *ngIf=\"followNotificationList.length !== 0\" class=\"notification\">\n      {{ followNotificationList.length }}\n    </p>\n  </button>\n  <mat-menu #notificationList=\"matMenu\" [overlapTrigger]=\"false\">\n    <div class=\"notify\">Notifications\n      <button class=\"clear\" mat-button color=\"primary\" (click)=\"sendClearMessage()\">\n        Mark All as Read\n      </button>\n    </div>\n    <p *ngIf=\"followNotificationList.length === 0\" class=\"noNotify\">\n      -No notifications-\n    </p>\n    <button [routerLink]=\"['/user/', message.detail]\" class=\"message\" *ngFor=\"let message of followNotificationList.slice().reverse()\" mat-menu-item>\n        {{ message.timestamp | date: 'short'}} \n        <br/>\n        <span class=\"followerName\">{{ message.detail }}</span>\n        has followed you!\n    </button>\n  </mat-menu>\n\n  <button class=\"navRightButton\" mat-button [matMenuTriggerFor]=\"menu\">\n    <mat-icon>account_box</mat-icon>\n    <span>{{loginName}}</span>\n  </button>\n  <mat-menu #menu=\"matMenu\" [overlapTrigger]=\"false\">\n    <button class=\"profileBtn\" mat-menu-item (click)='goToUserProfile()'>\n      <mat-icon>\n      account_circle\n      </mat-icon>\n      Profile\n    </button>\n    <button class=\"logoutBtn\" mat-menu-item (click)='logout()'>\n      <mat-icon>\n        exit_to_app\n      </mat-icon>\n      Logout\n    </button> \n  </mat-menu>\n</mat-toolbar>\n"

/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var NavBarComponent = (function () {
    //connected: boolean = false;
    function NavBarComponent(data, auth, notify, route) {
        this.data = data;
        this.auth = auth;
        this.notify = notify;
        this.route = route;
        this.username = "";
        this.loginName = "";
        this.hostName = "";
        this.rcvnewTweet = false;
        this.followNotificationList = [];
    }
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notify.getEventListener().subscribe(function (event) {
            //console.log(this.notify.readyState());
            if (event.type === "open") {
                console.log("WS Connected!");
            }
            else if (event.type === "close") {
                console.log("WS Disconnected!");
            }
            else if (event.type === 'message') {
                console.log(event);
                if (event.data === "New tweets.") {
                    _this.rcvnewTweet = true;
                }
                else {
                    _this.followNotificationList.push(JSON.parse(event.data));
                    console.log(_this.followNotificationList);
                }
            }
        });
        this.subscription = this.auth.isLoggedIn().subscribe(function (bol) {
            if (bol) {
                _this.shouldBeShowed = true;
                var userinfo = JSON.parse(localStorage.getItem("user_info_object"));
                _this.loginName = userinfo.firstname + ' ' + userinfo.lastname;
                _this.hostName = userinfo.username;
                if (!_this.notify.readyState()) {
                    _this.notify.connect(userinfo.username);
                }
            }
            else {
                _this.shouldBeShowed = false;
                if (_this.notify.readyState()) {
                    _this.notify.close();
                }
            }
        });
    };
    NavBarComponent.prototype.ngOnDestroy = function () {
        if (this.notify.readyState()) {
            this.notify.close();
        }
    };
    NavBarComponent.prototype.onSubmit = function () {
        this.username = '';
        var input = document.getElementById("input");
        input.blur();
    };
    NavBarComponent.prototype.logout = function () {
        localStorage.clear();
        this.auth.isLoggedIn();
        this.notify.close();
        this.followNotificationList = [];
        this.route.navigateByUrl('/login');
    };
    NavBarComponent.prototype.refresh = function () {
        this.rcvnewTweet = false;
        if (this.route.url !== '/home') {
            this.route.navigateByUrl('/home')
                .catch(function (err) { return console.log(err); });
        }
        else {
            this.data.getTweetListTimeLine(this.hostName, 1);
        }
    };
    NavBarComponent.prototype.sendClearMessage = function () {
        this.notify.send("Clear notifications.");
        this.followNotificationList = [];
    };
    /**
    * Go to user profile
    */
    NavBarComponent.prototype.goToUserProfile = function () {
        console.log("Navigate to the userprofile webpage");
        this.auth.isLoggedIn();
        this.route.navigateByUrl('/userprofile');
        console.log("Done");
    };
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-nav-bar',
        template: __webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.css")]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('data')), __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('auth')),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('notify')),
    __metadata("design:paramtypes", [Object, Object, Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], NavBarComponent);

var _a;
//# sourceMappingURL=nav-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/notfound/notfound.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\n    font-size: 40px;\n    text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/notfound/notfound.component.html":
/***/ (function(module, exports) {

module.exports = "<p class='p'>\n  404 NOT FOUND!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/notfound/notfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotfoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    return NotfoundComponent;
}());
NotfoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-notfound',
        template: __webpack_require__("../../../../../src/app/components/notfound/notfound.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/notfound/notfound.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NotfoundComponent);

//# sourceMappingURL=notfound.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page-split/page-split.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pageSplit {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    width: 30%;\n    margin: 20px auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page-split/page-split.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='totalPage' class=\"pageSplit\">\n  <button mat-button class=\"prepage\" color=\"primary\" (click)=\"prePage()\">Previous</button>\n  <p>\n    {{ index }} / {{ totalPage }}\n  </p>\n  <button mat-button class=\"nextpage\" color=\"primary\" (click)=\"nextPage()\">Next</button>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/page-split/page-split.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageSplitComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var PageSplitComponent = (function () {
    function PageSplitComponent(data) {
        this.data = data;
        this.index = 1;
    }
    PageSplitComponent.prototype.ngOnInit = function () {
    };
    PageSplitComponent.prototype.nextPage = function () {
        var _this = this;
        if (this.index != this.totalPage) {
            this.index < this.totalPage ? this.index++ : this.index;
            this.data.getTweetListTimeLine(this.mongoid, this.index)
                .subscribe(function (res) {
                _this.index = res.page;
                _this.totalPage = res.totalpage;
            });
            window.scrollTo(0, -10);
        }
    };
    PageSplitComponent.prototype.prePage = function () {
        var _this = this;
        if (this.index != 1) {
            this.index > 1 ? this.index-- : this.index;
            this.data.getTweetListTimeLine(this.mongoid, this.index)
                .subscribe(function (res) {
                _this.index = res.page;
                _this.totalPage = res.totalpage;
            });
            window.scrollTo(0, -10);
        }
    };
    return PageSplitComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], PageSplitComponent.prototype, "totalPage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PageSplitComponent.prototype, "mongoid", void 0);
PageSplitComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-page-split',
        template: __webpack_require__("../../../../../src/app/components/page-split/page-split.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page-split/page-split.component.css")]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('data')),
    __metadata("design:paramtypes", [Object])
], PageSplitComponent);

//# sourceMappingURL=page-split.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/postarea/postarea.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".expansionpanel {\n    width: 50%;\n    margin: 20px auto;\n}\n\n.example-full-width {\n    width: 100%;\n}\n\n.submitbtn {\n    margin-left: 80%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/postarea/postarea.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel class=\"expansionpanel\">\n  <mat-expansion-panel-header>\n    <mat-panel-title>\n      New Tweet\n    </mat-panel-title>\n    <mat-panel-description>\n      Type To Create a tweet!\n    </mat-panel-description>\n  </mat-expansion-panel-header>\n  <mat-form-field class=\"example-full-width\">\n    <textarea matInput placeholder=\"Create A Tweet\" [(ngModel)]=\"content\"></textarea>\n  </mat-form-field>\n  <button class='disBtn' mat-raised-button *ngIf=\"content === ''\" disabled color=\"primary\" class=\"submitbtn\" (click)=\"postTweet()\">\n    Tweet!\n  </button>\n  <button class='actBtn' mat-raised-button *ngIf=\"content !== ''\" color=\"primary\" class=\"submitbtn\" (click)=\"postTweet()\">\n    Tweet!\n  </button>\n</mat-expansion-panel>"

/***/ }),

/***/ "../../../../../src/app/components/postarea/postarea.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostareaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var PostareaComponent = (function () {
    function PostareaComponent(data, router) {
        this.data = data;
        this.router = router;
        this.content = "";
    }
    PostareaComponent.prototype.ngOnInit = function () {
    };
    PostareaComponent.prototype.postTweet = function () {
        var _this = this;
        this.data.postTweet(JSON.parse(localStorage.getItem("user_info_object")).username, this.content)
            .then(function (tweet) {
            _this.content = "";
            console.log(tweet);
        })
            .catch(function (err) { return console.log(err); });
    };
    return PostareaComponent;
}());
PostareaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-postarea',
        template: __webpack_require__("../../../../../src/app/components/postarea/postarea.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/postarea/postarea.component.css")]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('data')),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], PostareaComponent);

var _a;
//# sourceMappingURL=postarea.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/retweet-dialog/retweet-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".submitBtn {\n    margin-left: 80%;\n}\n\n.example-full-width {\n    width: 100%;\n    font-size: 30px;\n}\n\n.ownerName {\n    font-weight: bold;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/retweet-dialog/retweet-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form\" autocomplete=\"off\">\n  <mat-form-field class=\"example-full-width\">\n    <input name=\"share\" class=\"shareInput\" [(ngModel)]=\"message\" matInput placeholder=\"Share your feels...\">\n  </mat-form-field>\n  <button class=\"submitBtn\" mat-raised-button (click)=\"onSubmit(tweet.id)\">SHARE</button>\n  <p><span class=\"ownerName\">@{{ tweet.owner }}: </span>{{tweet.message}} </p>\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/retweet-dialog/retweet-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetweetDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var RetweetDialogComponent = (function () {
    function RetweetDialogComponent(tweet, thisDialogRef, data) {
        this.tweet = tweet;
        this.thisDialogRef = thisDialogRef;
        this.data = data;
        this.message = "";
    }
    RetweetDialogComponent.prototype.ngOnInit = function () {
    };
    RetweetDialogComponent.prototype.onSubmit = function (tweetid) {
        var dataObject = {
            Idretweet: tweetid,
            message: this.message
        };
        this.data.retweet(JSON.parse(localStorage.getItem("user_info_object")).username, dataObject);
        this.thisDialogRef.close("Share!");
    };
    return RetweetDialogComponent;
}());
RetweetDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-retweet-dialog',
        template: __webpack_require__("../../../../../src/app/components/retweet-dialog/retweet-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/retweet-dialog/retweet-dialog.component.css")]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])("data")),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */]) === "function" && _a || Object, Object])
], RetweetDialogComponent);

var _a;
//# sourceMappingURL=retweet-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sign-up/sign-up.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " .container{\n    width: 500px;\n    height: 450px;\n    text-align: center;\n    margin: 0 auto;\n    background-color: rgba(52, 94, 88, 0.7); \n    border-radius: 8px;\n    margin: 0 auto;\n    margin-top: 60px;\n\n}\nh1{\n    color: rgb(47, 137, 179);\n    margin-top: 60px;\n    margin-bottom: 0px;\n    text-align: center;\n    text-shadow:5px 5px 10px rgb(132, 160, 177);\n    border-color: rgba(52, 94, 88);\n\n}\n.container img{\n    width: 120px;\n    height: 129px;\n    margin-top: -60px;\n    margin-bottom: 15px;\n}\n\ninput[type=\"text\"],[type=\"password\"],[type=\"email\"]{\n    height: 30px;\n    width: 300px;\n    border-radius: 4px;\n    border: none;\n    font-size: 14px;\n    margin-bottom: 15px;\n    background-color: #fff;\n    padding-left: 10px;    \n}\n\n#First_Name, #Last_Name{\n  height: 30px;\n  width: 145px;\n  border-radius: 4px;\n  border: none;\n  font-size: 14px;\n  margin-bottom: 20px;\n  background-color: #fff;\n  padding-left: 10px;    \n}\n\n.form-input::before{    \n    position: absolute;\n    font-family: \"FontAwesome\";\n    color: #9B59B6;\n    font-size: 30px;\n    padding-left: 5px;\n    padding-top: 5px;\n}\n\n\na{\n    margin-top: 30px;\n    color: #fff;\n    font-size: 13px;\n    font-family: Arial;\n}\n\nlabel{\n  color: #fff;\n  font-size: 13px;\n  font-family: Arial;\n  padding-left: 5px;\n}\n\n.btn {\n  width: 200px;\n  height: 35px;\n  color:#fff;\n  font-size: 18px;\n  background-color:rgb(168,224, 186); \n}\n\n.error{\n  color:rgb(221, 36, 36);\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h1>Sign Up Twitter Baby Today!</h1>\n<div class=\"container\" >\n    <img src=\"assets/images/twitterround.png\">\n    <form (ngSubmit)='signUp(form.value)' [formGroup]=\"form\">\n        <label>User Name </label>\n        <div class=\"form-input\">\n          <input type=\"text\" name=\"username\" placeholder=\"Enter Username\" \n           formControlName=\"username\">\n        </div>\n        <div *ngIf=\"form.controls.username.errors?.pattern\" class=\"error\">Username has invalid characters!</div>\n        \n        <label>Email </label>\n        <div class=\"form-input\">\n          <input type=\"email\" name=\"email\" placeholder=\"Enter Email\" formControlName=\"emailAddr\">\n        </div>\n        <div class=\"firstName\">\n              <label for=\"First_Name\">First Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Last Name</label><br>\n              <input name=\"first_name\" id=\"First_Name\" type=\"text\" placeholder=\"First Name\" \n               formControlName=\"firstname\"/>\n              <input name=\"last_name\" id=\"Last_Name\" type=\"text\" placeholder=\"Last Name\" formControlName=\"lastname\"/> \n        </div>\n        <div *ngIf=\"form.controls.firstname.errors?.pattern\" class=\"error\">First name has invalid characters!</div>\n        <div class=\"form-input\">\n          <label>Password</label><br>\n          <input type=\"password\" name=\"password\" placeholder=\"Enter Password\" flex layout-align=\"center center\" \n           formControlName=\"password\">\n        </div>\n        <div *ngIf=\"form.controls.password.errors?.pattern\" class=\"error\">Password must be at least 6 characters and less than 16 characters</div>\n        <div class=\"form-group\">\n          <button mat-raised-button type=\"submit\" class=\"btn\" [disabled]=\"!form.valid\">Sign Up</button>\n        </div>\n\n        <a class = \"loginlink\" routerLink=\"/login\"><u>Have an account? Sign In</u></a>\n        <br>\n        <div *ngIf=\"successMessage\" class=\"alert alert-success\">{{successMessage}})</div>\n        <div *ngIf=\"errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/sign-up/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var SignUpComponent = (function () {
    function SignUpComponent(service, _route) {
        this.service = service;
        this._route = _route;
        this.successMessage = '';
        this.errorMessage = '';
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern('[\\w\\-\\s\\/]+$'),
            ])),
            firstname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern('[\\w\\-\\s\\/]+$'),
            ])),
            lastname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](''),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(6),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(16),
                ,
            ])),
            emailAddr: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required),
        });
    }
    SignUpComponent.prototype.ngOnInit = function () {
        /**
         * Form control
         * handle with the username, password, first name's validations.
         */
    };
    /**
     * Sign Up
     */
    SignUpComponent.prototype.signUp = function (userInputInfo) {
        var _this = this;
        this.service.signUp(userInputInfo)
            .subscribe(function (data) {
            _this.successMessage = "Thank you for your signup, You sign up successfully!! webpage will be nagivated to login webpage shortly!";
            console.log(_this.successMessage);
            setTimeout(function (router) {
                _this._route.navigate(['/login']);
            }, 3000);
            // this._route.navigate(['/login']);
        }, function (err) {
            _this.errorMessage = "Something is wrong, please sign up again.";
            console.log(err);
        });
    };
    SignUpComponent.prototype.handleError = function (err) {
        var errMessage;
        if (err instanceof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Response"]) {
            var body = err.json() || '';
            var error = body.error || JSON.stringify(body);
            errMessage = err.status + " - " + (err.statusText || '') + " " + error;
        }
        else {
            errMessage = err.message ? err.message : err.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMessage);
    };
    return SignUpComponent;
}());
SignUpComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sign-up',
        template: __webpack_require__("../../../../../src/app/components/sign-up/sign-up.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/sign-up/sign-up.component.css")]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('auth')),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _a || Object])
], SignUpComponent);

var _a;
//# sourceMappingURL=sign-up.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/tweetlist/tweetlist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-card {\n    width: 45%;\n    margin: 5px auto;\n}\n\n.action {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    color: #5f5f5f;\n    padding-top: 0;\n}\n\n.spinner {\n    position: absolute;\n    margin-left: 40%;\n    margin-top: 10%;\n}\n\n.actionbtn {\n    font-size: 10px;\n    color: #00ADA7;\n}\n\n.timestamp {\n    font-size: 13px;\n}\n\n.like{\n    color: #00ADA7;\n    float: left;\n    size: 48;\n}\n\n/* mat-card:hover{\n    background-color:rgba(136, 184, 206, 0.2);\n} */\n\n.tweetMessage {\n    padding-left: 28px;\n    font-size: 16px;\n}\n\n.image {\n    border-radius: 50%;\n    width: 50px;\n    height: 50px;\n    margin-right: 10px;\n    padding: 0;\n}\n\n.header {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: start;\n        justify-content: flex-start;\n}\n\n.deletebtn {\n    font-size: 10px;\n    color: #00ADA7;\n}\n\n.space {\n    width: 50%;\n}\n\n.retweet {\n    background-color: #efefef;\n    width: 90%;\n    margin: 0 auto;\n    font-size: 16px;\n    border-radius: 2px;\n    padding: 20px 10px; \n}\n\n.retweetname {\n    font-weight: bold;\n}\n\n.headText {\n    width: 30%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tweetlist/tweetlist.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"!tweetlist\" class=\"spinner\"></mat-spinner>\n<mat-card *ngFor=\"let tweet of tweetlist\" class=\"example-card\">\n  <mat-card-header class=\"header\">\n    <img class=\"image\" mat-card-sm-image [src] = \"tweet.picture || url\">\n    <div class=\"headText\">\n      <mat-card-title>{{ tweet.owner }}</mat-card-title>\n      <mat-card-subtitle class=\"timestamp\">{{ tweet.timestamp | date: 'short'}}</mat-card-subtitle>\n    </div>\n    <div class=\"space\"></div>\n    <button *ngIf=\"tweet.owner===username\" (click)=\"deleteTweet(tweet.id)\" mat-icon-button class=\"deletebtn\"><mat-icon>close</mat-icon></button>\n  </mat-card-header>\n  <mat-card-content>\n    <p class=\"tweetMessage\">\n      {{ tweet.message }}\n    </p>\n    <div class=\"retweet\" *ngIf=\"tweet.isretweet\">\n      <span class=\"retweetname\">\n        @{{ tweet.ownerretweet }}:\n      </span> \n      {{ tweet.messageretweet }}\n    </div>\n  </mat-card-content>\n  <mat-card-actions class=\"action\">\n    <button class=\"actionbtn\" id=\"share\" mat-button (click)=\"retweetDialog(tweet)\" >\n      <mat-icon>launch</mat-icon>\n       Share\n    </button>\n\n    <button class=\"actionbtn\" id=\"comment\" (click)=\"editCommentDialog(tweet)\" mat-button >\n        <mat-icon>comment</mat-icon>\n        Comment\n    </button>\n  </mat-card-actions>\n    <!-- <app-commentlist [tweet]='tweet'></app-commentlist> -->\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/components/tweetlist/tweetlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TweetlistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_comments_dialog_edit_comments_dialog_component__ = __webpack_require__("../../../../../src/app/components/edit-comments-dialog/edit-comments-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__retweet_dialog_retweet_dialog_component__ = __webpack_require__("../../../../../src/app/components/retweet-dialog/retweet-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var TweetlistComponent = (function () {
    function TweetlistComponent(dialog, data) {
        this.dialog = dialog;
        this.data = data;
        this.url = 'http://s7d2.scene7.com/is/image/PetSmart/PB1201_STORY_CARO-Authority-HealthyOutside-DOG-20160818?$PB1201$';
    }
    TweetlistComponent.prototype.ngOnInit = function () {
    };
    TweetlistComponent.prototype.editCommentDialog = function (tweet) {
        console.log("Open a dialog");
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__edit_comments_dialog_edit_comments_dialog_component__["a" /* EditCommentsDialogComponent */], {
            width: '600px',
            data: tweet,
        });
        // After close the dialog
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('Dialog is closed: ${result}');
        });
    };
    TweetlistComponent.prototype.retweetDialog = function (tweet) {
        console.log("Click share");
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__retweet_dialog_retweet_dialog_component__["a" /* RetweetDialogComponent */], {
            width: '600px',
            data: tweet
        });
    };
    TweetlistComponent.prototype.deleteTweet = function (tweetId) {
        this.data.deleteTweet(tweetId);
        this.tweetlist = this.tweetlist.filter(function (el) {
            return el.id != tweetId;
        });
    };
    return TweetlistComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], TweetlistComponent.prototype, "tweetlist", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TweetlistComponent.prototype, "username", void 0);
TweetlistComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tweetlist',
        template: __webpack_require__("../../../../../src/app/components/tweetlist/tweetlist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/tweetlist/tweetlist.component.css")]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])("data")),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialog */]) === "function" && _a || Object, Object])
], TweetlistComponent);

var _a;
//# sourceMappingURL=tweetlist.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user-info/user-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".userInfo {\n    position: absolute;\n    left: 4%;\n    width: 17%;\n}\n\n.example-header-image {\n    background-size: cover;\n}\n\n.header {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: start;\n        justify-content: flex-start;\n}\n\n.image {\n    border-radius: 50%;\n    width: 50px;\n    height: 50px;\n    margin-right: 10px;\n    padding: 0;\n}\n\n.following {\n    color:#00ADA7;\n    background-color: #efefef;\n}\n\n.follower {\n    color:#00ADA7;\n    background-color: #efefef;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-info/user-info.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"userInfo\" *ngIf=\"userInfo !== null\">\n  <mat-card-header class=\"header\">\n    <img class=\"image\" mat-card-sm-image [src] = \"userInfo.userinfo.picture || url\">\n    <div>\n        <mat-card-title>{{userInfo.userinfo.username}}</mat-card-title>\n        <mat-card-subtitle>Animal Breed</mat-card-subtitle>\n    </div>\n  </mat-card-header>\n  <mat-card-content>\n    <p>\n      {{userInfo.userinfo.bio}}\n    </p>\n  </mat-card-content>\n  <mat-chip-list>\n    <mat-chip class='following' [routerLink]=\"['/user/following/', userInfo.userinfo.username]\">Following: {{userInfo.followingcount}}</mat-chip>\n    <mat-chip class='follower' [routerLink]=\"['/user/follower/', userInfo.userinfo.username]\">Followers: {{userInfo.followercount}}</mat-chip>\n  </mat-chip-list>\n  <mat-card-actions *ngIf=\"!isHost\">\n    <button mat-raised-button class=\"followbtn\" color=\"accent\" (click)=\"followFunc()\">\n      {{ (userInfo.followed) ? \"Following\" : \"Follow\" }}\n    </button>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/components/user-info/user-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_userinfo_model__ = __webpack_require__("../../../../../src/app/models/userinfo.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_userinfo_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_userinfo_model__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var UserInfoComponent = (function () {
    function UserInfoComponent(data) {
        this.data = data;
        this.url = 'http://s7d2.scene7.com/is/image/PetSmart/PB1201_STORY_CARO-Authority-HealthyOutside-DOG-20160818?$PB1201$';
    }
    UserInfoComponent.prototype.ngOnInit = function () { };
    UserInfoComponent.prototype.followFunc = function () {
        if (!this.userInfo.followed) {
            this.data.followUser(this.userInfo.userinfo.username);
            this.userInfo.followed = true;
            this.userInfo.followercount++;
        }
        else {
            this.data.unfollowUser(this.userInfo.userinfo.username);
            this.userInfo.followed = false;
            this.userInfo.followercount--;
        }
    };
    return UserInfoComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], UserInfoComponent.prototype, "isHost", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_userinfo_model__["UserInfo"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_userinfo_model__["UserInfo"]) === "function" && _a || Object)
], UserInfoComponent.prototype, "userInfo", void 0);
UserInfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-info',
        template: __webpack_require__("../../../../../src/app/components/user-info/user-info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user-info/user-info.component.css")]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('data')),
    __metadata("design:paramtypes", [Object])
], UserInfoComponent);

var _a;
//# sourceMappingURL=user-info.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user-page/user-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-page/user-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-user-info [isHost]=\"isHost\" [userInfo]='userInfo'></app-user-info>\n<app-tweetlist [tweetlist]='list' [username]='username'></app-tweetlist>\n<app-page-split [totalPage]='totalPage'></app-page-split>"

/***/ }),

/***/ "../../../../../src/app/components/user-page/user-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var UserPageComponent = (function () {
    function UserPageComponent(route, _route, data) {
        this.route = route;
        this._route = _route;
        this.data = data;
        this.userInfo = null;
    }
    UserPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.data.getUserInfo(params["id"])
                .then(function (userinfo) {
                console.log(userinfo);
                _this.userInfo = userinfo;
                _this.username = userinfo.userinfo.username;
                var userInfo = JSON.parse(localStorage.getItem("user_info_object"));
                _this.isHost = _this.username === userInfo.username ? true : false;
                _this.username = userInfo.username;
            })
                .catch(function (err) {
                if (err.status === 404) {
                    _this._route.navigateByUrl('/404');
                }
            });
            ;
            _this.data.getTweetList(params["id"])
                .then(function (list) {
                console.log(list);
                _this.list = list.tweetlist;
                _this.page = list.page;
                _this.totalPage = list.totalPage;
            })
                .catch(function (err) {
                if (err.status === 404) {
                    console.log("404");
                    _this.list = [];
                }
            });
        });
    };
    return UserPageComponent;
}());
UserPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-page',
        template: __webpack_require__("../../../../../src/app/components/user-page/user-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user-page/user-page.component.css")]
    }),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('data')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, Object])
], UserPageComponent);

var _a, _b;
//# sourceMappingURL=user-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/userlogin/userlogin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\n    margin: 0 auto;\n    /* background-color: #009688; */\n    background-size: 100%;\n}\n\n.container{\n    width: 450px;\n    height: 345px;\n    text-align: center;\n    margin: 0 auto;\n    background-color: rgba(52, 94, 88, 0.7); \n    border-radius: 8px;\n    margin: 0 auto;\n    margin-top: 70px;\n}\n\n.container img{\n    width: 120px;\n    height: 129px;\n    margin-top: -60px;\n    margin-bottom: 30px;\n}\n\ninput[type=\"text\"],[type=\"password\"]{\n    height: 40px;\n    width: 300px;\n    border-radius: 4px;\n    border: none;\n    font-size: 16px;\n    margin-bottom: 20px;\n    background-color: #fff;\n    padding-left: 10px;    \n}\n\n.form-input::before{    \n    position: absolute;\n    font-family: \"FontAwesome\";\n    color: #9B59B6;\n    font-size: 30px;\n    padding-left: 5px;\n    padding-top: 5px;\n}\n\na{\n    margin-top: 30px;\n    color: #fff;\n    font-size: 13px;\n    font-family: Arial;\n}\n\nh1{\n    color: rgb(47, 137, 179);\n    margin-top: 100px;\n    margin-bottom: 0px;\n    text-align: center;\n    text-shadow:5px 5px 10px rgb(132, 160, 177);\n}\n\n.btn {\n    width: 200px;\n    height: 35px;\n    color:#fff;\n    font-size: 18px;\n    background-color:rgb(168,224, 186); \n  }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/userlogin/userlogin.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to Twitter Baby!</h1>\n  <div class=\"container\" >\n      <img src=\"assets/images/twitterround.png\">\n      <form (ngSubmit)='login()'>\n          <div class=\"form-input\">\n            <input type=\"text\" name=\"username\" placeholder=\"Enter Email\" [(ngModel)]='credentials.username'>\n          </div>\n          <div class=\"form-input\">\n            <input type=\"password\" name=\"password\" placeholder=\"Enter Password\" flex layout-align=\"center center\" \n            [(ngModel)]='credentials.password'>\n          </div>\n          <div class=\"form-group\">\n            <button mat-raised-button type=\"submit\" class=\"btn\">Log In</button>\n          </div>\n          <!-- <input type=\"submit\" name=\"submit\" value=\"Log In\" class=\"btn-login\"> -->\n          <a class = \"loginlink\" routerLink=\"#\"><u>Forgot Your Password?</u></a>\n          <br>\n          <a class = \"loginlink\" routerLink=\"/signup\"><u>No account? Please Sign Up!</u></a>\n          <div *ngIf=\"successMessage\" class=\"alert alert-success\">{{successMessage}})</div>\n          <div *ngIf=\"errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\n      </form>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/userlogin/userlogin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserloginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var UserloginComponent = (function () {
    function UserloginComponent(service, _route) {
        this.service = service;
        this._route = _route;
        this.credentials = { username: '', password: '' };
        this.successMessage = '';
        this.errorMessage = '';
    }
    UserloginComponent.prototype.ngOnInit = function () {
    };
    /**
     * Login a user
     */
    UserloginComponent.prototype.login = function () {
        var _this = this;
        this.service.login(this.credentials.username, this.credentials.password)
            .subscribe(
        //if success
        function (data) {
            console.log("Login success! Navigating to your home webpage");
            console.log(_this.service.isLoggedIn());
            _this.successMessage = "Login Successfully";
            _this._route.navigate(['/home']);
        }, 
        //if error
        function (err) {
            _this.errorMessage = 'That email address/password combination is not in our records. Forgot Your Password?  Click the "Forgot Your Password?"';
            console.log(err);
        });
    };
    return UserloginComponent;
}());
UserloginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-userlogin',
        template: __webpack_require__("../../../../../src/app/components/userlogin/userlogin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/userlogin/userlogin.component.css")]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('auth')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], UserloginComponent);

var _a, _b;
//# sourceMappingURL=userlogin.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/userprofile/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(_id, username, firstname, lastname, email, picture, bio) {
        if (_id === void 0) { _id = ''; }
        if (username === void 0) { username = ''; }
        if (firstname === void 0) { firstname = ''; }
        if (lastname === void 0) { lastname = ''; }
        if (email === void 0) { email = ''; }
        if (picture === void 0) { picture = ''; }
        if (bio === void 0) { bio = ''; }
        this._id = _id;
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.picture = picture;
        this.bio = bio;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/components/userprofile/userprofile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profileContainer{\n    width:70%;\n    height: 100%;\n    margin: 0 auto;\n    font: 15px/1.5 Arial, Helvetica, sans-serif;\n    background-color: rgb(235, 231, 231);\n}\n\n/* Banner--------------- */\n.banner{\n    height: 160px;\n    background-color: rgba(0,173,167,0.6);\n}\n    .banner_headimg{\n        height: 190px;\n        width: 190px;\n        position: relative;\n        display: inline-block;\n    }\n    .banner_menu{\n        height:30px;\n        margin-left: 300px;\n    }\n    .banner_button{\n        margin-right: 5px; \n       float: right;\n    }\n    .profileheadimg{\n        height: 180px;\n        width: 180px;\n        border-radius: 50%;   \n        background-color: white;\n        position: relative;\n        margin: auto;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        padding: 6px;  \n    }\n\n    .image-upload > input{\n        display: none;\n    }\n    .logo{\n        height: 30px;\n        width: 30px;\n    }\n    nav a{\n        color: #00ADA7;\n        text-decoration:none;\n        text-transform: uppercase;\n        font-size:12px;\n    }\n    nav a:hover{\n        font-weight: bold;\n        text-decoration: underline;\n    }\n    nav ul{\n        margin:0;\n        padding: 0;\n    }\n    nav li{\n        float: left;\n        display: inline;\n        padding: 0 20px 0 20px;\n    }\n    #profileButton{\n        margin-top:-5px;\n        margin-right: 10px;\n        height: 30px;\n        width: 80px;\n        border-radius: 15px;\n        background-color:white;\n        font-family: Arial, Helvetica, sans-serif;\n        color:#00ADA7;\n        border-color: #00ADA7;\n    }\n    .banner_button :hover{\n        font-weight: bold;\n        background-color: rgba(247, 247, 169, 0.856);   \n    }\n\n/* Display Body--------------- */\n.displayBody{\n   width: 100%;\n   height: 500px;\n   /* float: right; */\n   border: solid;\n   border-color: rgba(0,173,167,0.6);\n}\n    .body-card{\n        height: 200px;\n    }\n    .body-card-image{\n        width: 80px;\n        height: 80px;\n        border-radius: 2px;\n    }\n    #BioTextArea{\n        width: 300px;\n        height: 100px;\n    }\n\n.profileLabel {\n    padding-left: 15px; \n}\n\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/userprofile/userprofile.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"profileContainer\">\n  <!-- Banner -->\n  <div class=\"banner\">\n      <div id=\"banner_img\">\n          <div class=\"image-upload\">\n              <label for=\"file-input\">\n                  <img class='profileheadimg' src=\"{{ avatar || 'assets/images/defaultAvator.jpeg' }}\"/>\n              </label>\n              <input id=\"file-input\" type=\"file\" name=\"inputimg\" required (change)=\"fileChange($event)\"  accept=\"image/jpeg\" #input>\n          </div>\n      </div>  \n  </div>\n  <div class=\"banner_menu\">\n      <div >\n          <nav class=\"nav\">\n            <ul>\n                  <li><a img class=\"logo\" src=\"assets/images/twitterLogo.png\"></a></li> \n                  <li><a [routerLink]=\"['/user/', userName]\">Tweets</a></li>\n                  <li><a [routerLink]=\"['/user/following/', userName]\">Following</a></li>\n            </ul>\n          </nav>\n      </div>\n      <div class=\"banner_button\"> \n          <button id=\"profileButton\" (click)=\"openEditUserProfileDiag()\">Edit Profile</button>\n      </div>   \n  </div>\n  <div class=\"displayBody\">\n    <h3>My Info</h3>\n    <form>\n    <div>\n      <label class=\"profileLabel\">User Name: {{userName}}</label>\n    </div>\n    <hr>\n    <div><label class=\"profileLabel\">First Name: {{userFirstName}}</label></div>\n    <hr>\n    <div><label class=\"profileLabel\">Last Name: {{userLastName}}</label></div>\n    <hr>\n    <div><label class=\"profileLabel\">Email: {{userEmail}}</label></div>\n    <hr>\n    <div>\n      <label class=\"profileLabel\">Bio: </label>\n      <p id=\"BioTextArea\">{{userBio}}</p>\n    </div>\n    </form>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/userprofile/userprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserprofileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_user_profile_dialog_edit_user_profile_dialog_component__ = __webpack_require__("../../../../../src/app/components/edit-user-profile-dialog/edit-user-profile-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user__ = __webpack_require__("../../../../../src/app/components/userprofile/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var URL = 'http://s7d2.scene7.com/is/image/PetSmart/PB1201_STORY_CARO-Authority-HealthyOutside-DOG-20160818?$PB1201$';
var UserprofileComponent = (function () {
    function UserprofileComponent(dialog, changeDetectorRef, route, mediaService, data) {
        this.dialog = dialog;
        this.changeDetectorRef = changeDetectorRef;
        this.route = route;
        this.mediaService = mediaService;
        this.data = data;
        this.dialogResult = "";
        this.user = new __WEBPACK_IMPORTED_MODULE_4__user__["a" /* User */]();
    }
    UserprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userinfo = JSON.parse(localStorage.getItem("user_info_object"));
        if (userinfo) {
            this.userName = userinfo.username;
            if (userinfo.picture !== "undefined") {
                console.log("user info has avator  " + userinfo.picture);
                this.avatar = userinfo.picture;
            }
            else {
                //this.avatar = 'assets/images/grumpycat.jpeg';
            }
        }
        /**
        * Get User Info
        */
        this.userInfosubscription = this.data.getUserInfoForProfile(this.userName)
            .subscribe(function (newUserInfo) {
            _this.userFirstName = newUserInfo.userinfo.firstname;
            _this.userLastName = newUserInfo.userinfo.lastname;
            _this.userEmail = newUserInfo.userinfo.email;
            _this.userBio = newUserInfo.userinfo.bio;
            _this.avatar = newUserInfo.userinfo.picture;
            _this.user.firstname = newUserInfo.userinfo.firstname;
            _this.user.lastname = newUserInfo.userinfo.lastname;
            ;
            _this.user.email = newUserInfo.userinfo.email;
            _this.user.bio = newUserInfo.userinfo.bio;
        });
    };
    /**
     * Get User Info
     */
    UserprofileComponent.prototype.getUserInfo = function () {
        var userinfo = JSON.parse(localStorage.getItem("user_info_object"));
        if (userinfo) {
            this.userName = userinfo.username;
            this.userFirstName = userinfo.firstname;
            this.userLastName = userinfo.lastname;
            this.userEmail = userinfo.email;
            this.userBio = userinfo.bio;
        }
    };
    /*
    * Edit profile
    * Open a dilog EditUserProfileDialogComponent
    */
    UserprofileComponent.prototype.openEditUserProfileDiag = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__edit_user_profile_dialog_edit_user_profile_dialog_component__["a" /* EditUserProfileDialogComponent */], {
            width: '600px',
            data: 'The dialog data shows here',
        });
        /**
         *  After the dialog is closed
         */
        dialogRef.afterClosed().subscribe(function (result) {
            // Fresh user info 
            console.log('Dialog is closed: ${result}');
            _this.dialogResult = result;
            var userinfo = JSON.parse(localStorage.getItem("user_info_object"));
            if (userinfo) {
                _this.userName = userinfo.username;
                _this.userFirstName = userinfo.firstname;
                _this.userLastName = userinfo.lastname;
                _this.userEmail = userinfo.email;
                _this.userBio = userinfo.bio;
            }
            _this.route.navigateByUrl('/userprofile');
            console.log(userinfo);
        });
    };
    /**
     * Change user's avator
     * @param input
     */
    UserprofileComponent.prototype.fileChange = function (input) {
        var _this = this;
        if (input.target.files && input.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(input.target.files[0]);
            reader.onload = function (x) {
                URL = x.target.result;
                _this.avatar = URL;
                _this.updateAvator();
            };
        }
    };
    /**
     * call media servers update Avator function
     */
    UserprofileComponent.prototype.updateAvator = function () {
        console.log("start to request upload image");
        this.user.picture = this.avatar;
        this.mediaService.uploadAvator(this.user).subscribe(function (res) {
            console.log("Upload successfully!");
        });
    };
    return UserprofileComponent;
}());
UserprofileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-userprofile',
        template: __webpack_require__("../../../../../src/app/components/userprofile/userprofile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/userprofile/userprofile.component.css")]
    }),
    __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('media')),
    __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('data')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, Object, Object])
], UserprofileComponent);

var _a, _b, _c;
//# sourceMappingURL=userprofile.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/userinfo.model.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=userinfo.model.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard-logged.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardLoggedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AuthGuardLoggedService = (function () {
    function AuthGuardLoggedService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardLoggedService.prototype.canActivate = function () {
        if (!this.auth.isLoggedInSimple()) {
            return true;
        }
        else {
            this.router.navigateByUrl('/home');
            return false;
        }
    };
    return AuthGuardLoggedService;
}());
AuthGuardLoggedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('auth')),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthGuardLoggedService);

var _a;
//# sourceMappingURL=auth-guard-logged.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AuthGuardService = (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (this.auth.isLoggedInSimple()) {
            return true;
        }
        else {
            this.router.navigateByUrl('/login');
            return false;
        }
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('auth')),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthGuardService);

var _a;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.authUrl = "http://ec2-18-219-112-104.us-east-2.compute.amazonaws.com:1324/api/v1";
        //private authUrl: String = "http://127.0.0.1:1323/api/v1";
        this.loggedIn = false;
        this.localhost = "http://localhost:1323";
        this.loginSource = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.loggedIn = !!localStorage.getItem('auth_token');
    }
    /**
     * Check if the user is logged in
     */
    AuthService.prototype.isLoggedIn = function () {
        this.loginSource.next(Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('access_token'));
        return this.loginSource.asObservable();
    };
    AuthService.prototype.isLoggedInSimple = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('access_token');
    };
    /**
     * Log the user in
     */
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        var loginfo = { email: username, password: password };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'content-type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.post(this.authUrl + "/login", loginfo, options)
            .map(function (res) { return res.json(); })
            .do(function (res) {
            if (res.token) {
                localStorage.setItem('auth_token', res.token);
                localStorage.setItem('access_token', res.token);
                localStorage.setItem('id', res.id);
                localStorage.setItem('user_info_object', JSON.stringify(res));
                _this.loginSource.next(Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('access_token'));
            }
        })
            .catch(this.handleError);
    };
    AuthService.prototype.handleError = function (err) {
        var errMessage;
        if (err instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"]) {
            var body = err.json() || '';
            var error = body.error || JSON.stringify(body);
            errMessage = err.status + " - " + (err.statusText || '') + " " + error;
        }
        else {
            errMessage = err.message ? err.message : err.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errMessage);
    };
    /**
    * SignUp service
    * @param userInputInfo
    */
    AuthService.prototype.signUp = function (userInputInfo) {
        var signUpUserInfo = { username: userInputInfo.username, password: userInputInfo.password,
            firstname: userInputInfo.firstname, lastname: userInputInfo.lastname,
            email: userInputInfo.emailAddr };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'content-type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        console.log(this.authUrl + "/signup", signUpUserInfo, options);
        return this.http.post(this.authUrl + "/signup", signUpUserInfo, options)
            .map(function (res) { return res.json(); })
            .do(function (res) {
            if (res.token) {
                console.log(res);
            }
        })
            .catch(this.handleError);
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.localhost = "http://localhost:1323";
        this.timelineSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.backEndHostUrl = "http://ec2-18-219-112-104.us-east-2.compute.amazonaws.com:1324";
    }
    // Create the header for http request
    DataService.prototype.getHeader = function () {
        var access_token = localStorage.getItem("access_token");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', 'Bearer ' + access_token);
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
    };
    // Get the tweetlist. This method will be changed to return Observable
    DataService.prototype.getTweetList = function (id) {
        var options = this.getHeader();
        return this.http.get(this.backEndHostUrl + ("/api/v1/tweetlist/" + id + "?perpage=100&page=1"), options)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // Get the timeline of host.
    DataService.prototype.getTweetListTimeLine = function (id, page) {
        var _this = this;
        var options = this.getHeader();
        this.timelineSource.next([]);
        this.http.get(this.backEndHostUrl + ("/api/v1/tweettimeline/" + id + "?perpage=15&page=" + page), options)
            .toPromise()
            .then(function (res) {
            console.log(res.json());
            _this.timelineSource.next(res.json());
        })
            .catch(this.handleError);
        return this.timelineSource.asObservable();
    };
    DataService.prototype.getUserInfo = function (id) {
        var options = this.getHeader();
        return this.http.get(this.backEndHostUrl + ("/api/v1/userInfo/" + id), options)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // Follow and unfollow part
    DataService.prototype.followUser = function (id) {
        var post = {};
        var options = this.getHeader();
        return this.http.post(this.backEndHostUrl + ("/api/v1/follow/" + id), post, options)
            .toPromise()
            .catch(this.handleError);
    };
    DataService.prototype.unfollowUser = function (id) {
        var post = {};
        var options = this.getHeader();
        return this.http.post(this.backEndHostUrl + ("/api/v1/unfollow/" + id), post, options)
            .toPromise()
            .catch(this.handleError);
    };
    DataService.prototype.showFollower = function (id) {
        var options = this.getHeader();
        return this.http.get(this.backEndHostUrl + ("/api/v1/showFollower/" + id), options)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.showFollowing = function (id) {
        var options = this.getHeader();
        return this.http.get(this.backEndHostUrl + ("/api/v1/showFollowing/" + id), options)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //Create new tweet
    DataService.prototype.postTweet = function (id, content) {
        var _this = this;
        var options = this.getHeader();
        var message = { message: content };
        //console.log(message);
        return this.http.post(this.backEndHostUrl + "/api/v1/newTweet", message, options)
            .toPromise()
            .then(function (res) {
            _this.getTweetListTimeLine(id, 1);
            return res.json();
        })
            .catch(this.handleError);
    };
    //Delete Tweet
    DataService.prototype.deleteTweet = function (tweetId) {
        var options = this.getHeader();
        return this.http.delete(this.backEndHostUrl + '/api/v1/deleteTweet/' + tweetId, options)
            .toPromise()
            .then(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    // ReTweet
    DataService.prototype.retweet = function (id, data) {
        var _this = this;
        var options = this.getHeader();
        return this.http.post(this.backEndHostUrl + '/api/v1/reTweet', data, options)
            .toPromise()
            .then(function (res) {
            _this.getTweetListTimeLine(id, 1);
            return res.json();
        })
            .catch(this.handleError);
    };
    //MockLogin only for development
    // mockLogin(): Promise<Object> {
    //   let loginfo: object = {email:"hojason117@gmail.com", password:"test1"};
    //   let headers: Headers = new Headers({ 'content-type': 'application/json'});
    //   let options: RequestOptions = new RequestOptions({ headers: headers });
    //   return this.http.post('http://127.0.0.1:1323/api/v1/login', loginfo, options)
    //     .toPromise()
    //     .then((res: Response) => {
    //       console.log(res.json());
    //       localStorage.setItem('access_token', res.json().token);
    //       localStorage.setItem('id', res.json().id);
    //       localStorage.setItem('user_info_object', JSON.stringify(res.json()));
    //     })
    //     .catch(this.handleError);
    // }
    // ERROR handler
    DataService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.body || error);
    };
    /**
     * Update User Info
     * By Diane
     * @param error
     */
    DataService.prototype.updateUserInfo = function (userNewInfo) {
        var _this = this;
        var options = this.getHeader();
        // console.log(`${this.authUrl}/signup`, signUpUserInfo, options);
        return this.http.post(this.backEndHostUrl + "/api/v1/updateUserInfo", userNewInfo, options)
            .toPromise()
            .then(function (res) {
            localStorage.setItem('user_info_object', JSON.stringify(res.json()));
            _this.getUserInfoForProfile(userNewInfo.username);
            console.log(res.json());
        })
            .catch(this.handleError);
    };
    /**
     * Add a new comment into the tweet
     */
    DataService.prototype.addNewComment = function (commentContent, tweetid) {
        var _this = this;
        var options = this.getHeader();
        var message = { "message": commentContent };
        return this.http.post(this.backEndHostUrl + "/api/v1/newcomment/" + tweetid, message, options)
            .toPromise()
            .then(function (res) {
            console.log("back end response: successfully");
            console.log(JSON.stringify(res.json()));
            _this.fetchComment(tweetid);
            return res.json();
        })
            .catch(this.handleError);
    };
    /**
     * Get comments for the specific tweet.
     * @param tweetid
     */
    DataService.prototype.fetchComment = function (tweetid) {
        var options = this.getHeader();
        return this.http.get(this.backEndHostUrl + "/api/v1/fetchcomment/" + tweetid, options)
            .map(function (res) { return res.json(); })
            .do(function (res) {
            console.log(res);
            console.log("Get result successfully!");
        })
            .catch(this.handleError);
    };
    /**
     * Get User name by observable
     * @param username
     */
    DataService.prototype.getUserInfoForProfile = function (username) {
        var options = this.getHeader();
        return this.http.get(this.backEndHostUrl + "/api/v1/userInfo/" + username, options)
            .map(function (res) { return res.json(); })
            .do(function (res) {
            console.log(res);
            console.log("Get user info successfully!");
        })
            .catch(this.handleError);
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/media.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MediaService = (function () {
    //private backEndHostUrl: String = "http://127.0.0.1:1323/api/v1";
    function MediaService(_http) {
        this._http = _http;
        this.backEndHostUrl = "http://ec2-18-219-112-104.us-east-2.compute.amazonaws.com:1324/api/v1";
    }
    // data = {
    //   size: '125422',
    //   type: 'image/jpeg',
    //   name:'test.jpg',
    //   url: base64,
    // };
    /**
     * Get header
     */
    MediaService.prototype.getHeader = function () {
        var access_token = localStorage.getItem("access_token");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer ' + access_token);
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
    };
    MediaService.prototype.uploadAvator = function (user) {
        var options = this.getHeader();
        var message = { picture: user.picture };
        console.log("picture data: " + user.picture);
        return this._http.post(this.backEndHostUrl + "/updateProfilePic", message, options)
            .map(function (res) { return res.json(); })
            .do(function (res) {
            console.log("---------");
            console.log(res);
            console.log("Get result successfully!");
        })
            .catch(this.handleError);
    };
    // ERROR handler
    MediaService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.body || error);
    };
    return MediaService;
}());
MediaService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], MediaService);

var _a;
//# sourceMappingURL=media.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationService = (function () {
    function NotificationService() {
        this.listener = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.connected = false;
    }
    NotificationService.prototype.connect = function (id) {
        var _this = this;
        if (!this.connected) {
            this.socket = new WebSocket("ws://ec2-18-219-112-104.us-east-2.compute.amazonaws.com:1324/api/v1/ws/" + id);
            //this.socket = new WebSocket("ws://localhost:1323/api/v1/ws/" + id);
            this.connected = true;
            this.socket.onopen = function (event) {
                _this.listener.emit({ "type": "open", "data": event });
            };
            this.socket.onclose = function (event) {
                _this.listener.emit({ "type": "close", "data": event });
            };
            this.socket.onmessage = function (event) {
                _this.listener.emit({ "type": "message", "data": event.data });
            };
        }
    };
    NotificationService.prototype.readyState = function () {
        if (this.socket === undefined) {
            return false;
        }
        return this.socket.readyState === 1;
    };
    NotificationService.prototype.send = function (data) {
        this.socket.send(data);
    };
    NotificationService.prototype.close = function () {
        console.log("should close the connection!");
        this.connected = false;
        this.socket.close();
    };
    NotificationService.prototype.getEventListener = function () {
        return this.listener;
    };
    return NotificationService;
}());
NotificationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], NotificationService);

//# sourceMappingURL=notification.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map