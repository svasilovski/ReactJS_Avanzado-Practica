const express = require("express");
const cors = require("cors");
const webpush = require("web-push");

// Middlewares
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Constantes
const pushSubscription = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/eh3mMOJwTCY:APA91bFJItkNRBPylartiyvYxJUFrIHwzJpj6hXsv4Xr9YWcQDTyAtqi0moG46nBGwaJM2kPNnvIrSPUVn2vp9yM6OeKO92yS3KlUp6SS4GrZXTBNVWFDBvRL5Olc8GIzKDXVcCQtwSl',
    expirationTime: null,
    keys: {
        p256dh: 'BOu-NMjzm4cE6osLVY8HZcxshlPl2RRrIl8h3cZK0F5FBk1FCSf42CdvzvIMrkqNpdpniSU7z7BZMi5C4HHWY6g',
        auth: 'UPXopU-21JAYFDE1IfDSfA'
    }
}

const vapidKeys = {
    publicKey: "BJ7oPFz6nH60tZYqw0ccdh4h28Bf6-Yujvij7BgMv0kRlRTSCkL1oPFBKQISRtS0uNRR249nWK4I-GfEPdvhCtc",
    privateKey: "5wGMH_OOjeFL03YbFC7SP6fJulbTfoEuxuNW37EURag"
}
webpush.setVapidDetails(
    'mailto:nombre@mail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

// Routes
app.get('/', async (req, res) => {
    const payload = JSON.stringify({ title: "Título de Notificación", message: "Mensaje de la notificación" });
    try {
        await webpush.sendNotification(pushSubscription, payload);
        await res.send("Enviado");
    } catch (e) { console.log(e) }
});

app.post('/subscription', (req, res) => {
    console.log(req.body);
    res.sendStatus(200).json();
})

app.post('/notification', async (req, res) => {
    const payload = JSON.stringify(req.body);
    try {
        await webpush.sendNotification(pushSubscription, payload);
        await res.send("Enviado");
    } catch (e) { console.log(e) }
})

app.listen(8000, () => console.log("Server listening on port 8000"))