/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/login`; params?: Router.UnknownInputParams; } | { pathname: `/signup`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/pestdetection` | `/pestdetection`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/weather` | `/weather`; params?: Router.UnknownInputParams; } | { pathname: `/Admin side/layout`; params?: Router.UnknownInputParams; } | { pathname: `/Admin side/not found`; params?: Router.UnknownInputParams; } | { pathname: `/admin-tabs/home`; params?: Router.UnknownInputParams; } | { pathname: `/admin-tabs/layout`; params?: Router.UnknownInputParams; } | { pathname: `/admin-tabs/sendnotif`; params?: Router.UnknownInputParams; } | { pathname: `/admin-tabs/usermanagement`; params?: Router.UnknownInputParams; } | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/login`; params?: Router.UnknownOutputParams; } | { pathname: `/signup`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/pestdetection` | `/pestdetection`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/weather` | `/weather`; params?: Router.UnknownOutputParams; } | { pathname: `/Admin side/layout`; params?: Router.UnknownOutputParams; } | { pathname: `/Admin side/not found`; params?: Router.UnknownOutputParams; } | { pathname: `/admin-tabs/home`; params?: Router.UnknownOutputParams; } | { pathname: `/admin-tabs/layout`; params?: Router.UnknownOutputParams; } | { pathname: `/admin-tabs/sendnotif`; params?: Router.UnknownOutputParams; } | { pathname: `/admin-tabs/usermanagement`; params?: Router.UnknownOutputParams; } | { pathname: `/+not-found`, params: Router.UnknownOutputParams & {  } };
      href: Router.RelativePathString | Router.ExternalPathString | `/login${`?${string}` | `#${string}` | ''}` | `/signup${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/pestdetection${`?${string}` | `#${string}` | ''}` | `/pestdetection${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/weather${`?${string}` | `#${string}` | ''}` | `/weather${`?${string}` | `#${string}` | ''}` | `/Admin side/layout${`?${string}` | `#${string}` | ''}` | `/Admin side/not found${`?${string}` | `#${string}` | ''}` | `/admin-tabs/home${`?${string}` | `#${string}` | ''}` | `/admin-tabs/layout${`?${string}` | `#${string}` | ''}` | `/admin-tabs/sendnotif${`?${string}` | `#${string}` | ''}` | `/admin-tabs/usermanagement${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/login`; params?: Router.UnknownInputParams; } | { pathname: `/signup`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/pestdetection` | `/pestdetection`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/weather` | `/weather`; params?: Router.UnknownInputParams; } | { pathname: `/Admin side/layout`; params?: Router.UnknownInputParams; } | { pathname: `/Admin side/not found`; params?: Router.UnknownInputParams; } | { pathname: `/admin-tabs/home`; params?: Router.UnknownInputParams; } | { pathname: `/admin-tabs/layout`; params?: Router.UnknownInputParams; } | { pathname: `/admin-tabs/sendnotif`; params?: Router.UnknownInputParams; } | { pathname: `/admin-tabs/usermanagement`; params?: Router.UnknownInputParams; } | `/+not-found` | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
    }
  }
}
