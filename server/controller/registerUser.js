function registerUser(req, res) {
    return res.status(201).json({
        message : "사용자를 만들어 볼까요?"
    })
}

module.exports = registerUser