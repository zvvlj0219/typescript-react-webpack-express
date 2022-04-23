import express from 'express'
import cors from 'cors'
import path from 'path'

const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type']
}
app.use(cors(corsOptions))

// router
app.post(
  '/api/eh',
  (
    req: express.Request<
      Record<string, never>,
      Record<string, never>,
      { text: string }
    >,
    res: express.Response
  ) => {
    const value = req.body.text
    const valueArr = value.split('')
    if (
      valueArr.indexOf('r') !== -1 ||
      valueArr.indexOf('e') !== -1 ||
      valueArr.indexOf('a') !== -1 ||
      valueArr.indexOf('c') !== -1 ||
      valueArr.indexOf('t') !== -1
    ) {
      return res.status(200).send()
    }

    return res.status(400).send({ message: 'validation error' })
  }
)

// handle production
if (process.env.NODE_ENV === 'production') {
  // static folder
  app.use(express.static(path.resolve(__dirname)))
  // handle spa
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'))
  })
}

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`NODE_ENV is ${String(process.env.NODE_ENV)}`)
  console.log(`server running port 5000 at http://localhost:${port}`)
})
