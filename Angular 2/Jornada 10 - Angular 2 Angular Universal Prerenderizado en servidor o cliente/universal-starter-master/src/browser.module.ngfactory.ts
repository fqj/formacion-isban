/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './browser.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/http/src/http_module';
import * as import6 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import7 from 'angular2-universal/browser/universal-module';
import * as import8 from '@angular/forms/src/directives';
import * as import9 from '@angular/forms/src/form_providers';
import * as import10 from '@angular/router/src/router_module';
import * as import11 from '@angularclass/idle-preload/dist/index';
import * as import12 from './+app/shared/shared.module';
import * as import13 from './+app/+home/home-routing.module';
import * as import14 from './+app/+home/home.module';
import * as import15 from './+app/+about/about-routing.module';
import * as import16 from './+app/+about/about.module';
import * as import17 from './+app/+todo/todo-routing.module';
import * as import18 from './+app/+todo/todo.module';
import * as import19 from './+app/app-routing.module';
import * as import20 from './+app/app.module';
import * as import21 from './+app/shared/cache.service';
import * as import22 from '@angular/common/src/localization';
import * as import23 from '@angular/core/src/application_init';
import * as import24 from '@angular/core/src/testability/testability';
import * as import25 from '@angular/core/src/application_ref';
import * as import26 from '@angular/core/src/linker/compiler';
import * as import27 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import28 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import29 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import30 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import31 from '@angular/core/src/linker/view_utils';
import * as import32 from '@angular/platform-browser/src/browser/title';
import * as import33 from '@angular/http/src/backends/browser_xhr';
import * as import34 from '@angular/http/src/base_response_options';
import * as import35 from '@angular/http/src/backends/xhr_backend';
import * as import36 from '@angular/http/src/base_request_options';
import * as import37 from '@angular/http/src/backends/browser_jsonp';
import * as import38 from '@angular/http/src/backends/jsonp_backend';
import * as import39 from '@angular/router/src/url_tree';
import * as import40 from '@angular/router/src/router_outlet_map';
import * as import41 from '@angular/common/src/location/location';
import * as import42 from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import * as import43 from '@angular/router/src/router_preloader';
import * as import44 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import45 from '@angular/forms/src/form_builder';
import * as import46 from './+app/shared/api.service';
import * as import47 from './+app/shared/model/model.service';
import * as import48 from './angular2-meta';
import * as import49 from '@angular/core/src/di/injector';
import * as import50 from './+app/+home/home.component.ngfactory';
import * as import51 from './+app/+about/about.component.ngfactory';
import * as import52 from './+app/+todo/todo.component.ngfactory';
import * as import53 from './+app/app.component.ngfactory';
import * as import54 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import55 from '@angular/platform-browser/src/dom/events/key_events';
import * as import56 from '@angular/core/src/zone/ng_zone';
import * as import57 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import58 from '@angular/common/src/location/platform_location';
import * as import59 from '@angular/common/src/location/location_strategy';
import * as import60 from './+app/+home/home.component';
import * as import61 from './+app/+about/about.component';
import * as import62 from './+app/+todo/todo.component';
import * as import63 from 'angular2-universal/browser/env';
import * as import64 from '@angular/router/src/router';
import * as import65 from '@angular/core/src/console';
import * as import66 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import67 from '@angular/core/src/i18n/tokens';
import * as import68 from '@angular/core/src/error_handler';
import * as import69 from '@angular/core/src/application_tokens';
import * as import70 from '@angular/platform-browser/src/dom/animation_driver';
import * as import71 from '@angular/core/src/render/api';
import * as import72 from '@angular/core/src/security';
import * as import73 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import74 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import75 from '@angular/http/src/interfaces';
import * as import76 from '@angular/http/src/http';
import * as import77 from '@angular/core/src/linker/ng_module_factory_loader';
import * as import78 from '@angular/router/src/router_config_loader';
import * as import79 from '@angular/router/src/router_state';
class MainModuleInjector extends import0.NgModuleInjector<import1.MainModule> {
  _CommonModule_0:import2.CommonModule;
  _ApplicationModule_1:import3.ApplicationModule;
  _BrowserModule_2:import4.BrowserModule;
  _HttpModule_3:import5.HttpModule;
  _JsonpModule_4:import5.JsonpModule;
  _DOCUMENT_5:any;
  _DomSharedStylesHost_6:import6.DomSharedStylesHost;
  _SharedStylesHost_7:any;
  _UniversalModule_8:import7.UniversalModule;
  _InternalFormsSharedModule_9:import8.InternalFormsSharedModule;
  _FormsModule_10:import9.FormsModule;
  _ROUTER_FORROOT_GUARD_11:any;
  _RouterModule_12:import10.RouterModule;
  _IdlePreloadModule_13:import11.IdlePreloadModule;
  _ReactiveFormsModule_14:import9.ReactiveFormsModule;
  _SharedModule_15:import12.SharedModule;
  _HomeRoutingModule_16:import13.HomeRoutingModule;
  _HomeModule_17:import14.HomeModule;
  _AboutRoutingModule_18:import15.AboutRoutingModule;
  _AboutModule_19:import16.AboutModule;
  _TodoRoutingModule_20:import17.TodoRoutingModule;
  _TodoModule_21:import18.TodoModule;
  _AppRoutingModule_22:import19.AppRoutingModule;
  _AppModule_23:import20.AppModule;
  _LRU_24:any;
  _CacheService_25:import21.CacheService;
  _MainModule_26:import1.MainModule;
  __LOCALE_ID_27:any;
  __NgLocalization_28:import22.NgLocaleLocalization;
  _ErrorHandler_29:any;
  _ApplicationInitStatus_30:import23.ApplicationInitStatus;
  _Testability_31:import24.Testability;
  _ApplicationRef__32:import25.ApplicationRef_;
  __ApplicationRef_33:any;
  __Compiler_34:import26.Compiler;
  __APP_ID_35:any;
  __HAMMER_GESTURE_CONFIG_36:import27.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_37:any[];
  __EventManager_38:import28.EventManager;
  __AnimationDriver_39:any;
  __DomRootRenderer_40:import29.DomRootRenderer_;
  __RootRenderer_41:any;
  __DomSanitizer_42:import30.DomSanitizerImpl;
  __Sanitizer_43:any;
  __ViewUtils_44:import31.ViewUtils;
  __IterableDiffers_45:any;
  __KeyValueDiffers_46:any;
  __Title_47:import32.Title;
  __BrowserXhr_48:import33.BrowserXhr;
  __ResponseOptions_49:import34.BaseResponseOptions;
  __XSRFStrategy_50:any;
  __XHRBackend_51:import35.XHRBackend;
  __RequestOptions_52:import36.BaseRequestOptions;
  __Http_53:any;
  __BrowserJsonp_54:import37.BrowserJsonp;
  __JSONPBackend_55:import38.JSONPBackend_;
  __Jsonp_56:any;
  __UNIVERSAL_CACHE_57:any;
  __AUTO_PREBOOT_58:any;
  __UrlSerializer_59:import39.DefaultUrlSerializer;
  __RouterOutletMap_60:import40.RouterOutletMap;
  __ROUTER_CONFIGURATION_61:any;
  __LocationStrategy_62:any;
  __Location_63:import41.Location;
  __NgModuleFactoryLoader_64:import42.SystemJsNgModuleLoader;
  __ROUTES_65:any[];
  __Router_66:any;
  __REQUEST_IDLE_CALLBACK_67:any;
  __IdlePreload_68:import11.IdlePreload;
  __PreloadingStrategy_69:any;
  _RouterPreloader_70:import43.RouterPreloader;
  __APP_BOOTSTRAP_LISTENER_71:any[];
  __RadioControlRegistry_72:import44.RadioControlRegistry;
  __FormBuilder_73:import45.FormBuilder;
  __ActivatedRoute_74:any;
  __NoPreloading_75:import43.NoPreloading;
  __PreloadAllModules_76:import43.PreloadAllModules;
  __ApiService_77:import46.ApiService;
  __ModelService_78:import47.ModelService;
  __isBrowser_79:any;
  __isNode_80:any;
  __req_81:any;
  __res_82:any;
  __Meta_83:import48.Meta;
  constructor(parent:import49.Injector) {
    super(parent,[
      import50.HomeComponentNgFactory,
      import51.AboutComponentNgFactory,
      import52.TodoComponentNgFactory,
      import53.AppComponentNgFactory
    ]
    ,[import53.AppComponentNgFactory]);
  }
  get _LOCALE_ID_27():any {
    if ((this.__LOCALE_ID_27 == (null as any))) { (this.__LOCALE_ID_27 = 'en-US'); }
    return this.__LOCALE_ID_27;
  }
  get _NgLocalization_28():import22.NgLocaleLocalization {
    if ((this.__NgLocalization_28 == (null as any))) { (this.__NgLocalization_28 = new import22.NgLocaleLocalization(this._LOCALE_ID_27)); }
    return this.__NgLocalization_28;
  }
  get _ApplicationRef_33():any {
    if ((this.__ApplicationRef_33 == (null as any))) { (this.__ApplicationRef_33 = this._ApplicationRef__32); }
    return this.__ApplicationRef_33;
  }
  get _Compiler_34():import26.Compiler {
    if ((this.__Compiler_34 == (null as any))) { (this.__Compiler_34 = new import26.Compiler()); }
    return this.__Compiler_34;
  }
  get _APP_ID_35():any {
    if ((this.__APP_ID_35 == (null as any))) { (this.__APP_ID_35 = import7.appIdFactory()); }
    return this.__APP_ID_35;
  }
  get _HAMMER_GESTURE_CONFIG_36():import27.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_36 == (null as any))) { (this.__HAMMER_GESTURE_CONFIG_36 = new import27.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_36;
  }
  get _EVENT_MANAGER_PLUGINS_37():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_37 == (null as any))) { (this.__EVENT_MANAGER_PLUGINS_37 = [
      new import54.DomEventsPlugin(),
      new import55.KeyEventsPlugin(),
      new import27.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_36)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_37;
  }
  get _EventManager_38():import28.EventManager {
    if ((this.__EventManager_38 == (null as any))) { (this.__EventManager_38 = new import28.EventManager(this._EVENT_MANAGER_PLUGINS_37,this.parent.get(import56.NgZone))); }
    return this.__EventManager_38;
  }
  get _AnimationDriver_39():any {
    if ((this.__AnimationDriver_39 == (null as any))) { (this.__AnimationDriver_39 = import4._resolveDefaultAnimationDriver()); }
    return this.__AnimationDriver_39;
  }
  get _DomRootRenderer_40():import29.DomRootRenderer_ {
    if ((this.__DomRootRenderer_40 == (null as any))) { (this.__DomRootRenderer_40 = new import29.DomRootRenderer_(this._DOCUMENT_5,this._EventManager_38,this._DomSharedStylesHost_6,this._AnimationDriver_39)); }
    return this.__DomRootRenderer_40;
  }
  get _RootRenderer_41():any {
    if ((this.__RootRenderer_41 == (null as any))) { (this.__RootRenderer_41 = import57._createConditionalRootRenderer(this._DomRootRenderer_40,this.parent.get(import57.NgProbeToken,(null as any)))); }
    return this.__RootRenderer_41;
  }
  get _DomSanitizer_42():import30.DomSanitizerImpl {
    if ((this.__DomSanitizer_42 == (null as any))) { (this.__DomSanitizer_42 = new import30.DomSanitizerImpl()); }
    return this.__DomSanitizer_42;
  }
  get _Sanitizer_43():any {
    if ((this.__Sanitizer_43 == (null as any))) { (this.__Sanitizer_43 = this._DomSanitizer_42); }
    return this.__Sanitizer_43;
  }
  get _ViewUtils_44():import31.ViewUtils {
    if ((this.__ViewUtils_44 == (null as any))) { (this.__ViewUtils_44 = new import31.ViewUtils(this._RootRenderer_41,this._APP_ID_35,this._Sanitizer_43)); }
    return this.__ViewUtils_44;
  }
  get _IterableDiffers_45():any {
    if ((this.__IterableDiffers_45 == (null as any))) { (this.__IterableDiffers_45 = import3._iterableDiffersFactory()); }
    return this.__IterableDiffers_45;
  }
  get _KeyValueDiffers_46():any {
    if ((this.__KeyValueDiffers_46 == (null as any))) { (this.__KeyValueDiffers_46 = import3._keyValueDiffersFactory()); }
    return this.__KeyValueDiffers_46;
  }
  get _Title_47():import32.Title {
    if ((this.__Title_47 == (null as any))) { (this.__Title_47 = new import32.Title()); }
    return this.__Title_47;
  }
  get _BrowserXhr_48():import33.BrowserXhr {
    if ((this.__BrowserXhr_48 == (null as any))) { (this.__BrowserXhr_48 = new import33.BrowserXhr()); }
    return this.__BrowserXhr_48;
  }
  get _ResponseOptions_49():import34.BaseResponseOptions {
    if ((this.__ResponseOptions_49 == (null as any))) { (this.__ResponseOptions_49 = new import34.BaseResponseOptions()); }
    return this.__ResponseOptions_49;
  }
  get _XSRFStrategy_50():any {
    if ((this.__XSRFStrategy_50 == (null as any))) { (this.__XSRFStrategy_50 = import5._createDefaultCookieXSRFStrategy()); }
    return this.__XSRFStrategy_50;
  }
  get _XHRBackend_51():import35.XHRBackend {
    if ((this.__XHRBackend_51 == (null as any))) { (this.__XHRBackend_51 = new import35.XHRBackend(this._BrowserXhr_48,this._ResponseOptions_49,this._XSRFStrategy_50)); }
    return this.__XHRBackend_51;
  }
  get _RequestOptions_52():import36.BaseRequestOptions {
    if ((this.__RequestOptions_52 == (null as any))) { (this.__RequestOptions_52 = new import36.BaseRequestOptions()); }
    return this.__RequestOptions_52;
  }
  get _Http_53():any {
    if ((this.__Http_53 == (null as any))) { (this.__Http_53 = import5.httpFactory(this._XHRBackend_51,this._RequestOptions_52)); }
    return this.__Http_53;
  }
  get _BrowserJsonp_54():import37.BrowserJsonp {
    if ((this.__BrowserJsonp_54 == (null as any))) { (this.__BrowserJsonp_54 = new import37.BrowserJsonp()); }
    return this.__BrowserJsonp_54;
  }
  get _JSONPBackend_55():import38.JSONPBackend_ {
    if ((this.__JSONPBackend_55 == (null as any))) { (this.__JSONPBackend_55 = new import38.JSONPBackend_(this._BrowserJsonp_54,this._ResponseOptions_49)); }
    return this.__JSONPBackend_55;
  }
  get _Jsonp_56():any {
    if ((this.__Jsonp_56 == (null as any))) { (this.__Jsonp_56 = import5.jsonpFactory(this._JSONPBackend_55,this._RequestOptions_52)); }
    return this.__Jsonp_56;
  }
  get _UNIVERSAL_CACHE_57():any {
    if ((this.__UNIVERSAL_CACHE_57 == (null as any))) { (this.__UNIVERSAL_CACHE_57 = import7.universalCacheFactory()); }
    return this.__UNIVERSAL_CACHE_57;
  }
  get _AUTO_PREBOOT_58():any {
    if ((this.__AUTO_PREBOOT_58 == (null as any))) { (this.__AUTO_PREBOOT_58 = true); }
    return this.__AUTO_PREBOOT_58;
  }
  get _UrlSerializer_59():import39.DefaultUrlSerializer {
    if ((this.__UrlSerializer_59 == (null as any))) { (this.__UrlSerializer_59 = new import39.DefaultUrlSerializer()); }
    return this.__UrlSerializer_59;
  }
  get _RouterOutletMap_60():import40.RouterOutletMap {
    if ((this.__RouterOutletMap_60 == (null as any))) { (this.__RouterOutletMap_60 = new import40.RouterOutletMap()); }
    return this.__RouterOutletMap_60;
  }
  get _ROUTER_CONFIGURATION_61():any {
    if ((this.__ROUTER_CONFIGURATION_61 == (null as any))) { (this.__ROUTER_CONFIGURATION_61 = {
      useHash: false,
      preloadingStrategy: import11.IdlePreload
    }
    ); }
    return this.__ROUTER_CONFIGURATION_61;
  }
  get _LocationStrategy_62():any {
    if ((this.__LocationStrategy_62 == (null as any))) { (this.__LocationStrategy_62 = import10.provideLocationStrategy(this.parent.get(import58.PlatformLocation),this.parent.get(import59.APP_BASE_HREF,(null as any)),this._ROUTER_CONFIGURATION_61)); }
    return this.__LocationStrategy_62;
  }
  get _Location_63():import41.Location {
    if ((this.__Location_63 == (null as any))) { (this.__Location_63 = new import41.Location(this._LocationStrategy_62)); }
    return this.__Location_63;
  }
  get _NgModuleFactoryLoader_64():import42.SystemJsNgModuleLoader {
    if ((this.__NgModuleFactoryLoader_64 == (null as any))) { (this.__NgModuleFactoryLoader_64 = new import42.SystemJsNgModuleLoader(this._Compiler_34,this.parent.get(import42.SystemJsNgModuleLoaderConfig,(null as any)))); }
    return this.__NgModuleFactoryLoader_64;
  }
  get _ROUTES_65():any[] {
    if ((this.__ROUTES_65 == (null as any))) { (this.__ROUTES_65 = [
        [{
          path: 'home',
          component: import60.HomeComponent
        }
      ],
        [{
          path: 'about',
          component: import61.AboutComponent
        }
      ],
        [{
          path: 'todo',
          component: import62.TodoComponent
        }
      ],
      [
        {
          path: '',
          redirectTo: '/home',
          pathMatch: 'full'
        }
        ,
        {
          path: 'lazy',
          loadChildren: import19.getLazyModule
        }

      ]
      ,
      ([] as any[])
    ]
    ); }
    return this.__ROUTES_65;
  }
  get _Router_66():any {
    if ((this.__Router_66 == (null as any))) { (this.__Router_66 = import10.setupRouter(this._ApplicationRef_33,this._UrlSerializer_59,this._RouterOutletMap_60,this._Location_63,this,this._NgModuleFactoryLoader_64,this._Compiler_34,this._ROUTES_65,this._ROUTER_CONFIGURATION_61)); }
    return this.__Router_66;
  }
  get _REQUEST_IDLE_CALLBACK_67():any {
    if ((this.__REQUEST_IDLE_CALLBACK_67 == (null as any))) { (this.__REQUEST_IDLE_CALLBACK_67 = import11._requestIdle(this.parent.get(import56.NgZone))); }
    return this.__REQUEST_IDLE_CALLBACK_67;
  }
  get _IdlePreload_68():import11.IdlePreload {
    if ((this.__IdlePreload_68 == (null as any))) { (this.__IdlePreload_68 = new import11.IdlePreload(this.parent.get(import56.NgZone),this._REQUEST_IDLE_CALLBACK_67)); }
    return this.__IdlePreload_68;
  }
  get _PreloadingStrategy_69():any {
    if ((this.__PreloadingStrategy_69 == (null as any))) { (this.__PreloadingStrategy_69 = this._IdlePreload_68); }
    return this.__PreloadingStrategy_69;
  }
  get _APP_BOOTSTRAP_LISTENER_71():any[] {
    if ((this.__APP_BOOTSTRAP_LISTENER_71 == (null as any))) { (this.__APP_BOOTSTRAP_LISTENER_71 = [
      import7.appBootstrapListenerFactory(this._AUTO_PREBOOT_58),
      import10.initialRouterNavigation(this._Router_66,this._ApplicationRef_33,this._RouterPreloader_70,this._ROUTER_CONFIGURATION_61)
    ]
    ); }
    return this.__APP_BOOTSTRAP_LISTENER_71;
  }
  get _RadioControlRegistry_72():import44.RadioControlRegistry {
    if ((this.__RadioControlRegistry_72 == (null as any))) { (this.__RadioControlRegistry_72 = new import44.RadioControlRegistry()); }
    return this.__RadioControlRegistry_72;
  }
  get _FormBuilder_73():import45.FormBuilder {
    if ((this.__FormBuilder_73 == (null as any))) { (this.__FormBuilder_73 = new import45.FormBuilder()); }
    return this.__FormBuilder_73;
  }
  get _ActivatedRoute_74():any {
    if ((this.__ActivatedRoute_74 == (null as any))) { (this.__ActivatedRoute_74 = import10.rootRoute(this._Router_66)); }
    return this.__ActivatedRoute_74;
  }
  get _NoPreloading_75():import43.NoPreloading {
    if ((this.__NoPreloading_75 == (null as any))) { (this.__NoPreloading_75 = new import43.NoPreloading()); }
    return this.__NoPreloading_75;
  }
  get _PreloadAllModules_76():import43.PreloadAllModules {
    if ((this.__PreloadAllModules_76 == (null as any))) { (this.__PreloadAllModules_76 = new import43.PreloadAllModules()); }
    return this.__PreloadAllModules_76;
  }
  get _ApiService_77():import46.ApiService {
    if ((this.__ApiService_77 == (null as any))) { (this.__ApiService_77 = new import46.ApiService(this._Http_53)); }
    return this.__ApiService_77;
  }
  get _ModelService_78():import47.ModelService {
    if ((this.__ModelService_78 == (null as any))) { (this.__ModelService_78 = new import47.ModelService(this._ApiService_77,this._CacheService_25)); }
    return this.__ModelService_78;
  }
  get _isBrowser_79():any {
    if ((this.__isBrowser_79 == (null as any))) { (this.__isBrowser_79 = true); }
    return this.__isBrowser_79;
  }
  get _isNode_80():any {
    if ((this.__isNode_80 == (null as any))) { (this.__isNode_80 = import63.isNode); }
    return this.__isNode_80;
  }
  get _req_81():any {
    if ((this.__req_81 == (null as any))) { (this.__req_81 = import1.getRequest()); }
    return this.__req_81;
  }
  get _res_82():any {
    if ((this.__res_82 == (null as any))) { (this.__res_82 = import1.getResponse()); }
    return this.__res_82;
  }
  get _Meta_83():import48.Meta {
    if ((this.__Meta_83 == (null as any))) { (this.__Meta_83 = new import48.Meta()); }
    return this.__Meta_83;
  }
  createInternal():import1.MainModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ApplicationModule_1 = new import3.ApplicationModule();
    this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule,(null as any)));
    this._HttpModule_3 = new import5.HttpModule();
    this._JsonpModule_4 = new import5.JsonpModule();
    this._DOCUMENT_5 = import4._document();
    this._DomSharedStylesHost_6 = new import6.DomSharedStylesHost(this._DOCUMENT_5);
    this._SharedStylesHost_7 = this._DomSharedStylesHost_6;
    this._UniversalModule_8 = new import7.UniversalModule(this._SharedStylesHost_7);
    this._InternalFormsSharedModule_9 = new import8.InternalFormsSharedModule();
    this._FormsModule_10 = new import9.FormsModule();
    this._ROUTER_FORROOT_GUARD_11 = import10.provideForRootGuard(this.parent.get(import64.Router,(null as any)));
    this._RouterModule_12 = new import10.RouterModule(this._ROUTER_FORROOT_GUARD_11);
    this._IdlePreloadModule_13 = new import11.IdlePreloadModule();
    this._ReactiveFormsModule_14 = new import9.ReactiveFormsModule();
    this._SharedModule_15 = new import12.SharedModule();
    this._HomeRoutingModule_16 = new import13.HomeRoutingModule();
    this._HomeModule_17 = new import14.HomeModule();
    this._AboutRoutingModule_18 = new import15.AboutRoutingModule();
    this._AboutModule_19 = new import16.AboutModule();
    this._TodoRoutingModule_20 = new import17.TodoRoutingModule();
    this._TodoModule_21 = new import18.TodoModule();
    this._AppRoutingModule_22 = new import19.AppRoutingModule();
    this._AppModule_23 = new import20.AppModule();
    this._LRU_24 = import1.getLRU();
    this._CacheService_25 = new import21.CacheService(this._LRU_24);
    this._MainModule_26 = new import1.MainModule(this._CacheService_25);
    this._ErrorHandler_29 = import4.errorHandler();
    this._ApplicationInitStatus_30 = new import23.ApplicationInitStatus(this.parent.get(import23.APP_INITIALIZER,(null as any)));
    this._Testability_31 = new import24.Testability(this.parent.get(import56.NgZone));
    this._ApplicationRef__32 = new import25.ApplicationRef_(this.parent.get(import56.NgZone),this.parent.get(import65.Console),this,this._ErrorHandler_29,this,this._ApplicationInitStatus_30,this.parent.get(import24.TestabilityRegistry,(null as any)),this._Testability_31);
    this._RouterPreloader_70 = new import43.RouterPreloader(this._Router_66,this._NgModuleFactoryLoader_64,this._Compiler_34,this,this._PreloadingStrategy_69);
    return this._MainModule_26;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.ApplicationModule)) { return this._ApplicationModule_1; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_2; }
    if ((token === import5.HttpModule)) { return this._HttpModule_3; }
    if ((token === import5.JsonpModule)) { return this._JsonpModule_4; }
    if ((token === import66.DOCUMENT)) { return this._DOCUMENT_5; }
    if ((token === import6.DomSharedStylesHost)) { return this._DomSharedStylesHost_6; }
    if ((token === import6.SharedStylesHost)) { return this._SharedStylesHost_7; }
    if ((token === import7.UniversalModule)) { return this._UniversalModule_8; }
    if ((token === import8.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_9; }
    if ((token === import9.FormsModule)) { return this._FormsModule_10; }
    if ((token === import10.ROUTER_FORROOT_GUARD)) { return this._ROUTER_FORROOT_GUARD_11; }
    if ((token === import10.RouterModule)) { return this._RouterModule_12; }
    if ((token === import11.IdlePreloadModule)) { return this._IdlePreloadModule_13; }
    if ((token === import9.ReactiveFormsModule)) { return this._ReactiveFormsModule_14; }
    if ((token === import12.SharedModule)) { return this._SharedModule_15; }
    if ((token === import13.HomeRoutingModule)) { return this._HomeRoutingModule_16; }
    if ((token === import14.HomeModule)) { return this._HomeModule_17; }
    if ((token === import15.AboutRoutingModule)) { return this._AboutRoutingModule_18; }
    if ((token === import16.AboutModule)) { return this._AboutModule_19; }
    if ((token === import17.TodoRoutingModule)) { return this._TodoRoutingModule_20; }
    if ((token === import18.TodoModule)) { return this._TodoModule_21; }
    if ((token === import19.AppRoutingModule)) { return this._AppRoutingModule_22; }
    if ((token === import20.AppModule)) { return this._AppModule_23; }
    if ((token === 'LRU')) { return this._LRU_24; }
    if ((token === import21.CacheService)) { return this._CacheService_25; }
    if ((token === import1.MainModule)) { return this._MainModule_26; }
    if ((token === import67.LOCALE_ID)) { return this._LOCALE_ID_27; }
    if ((token === import22.NgLocalization)) { return this._NgLocalization_28; }
    if ((token === import68.ErrorHandler)) { return this._ErrorHandler_29; }
    if ((token === import23.ApplicationInitStatus)) { return this._ApplicationInitStatus_30; }
    if ((token === import24.Testability)) { return this._Testability_31; }
    if ((token === import25.ApplicationRef_)) { return this._ApplicationRef__32; }
    if ((token === import25.ApplicationRef)) { return this._ApplicationRef_33; }
    if ((token === import26.Compiler)) { return this._Compiler_34; }
    if ((token === import69.APP_ID)) { return this._APP_ID_35; }
    if ((token === import27.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_36; }
    if ((token === import28.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_37; }
    if ((token === import28.EventManager)) { return this._EventManager_38; }
    if ((token === import70.AnimationDriver)) { return this._AnimationDriver_39; }
    if ((token === import29.DomRootRenderer)) { return this._DomRootRenderer_40; }
    if ((token === import71.RootRenderer)) { return this._RootRenderer_41; }
    if ((token === import30.DomSanitizer)) { return this._DomSanitizer_42; }
    if ((token === import72.Sanitizer)) { return this._Sanitizer_43; }
    if ((token === import31.ViewUtils)) { return this._ViewUtils_44; }
    if ((token === import73.IterableDiffers)) { return this._IterableDiffers_45; }
    if ((token === import74.KeyValueDiffers)) { return this._KeyValueDiffers_46; }
    if ((token === import32.Title)) { return this._Title_47; }
    if ((token === import33.BrowserXhr)) { return this._BrowserXhr_48; }
    if ((token === import34.ResponseOptions)) { return this._ResponseOptions_49; }
    if ((token === import75.XSRFStrategy)) { return this._XSRFStrategy_50; }
    if ((token === import35.XHRBackend)) { return this._XHRBackend_51; }
    if ((token === import36.RequestOptions)) { return this._RequestOptions_52; }
    if ((token === import76.Http)) { return this._Http_53; }
    if ((token === import37.BrowserJsonp)) { return this._BrowserJsonp_54; }
    if ((token === import38.JSONPBackend)) { return this._JSONPBackend_55; }
    if ((token === import76.Jsonp)) { return this._Jsonp_56; }
    if ((token === import7.UNIVERSAL_CACHE)) { return this._UNIVERSAL_CACHE_57; }
    if ((token === import7.AUTO_PREBOOT)) { return this._AUTO_PREBOOT_58; }
    if ((token === import39.UrlSerializer)) { return this._UrlSerializer_59; }
    if ((token === import40.RouterOutletMap)) { return this._RouterOutletMap_60; }
    if ((token === import10.ROUTER_CONFIGURATION)) { return this._ROUTER_CONFIGURATION_61; }
    if ((token === import59.LocationStrategy)) { return this._LocationStrategy_62; }
    if ((token === import41.Location)) { return this._Location_63; }
    if ((token === import77.NgModuleFactoryLoader)) { return this._NgModuleFactoryLoader_64; }
    if ((token === import78.ROUTES)) { return this._ROUTES_65; }
    if ((token === import64.Router)) { return this._Router_66; }
    if ((token === import11.REQUEST_IDLE_CALLBACK)) { return this._REQUEST_IDLE_CALLBACK_67; }
    if ((token === import11.IdlePreload)) { return this._IdlePreload_68; }
    if ((token === import43.PreloadingStrategy)) { return this._PreloadingStrategy_69; }
    if ((token === import43.RouterPreloader)) { return this._RouterPreloader_70; }
    if ((token === import69.APP_BOOTSTRAP_LISTENER)) { return this._APP_BOOTSTRAP_LISTENER_71; }
    if ((token === import44.RadioControlRegistry)) { return this._RadioControlRegistry_72; }
    if ((token === import45.FormBuilder)) { return this._FormBuilder_73; }
    if ((token === import79.ActivatedRoute)) { return this._ActivatedRoute_74; }
    if ((token === import43.NoPreloading)) { return this._NoPreloading_75; }
    if ((token === import43.PreloadAllModules)) { return this._PreloadAllModules_76; }
    if ((token === import46.ApiService)) { return this._ApiService_77; }
    if ((token === import47.ModelService)) { return this._ModelService_78; }
    if ((token === 'isBrowser')) { return this._isBrowser_79; }
    if ((token === 'isNode')) { return this._isNode_80; }
    if ((token === 'req')) { return this._req_81; }
    if ((token === 'res')) { return this._res_82; }
    if ((token === import48.Meta)) { return this._Meta_83; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ApplicationRef__32.ngOnDestroy();
    this._RouterPreloader_70.ngOnDestroy();
  }
}
export const MainModuleNgFactory:import0.NgModuleFactory<import1.MainModule> = new import0.NgModuleFactory(MainModuleInjector,import1.MainModule);