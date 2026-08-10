self.addEventListener("push", event => {

    const data = event.data
        ? event.data.json()
        : {
            title: "Test Push",
            body: "Notification reçue !"
        };

    event.waitUntil(
        self.registration.showNotification(
            data.title,
            {
                body: data.body
            }
        )
    );
});