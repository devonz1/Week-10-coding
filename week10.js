 
$(function () {

    
    var counter = 3;

    $("#insertRow").on("click", function (event) {
        event.preventDefault(); //this s the function that will execute the added rows once submit button is 
        //clicked

        var newRow = $("<tr>");
        var cols = '';

        
        cols += '<th scrope="row">' + counter + '</th>';
        cols += '<td><input class="form-control rounded-0" type="text" name="name" placeholder="names"></td>';
        cols += '<td><input class="form-control rounded-0" type="text" name="name" placeholder="names"></td>';
        cols += '<td><input class="form-control rounded-0" type="text" name="name" placeholder="names"></td>';
         

       
        newRow.append(cols);

         
        $("table").append(newRow); //this is to tell where the new row will be added
          //which is the table

       
        counter++;
    });
});