importScripts("https://www.gstatic.com/firebasejs/12.17.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.17.1/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyDySpfxTWNreWliWvLWMYmZ-ojTs9AChxo",
    authDomain: "wishlist-4a068.firebaseapp.com",
    databaseURL: "https://wishlist-4a068-default-rtdb.firebaseio.com",
    projectId: "wishlist-4a068",
    storageBucket: "wishlist-4a068.firebasestorage.app",
    messagingSenderId: "208154215703",
    appId: "1:208154215703:web:ddd158ba075c7aad57a352"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const title =
        payload.notification?.title ||
        "Miataness' Wishlist";

    const options = {
        body:
            payload.notification?.body ||
            payload.data?.message ||
            "You have a new notification!"
    };

    self.registration.showNotification(title, options);
});
