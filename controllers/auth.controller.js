module.exports.login = (req, res) => {
    res.status(200).json({
        email: req.body.email,
        password: req.body.password,
    })
}

module.exports.register = (req, res) => {
    res.status(201).json({
        create: true
    })
}