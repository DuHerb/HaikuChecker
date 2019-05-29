import $ from 'jquery';
import { mainFunc } from './../src/function.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  let show = mainFunc(5);
  $('#solution').append("<li>" + show + "</li>");
});