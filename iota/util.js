const fs = require('fs')
const path = require('path')
const crypto = require('crypto')

const keyGen = length => {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ9'
    let key = ''
    while (key.length < length) {
        const byte = crypto.randomBytes(1)
        if (byte[0] < 243) {
            key += charset.charAt(byte[0] % 27)
        }
    }

    return key
}

exports.keyGen = keyGen

exports.getKeyIndex = () => {
    const content = fs.readFileSync(path.join(__dirname, 'state.json'), 'utf8')

    const json = JSON.parse(content)
    return json.keyIndex
}

exports.updateKeyIndex = keyIndex => {
    const filepath = path.join(__dirname, 'state.json')
    const content = fs.readFileSync(filepath, 'utf8')

    const json = JSON.parse(content)
    json.keyIndex = keyIndex
    fs.writeFileSync(filepath, JSON.stringify(json))
    return true
}

exports.getPublishKeyIndex = () => {
    const content = fs.readFileSync(path.join(__dirname, 'state.json'), 'utf8')

    const json = JSON.parse(content)
    return json.publishKeyIndex
}

exports.updatePublishKeyIndex = keyIndex => {
    const filepath = path.join(__dirname, 'state.json')
    const content = fs.readFileSync(filepath, 'utf8')

    const json = JSON.parse(content)
    json.publishKeyIndex = keyIndex
    fs.writeFileSync(filepath, JSON.stringify(json))
    return true
}

exports.initState = keyIndex => {
    const filepath = path.join(__dirname, 'state.json')
    const content = fs.readFileSync(filepath, 'utf8')

    const json = JSON.parse(content)
    json.init = true
    json.keyIndex = keyIndex
    fs.writeFileSync(filepath, JSON.stringify(json))
    return true
}

exports.getState = () => {
    const filepath = path.join(__dirname, 'state.json')
    const content = fs.readFileSync(filepath, 'utf8')

    return JSON.parse(content)
}

exports.getInputs = async (iota, seed, keyIndex) => {
    return new Promise((resolve, reject) => {
        iota.api.getInputs(seed, { start: keyIndex - 1, end: keyIndex + 10 }, (err, resp) => {
            if (err) {
                reject(err)
            } else {
                resolve(resp)
            }
        })
    })
}
