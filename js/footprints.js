var windowWidth = 1200;
var windowHeight = 600;

var canvasHeight  = 500;
var footprintListDivHeight = 300;
var defaultZoom = 3;
var footprintZoom = 10;
var detailZoom = 12;
var zoomControlOn = true;
var animateTime = 500;

var map;

var centerOfWorld = new google.maps.LatLng(19.5010694,169.0164211);

var maanshan = new google.maps.LatLng(31.6704582,118.5074616);
var guangzhou = new google.maps.LatLng(23.1255978,113.2278442);
var yunnan = new google.maps.LatLng(26.8698697,100.2268982);
var zhuhai = new google.maps.LatLng(22.2751189,113.5763109);
var macau = new google.maps.LatLng(22.200852,113.5463343);
var hongkong = new google.maps.LatLng(22.3199304,114.173864);
var guilin = new google.maps.LatLng(25.2877098,110.2914047);
var xiamen = new google.maps.LatLng(24.4791977,118.1092072);
var hainan = new google.maps.LatLng(18.2589088,109.5185852);
var shanghai = new google.maps.LatLng(31.2243489,121.4767528);
var beijing = new google.maps.LatLng(39.9388838,116.3974589);
var pittsburgh = new google.maps.LatLng(40.44438, -79.95333);
var chicago = new google.maps.LatLng(41.8337329,-87.7321555);
var SF = new google.maps.LatLng(37.7798477,-122.4172696);
var yellowstone = new google.maps.LatLng(44.6207017,-110.490083);
var puertorico = new google.maps.LatLng(18.4390268,-66.0017667);
var florida = new google.maps.LatLng(25.7885031,-80.2257599);
var columbus = new google.maps.LatLng(40.058558,-83.128363);

var maanshanDes = "dasfjj dasfklhkasjhdwe dasfhi ewrf ef sadf we hyj t jg jyt jksadhfk ew wtrer u uykui ky ewqsd";
var guangzhouDes = "dasfjj dasfklhkasjhdwe dasfhi ewrf ef sadf we hyj t jg jyt jksadhfk ew wtrer u uykui ky ewqsd";
var yunnanDes = "dasfjj dasfklhkasjhdwe dasfhi ewrf ef sadf we hyj t jg jyt jksadhfk ew wtrer u uykui ky ewqsd";
var zhuhaiDes = "dasfjj dasfklhkasjhdwe dasfhi ewrf ef sadf we hyj t jg jyt jksadhfk ew wtrer u uykui ky ewqsd";
var macauDes = "dasfjj dasfklhkasjhdwe dasfhi ewrf ef sadf we hyj t jg jyt jksadhfk ew wtrer u uykui ky ewqsd";
var hongkongDes = "dasfjj dasfklhkasjhdwe dasfhi ewrf ef sadf we hyj t jg jyt jksadhfk ew wtrer u uykui ky ewqsd";
var guilinDes = "dasfjj dasfklhkasjhdwe dasfhi ewrf ef sadf we hyj t jg jyt jksadhfk ew wtrer u uykui ky ewqsd";
var xiamenDes = "dasfjj dasfklhkasjhdwe dasfhi ewrf ef sadf we hyj t jg jyt jksadhfk ew wtrer u uykui ky ewqsd";
var hainanDes = "dasfjj dasfklhkasjhdwe dasfhi ewrf ef sadf we hyj t jg jyt jksadhfk ew wtrer u uykui ky ewqsd";
var shanghaiDes = "dasfjj dasfklhkasjhdwe dasfhi ewrf ef sadf we hyj t jg jyt jksadhfk ew wtrer u uykui ky ewqsd";
var beijingDes = "dasfjj dasfklhkasjhdwe dasfhi ewrf ef sadf we hyj t jg jyt jksadhfk ew wtrer u uykui ky ewqsd";
var pittsburghDes = "dasfjj dasfklhkasjhdwe dasfhi ewrf ef sadf we hyj t jg jyt jksadhfk ew wtrer u uykui ky ewqsd";
var chicagoDes = "dasfjj dasfklhkasjhdwe dasfhi ewrf ef sadf we hyj t jg jyt jksadhfk ew wtrer u uykui ky ewqsd";
var SFDes = "dasfjj dasfklhkasjhdwe dasfhi ewrf ef sadf we hyj t jg jyt jksadhfk ew wtrer u uykui ky ewqsd";
var yellowstoneDes = "dasfjj dasfklhkasjhdwe dasfhi ewrf ef sadf we hyj t jg jyt jksadhfk ew wtrer u uykui ky ewqsd";
var puertoricoDes = "dasfjj dasfklhkasjhdwe dasfhi ewrf ef sadf we hyj t jg jyt jksadhfk ew wtrer u uykui ky ewqsd";
var floridaDes = "dasfjj dasfklhkasjhdwe dasfhi ewrf ef sadf we hyj t jg jyt jksadhfk ew wtrer u uykui ky ewqsd";
var columbusDes = "Worked here for a year at Chase.";

var maanshanDate = "2014/02/04";
var guangzhouDate = "2014/02/04";
var yunnanDate = "2014/02/04";
var zhuhaiDate = "2014/02/04";
var macauDate = "2014/02/04";
var hongkongDate = "2014/02/04";
var guilinDate = "2014/02/04";
var xiamenDate = "2014/02/04";
var hainanDate = "2014/02/04";
var shanghaiDate = "2014/02/04";
var beijingDate = "2014/02/04";
var pittsburghDate = "2014/02/04";
var chicagoDate = "2014/02/04";
var SFDate = "2014/02/04";
var yellowstoneDate = "2014/02/04";
var puertoricoDate = "2014/02/04";
var floridaDate = "2014/02/04";
var columbusDate = "2014/10/06";

var footprintNames = ["Hometown","Guangzhou","Yunnan","Zhuhai","Macau","Hong Kong","Guilin","Xiamen","Hainan","Shanghai","Beijing","Pittsburgh","Chicago","San Francisco", "Yellowstone","Puerto Rico","Florida","Columbus"];
var footprintCoords = [maanshan,guangzhou,yunnan,zhuhai,macau,hongkong,guilin,xiamen,hainan,shanghai,beijing,pittsburgh,chicago,SF,yellowstone,puertorico,florida,columbus];
var footprintDescription = [maanshanDes,guangzhouDes,yunnanDes,zhuhaiDes,macauDes,hongkongDes,guilinDes,xiamenDes,hainanDes,shanghaiDes,beijingDes,pittsburghDes,chicagoDes,SFDes,yellowstoneDes,puertoricoDes,floridaDes,columbusDes];
var footprintDate = [maanshanDate,guangzhouDate,yunnanDate,zhuhaiDate,macauDate,hongkongDate,guilinDate,xiamenDate,hainanDate,shanghaiDate,beijingDate,pittsburghDate,chicagoDate,SFDate,yellowstoneDate,puertoricoDate,floridaDate,columbusDate];

var listItem = new Array();

var currentLocation = new google.maps.LatLng();
var currentMarker = new google.maps.Marker();

var footprintMarkers = new Array(footprintNames.length);
var iterator = 0; //for dropping markers with timeout which can not work with FOR loop

var footprintInfoWindows = new Array(footprintNames.length);
var infoWindowWidth = 250;


var listIsOn = 1 ; //list is on

function initialize() {
            //get window size
            windowWidth = $(window).width();
            windowHeight = $(window).height();

            //default settings
            canvasHeight = windowHeight - 100;
            footprintListDivHeight = canvasHeight-43;
            defaultZoom = 3;
            zoomControlOn = true;
            animateTime = 500;
            infoWindowWidth = 250;

            //responsive settings for xs devices
            if(windowWidth<992){
                $('.lead').css("margin-top","0px");
                $('.lead').css("margin-bottom","0px");

                defaultZoom = 2;
                canvasHeight = windowHeight - 110;
                zoomControlOn = false;
                animateTime = 1;
                infoWindowWidth = 200;

                //listIsOn = 0;
                if(windowWidth<768){
                    defaultZoom = 1;
                    footprintListDivHeight = canvasHeight-63;
                    infoWindowWidth = 150;
                }
            }

            //set map canvas height
            document.getElementById("map_canvas").style.height = canvasHeight + "px";

            //display map
            var mapOptions = {
                zoom: defaultZoom,
                //zoom:14,
                center: centerOfWorld,
                //center:WPU,
                //disableDefaultUI: true,
                //mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: true,
                mapTypeControlOptions: {
                    position: google.maps.ControlPosition.TOP_RIGHT
                },
                panControl: false,
                zoomControl: zoomControlOn,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.RIGHT_TOP,
                    style: google.maps.ZoomControlStyle.SMALL
                },
                scaleControl: true,
                streetViewControl: true,
                streetViewControlOptions: {
                    position: google.maps.ControlPosition.RIGHT_TOP
                }
            }

            map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);





            //create switch of the list (no function yet)
            var listSwitch = document.createElement('div');
            listSwitch.id = 'listSwitch';
            listSwitch.className += ' list-with-bg text-center col-md-2 col-sm-3 col-xs-6 footprintListItem';
            listSwitch.style.cursor = 'pointer';

            if (listIsOn==1){
                listSwitch.innerHTML = '<span class="glyphicon glyphicon-chevron-up"></span>';
            }else{
                listSwitch.innerHTML = '<span class="glyphicon glyphicon-chevron-down"></span>';
            }

            map.controls[google.maps.ControlPosition.LEFT_TOP].push(listSwitch);


            // create the div to hold the list
            var footprintListDiv = document.createElement('div');
            footprintListDiv.id = 'footprintListDiv';
            footprintListDiv.className += ' col-md-2 col-sm-3  col-xs-6';
            footprintListDiv.style.overflow="scroll";
            footprintListDiv.style.height=footprintListDivHeight+'px';
            //footprintListDiv.style.marginLeft =  '-275px' ;

            //put first item into div
            var listItem1 = document.createElement('div');
            listItem1.className += ' row list-with-bg text-center footprintListItem';
            listItem1.style.cursor = 'pointer';
            listItem1.innerHTML = '<p style="margin-bottom:0px; ">World</p>';
            footprintListDiv.appendChild(listItem1);

            AddListListener(listItem1, centerOfWorld, defaultZoom);

            //put items into div
            for (var i = 0; i<= footprintNames.length - 1; i++) {
                listItem[i] = document.createElement('div');
                listItem[i].className += ' row list-with-bg text-center footprintListItem';
                listItem[i].style.cursor = 'pointer';
                listItem[i].innerHTML = '<p style="margin-bottom:0px; "><span class="glyphicon glyphicon-star"></span>'+footprintNames[i]+'</p>';
                footprintListDiv.appendChild(listItem[i]);

                AddListListener(listItem[i], footprintCoords[i], footprintZoom);

            };

            //put the div into map
            //footprintListDiv.style.zIndex = '1';
            map.controls[google.maps.ControlPosition.LEFT_TOP].push(footprintListDiv);



            //add listener for the switch
            google.maps.event.addDomListener(listSwitch, 'click', function() {
                if(listIsOn == 0 ){
                    //alert($("#listSwitch").width()+' '+$("#listSwitch").height());

                    $('#footprintListDiv').fadeIn(animateTime);

                    /*
                    $('#footprintListDiv').animate({
                        marginLeft: '+=' + $("#footprintListDiv").width() + 'px'
                    });

                    $('#listSwitch').animate({
                        marginLeft: '+=' + $("#footprintListDiv").width() + 'px'
                    });
                    */

                    listIsOn=1;
                    listSwitch.innerHTML = '<span class="glyphicon glyphicon-chevron-up"></span>';

                }else{

                    $('#footprintListDiv').fadeOut(animateTime);

                    /*
                    $('#footprintListDiv').animate({
                        marginLeft: '-=' + $("#footprintListDiv").width() + 'px'
                    });

                    $('#listSwitch').animate({
                        marginLeft: '-=' + $("#footprintListDiv").width() + 'px'
                    });
                    */

                    listIsOn=0;
                    listSwitch.innerHTML = '<span class="glyphicon glyphicon-chevron-down"></span>';

                }
            });


            /*
            //get GPS and set current marker
            navigator.geolocation.getCurrentPosition(function (position) {
                currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

                //map.setCenter(currentLocation);
                currentMarker = new google.maps.Marker({
                        icon: 'img/current.png',
                        position: currentLocation,
                        title: "you are here!"
                });
                currentMarker.setMap(map);

            }, function(){
                //alert("Sorry, can't get GPS information");
            });
            */


            //create markers and info windows for footprints
            for (var i = 0; i <= footprintMarkers.length-1; i++) {
                footprintMarkers[i] = new google.maps.Marker({
                    icon: 'img/location.png',
                    position: footprintCoords[i],
                    draggable: false,
                    title: footprintNames[i],
                    animation: (windowWidth>=768)?google.maps.Animation.DROP:null
                });

                footprintInfoWindows[i] = new google.maps.InfoWindow({
                    content: '<p style="margin-bottom:0px;"><strong>' + footprintNames[i] + '</strong></p><br><img src="img/test.jpg" class="img-responsive" /><br>' + footprintDescription[i] + '<br><strong>' + footprintDate[i] + '</strong>',
                    maxWidth: infoWindowWidth
                });

                AddMarkerListener(footprintMarkers[i],footprintInfoWindows[i]);
            }
            var dropMarkersTimer = window.setInterval("DropMarkers()",200); //drop one marker every 200 ms

            //close all info window when clicking the map
            google.maps.event.addListener(map, 'click', function() {
                for (var i = 0; i < footprintInfoWindows.length; i++) {
                    footprintInfoWindows[i].close();
                }
            });
}

function AddListListener(listItem, itemCoords, zoom) {
    google.maps.event.addDomListener(listItem, 'click', function() {
        map.panTo(itemCoords);
        map.setZoom(zoom);
    });
}

function AddMarkerListener(marker,infoWindow) {

    google.maps.event.addListener(marker, 'click', function() {
        map.panTo(marker.getPosition());
        if (map.getZoom()<detailZoom) {
            map.setZoom(detailZoom);
        }

        for (var i = 0; i < footprintInfoWindows.length; i++) {
            footprintInfoWindows[i].close();
        }
        infoWindow.open(map,marker);
    });
}

function DropMarkers() {
    if(iterator <= footprintMarkers.length-1){
        footprintMarkers[iterator].setMap(map);
        iterator++;
    }else{
        clearInterval(dropMarkersTimer);
        iterator = 0;
    }
}

google.maps.event.addDomListener(window, 'load', initialize);
