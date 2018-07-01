//bRocKEn LogiX; if its going to end no matter, why do we allways keep starting even so we know this, are we hoping for a miracle or are we in just for the ride.


var convas_filled="no";//track canvas drawn or not

function makeGrid(){//udacity want that name
//get user input width/length
if(convas_filled=="yes"){return remove_caonvas()}//remove old canvas and draw new cnavas
var width=document.getElementById("grid_width");
var height=document.getElementById("grid_height");


if(width.value !=="" && height.value !=""){//validation
    //alert("allright");
   document.getElementById("design_canvas").style.height=height.value+"em";
   document.getElementById("design_canvas").style.width=parseInt(width.value)+1+"em";
   var x=1; //width adjuster; well kinda
    
   for(var i=1; i<=(height.value*width.value); i++) {
    
       //adjust grid aspect ratio   
    (width.value >= 9 && width.value <= 15)?x=2:(width.value >= 16 && width.value <= 24)?x=3:(width.value >= 25 && width.value <= 32)?x=4:x=5;  
    
       //write boxes to grid   
    $("#design_canvas").append('<div id="'+i+'" style="width:1em;height:1em;border:1px solid black;float:left" onclick="add_color(\''+i+'\')"></div>');
     
       //adjust grid width only if its user input is over 8
       if(width.value > 8){
           document.getElementById("design_canvas").style.width=parseInt(width.value)+x+"em"; 
       }
   }
    
  $("#design_canvas").append("<button onclick='clear_canvas()'>Clear canvas</button><br/><button onclick='eraser()'>Erase</button>"); 
    convas_filled="yes";//canvas has been written
    
}
    

else{alert("Please fill in both height and width")}//some validation to avoid some ugly issues
    
    
}
 function add_color(i){//add color to blocks
        var colour=document.getElementById("color_picker");
       document.getElementById(i).style.backgroundColor=colour.value;
     //hahahaha this is fun, didnt know i could do this till now//is this what they call game design, with little mod i could vretae drawing board
    }
   
function clear_canvas(){//remove drawing
    
var width=document.getElementById("grid_width");
var height=document.getElementById("grid_height");
    for(var i=1; i<=(height.value*width.value); i++){
        document.getElementById(i).style.backgroundColor="transparent";//replace all color by transparent
    
    } 
}

function eraser(){//change brush color match page backroung color
    
 document.getElementById("color_picker").value="#ffefdb";
    
}

function remove_caonvas(){//delete old canvas
    
$("#design_canvas").empty();//remove child elements
document.getElementById("design_canvas").style.height=0+"em";//reset height
document.getElementById("design_canvas").style.width=0+"em";//reset width
convas_filled="no";//canvas has been cleared
makeGrid();//redraw new grid
}