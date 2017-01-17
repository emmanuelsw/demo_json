$('select').select2();

function loadJSON(callback) {

	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open('GET', 'colombia.json', true);
	xobj.onreadystatechange = function () {
		if (xobj.readyState == 4 && xobj.status == "200") {
			callback(xobj.responseText);
		}
	};
	xobj.send(null);

}

function init() {
 loadJSON(function(response) {
    var data = JSON.parse(response);

    var departamentos = $("#departamentos");
  	var ciudades = $("#ciudades");

    for (var i = 0; i < data.length; i++) {
      departamentos.append('<option value="'+ i +'" >'+ data[i]["departamento"] +'</option>');
    }

    departamentos.change(function(event) {
      ciudades.empty();
      var selected = $(this).val();
      var ciudades_selected = data[selected]["ciudades"];

      for (var j = 0; j < ciudades_selected.length ; j++) {
        ciudades.append('<option value="'+ j +'" >'+ ciudades_selected[j] +'</option>');
      }
    });

 });
}

init();
