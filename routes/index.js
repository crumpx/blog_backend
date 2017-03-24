var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.end(JSON.stringify(

    [{
  "id": 1,
  "title": "scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede",
  "subtitle": "sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia",
  "content": "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
  "comments": 1,
  "tag": "item2",
  "author": 1,
  "date": "10/17/2016"
}, {
  "id": 2,
  "title": "rutrum ac lobortis vel dapibus at diam nam tristique tortor eu",
  "subtitle": "dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor",
  "content": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  "comments": 2,
  "tag": "item1",
  "author": 1,
  "date": "4/8/2016"
}, {
  "id": 3,
  "title": "elementum ligula vehicula consequat morbi a ipsum integer a nibh",
  "subtitle": "nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula",
  "content": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
  "comments": 3,
  "tag": "item3",
  "author": 1,
  "date": "6/10/2016"
}, {
  "id": 4,
  "title": "curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi",
  "subtitle": "sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at",
  "content": "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  "comments": 4,
  "tag": "item3",
  "author": 1,
  "date": "12/10/2016"
}, {
  "id": 5,
  "title": "interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac",
  "subtitle": "ut nulla sed accumsan felis ut at dolor quis odio",
  "content": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
  "comments": 5,
  "tag": "item2",
  "author": 1,
  "date": "4/6/2016"
}, {
  "id": 6,
  "title": "at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes",
  "subtitle": "pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero",
  "content": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
  "comments": 6,
  "tag": "item2",
  "author": 1,
  "date": "9/9/2016"
}, {
  "id": 7,
  "title": "primis in faucibus orci luctus et ultrices posuere cubilia curae donec",
  "subtitle": "ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue",
  "content": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
  "comments": 7,
  "tag": "item2",
  "author": 1,
  "date": "4/21/2016"
}, {
  "id": 8,
  "title": "tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec",
  "subtitle": "diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis",
  "content": "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
  "comments": 8,
  "tag": "item2",
  "author": 1,
  "date": "6/30/2016"
}, {
  "id": 9,
  "title": "lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus",
  "subtitle": "suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at",
  "content": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  "comments": 9,
  "tag": "item3",
  "author": 1,
  "date": "6/6/2016"
}, {
  "id": 10,
  "title": "eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum",
  "subtitle": "mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit",
  "content": "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
  "comments": 10,
  "tag": "item2",
  "author": 1,
  "date": "10/11/2016"
}]

))
});

router.post('/', function(req, res, next) {
  console.log('req.body')
})

module.exports = router;
