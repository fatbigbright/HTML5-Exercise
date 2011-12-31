function DrawArc (context, x, y, r, startAngle, endAngle, color, clockWise, close) {
	context.strokeStyle = color;
	context.beginPath();
	context.arc(x, y, r, 0.5 * Math.PI, 2 * Math.PI, clockWise);
	if ( close ) {
		context.closePath();
	}
	context.stroke();
}