# Posts App

Simple React Native app (with Expo) that displays posts from a public API.

## Features
1. Fetch posts from https://jsonplaceholder.typicode.com/posts.
2. Scrollable list with title and body.
3. Details screen on item tap.
4. Basic loading & error states.
5. Pull to refresh
6. Small footer credit under the list

# Use with
1. React Native (expo).
2. React Navigation.
3. TypeScript.

# Project Structure
.
├── App.tsx
└── src
    ├── Main.tsx
    ├── api
    │   └── posts.ts
    ├── components
    │   └── PostItem.tsx
    ├── navigation
    │   └── AppNavigator.tsx
    ├── screens
    │   ├── HomeScreen.tsx
    │   └── DetailsScreen.tsx
    └── styles
        └── globalStyles.ts



## to Run
1. Required to install Node.js to run it
2. Requierd to install Expo go to run on the phone

## How to Run
1. npm install
2. npx expo start
3. Scan the QR code with Expo Go on the phone
   or press a for Android emulator 
   or press i for iOS simulator on mac
   or press w to open in web.

## Data flow 
1. App.tsx -- Main.tsx (NavigationContainer) -- AppNavigator.tsx (stack) -- HomeScreen.tsx (fetch & list) -- DetailsScreen.tsx (render params).
2. Global styles live in src/styles/globalStyles.ts.
3. Pull to refresh is handled via refreshing + onRefresh in FlatList.