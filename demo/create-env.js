const fs = require("fs")
fs.writeFileSync(
  "./.env",
  `AUTH0_DOMAIN=${process.env.GATSBY_AUTH0_DOMAIN}\n AUTH0_CLIENT_ID=${process.env.GATSBY_AUTH0_CLIENT_ID}\n AUTH0_CALLBACK_URL=${process.env.GATSBY_AUTH0_CALLBACK_URL}\n AUTH0_CALLBACK_URL=${process.env.GATSBY_AUTH0_REDIRECT_URL}`,
)
