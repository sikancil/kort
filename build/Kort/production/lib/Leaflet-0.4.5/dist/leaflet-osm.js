/*c113de14a88fb17d34d6a4e218b00fee5cd5789a*/L.OSM={};L.OSM.TileLayer=L.TileLayer.extend({options:{url:"http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'© <a target="_parent" href="http://www.openstreetmap.org">OpenStreetMap</a> and contributors, under an <a target="_parent" href="http://www.openstreetmap.org/copyright">open license</a>'},initialize:function(a){a=L.Util.setOptions(this,a);L.TileLayer.prototype.initialize.call(this,a.url)}});L.OSM.Mapnik=L.OSM.TileLayer.extend({options:{url:"http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}});L.OSM.CycleMap=L.OSM.TileLayer.extend({options:{url:"http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png"}});L.OSM.TransportMap=L.OSM.TileLayer.extend({options:{url:"http://{s}.tile2.opencyclemap.org/transport/{z}/{x}/{y}.png"}});L.OSM.MapQuestOpen=L.OSM.TileLayer.extend({options:{url:"http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png",subdomains:"1234",attribution:"Tiles courtesy of <a href='http://www.mapquest.com/' target='_blank'>MapQuest</a> <img src='http://developer.mapquest.com/content/osm/mq_logo.png'>"}});L.OSM.DataLayer=L.FeatureGroup.extend({options:{areaTags:["area","building","leisure","tourism","ruins","historic","landuse","military","natural","sport"],uninterestingTags:["source","source_ref","source:ref","history","attribution","created_by","tiger:county","tiger:tlid","tiger:upload_uuid"],styles:{}},initialize:function(b,a){L.Util.setOptions(this,a);L.FeatureGroup.prototype.initialize.call(this);if(b){this.addData(b)}},addData:function(e){if(!(e instanceof Array)){e=this.buildFeatures(e)}for(var d=0;d<e.length;d++){var c=e[d],b;if(c.type==="node"){b=L.marker(c.latLng,this.options.styles.node)}else{var f=new Array(c.nodes.length);for(var a=0;a<c.nodes.length;a++){f[a]=c.nodes[a].latLng}if(this.isWayArea(c)){f.pop();b=L.polygon(f,this.options.styles.area)}else{b=L.polyline(f,this.options.styles.way)}}b.addTo(this);b.feature=c}},buildFeatures:function(c){var e=[],a=L.OSM.getNodes(c),h=L.OSM.getWays(c,a);for(var g in a){var f=a[g];if(this.interestingNode(f)){e.push(f)}}for(var d=0;d<h.length;d++){var b=h[d];e.push(b)}return e},isWayArea:function(a){if(a.nodes[0]!=a.nodes[a.nodes.length-1]){return false}for(var b in a.tags){if(~this.options.areaTags.indexOf(b)){return true}}return false},interestingNode:function(b){for(var a in b.tags){if(!~this.options.uninterestingTags.indexOf(a)){return true}}return false}});L.Util.extend(L.OSM,{getNodes:function(c){var a={};var b=c.getElementsByTagName("node");for(var d=0;d<b.length;d++){var e=b[d],f=e.getAttribute("id");a[f]={id:f,type:"node",latLng:L.latLng(e.getAttribute("lat"),e.getAttribute("lon"),true),tags:this.getTags(e)}}return a},getWays:function(f,b){var k=[];var h=f.getElementsByTagName("way");for(var e=0;e<h.length;e++){var g=h[e],c=g.getElementsByTagName("nd");var a={id:g.getAttribute("id"),type:"way",nodes:new Array(c.length),tags:this.getTags(g)};for(var d=0;d<c.length;d++){a.nodes[d]=b[c[d].getAttribute("ref")]}k.push(a)}return k},getTags:function(d){var a={};var c=d.getElementsByTagName("tag");for(var b=0;b<c.length;b++){a[c[b].getAttribute("k")]=c[b].getAttribute("v")}return a}});