$(function(){

    let gridSize = 16

    function drawGrid(size){
        let pixelSize = (512/size)-2
        $(".gridContainer").empty()
        
        for(let i=0; i<size**2; i++){
            $(".gridContainer").append("<div class='pixel'></div>");    
        }
        $(".gridContainer").css("grid-template-columns", "repeat("+size+", "+pixelSize+"px)");
        $(".pixel").css("padding", pixelSize/2 +"px");
    }
    function colorPixel(){
        $(".pixel").hover(function() {
            $(this).css("background-color", "black");
        })
    }
    

    $("#changeSize").click(function(){
        gridSize = prompt("Enter new grid size between 1 and 100")
        if(gridSize>100){
            gridSize = 100;
        }
        else if(gridSize<1){
            gridSize = 1;
        }
        drawGrid(gridSize);
        colorPixel();
    })

    drawGrid(16);
    colorPixel();   
    
});