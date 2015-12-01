
$(document).ready(function () {

    $('#loading').hide();
});

$(document).ajaxStart(function () {
    $('#loading').show();
}).ajaxStop(function () {
    $('#loading').hide();
});


function GetAllProducts()

{
    jQuery.support.cors = true;
    //alert('GetAllProducts');
    $.ajax({
        url: 'http://localhost:35024/api/Products/',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            WriteResponse(data);
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });

 

}


function WriteResponse(products) {

    var strResult = "<table><th>ID</th><th>Name</th><th>Category</th><th>Price</th>";
    $.each(products, function (index, product) {
        strResult += "<tr><td>" + product.Id + "</td><td> " + product.Name + "</td><td>" + product.Category + "</td><td>" + product.Price + "</td></tr>";
    });
    strResult += "</table>";
    $("#divResult").html(strResult);
}

function WriteResponse2(product) {

    var strResult = "<table><th>ID</th><th>Name</th><th>Category</th><th>Price</th>";
     strResult += "<tr><td>" + product.Id + "</td><td> " + product.Name + "</td><td>" + product.Category + "</td><td>" + product.Price + "</td></tr>";
      strResult += "</table>";
    $("#divResult").html(strResult);
}


function GetProduct() {
    jQuery.support.cors = true;
    var id = $('#txtProdId').val();
    $.ajax({
        url: 'http://localhost:35024/api/Products/' + id,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            WriteResponse2(data);
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });
}


function AddProduct() {
    jQuery.support.cors = true;
    var product = {
        Id: $('#txtProdId2').val(),
        Name: $('#txtName').val(),
        Category: $('#txtCategory').val(),
        Price: $('#txtPrice').val()
    };

    $.ajax({
        url: 'http://localhost:35024/api/Products/',
        type: 'POST',
        data: JSON.stringify(product),
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            WriteResponse(data);
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });
}


