import $ from "jquery";
import _ from 'lodash';
import "./body.css";

$("<button>Click here to get started</button>").appendTo($('body'));
$("<p id='count'></p>").appendTo($('body'));

let counter = 0;
const updateCounter = _.debounce(() => {
    counter++;
    $("#count").text(`${counter} clicks on the button`);
});
$('button').on('click', updateCounter);
