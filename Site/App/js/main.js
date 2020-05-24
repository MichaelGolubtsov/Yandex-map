ymaps.ready(init);

function PutMap1() {
    var map1 = new ymaps.Map('map1', {
        center: [55.753215, 37.622504],
        zoom:12,
        controls: ['zoomControl']
    });
}

function PutMap2() {
    var map2 = new ymaps.Map('map2', {
        center: [55.753215, 37.622504],
        zoom:12,
        controls: ['zoomControl'],
        behaviors: ['drag']   // отключим все виды "поведения" карты, кроме перетаскивания мышкой
    });
}

function PutMap3() {
    var map3 = new ymaps.Map('map3', {
        center: [56.184804, 36.972763],
        zoom:12,
        controls: ['zoomControl'],
        behaviors: ['drag']   // отключим все виды "поведения" карты, кроме перетаскивания мышкой
    });


    var placemark3_1 = new ymaps.Placemark([56.185813, 36.982014], {
        hintContent: 'Пункт выдачи заказов Озон',
        balloonContent: 'Режим работы: с 8-00 до 21-00'

    });
    map3.geoObjects.add(placemark3_1);

    var placemark3_2 = new ymaps.Placemark([56.196912, 36.956933], {
        hintContent: '<div class="placemark3_2__hint"><p>Магазин Эльдорадо</p></div>',
        balloonContent: ['<div class="placemark3_2__balloon">',
            '<p>Эльдорадо</p>',
            '<p>Режим работы:</p>',
            '<p>с 8-00 до 21-00</p>',
            '</div>'
        ].join('')
        // Благодаря join можно записать в виде массива отдельных строк, а потом преобразовать в одну строку
    });
    map3.geoObjects.add(placemark3_2);

    var placemark3_3 = new ymaps.Placemark
    (
        [56.171434, 36.920750],
        {
            hintContent: '<div class="placemark3_3__hint"><p>деревня Стрелино, 70</p></div>',
            balloonContent: ['<div class="placemark3_3__balloon">',
                '<p>деревня Стрелино, 70</p>',
                '</div>'
            ].join('')
            // Благодаря join можно записать в виде массива отдельных строк, а потом преобразовать в одну строку
        },
        {
            iconLayout: 'default#image',
            iconImageHref: 'img/placemark.png',
            iconImageSize: [40,40],
            iconImageOffset: [-25,-52]  // переместить иконку на 25 пикселей влево и на 52 пикселя вверх
        }
    );
    map3.geoObjects.add(placemark3_3);
}

var placemarks4 = [
    {
        latitude: 56.185813,
        longitude: 36.982014,
        hintContent: 'Пункт выдачи заказов Озон',
        balloonContent: ['<div class="placemark4__balloon">',
            '<p>Пункт выдачи заказов Озон</p>',
            '<p>Режим работы:</p>',
            '<p>с 8-00 до 20-00</p>',
            '</div>'
        ]
    },
    {
        latitude: 56.196912,
        longitude: 36.956933,
        hintContent: '<div class="placemark4__hint"><p>Магазин Эльдорадо</p></div>',
        balloonContent: ['<div class="placemark4__balloon">',
            '<p>Эльдорадо</p>',
            '<p>Режим работы:</p>',
            '<p>с 8-00 до 21-00</p>',
            '</div>'
        ]
    },
    {
        latitude: 56.171434,
        longitude: 36.920750,
        hintContent: '<div class="placemark4__hint"><p>деревня Стрелино, 70</p></div>',
        balloonContent: ['<div class="placemark4__balloon">',
            '<p>деревня Стрелино, 70</p>',
            '</div>'
        ]
    }
];

function PutMap4() {
    var map4 = new ymaps.Map('map4', {
        center: [56.184804, 36.972763],
        zoom:12,
        controls: ['zoomControl'],
        behaviors: ['drag']   // отключим все виды "поведения" карты, кроме перетаскивания мышкой
    });

    placemarks4.forEach(function(obj)
    {
        var placemark4_1 = new ymaps.Placemark([obj.latitude, obj.longitude], {
                hintContent: obj.hintContent,
                balloonContent: obj.balloonContent.join('')
            },
            {
                iconLayout: 'default#image',
                iconImageHref: 'img/placemark.png',
                iconImageSize: [40,40],
                iconImageOffset: [-25,-52]  // переместить иконку на 25 пикселей влево и на 52 пикселя вверх
            });
        map4.geoObjects.add(placemark4_1);

    });
}

function init() {
    PutMap1();
    PutMap2();
    PutMap3();
    PutMap4();
}

