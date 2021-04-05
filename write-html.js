const fs = require("fs")
const { copyFile } = require("node:fs")

module.exports = writeSite, copyFile

function writeSite(html) {
    fs.writeFile(`index.html`, html, err => {
        if (err){ 
            throw err
        }
        console.log("saved")
        copyFile()
    })

}

const copyFile = () => [
    fs.copyFile("./style.css", err => {
        if(err) {
            console.log(err)
        }
        console.log("css has been copied")
    })
]

module.exports = {writeFile, copeFile};