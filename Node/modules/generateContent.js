const makeHeading = require("./makeHeading")
const makeCount = require("./makeCount")
const navigation = `
<nav>
    <span><a href="?page=home">Home</a></span>
    <span><a href="?page=contact">Contact</a></span>
    <span><a href="?page=about">About</a></span>
</nav>
`
let generateContent = ({page, additional})=>{
    return  `
        <!DOCTYPE html>
        <html>
            <head><title>My Selection:${page}</title><head>
            <body>
                ${navigation}
                ${makeHeading(page)}
                The count is ${makeCount}. I hope you are happy.
                <ul>
                    ${additional.join("")}
                </ul>
                <footer>
                    copyleft 2020
                </footer>
            </body>
        </html>
    `
}

module.exports = generateContent