const {Admin}=require("../db")

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    let uname = req.headers.username;
    let pw = req.headers.password;

    try {
        const data = await Admin.findOne({ username: uname, password: pw });

        if (data) {
            next();
        } else {
            res.status(404).json({ msg: "admin not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "error occurred in admin middleware" });
    }

}

module.exports = adminMiddleware;