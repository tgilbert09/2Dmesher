console.log('Running an external javascript script inside SVG')

console.log('Creating new path')
var para = document.createElementNS('http://www.w3.org/2000/svg', "path");
para.style.stroke = 'black';
para.style.fill = 'none';
para.setAttributeNS(null, 'd','M10 10 L250 10 L250 250 L10 250 Z');
console.log(para)

console.log('Adding path to mesh element')
var element = document.getElementById("mesh");
element.appendChild(para);
console.log(element)