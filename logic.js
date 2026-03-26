/* icon */
function myFunction() {
 const element = document.getElementById("mylinksID")
 const icon = document.getElementById("iconID");
 
 if(element.className == "mylinks-hidden") {
    element.className = "mylinks-show";
    icon.className = "icon-show"
 } else {
    element.className = "mylinks-hidden"
    icon.className = "icon-hidden"
 }
}