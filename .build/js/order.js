var Order = function(){
 	return this;
}

var OrderWidget = function(){
	return this;
}

OrderWidget.prototype.start = function(){
	var frame = $("<iframe />");
	frame.attr("id", "appframe");
	$("body").append(frame);
	$("body").css("overflow", "hidden");
		frame.attr("src", "/app/index.html");
	frame.css({
		position: "absolute",
		top: "0px",
		right: "0px",
		left: "0px",
		bottom: "0px",
		width: $(window).width(),
		height: $(window).height(),
		margin: "0px",
		border: "none",
		zIndex: 1000 });
	    $(".iframe-closer").css("opacity", "1.0");
	$(window).on("resize", function(){
			frame.css({
		position: "absolute",
		top: "0px",
		right: "0px",
		left: "0px",
		bottom: "0px",
		width: $(window).width(),
		height: $(window).height(),
		margin: "0px",
		border: "none",
		zIndex: 1000 });
	})
}