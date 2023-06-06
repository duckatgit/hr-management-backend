const express = require('express')
const cors = require('cors')
const connectDB = require('./database/connection')
const adminstrationRoute = require('../api/modules/adminstration/routes/routes')
const employeeInfoRoute = require('../api/modules/employee-info/routes/routes')
const hrReportsRoute = require('../api/modules/hr-reports/routes/routes')
const projectManagmentRoute = require('../api/modules/project-management/routes/routes')
const trainingManagmentRoute = require('../api/modules/training-management/routes/routes')


const app  = express()
const port = 3000

//MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//DEFINE ROUTE

app.use('/adminstration', adminstrationRoute)
app.use('/employee-info', employeeInfoRoute)
app.use('/hr-reports', hrReportsRoute)
app.use('/project-managment', projectManagmentRoute )
app.use('/traning-managment', trainingManagmentRoute )



app.listen(port, () => {
    console.log(`http://localhost:${port}`)
    connectDB()
  });

  