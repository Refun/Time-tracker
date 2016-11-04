
$(document).one('pageinit',function(){
  showRuns();

  //add handler
  $("#submitAdd").on('tap', addRun);

////edit handler
  $("#submitEdit").on('tap', editRun);

  ////edit handler
  $("#stats").on('tap', '#deleteLink', deleteRun);


///set current handler
  $("#stats").on('tap','#editLink',setCurrent);

//clearruns
//add handler
  $("#clearRuns").on('tap', clearRuns);


//show runs
 function showRuns(){
     //get run object
    var runs = getRunsObject();

    //check if the object
    if( runs != '' && runs != null){
      for(var i=0 ; i<runs.length; i++){
        $('#stats').append('<li class="ui-body-inherit ui-li-static"><strong>Date:</strong>'+runs[i]["date"]+
          '<br><strong>Distance: </strong>'+ runs[i]["miles"]+
          'm<div class="controls">'+
          '<a href="#edit" id="editLink" data-miles="'+runs[i]["miles"]+'" data-date="'+runs[i]["date"]+'">Edit</a> | <a href="#" id="deleteLink" data-miles="'+runs[i]["miles"]+'" data-date="'+runs[i]["date"]+'" onclick=return confirm(\'Are you sure?\')>Delete</a></li>');
      }
     
      $('#home').bind('pageinit',function(){
          $('#stats').listview('refresh');
      });

    }
  }

   //
  ////add function
  //
  function addRun(){
    var miles = $('#addMiles').val();
    var date = $('#addDate').val();
  

  //create run object

  var run = {
    date : date,
    miles : parseFloat(miles)
  };

  
  //get runs object
   var runs = getRunsObject();

  //add runs to runs array
  runs.push(run);
  alert('Runs added');

  //set stringfied object to local object
  localStorage.setItem('runs', JSON.stringify(runs));

  //Rdirect to the index page
  window.location.href = "index.html";
  return false;
} 

//
//edit function////
//
  function editRun(){
   //get current data
   currentMiles = localStorage.getItem('currentMiles');
   currentDate  = localStorage.getItem('currentDate');
//get runs object
   var runs = getRunsObject();

  for(i=0;i<runs.length;i++){
    if(runs[i].miles==currentMiles && runs[i].date== currentDate){
      runs.splice(i,1)
    }
    localStorage.setItem('runs',JSON.stringify(runs))
  }
   
  
  

    var miles = $('#editMiles').val();
    var date = $('#editDate').val();
  

  //create run object
   var update_run = {
    date : date,
    miles : parseFloat(miles)
   };

  //add runs to runs array
  runs.push(update_run);
  alert('Runs Updated');

  //set stringfied object to local object
  localStorage.setItem('runs', JSON.stringify(runs));

  //Rdirect to the index page
  window.location.href = "index.html";
  return false;

  }

  function clearRuns(){
     localStorage.removeItem('runs');
     $('#stats').html('<p>You Have no logged Run</p>');

  }


//
////delete function
//
  function deleteRun(){
   //set current data
    localStorage.setItem('currentMiles',$(this).data('miles'));
    localStorage.setItem('currentDate',$(this).data('date'));

   //get current data
   currentMiles = localStorage.getItem('currentMiles');
   currentDate  = localStorage.getItem('currentDate');

//get runs object
   var runs = getRunsObject();

  for(i=0;i<runs.length;i++){
    if(runs[i].miles==currentMiles && runs[i].date== currentDate){
      runs.splice(i,1)
    }
    localStorage.setItem('runs',JSON.stringify(runs));
  }
   
  
  

    var miles = $('#editMiles').val();
    var date = $('#editDate').val();
  

  
  alert('Runs Deleted');

  //Rdirect to the index page
  window.location.href = "index.html";
  return false;

  }  


 //function getrunsobject
  function getRunsObject(){
   //set runs array
    var runs = new Array();
   //get current runs from localstroge

    var currentRuns = localStorage.getItem('runs');

    //check local storage

    if(currentRuns!=null){
      var runs = JSON.parse(currentRuns);
    }

    //return runs object
     return runs.sort(function(a,b){return new Date(b.date)-new Date(a.date)});
  }


//function setcurrentobject
  function setCurrent(){
    //set 1s tiem
    localStorage.setItem('currentMiles',$(this).data('miles'));
    localStorage.setItem('currentDate',$(this).data('date'));

  }  

  //insert from fields

  $('#editMiles').val(localStorage.getItem('currentMiles'));
  $('#editDate').val(localStorage.getItem('currentDate'));


 });