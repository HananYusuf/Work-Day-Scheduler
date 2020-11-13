//grabbing the date using moment and pasting it on the DOM into the currentDay ID element
var dateEl = $("#currentDay")
dateEl.text(moment().format("LLLL"))//LLLL (Day of week, month name, day of month, year, time)

//Selecting all buttons to do something?
var saveBtn = $(".saveBtn")
var currentTime = parseInt(moment().format("H"));//converts string to intiger and displays it in momentjs

function saveLocally(){
//using the button as a reference from where we are at, setting the information as text to save to be stored on the time slot(9AM-6PM)
   var textToSave = $(this).prev().val()
   var time = $(this).prev().prev().text()

   localStorage.setItem(time, textToSave)
}

//using .each jquery method to on each button add an on click to use the saveLocally function
saveBtn.each(function(){
    $(this).on("click", saveLocally)
    //using the button as a reference from where we are at, getting the information stored and setting as the value of the text area
    $(this).prev().val(localStorage.getItem($(this).prev().prev().text()))
    //color selected by id by comparing to moment's current hour
    if($(this).attr("id") < currentTime){
        $(this).prev().attr("class", "col-10 past")
    } else if(($(this).attr("id") == currentTime)){
        $(this).prev().attr("class", "col-10 present")
    } else {
        $(this).prev().attr("class", "col-10 future")
    }
})