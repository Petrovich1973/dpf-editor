var express = require('express'),
cors = require('cors'),
bodyParser = require('body-parser'),
methodOverride = require('method-override'),
app = express(),
port = process.env.PORT || 9191;

var articles = [{
        id: 1, 
        isActive: true, 
        name: 'Смета', 
        intro: null, 
        detail: '<h4>1 Руководитель компании IdealSauna Протасов Александр</h4><p>«Главный принцип работы нашей компании – построение доверительных отношений с клиентом.</p><p>Что мы для этого делаем? Конечно, даем гарантии.</p><p>Я лично предоставляю финансовое поручительство как физическое лицо. Такая ответственность владельца бизнеса гораздо серьезнее, чем формальная ответственность юридического лица. Кроме того, я лично контролирую все стадии каждого проекта.»</p>'
    },{
        id: 2, 
        isActive: false, 
        name: 'Замер', 
        intro: '(выезд специалиста на объект,для создания проекта и уточнения сметы)', 
        detail: '<img src="/assets/images/BeforeBuildSauna/photo.jpg" style="float: left; margin: 0px 15px 15px 0px;" /> <h4>Руководитель компании IdealSauna Протасов Александр</h4><p>«Главный принцип работы нашей компании – построение доверительных отношений с клиентом.</p><p>Что мы для этого делаем? Конечно, даем гарантии.</p><p>Я лично предоставляю финансовое поручительство как физическое лицо. Такая ответственность владельца бизнеса гораздо серьезнее, чем формальная ответственность юридического лица. Кроме того, я лично контролирую все стадии каждого проекта.»</p>'
    },{
        id: 3, 
        isActive: false, 
        name: 'Проект', 
        intro: '(чертеж выполненный тушью)', 
        detail: '<img src="/assets/images/BeforeBuildSauna/photo.jpg" style="float: left; margin: 0px 15px 15px 0px;" /> <h4>3 Руководитель компании IdealSauna Протасов Александр</h4><p>«Главный принцип работы нашей компании – построение доверительных отношений с клиентом.</p><p>Что мы для этого делаем? Конечно, даем гарантии.</p><p>Я лично предоставляю финансовое поручительство как физическое лицо. Такая ответственность владельца бизнеса гораздо серьезнее, чем формальная ответственность юридического лица. Кроме того, я лично контролирую все стадии каждого проекта.»</p>'
    },{
        id: 4, 
        isActive: false, 
        name: 'Договор', 
        intro: '(проверенный юристами и заверенный натариусом)', 
        detail: '<h4>4 Руководитель компании IdealSauna Протасов Александр</h4><p>«Главный принцип работы нашей компании – построение доверительных отношений с клиентом.</p><p>Что мы для этого делаем? Конечно, даем гарантии.</p><p>Я лично предоставляю финансовое поручительство как физическое лицо. Такая ответственность владельца бизнеса гораздо серьезнее, чем формальная ответственность юридического лица. Кроме того, я лично контролирую все стадии каждого проекта.»</p>'
    },{
        id: 5, 
        isActive: false, 
        name: 'Строительство', 
        intro: '(вся спец техника и квалифицированные рабочие)', 
        detail: '<img src="/assets/images/BeforeBuildSauna/photo.jpg" style="float: left; margin: 0px 15px 15px 0px;" /> <h4>5 Руководитель компании IdealSauna Протасов Александр</h4><p>«Главный принцип работы нашей компании – построение доверительных отношений с клиентом.</p><p>Что мы для этого делаем? Конечно, даем гарантии.</p><p>Я лично предоставляю финансовое поручительство как физическое лицо. Такая ответственность владельца бизнеса гораздо серьезнее, чем формальная ответственность юридического лица. Кроме того, я лично контролирую все стадии каждого проекта.»</p>'
    }];

var calculation = {
parameters: {
	long: 200,
	width: 200,
	height: 200
},
materials: {
    walls: [{
        id: 1, selected: true, name: 'Канадский кедр', image: '/assets/images/controllerPics/01.jpg', price: 2300
    },
    {
        id: 2, selected: false, name: 'Сибирский дуб', image: '/assets/images/controllerPics/02.jpg', price: 700
    },
    {
        id: 3, selected: false, name: 'Сосна', image: '/assets/images/controllerPics/03.jpg', price: 900
    }],
	rack: [{
        id: 1, selected: true, name: 'Прямые', image: '/assets/images/controllerPics/02.jpg', price: 300
    },
    {
        id: 2, selected: false, name: 'Каскадные', image: '/assets/images/controllerPics/03.jpg', price: 500
    },
    {
        id: 3, selected: false, name: 'Вертикальные', image: '/assets/images/controllerPics/04.jpg', price: 800
    }],
	furnace: [{
        id: 1, selected: true, name: 'Деревяные', image: '/assets/images/controllerPics/03.jpg', price: 30000
    },
    {
        id: 2, selected: false, name: 'Электрические', image: '/assets/images/controllerPics/04.jpg', price: 50000
    }],
	stones: [{
        id: 1, selected: true, name: 'Подарок', image: '/assets/images/controllerPics/04.jpg', price: 0
    },
    {
        id: 2, selected: false, name: 'Эльфийские', image: '/assets/images/controllerPics/05.jpg', price: 5000
    },
    {
        id: 3, selected: false, name: 'Астеройдные', image: '/assets/images/controllerPics/06.jpg', price: 10000
    }],
	lighting: [{
        id: 1, selected: true, name: 'Светильник', image: '/assets/images/controllerPics/05.jpg', price: 4000
    },
    {
        id: 2, selected: false, name: 'Бра', image: '/assets/images/controllerPics/03.jpg', price: 5000
    },
    {
        id: 3, selected: false, name: 'Торшер', image: '/assets/images/controllerPics/06.jpg', price: 6000
    }],
	furnishBehind: [{
        id: 1, selected: true, name: 'Талькомагнезит', image: '/assets/images/controllerPics/06.jpg', price: 4000
    },
    {
        id: 2, selected: false, name: 'Талькохлорит', image: '/assets/images/controllerPics/02.jpg', price: 5000
    }]
},
config: 3000
};

var gallery = [{
        id: 1,
        type: 'Сауна',
        name: 'Престиж',
        photo: '/assets/images/OurRealizedProjects/01.jpg',
        params: {
            height: [1.9, 2.5],
            area: [2, 16],
            period: [7, 20],
            price: [50]
        }
    },{
        id: 2,
        type: 'Сауна',
        name: 'Пират',
        photo: '/assets/images/OurRealizedProjects/02.jpg',
        params: {
            height: [1.7, 2.8],
            area: [5, 10],
            period: [17, 30],
            price: [150]
        }
    },{
        id: 3,
        type: 'Сауна',
        name: 'Гурия',
        photo: '/assets/images/OurRealizedProjects/03.jpg',
        params: {
            height: [2.4, 3],
            area: [8, 16],
            period: [27, 41],
            price: [200]
        }
    },{
        id: 4,
        type: 'Сауна',
        name: 'Комфорт',
        photo: '/assets/images/OurRealizedProjects/04.jpg',
        params: {
            height: [1.5, 3.5],
            area: [20, 26],
            period: [35, 50],
            price: [450]
        }
    },{
        id: 5,
        type: 'Баня',
        name: 'Бревно',
        photo: '/assets/images/OurRealizedProjects/05.jpg',
        params: {
            height: [1.2, 2.7],
            area: [2, 10],
            period: [8, 14],
            price: [80]
        }
    }];

var reviews = [{
    id: 1, 
    isActive: true, 
    image: null, 
    name: 'Иван Иванович', 
    message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.'
},{
    id: 2, 
    isActive: false, 
    image: null, 
    name: 'Аленушка', 
    message: 'Жили-были старик да старуха, у них была дочка Алёнушка да сынок Иванушка. Старик со старухой умерли. Остались Аленушка да Иванушка одни-одинешеньки. Пошла Аленушка на работу и братца с собой взяла. Идут они по дальнему пути, по широкому полю, и захотелось Иванушке пить.'
},{
    id: 3, 
    isActive: false, 
    image: '/assets/images/ScreenReviews/01.jpg', 
    name: null, 
    message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
},{
    id: 4, 
    isActive: false, 
    image: '/assets/images/ScreenReviews/04.jpg', 
    name: 'Елена Дмитриевна', 
    message: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
},{
    id: 5, 
    isActive: false, 
    image: '/assets/images/ScreenReviews/01.jpg', 
    name: 'Константин Константинович', 
    message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
}];

app.use( bodyParser.json() );

app.use( methodOverride() );

app.use( cors({ origin: '*' }) );

app.use(express.static(__dirname + '/public'));

app.get('/articles', function (req, res) {
	res.send( JSON.stringify(articles) );
});

app.get('/calculation', function (req, res) {
	res.send( JSON.stringify(calculation) );
});

app.get('/gallery', function (req, res) {
	res.send( JSON.stringify(gallery) );
});

app.get('/reviews', function (req, res) {
	res.send( JSON.stringify(reviews) );
});


app.use(function(req, res, next) {
    res.status(404);
    res.send('404: File Not Found');
});



app.listen(port);
console.log(`http://localhost:${port}`);