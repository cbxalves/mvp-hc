
# MVP Match Mobile

### Table of Contents

  - [Project Structure](#project-structure)
  - [Getting Started](#getting-started)
    - [iOS](#ios)
    - [Android](#android)
  - [Commands](#commands)

### Project Structure

Containers use the [ducks](https://github.com/erikras/ducks-modular-redux) approach.

```
.
├── __mocks__                       # Mock API
├── android                         # Native Android code
├── ios                             # Native iOS code
├── patches                         # Necessary patches using patch-package
└── src                             # Application source code
    ├── assets                      # Project assets (images, fonts, lottie, etc)
    ├── components                  # Global reusable components
    │   └── Component
    │       ├── index.js            # Component source code
    │       ├── Component.test.js   # Unit and integrations tests
    │       └── styles.js           # Your component styles (if any)
    ├── config                      # Project configurations
    │   └── theme.js                # Paper theme
    │   └── reactotron.js           # Reactotron config
    ├── containers                  # Components wrapped by redux/connect
    │   └── Container
    │       ├── index.js            # Component source code
    │       ├── routes.js           # Your nested routes (if any)
    │       ├── ducks.js            # Reducer, action creators, constants and middleware
    │       ├── sagas.js            # All container related sagas
    │       ├── Container.test.js   # Unit and integrations tests
    │       └── styles.js           # Your container styles (if any)
    ├── hooks                       # Custom shared hooks
    ├── store
    │   ├── combinedReducers.js     # Combine all reducers in one place
    │   ├── combinedSagas.js        # Combine all sagas in one place
    │   └── index.js                # Redux store bootstrap
    ├── styles                      # Global styles (colors, dimensions, etc)
    ├── translations                # App string translations
    ├── util
    │   ├── request.js              # Fetch API handler
    │   ├── getDefaultHeaders.js    # Helper to inject headers on requests
    │   └── ...
    └── App.js

```

### Getting Started

Make sure node version installed is `>=14.x.x`. Then install using yarn (or npm):
```
yarn install
```

Start the Metro Bundler:
```
yarn start
```

###### iOS

One time. Move to `ios` folder and install pods:

```
cd ios && pod install
```

Launch application from XCode (`Command + R`) Or launch from Terminal:

```
yarn ios
# runs the following command. change device name here
# `npx react-native run-ios --simulator='iPhone 11'`
```

###### Android

Start an Android Simulator from:
```
Android Studio > Tools > AVD Manager > Run any device
```

Similarly, run from Android Studio itself Or from Terminal:
```
yarn android
# runs the following command
# react-native run-android --variant=Debug
```

Use ADB reverse to connect to Reactotron on port 9090
```
yarn reverse
```

### Commands

|  | Remark |
|---|---|
| `yarn start` | Starts metro bundler |
| `yarn ios` | Starts iOS app. Start metro bundler first |
| `yarn android` | Starts Android app. Start metro bundler and Android emulator first |
| `yarn lint` | linting |
| `yarn reverse` | ADB reverse to port 9090 |
