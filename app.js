console.log('Running an external javascript script inside SVG')

var x = [];
var y = [];

let input = document.querySelector('input');
console.log(input)

input.addEventListener('change', () => {
    let files = input.files;
 
    if(files.length == 0) return;
 
    const file = files[0];
 
    let reader = new FileReader();
 
    reader.onload = (e) => {
	
        const file = e.target.result;
        const table = file.split(/\r\n|\n/);
		

		var i;
		for (i = 0; i < table.length; i++) {
		  var columns = table[i].split('    ');
		  x.push(columns[0]);
		  y.push(columns[1]);
		}
	
	var svg_path2 = 'M' + (x[0]*1000).toString() + ' ' + (((+y[0])-Math.min(...y))*1000).toString();
	console.log(svg_path2);
		for (i = 1; i < table.length; i++) {
		  svg_path2 = svg_path2 + ' L' + x[i]*1000 + ' ' + (((+y[i])-Math.min(...y))*1000).toString();
		}
		svg_path2 = svg_path2 + ' Z'
		console.log(svg_path2);
		
		console.log('Creating new path')
		var para = document.createElementNS('http://www.w3.org/2000/svg', "path");
		para.style.stroke = 'red';
		para.style.fill = 'none';
		para.style.stroke.width = "1";
		para.setAttributeNS(null, 'd',svg_path2);
		var element = document.getElementById("mesh");
		element.appendChild(para);
		
    };
 
    reader.onerror = (e) => alert(e.target.error.name);
 
    reader.readAsText(file); 
});