$(function() {

    $('#side-menu').metisMenu();

});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        topOffset = 50;
        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    var element = $('ul.nav a').filter(function() {
        return this.href == url || url.href.indexOf(this.href) == 0;
    }).addClass('active').parent().parent().addClass('in').parent();
    if (element.is('li')) {
        element.addClass('active');
    }
});

var mymap = L.map('minemap').setView([-33.6391572,147.4008518,3248], 15);

L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(mymap);

var truckIcon = L.icon({
    iconUrl: '../css/truck_pin.png',
    iconSize: [38, 44],
    iconAnchor: [19, 44],
    popupAnchor: [0, -44],
});

var diggerIcon = L.icon({
    iconUrl: '../css/digger_pin.png',
    iconSize: [38, 44],
    iconAnchor: [19, 44]
});

var t2 = L.marker([-33.633417,147.4039743,965], {icon:truckIcon}).addTo(mymap);
t2.bindPopup("TRH401");
var t1 = L.marker([-33.634309, 147.410360,965], {icon:truckIcon, title: "TRH414"}).addTo(mymap);
t1.bindPopup("TRH414");
var t2 = L.marker([-33.630567,147.3842453,966], {icon:truckIcon}).addTo(mymap);
t2.bindPopup("TRH403");
var t2 = L.marker([-33.647409,147.3951163,965], {icon:truckIcon}).addTo(mymap);
t2.bindPopup("TRH404");
var t2 = L.marker([-33.638873, 147.404173,965], {icon:truckIcon}).addTo(mymap);
t2.bindPopup("TRH405");
var t2 = L.marker([-33.643578, 147.405256,965], {icon:truckIcon}).addTo(mymap);
t2.bindPopup("TRH406");
var t2 = L.marker([-33.637958, 147.399579,965], {icon:truckIcon}).addTo(mymap);
t2.bindPopup("TRH407");
var t2 = L.marker([-33.646422, 147.404487,965], {icon:truckIcon}).addTo(mymap);
t2.bindPopup("TRH407");
var t2 = L.marker([-33.632167, 147.391737,965], {icon:truckIcon}).addTo(mymap);
t2.bindPopup("TRH407");
var t2 = L.marker([-33.634173, 147.398624,965], {icon:truckIcon}).addTo(mymap);
t2.bindPopup("TRH407");
var t2 = L.marker([-33.637518, 147.386667,965], {icon:truckIcon}).addTo(mymap);
t2.bindPopup("TRH407");
var t2 = L.marker([-33.644556, 147.378935,965], {icon:truckIcon}).addTo(mymap);
t2.bindPopup("TRH407");
var t2 = L.marker([-33.638925, 147.408669,965], {icon:truckIcon}).addTo(mymap);
t2.bindPopup("TRH407");
var t2 = L.marker([-33.634694, 147.395121,965], {icon:truckIcon}).addTo(mymap);
t2.bindPopup("TRH407");
var t2 = L.marker([-33.642234, 147.398453,965], {icon:truckIcon}).addTo(mymap);
t2.bindPopup("TRH407");


var t2 = L.marker([-33.636479, 147.405260,965], {icon: diggerIcon}).addTo(mymap);
t2.bindPopup("LDR403");
var t2 = L.marker([-33.636740, 147.410111,1368], {icon: diggerIcon}).addTo(mymap);
t2.bindPopup("LDR402");
var t2 = L.marker([-33.634792, 147.409573,965], {icon: diggerIcon}).addTo(mymap);
t2.bindPopup("LDR401");
