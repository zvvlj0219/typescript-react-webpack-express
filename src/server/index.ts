import express from 'express'
import cors from 'cors'
import path from 'path'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.post('/api/eh', (
  req: express.Request<Record<string, never>, Record<string, never>, {text: string}>,
  res: express.Response
) => {
  const  value = req.body.text
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
})

// handle production
if (process.env.NODE_ENV === 'production') {
  // static folder
  app.use(express.static(path.resolve(__dirname)))
  // handle spa
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '/index.html'))
  })
}

app.listen(5000, () => {
  console.log(
    `${
      process.env.NODE_ENV === 'production'
        ? 'NODE_ENV is production'
        : 'NODE_ENV is development'
    }`
  )

  console.log('server running port 5000')
})

// $npm set NODE_ENV=production
