// Library API 

import app from "./src/app.js"

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Library App listening on port http://localhost:${port}`);
})
