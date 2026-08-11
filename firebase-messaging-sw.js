importScripts(
"https://www.gstatic.com/firebasejs/12.17.1/firebase-app-compat.js"
);

importScripts(
"https://www.gstatic.com/firebasejs/12.17.1/firebase-messaging-compat.js"
);

firebase.initializeApp({

```
apiKey:
    "AIzaSyDySpfxTWNreWliWvLWMYmZ-ojTs9AChxo",

authDomain:
    "wishlist-4a068.firebaseapp.com",

databaseURL:
    "https://wishlist-4a068-default-rtdb.firebaseio.com",

projectId:
    "wishlist-4a068",

storageBucket:
    "wishlist-4a068.firebasestorage.app",

messagingSenderId:
    "208154215703",

appId:
    "1:208154215703:web:ddd158ba075c7aad57a352"
```

});

const messaging =
firebase.messaging();

messaging.onBackgroundMessage(
(payload) => {

```
    console.log(
        "Background notification:",
        payload
    );


    const title =
        payload?.notification?.title ||
        "Miataness' Wishlist";


    const body =
        payload?.notification?.body ||
        payload?.data?.message ||
        "You have a new notification.";


    self.registration.showNotification(
        title,
        {

            body: body,

            icon: "/icon-192.png",

            badge: "/icon-192.png",

            tag: "miataness-notification",

            renotify: true

        }
    );

}
```

);

self.addEventListener(
"notificationclick",
(event) => {

```
    event.notification.close();


    event.waitUntil(

        clients.matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then((clientList) => {

            for (
                const client
                of clientList
            ) {

                if (
                    "focus" in client
                ) {

                    return client.focus();

                }

            }


            if (
                clients.openWindow
            ) {

                return clients.openWindow(
                    "/"
                );

            }

        })

    );

}
```

);
