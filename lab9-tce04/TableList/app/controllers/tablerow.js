var args = arguments[0] || {};

$.leftimage.image = (args.i%2) ? '/dark_heart.png' : '/dark_skull.png';
$.heading.text = args.heading;
$.subheading.text = args.subheading;
$.row.i = args.i;
$.row.hasCheck = (args.i%2) ? true : false;
