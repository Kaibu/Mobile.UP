'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Mobile.UP</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppInfoPageModule.html" data-type="entity-link">AppInfoPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppInfoPageModule-a5f96b4b04240065cdf93a4edb034ac7"' : 'data-target="#xs-components-links-module-AppInfoPageModule-a5f96b4b04240065cdf93a4edb034ac7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppInfoPageModule-a5f96b4b04240065cdf93a4edb034ac7"' :
                                            'id="xs-components-links-module-AppInfoPageModule-a5f96b4b04240065cdf93a4edb034ac7"' }>
                                            <li class="link">
                                                <a href="components/AppInfoPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppInfoPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-c613c4347dc1fc14bd42dd3b8d2e7a7b"' : 'data-target="#xs-components-links-module-AppModule-c613c4347dc1fc14bd42dd3b8d2e7a7b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-c613c4347dc1fc14bd42dd3b8d2e7a7b"' :
                                            'id="xs-components-links-module-AppModule-c613c4347dc1fc14bd42dd3b8d2e7a7b"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-c613c4347dc1fc14bd42dd3b8d2e7a7b"' : 'data-target="#xs-injectables-links-module-AppModule-c613c4347dc1fc14bd42dd3b8d2e7a7b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-c613c4347dc1fc14bd42dd3b8d2e7a7b"' :
                                        'id="xs-injectables-links-module-AppModule-c613c4347dc1fc14bd42dd3b8d2e7a7b"' }>
                                        <li class="link">
                                            <a href="injectables/ConfigService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ConfigService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UPLoginProvider.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UPLoginProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WebserviceWrapperService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>WebserviceWrapperService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CampusMapPageModule.html" data-type="entity-link">CampusMapPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CampusMapPageModule-aa47cd2fe2d53a1f457750daa3c60439"' : 'data-target="#xs-components-links-module-CampusMapPageModule-aa47cd2fe2d53a1f457750daa3c60439"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CampusMapPageModule-aa47cd2fe2d53a1f457750daa3c60439"' :
                                            'id="xs-components-links-module-CampusMapPageModule-aa47cd2fe2d53a1f457750daa3c60439"' }>
                                            <li class="link">
                                                <a href="components/CampusMapPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CampusMapPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ComponentsModule.html" data-type="entity-link">ComponentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ComponentsModule-5452dfa747b3698684b2f22a17e35980"' : 'data-target="#xs-components-links-module-ComponentsModule-5452dfa747b3698684b2f22a17e35980"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComponentsModule-5452dfa747b3698684b2f22a17e35980"' :
                                            'id="xs-components-links-module-ComponentsModule-5452dfa747b3698684b2f22a17e35980"' }>
                                            <li class="link">
                                                <a href="components/BookListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BookListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BookLocationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BookLocationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CampusMapFeatureModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CampusMapFeatureModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CampusReorderModalPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CampusReorderModalPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CampusTabComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CampusTabComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CourseDataComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CourseDataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DatePickerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DatePickerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EventViewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EventViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterDisclaimerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterDisclaimerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GradesTableComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GradesTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HintBoxComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HintBoxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LectureListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LectureListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MensaMealComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MensaMealComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewsArticleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NewsArticleComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EmergencyPageModule.html" data-type="entity-link">EmergencyPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EmergencyPageModule-b39ef94a0421a8b03c43c5817f52f3ec"' : 'data-target="#xs-components-links-module-EmergencyPageModule-b39ef94a0421a8b03c43c5817f52f3ec"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EmergencyPageModule-b39ef94a0421a8b03c43c5817f52f3ec"' :
                                            'id="xs-components-links-module-EmergencyPageModule-b39ef94a0421a8b03c43c5817f52f3ec"' }>
                                            <li class="link">
                                                <a href="components/EmergencyPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmergencyPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EventsPageModule.html" data-type="entity-link">EventsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EventsPageModule-b1c33985282e01a1243678ff2a87811d"' : 'data-target="#xs-components-links-module-EventsPageModule-b1c33985282e01a1243678ff2a87811d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EventsPageModule-b1c33985282e01a1243678ff2a87811d"' :
                                            'id="xs-components-links-module-EventsPageModule-b1c33985282e01a1243678ff2a87811d"' }>
                                            <li class="link">
                                                <a href="components/EventsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EventsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FeedbackPageModule.html" data-type="entity-link">FeedbackPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FeedbackPageModule-271a0604e34c5bc1e822ff9d433b2474"' : 'data-target="#xs-components-links-module-FeedbackPageModule-271a0604e34c5bc1e822ff9d433b2474"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FeedbackPageModule-271a0604e34c5bc1e822ff9d433b2474"' :
                                            'id="xs-components-links-module-FeedbackPageModule-271a0604e34c5bc1e822ff9d433b2474"' }>
                                            <li class="link">
                                                <a href="components/FeedbackPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FeedbackPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FreeRoomsPageModule.html" data-type="entity-link">FreeRoomsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FreeRoomsPageModule-18c255fc30f7de43ffb58447b5dd888e"' : 'data-target="#xs-components-links-module-FreeRoomsPageModule-18c255fc30f7de43ffb58447b5dd888e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FreeRoomsPageModule-18c255fc30f7de43ffb58447b5dd888e"' :
                                            'id="xs-components-links-module-FreeRoomsPageModule-18c255fc30f7de43ffb58447b5dd888e"' }>
                                            <li class="link">
                                                <a href="components/FreeRoomsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FreeRoomsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GradesPageModule.html" data-type="entity-link">GradesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GradesPageModule-b7a333ec33eac2b20f18de83e202a517"' : 'data-target="#xs-components-links-module-GradesPageModule-b7a333ec33eac2b20f18de83e202a517"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GradesPageModule-b7a333ec33eac2b20f18de83e202a517"' :
                                            'id="xs-components-links-module-GradesPageModule-b7a333ec33eac2b20f18de83e202a517"' }>
                                            <li class="link">
                                                <a href="components/GradesPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GradesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link">HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-96c34b5c3e5ee88550fa278b6423c711"' : 'data-target="#xs-components-links-module-HomePageModule-96c34b5c3e5ee88550fa278b6423c711"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-96c34b5c3e5ee88550fa278b6423c711"' :
                                            'id="xs-components-links-module-HomePageModule-96c34b5c3e5ee88550fa278b6423c711"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ImpressumPageModule.html" data-type="entity-link">ImpressumPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ImpressumPageModule-2a46d80c7711095d9869d1513f2d8d2e"' : 'data-target="#xs-components-links-module-ImpressumPageModule-2a46d80c7711095d9869d1513f2d8d2e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ImpressumPageModule-2a46d80c7711095d9869d1513f2d8d2e"' :
                                            'id="xs-components-links-module-ImpressumPageModule-2a46d80c7711095d9869d1513f2d8d2e"' }>
                                            <li class="link">
                                                <a href="components/ImpressumModalPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ImpressumModalPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ImpressumPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ImpressumPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LecturesPageModule.html" data-type="entity-link">LecturesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LecturesPageModule-16cdcb390bc4a8e3a4238a4a56bbefb6"' : 'data-target="#xs-components-links-module-LecturesPageModule-16cdcb390bc4a8e3a4238a4a56bbefb6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LecturesPageModule-16cdcb390bc4a8e3a4238a4a56bbefb6"' :
                                            'id="xs-components-links-module-LecturesPageModule-16cdcb390bc4a8e3a4238a4a56bbefb6"' }>
                                            <li class="link">
                                                <a href="components/LectureSearchModalPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LectureSearchModalPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LecturesPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LecturesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LibrarySearchPageModule.html" data-type="entity-link">LibrarySearchPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LibrarySearchPageModule-bc3c919403d04bd5d30e10dd82945201"' : 'data-target="#xs-components-links-module-LibrarySearchPageModule-bc3c919403d04bd5d30e10dd82945201"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LibrarySearchPageModule-bc3c919403d04bd5d30e10dd82945201"' :
                                            'id="xs-components-links-module-LibrarySearchPageModule-bc3c919403d04bd5d30e10dd82945201"' }>
                                            <li class="link">
                                                <a href="components/BookDetailModalPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BookDetailModalPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LibrarySearchPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LibrarySearchPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link">LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-ef0441b31eb1f717485b704e4535848a"' : 'data-target="#xs-components-links-module-LoginModule-ef0441b31eb1f717485b704e4535848a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-ef0441b31eb1f717485b704e4535848a"' :
                                            'id="xs-components-links-module-LoginModule-ef0441b31eb1f717485b704e4535848a"' }>
                                            <li class="link">
                                                <a href="components/LoginPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageModule.html" data-type="entity-link">LoginPageModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MensaPageModule.html" data-type="entity-link">MensaPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MensaPageModule-0d5eb67b2805c86baf6120007d615fd7"' : 'data-target="#xs-components-links-module-MensaPageModule-0d5eb67b2805c86baf6120007d615fd7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MensaPageModule-0d5eb67b2805c86baf6120007d615fd7"' :
                                            'id="xs-components-links-module-MensaPageModule-0d5eb67b2805c86baf6120007d615fd7"' }>
                                            <li class="link">
                                                <a href="components/MensaPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MensaPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NewsPageModule.html" data-type="entity-link">NewsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NewsPageModule-ef3b17a766f48ff09bdb6c34a6e7210a"' : 'data-target="#xs-components-links-module-NewsPageModule-ef3b17a766f48ff09bdb6c34a6e7210a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NewsPageModule-ef3b17a766f48ff09bdb6c34a6e7210a"' :
                                            'id="xs-components-links-module-NewsPageModule-ef3b17a766f48ff09bdb6c34a6e7210a"' }>
                                            <li class="link">
                                                <a href="components/NewsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NewsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OpeningHoursPageModule.html" data-type="entity-link">OpeningHoursPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OpeningHoursPageModule-3b6156e5f32f18fbdcd7fbfaecb23871"' : 'data-target="#xs-components-links-module-OpeningHoursPageModule-3b6156e5f32f18fbdcd7fbfaecb23871"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OpeningHoursPageModule-3b6156e5f32f18fbdcd7fbfaecb23871"' :
                                            'id="xs-components-links-module-OpeningHoursPageModule-3b6156e5f32f18fbdcd7fbfaecb23871"' }>
                                            <li class="link">
                                                <a href="components/DetailedOpeningModalPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DetailedOpeningModalPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OpeningHoursPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OpeningHoursPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PersonSearchPageModule.html" data-type="entity-link">PersonSearchPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PersonSearchPageModule-924d236c1bfdc28638e5c81fdca775fb"' : 'data-target="#xs-components-links-module-PersonSearchPageModule-924d236c1bfdc28638e5c81fdca775fb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PersonSearchPageModule-924d236c1bfdc28638e5c81fdca775fb"' :
                                            'id="xs-components-links-module-PersonSearchPageModule-924d236c1bfdc28638e5c81fdca775fb"' }>
                                            <li class="link">
                                                <a href="components/PersonSearchPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PersonSearchPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PracticePageModule.html" data-type="entity-link">PracticePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PracticePageModule-ec828d47ba24d20cacaaf76c9dee8365"' : 'data-target="#xs-components-links-module-PracticePageModule-ec828d47ba24d20cacaaf76c9dee8365"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PracticePageModule-ec828d47ba24d20cacaaf76c9dee8365"' :
                                            'id="xs-components-links-module-PracticePageModule-ec828d47ba24d20cacaaf76c9dee8365"' }>
                                            <li class="link">
                                                <a href="components/DetailedPracticeModalPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DetailedPracticeModalPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PracticePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PracticePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RoomplanPageModule.html" data-type="entity-link">RoomplanPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RoomplanPageModule-262c5fa4b2a4a330b59e5cfe96db5bbd"' : 'data-target="#xs-components-links-module-RoomplanPageModule-262c5fa4b2a4a330b59e5cfe96db5bbd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RoomplanPageModule-262c5fa4b2a4a330b59e5cfe96db5bbd"' :
                                            'id="xs-components-links-module-RoomplanPageModule-262c5fa4b2a4a330b59e5cfe96db5bbd"' }>
                                            <li class="link">
                                                <a href="components/RoomplanPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RoomplanPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsPageModule.html" data-type="entity-link">SettingsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SettingsPageModule-143e9c6ba8df426faf62cacb43f231ba"' : 'data-target="#xs-components-links-module-SettingsPageModule-143e9c6ba8df426faf62cacb43f231ba"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingsPageModule-143e9c6ba8df426faf62cacb43f231ba"' :
                                            'id="xs-components-links-module-SettingsPageModule-143e9c6ba8df426faf62cacb43f231ba"' }>
                                            <li class="link">
                                                <a href="components/SettingsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SettingsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TimetablePageModule.html" data-type="entity-link">TimetablePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TimetablePageModule-2bb0f4c12fa17790777531246bd7d080"' : 'data-target="#xs-components-links-module-TimetablePageModule-2bb0f4c12fa17790777531246bd7d080"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TimetablePageModule-2bb0f4c12fa17790777531246bd7d080"' :
                                            'id="xs-components-links-module-TimetablePageModule-2bb0f4c12fa17790777531246bd7d080"' }>
                                            <li class="link">
                                                <a href="components/EventModalPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EventModalPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TimetablePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TimetablePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TransportPageModule.html" data-type="entity-link">TransportPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TransportPageModule-d36fe77085d5b0a9a81065ecb6da1dad"' : 'data-target="#xs-components-links-module-TransportPageModule-d36fe77085d5b0a9a81065ecb6da1dad"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TransportPageModule-d36fe77085d5b0a9a81065ecb6da1dad"' :
                                            'id="xs-components-links-module-TransportPageModule-d36fe77085d5b0a9a81065ecb6da1dad"' }>
                                            <li class="link">
                                                <a href="components/TransportPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TransportPage</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-TransportPageModule-d36fe77085d5b0a9a81065ecb6da1dad"' : 'data-target="#xs-pipes-links-module-TransportPageModule-d36fe77085d5b0a9a81065ecb6da1dad"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-TransportPageModule-d36fe77085d5b0a9a81065ecb6da1dad"' :
                                            'id="xs-pipes-links-module-TransportPageModule-d36fe77085d5b0a9a81065ecb6da1dad"' }>
                                            <li class="link">
                                                <a href="pipes/MomentPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MomentPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AbstractPage.html" data-type="entity-link">AbstractPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/IonicGestureConfig.html" data-type="entity-link">IonicGestureConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/StaticInjectorService.html" data-type="entity-link">StaticInjectorService</a>
                            </li>
                            <li class="link">
                                <a href="classes/WebHttpUrlEncodingCodec.html" data-type="entity-link">WebHttpUrlEncodingCodec</a>
                            </li>
                            <li class="link">
                                <a href="classes/WebHttpUrlEncodingCodec-1.html" data-type="entity-link">WebHttpUrlEncodingCodec</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AlertService.html" data-type="entity-link">AlertService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConnectionService.html" data-type="entity-link">ConnectionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DeviceService.html" data-type="entity-link">DeviceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ErrorHandlerService.html" data-type="entity-link">ErrorHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MobileUPErrorHandler.html" data-type="entity-link">MobileUPErrorHandler</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NavigatorService.html" data-type="entity-link">NavigatorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SettingsService.html" data-type="entity-link">SettingsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserSessionService.html" data-type="entity-link">UserSessionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WebIntentService.html" data-type="entity-link">WebIntentService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Address.html" data-type="entity-link">Address</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ADS.html" data-type="entity-link">ADS</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CampusMapQueryParams.html" data-type="entity-link">CampusMapQueryParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Contact.html" data-type="entity-link">Contact</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmergencyCall.html" data-type="entity-link">EmergencyCall</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAction.html" data-type="entity-link">IAction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IActualCourses.html" data-type="entity-link">IActualCourses</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IADSResponse.html" data-type="entity-link">IADSResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAlertOptions.html" data-type="entity-link">IAlertOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAppUrls.html" data-type="entity-link">IAppUrls</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICachingOptions.html" data-type="entity-link">ICachingOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICampus.html" data-type="entity-link">ICampus</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IConfig.html" data-type="entity-link">IConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICourse.html" data-type="entity-link">ICourse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICredentials.html" data-type="entity-link">ICredentials</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICredentialsLoginResponse.html" data-type="entity-link">ICredentialsLoginResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDeparture.html" data-type="entity-link">IDeparture</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDeviceInfo.html" data-type="entity-link">IDeviceInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEndpoint.html" data-type="entity-link">IEndpoint</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEndpoints.html" data-type="entity-link">IEndpoints</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IErrorLogging.html" data-type="entity-link">IErrorLogging</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEvent.html" data-type="entity-link">IEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEventObject.html" data-type="entity-link">IEventObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEventRules.html" data-type="entity-link">IEventRules</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEvents.html" data-type="entity-link">IEvents</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IExam.html" data-type="entity-link">IExam</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFeedback.html" data-type="entity-link">IFeedback</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGeneral.html" data-type="entity-link">IGeneral</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGradeDegree.html" data-type="entity-link">IGradeDegree</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IHouse.html" data-type="entity-link">IHouse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IHousePlan.html" data-type="entity-link">IHousePlan</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IJourneyDetailRef.html" data-type="entity-link">IJourneyDetailRef</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IJourneyResponse.html" data-type="entity-link">IJourneyResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILecturer.html" data-type="entity-link">ILecturer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILecturers.html" data-type="entity-link">ILecturers</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILibraryRequestParams.html" data-type="entity-link">ILibraryRequestParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILoginConfig.html" data-type="entity-link">ILoginConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILoginConfig_Credentials.html" data-type="entity-link">ILoginConfig_Credentials</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILoginConfig_OIDC.html" data-type="entity-link">ILoginConfig_OIDC</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILoginConfig_SSO.html" data-type="entity-link">ILoginConfig_SSO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILoginProvider.html" data-type="entity-link">ILoginProvider</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILoginRequest.html" data-type="entity-link">ILoginRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMapsResponseObject.html" data-type="entity-link">IMapsResponseObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMeals.html" data-type="entity-link">IMeals</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMensaAllergenes.html" data-type="entity-link">IMensaAllergenes</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMensaIcon.html" data-type="entity-link">IMensaIcon</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMensaIconMap.html" data-type="entity-link">IMensaIconMap</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMensaPrices.html" data-type="entity-link">IMensaPrices</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMensaRequestParams.html" data-type="entity-link">IMensaRequestParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMensaResponse.html" data-type="entity-link">IMensaResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IModul.html" data-type="entity-link">IModul</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IModule.html" data-type="entity-link">IModule</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/INewsApiResponse.html" data-type="entity-link">INewsApiResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/INewsArticle.html" data-type="entity-link">INewsArticle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/INewsArticleInfo.html" data-type="entity-link">INewsArticleInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/INewsArticleSource.html" data-type="entity-link">INewsArticleSource</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/INewsBrowser.html" data-type="entity-link">INewsBrowser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/INewsErrors.html" data-type="entity-link">INewsErrors</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/INewsEventsData.html" data-type="entity-link">INewsEventsData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/INewsEventsObject.html" data-type="entity-link">INewsEventsObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/INewsEventsPlace.html" data-type="entity-link">INewsEventsPlace</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/INewsPlaces.html" data-type="entity-link">INewsPlaces</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/INewsRequest.html" data-type="entity-link">INewsRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/INewsSources.html" data-type="entity-link">INewsSources</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/INewsVars.html" data-type="entity-link">INewsVars</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IOIDCLoginResponse.html" data-type="entity-link">IOIDCLoginResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IOIDCRefreshResponseObject.html" data-type="entity-link">IOIDCRefreshResponseObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IOIDCUserInformationResponse.html" data-type="entity-link">IOIDCUserInformationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPageOptions.html" data-type="entity-link">IPageOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPastCourses.html" data-type="entity-link">IPastCourses</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPerson.html" data-type="entity-link">IPerson</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPersonsRequestParams.html" data-type="entity-link">IPersonsRequestParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPluginUrlParams.html" data-type="entity-link">IPluginUrlParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPolicies.html" data-type="entity-link">IPolicies</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProduct.html" data-type="entity-link">IProduct</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPulsApiRequest_getAcademicAchievements.html" data-type="entity-link">IPulsApiRequest_getAcademicAchievements</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPulsApiRequest_getAcademicAchievements_condition.html" data-type="entity-link">IPulsApiRequest_getAcademicAchievements_condition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPulsApiRequest_getCourseData.html" data-type="entity-link">IPulsApiRequest_getCourseData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPulsApiRequest_getCourseData_condition.html" data-type="entity-link">IPulsApiRequest_getCourseData_condition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPulsApiRequest_getLectureScheduleAll.html" data-type="entity-link">IPulsApiRequest_getLectureScheduleAll</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPulsApiRequest_getLectureScheduleAll_condition.html" data-type="entity-link">IPulsApiRequest_getLectureScheduleAll_condition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPulsApiRequest_getLectureScheduleCourses.html" data-type="entity-link">IPulsApiRequest_getLectureScheduleCourses</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPulsApiRequest_getLectureScheduleCourses_condition.html" data-type="entity-link">IPulsApiRequest_getLectureScheduleCourses_condition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPulsApiRequest_getLectureScheduleRoot.html" data-type="entity-link">IPulsApiRequest_getLectureScheduleRoot</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPulsApiRequest_getLectureScheduleRoot_condition.html" data-type="entity-link">IPulsApiRequest_getLectureScheduleRoot_condition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPulsApiRequest_getLectureScheduleSubTree.html" data-type="entity-link">IPulsApiRequest_getLectureScheduleSubTree</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPulsApiRequest_getLectureScheduleSubTree_condition.html" data-type="entity-link">IPulsApiRequest_getLectureScheduleSubTree_condition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPulsApiRequest_getPersonalStudyAreas.html" data-type="entity-link">IPulsApiRequest_getPersonalStudyAreas</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPulsApiRequest_getStudentCourses.html" data-type="entity-link">IPulsApiRequest_getStudentCourses</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPulsApiRequest_getStudentCourses_condition.html" data-type="entity-link">IPulsApiRequest_getStudentCourses_condition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPulsAPIResponse_getAcademicAchievements.html" data-type="entity-link">IPulsAPIResponse_getAcademicAchievements</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPulsAPIResponse_getCourseData.html" data-type="entity-link">IPulsAPIResponse_getCourseData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPulsAPIResponse_getLectureScheduleAll.html" data-type="entity-link">IPulsAPIResponse_getLectureScheduleAll</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPulsAPIResponse_getLectureScheduleCourses.html" data-type="entity-link">IPulsAPIResponse_getLectureScheduleCourses</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPulsAPIResponse_getLectureScheduleRoot.html" data-type="entity-link">IPulsAPIResponse_getLectureScheduleRoot</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPulsAPIResponse_getLectureScheduleSubTree.html" data-type="entity-link">IPulsAPIResponse_getLectureScheduleSubTree</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPulsAPIResponse_getPersonalStudyAreas.html" data-type="entity-link">IPulsAPIResponse_getPersonalStudyAreas</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPulsAPIResponse_getStudentCourses.html" data-type="entity-link">IPulsAPIResponse_getStudentCourses</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IReservationRequestResponse.html" data-type="entity-link">IReservationRequestResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IReservationRequestResponseDetail.html" data-type="entity-link">IReservationRequestResponseDetail</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IReservationRequestResponsePersonList.html" data-type="entity-link">IReservationRequestResponsePersonList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IReservationRequestResponseReturn.html" data-type="entity-link">IReservationRequestResponseReturn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IReservationRequestResponseRoomList.html" data-type="entity-link">IReservationRequestResponseRoomList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRhythmMapping.html" data-type="entity-link">IRhythmMapping</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRoom.html" data-type="entity-link">IRoom</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRoomApiRequest.html" data-type="entity-link">IRoomApiRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRoomEvent.html" data-type="entity-link">IRoomEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRoomRequestResponse.html" data-type="entity-link">IRoomRequestResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRoomRequestResponseReturn.html" data-type="entity-link">IRoomRequestResponseReturn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRoomsRequestParams.html" data-type="entity-link">IRoomsRequestParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISelectedExam.html" data-type="entity-link">ISelectedExam</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISession.html" data-type="entity-link">ISession</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISetting.html" data-type="entity-link">ISetting</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISettingOption.html" data-type="entity-link">ISettingOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISSOUrls.html" data-type="entity-link">ISSOUrls</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStudent.html" data-type="entity-link">IStudent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStudentCourses.html" data-type="entity-link">IStudentCourses</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStudieCourse.html" data-type="entity-link">IStudieCourse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITimeSlot.html" data-type="entity-link">ITimeSlot</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITransportRequestParams.html" data-type="entity-link">ITransportRequestParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserInfoParams.html" data-type="entity-link">IUserInfoParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IWebservice.html" data-type="entity-link">IWebservice</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IWebServices.html" data-type="entity-link">IWebServices</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IWeekDaysMapping.html" data-type="entity-link">IWeekDaysMapping</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});