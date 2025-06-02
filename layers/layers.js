var wms_layers = [];


        var lyr_EsriSatellite_0 = new ol.layer.Tile({
            'title': 'Esri Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_BAS_LIM_DEPARTAMENTO_1 = new ol.format.GeoJSON();
var features_BAS_LIM_DEPARTAMENTO_1 = format_BAS_LIM_DEPARTAMENTO_1.readFeatures(json_BAS_LIM_DEPARTAMENTO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BAS_LIM_DEPARTAMENTO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BAS_LIM_DEPARTAMENTO_1.addFeatures(features_BAS_LIM_DEPARTAMENTO_1);
var lyr_BAS_LIM_DEPARTAMENTO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BAS_LIM_DEPARTAMENTO_1, 
                style: style_BAS_LIM_DEPARTAMENTO_1,
                popuplayertitle: 'BAS_LIM_DEPARTAMENTO',
                interactive: true,
                title: '<img src="styles/legend/BAS_LIM_DEPARTAMENTO_1.png" /> BAS_LIM_DEPARTAMENTO'
            });

lyr_EsriSatellite_0.setVisible(true);lyr_BAS_LIM_DEPARTAMENTO_1.setVisible(true);
var layersList = [lyr_EsriSatellite_0,lyr_BAS_LIM_DEPARTAMENTO_1];
lyr_BAS_LIM_DEPARTAMENTO_1.set('fieldAliases', {'NOMBDEP': 'NOMBDEP', 'COUNT': 'COUNT', 'FIRST_IDDP': 'FIRST_IDDP', 'HECTARES': 'HECTARES', 'contra': 'contra', });
lyr_BAS_LIM_DEPARTAMENTO_1.set('fieldImages', {'NOMBDEP': 'TextEdit', 'COUNT': 'TextEdit', 'FIRST_IDDP': 'TextEdit', 'HECTARES': 'TextEdit', 'contra': 'TextEdit', });
lyr_BAS_LIM_DEPARTAMENTO_1.set('fieldLabels', {'NOMBDEP': 'inline label - always visible', 'COUNT': 'no label', 'FIRST_IDDP': 'no label', 'HECTARES': 'no label', 'contra': 'no label', });
lyr_BAS_LIM_DEPARTAMENTO_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});