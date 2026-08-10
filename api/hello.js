let message = "Aucun message";

export default function handler(req, res) {

    if (req.method === "POST") {
        message = req.body.message;

        return res.status(200).json({
            message: message
        });
    }

    res.status(200).json({
        message: message
    });
}