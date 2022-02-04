import $ from "jquery";
import '../css/main.css';
const _ = require('lodash');

$("<div id='logo'></div>").appendTo($('body'));
$("<p>Holberton Dashboard</p>").appendTo($('body'));
$("<p>Dashboard data for the students</p>").appendTo($('body'));
$("<button>Click here to get started</button>").appendTo($('body'));
$("<p id='count'></p>").appendTo($('body'));
$("<p>Copyright - Holberton School</p>").appendTo($('body'));

let counter = 0;
const updateCounter = _.debounce(() => {
    counter++;
    $("#count").text(`${counter} clicks on the button`);
});
$('button').on('click', updateCounter);
