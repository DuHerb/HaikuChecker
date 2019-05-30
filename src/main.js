import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { haikuChecker } from './haiku';

$(document).ready(function(){
  $("#haikuSubmit").on('click', function(e){
    e.preventDefault();
    $('#output').empty();
    let input1 = $('#line1').val();
    let input2 = $('#line2').val();
    let input3 = $('#line3').val();
    let userHaiku = [input1, input2, input3];
    if(haikuChecker(userHaiku)){
      userHaiku.forEach(function(line){
        $('#output').append("<li>" + line + "</li>");
      });
    } else {
      $('#output').append("The Haiku you gave</br>Has too many syllables<br/>Better Luck Next Time");
    }
  });
});