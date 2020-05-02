let env = process.env.NODE_ENV || 'development'

let settings = require('./config/settings')[env]

const express = require('express')
var cors = require('cors')
const sgMail = require("@sendgrid/mail");
const app = express()


app.use(cors())

sgMail.setApiKey('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');

app.get('/contactus', (req,res) => {
    const {from, message} = req.query
    
    const msg = {
        to: "vikramsuryawanshi619.vs@gmail.com",
    from: from,
    subject: "Contact",
    html: `
    <div style=" border: 1px solid #000;
            width: 250px;
            text-align: center;
            padding: 1rem;">
            <p style=" margin: 0;
            padding-bottom: 1rem;">${message}</p>
            </div>
          `
    }
    sgMail.send(msg)
    .then(() => {
        res.send("success...")
    })  
    .catch((err)=> {
        console.error(err)
        res.status(500).send("ERROR")
    })
})

app.get('/admin/orders/pending', (req,res) => {
    const {to, id, price} = req.query
    
    const msg = {
        to: to,
        from: "vikramsuryawanshi619.vs@gmail.com",
        subject: "Approved order",
        html: `
                <div style=" border: 1px solid #000;
                    width: 250px;
                    text-align: center;
                    padding: 1rem;">
                  <h3>Thanks for ordering pizza from pizzaKhazana...</h3>
                  <p style=" margin: 0;
                    padding-bottom: 1rem;">Your order id : ${id} is approved</p>
                  <p style=" margin: 0;
                    padding-bottom: 1rem;">Please ready with cash ₹ ${price}</p>
                </div>
              `
    }
    sgMail.send(msg)
    .then(() => {
        res.send("success...")
    })  
    .catch((err)=> {
        console.error(err)
        res.status(500).send("ERROR")
    })
})


require('./config/database')(settings)
require('./config/express')(app)
require('./config/routes')(app)
require('./config/passport')()

app.listen(settings.port)
console.log(`Server listening on port ${settings.port}...`)
