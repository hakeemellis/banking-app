// app.config.ts

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [

    provideRouter(routes),
    provideClientHydration(),

    // Firebase
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp({
        projectId: 'bankingapp-49ab9',
        appId: '1:762026356516:web:7515d017e975d555748db1',
        databaseURL: 'https://bankingapp-49ab9-default-rtdb.firebaseio.com',
        storageBucket: 'bankingapp-49ab9.appspot.com',
        apiKey: 'AIzaSyAiPN-xGHJGT36J8V14fLaCV6cqq431Gp4',
        authDomain: 'bankingapp-49ab9.firebaseapp.com',
        messagingSenderId: '762026356516'
      })),

    provideAuth(() => getAuth()), //Firebase Authentication

    provideFirestore(() => getFirestore()), // Firebase Firestore Database

    provideDatabase(() => getDatabase()), // Firebase Realtime Database

    provideStorage(() => getStorage()), // Firebase Storage

    ])
  ]
};


