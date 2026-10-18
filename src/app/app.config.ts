import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { MyCustomPreset } from './../theme-preset'

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    providePrimeNG({
      theme: {
                preset: MyCustomPreset
            },
      license: 'eyJpZCI6IjQ1MDE5NWJhLTc3YzgtNDNmOS1iN2RjLTMyZmY1ZTA1OTRhOSIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3OTIyMzQ1NTksImV4cCI6MTgyMzc3MDU1OX0._ul_Z6U9JP102nZdT8PSdYBO9iRQu06aUN2BjtbrhE15_awwqJUnUPxMP81GH79sfQjd5NCkLlmL1F5-rA0UBA'
    })
  ]
};
