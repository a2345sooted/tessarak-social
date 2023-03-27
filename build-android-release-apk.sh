#!/bin/bash

cd android
./gradlew clean
./gradlew -stop
cd ..
rm -rf android/app/src/main/res/drawable-*
npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle
cd android
./gradlew assembleRelease


