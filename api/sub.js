let subscriptions = [];

export default function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }

    const subscription = req.body;

    subscriptions.push(subscription);

    console.log("Nouvelle subscription :", subscription);

    res.status(201).json({
        message: "Subscription enregistrée"
    });
}