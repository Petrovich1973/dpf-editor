var express = require('express'),
cors = require('cors'),
bodyParser = require('body-parser'),
methodOverride = require('method-override'),
app = express(),
path = require('path'),
port = process.env.PORT || 9191;

var clients = [{
        id: 1,
        surname: 'Староборецкий',
        name: 'Виктор',
        patronymic: 'Петрович',
        dul: 'Паспорт',
        docNamber: '1234',
        docSerial: '123456',
        dateOfBirth: '19.03.1974'
    },{
        id: 2,
        surname: 'Староборецкий',
        name: 'Виктор',
        patronymic: 'Владимирович',
        dul: 'Паспорт',
        docNamber: '2341',
        docSerial: '654567',
        dateOfBirth: '23.01.1977'
    },{
        id: 3,
        surname: 'Староборецкий',
        name: 'Виктор',
        patronymic: 'Михайлович',
        dul: 'Паспорт',
        docNamber: '5654',
        docSerial: '876543',
        dateOfBirth: '29.11.1986'
    },{
        id: 4,
        surname: 'Староборецкий',
        name: 'Виктор',
        patronymic: 'Семенович',
        dul: 'Паспорт',
        docNamber: '9876',
        docSerial: '670211',
        dateOfBirth: '31.10.1993'
    },{
        id: 5,
        surname: 'Староборецкий',
        name: 'Виктор',
        patronymic: 'Андреевич',
        dul: 'Паспорт',
        docNamber: '551209',
        docSerial: '671190',
        dateOfBirth: '03.03.1980'
    }];

var accounts = [{
        id: 1,
        number: '000 00000 00 0000 000000', 
        code: '149', 
        productType: '101',
        accountType: '54',
        accountSubType: '2',
        currency: '840',
        dateEnd: '19.03.2021',
        productStatus: 'Активен'
    },{
        id: 2,
        number: '100 23000 34 0000 456000', 
        code: '148', 
        productType: '101',
        accountType: '54',
        accountSubType: '2',
        currency: '810',
        dateEnd: '02.08.2024',
        productStatus: 'Активен'
    },{
        id: 3,
        number: '230 65400 77 8000 123000', 
        code: '149', 
        productType: '103',
        accountType: '55',
        accountSubType: '3',
        currency: '810',
        dateEnd: '02.08.2023',
        productStatus: 'Не активен'
    }];

app.use( bodyParser.json() );

app.use( methodOverride() );

app.use( cors({ origin: '*' }) );

app.use(express.static(__dirname + '/public'));

app.get('/api/clients', function (req, res) {
    res.type('application/json').send( JSON.stringify(clients) );
});

app.get('/api/clients/:uid', function (req, res) {
    if(clients[req.params.uid]) {
        res.type('application/json').send( JSON.stringify(clients[req.params.uid]) );
    } else {
        res.type('application/json').send(400, JSON.stringify({message: 'Такого id нет'}) );
    }    
});

app.get('/api/accounts', function (req, res) {
    res.type('application/json').send( JSON.stringify(accounts) );
});

app.get('/api/accounts/:uid', function (req, res) {
    if(accounts[req.params.uid]) {
        res.type('application/json').send( JSON.stringify(accounts[req.params.uid]) );
    } else {
        res.type('application/json').send(400, JSON.stringify({message: 'Такого id нет'}) );
    }    
});

app.get(/.*/, function (req, res) {
    res.sendFile( path.resolve(__dirname + '/public/', 'index.html') );
});


app.use(function(req, res, next) {
    res.status(404);
    res.send('404: File Not Found');
});



app.listen(port);
console.log(`http://localhost:${port}`);