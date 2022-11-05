const express = require('express')
const app = express()
const port = 3000
const path =require('path')

app.use(express.static('public'))

//assidnment 01: API for msg
app.get('/', (req, res) => {
  res.send('Hello World!')
})
//assignment 02: API for single image
app.get('/image', (req, res) => {
  let imagePath = path.join(__dirname, "image.jpg")
  res.sendFile(imagePath)
})
//assignment 03: API for dynamic images using public folder with express 
app.get('/dynamicimage', (req, res) => {
  image = req.query.imagename
  let imagePath1 = path.join(__dirname, image);
  res.sendFile(imagePath1)
})
//assignment 04: API for dynamic images with msg image not found without using library file
app.get('/dynamic',(req,res)=>{
  image1 = req.query.imagename;
  var imagePath2 =path.join(__dirname, 'public', image1)
  if(image1=='image.jpg' || image1 == 'images.jpg'){
    res.sendFile(imagePath2);
  }
  else{
    res.send("Image Not found");
  }
})
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
