async function newProfile(req, res) {
    const { body, file } = req
    let url
    if (file) {
        url = `http://localhost:8000/images/${file.filename}`
    }
    return res.json({
        url: url
    })
}

async function newBanner(req, res) {
    const { body, file } = req
    let url
    if (file) {
        url = `http://localhost:8000/images/${file.filename}`
    }
    return res.json({
        url: url
    })
}

module.exports = {
    newProfile, 
    newBanner
}