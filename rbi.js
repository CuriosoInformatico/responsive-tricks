/*

-- Responsive Bootstrap Image --

From blog.curiosoinformatico.com

This Script add the class img-responsive of bootstrap to all the
images in the document.

Other similar effect could be just by adding the next css rule:

img{
	max-width: 100%;
}

*/

/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <samuellopezsaura@gmail.com> wrote this file. As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return 
 * ----------------------------------------------------------------------------
 */

var imgs = document.getElementsByTagName("img");

for (img in imgs){
	imgs[img].className = imgs[img].className + ' img-responsive';
}