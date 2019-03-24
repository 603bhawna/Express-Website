const express=require('express')

const app=express()

app.set('view engine','hbs')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',express.static('public'))

app.get('/about',function(req,res){
    res.render('about')
})

app.get('/contact',function(req,res){
    res.render('contact')
})

app.listen(3031)
console.log('server is listening on 3031...')