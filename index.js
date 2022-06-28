const app = require('./app/app')

app.listen(app.get('port'), (err) => {
    if (err) {
        console.log(`There was an error: ${err}`)
    }else{
        console.log(`Server runnig on port: ${app.get('port')}`);
    }
})