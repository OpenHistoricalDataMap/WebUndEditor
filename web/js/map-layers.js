function loadBaseMapLayers() {

    // get map date by URI
    var date = location.search.split('date=')[1] ? location.search.split('date=')[1] : '2017-01-01';
    var mapdate = 'date:' + date;

    //// Lines

    ////// Boundaries
    boundary_admin_2_lines =
        new ol.layer.Tile({
            name: 'boundary_admin_2_lines',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:boundaries_admin_2', 'format': 'image/png', 'date': date},
                viewparams: mapdate
            })
        });

    boundary_admin_3_lines =
        new ol.layer.Tile({
            name: 'boundary_admin_3_lines',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:boundaries_admin_3', 'format': 'image/png', 'date': date},
                viewparams: mapdate
            })
        });

    boundary_admin_4_lines =
        new ol.layer.Tile({
            name: 'boundary_admin_4_lines',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:boundaries_admin_4', 'format': 'image/png', 'date': date},
                viewparams: mapdate
            })
        });

    boundary_admin_5_lines =
        new ol.layer.Tile({
            name: 'boundary_admin_5_lines',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:boundaries_admin_5', 'format': 'image/png', 'date': date},
                viewparams: mapdate
            })
        });


    boundary_admin_6_lines =
        new ol.layer.Tile({
            name: 'boundary_admin_6_lines',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:boundaries_admin_6', 'format': 'image/png', 'date': date},
                viewparams: mapdate
            })
        });


    boundary_admin_7_lines =
        new ol.layer.Tile({
            name: 'boundary_admin_7_lines',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:boundaries_admin_7', 'format': 'image/png', 'date': date},
                viewparams: mapdate
            })
        });


    boundary_admin_8_lines =
        new ol.layer.Tile({
            name: 'boundary_admin_8_lines',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:boundaries_admin_8', 'format': 'image/png', 'date': date},
                viewparams: mapdate
            })
        });

    boundary_admin_9_lines =
        new ol.layer.Tile({
            name: 'boundary_admin_9_lines',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:boundaries_admin_9', 'format': 'image/png', 'date': date},
                viewparams: mapdate
            })
        });

    boundary_admin_10_lines =
        new ol.layer.Tile({
            name: 'boundary_admin_10_lines',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:boundaries_admin_10', 'format': 'image/png', 'date': date},
                viewparams: mapdate
            })
        });


    highway_huge_lines =
        new ol.layer.Tile({
            name: 'highway_huge_lines',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:highway_huge_lines', 'format': 'image/png', 'date': date},
                viewparams: mapdate
            })
        });

    highway_primary_lines =
        new ol.layer.Tile({
            name: 'highway_primary_lines',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:highway_primary_lines', 'format': 'image/png', 'date': date},
                viewparams: mapdate
            })
        });

    highway_secondary_lines =
        new ol.layer.Tile({
            name: 'highway_secondary_lines',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:highway_secondary_lines', 'format': 'image/png', 'date': date},
                viewparams: mapdate
            })
        });

    highway_small_lines =
        new ol.layer.Tile({
            name: 'highway_small_lines',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:highway_small_lines', 'format': 'image/png', 'date': date},
                viewparams: mapdate
            })
        });

    highway_tertiary_lines =
        new ol.layer.Tile({
            name: 'highway_tertiary_lines',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:highway_tertiary_lines', 'format': 'image/png', 'date': date},
                viewparams: mapdate
            })
        });

    highway_path_lines =
        new ol.layer.Tile({
            name: 'highway_path_lines',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:highway_path_lines', 'format': 'image/png', 'date': date},
                viewparams: mapdate
            })
        });


    railway_lines =
        new ol.layer.Tile({
            name: 'railway_lines',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:railway_lines', 'format': 'image/png', 'date': date},
                viewparams: mapdate,
                /*
                zIndex: 0,
                minResolution 200,
                maxResolution 2000
                */
            })
        });

    //// Points
    shop_points =
        new ol.layer.Tile({
            name: 'shop_points',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:shop_points', 'format': 'image/png', 'date': date},
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });

    public_transport_points =
        new ol.layer.Tile({
            name: 'public_transport_points',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:public_transport_points', 'format': 'image/png', 'date': date},
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });

    natural_points =
        new ol.layer.Tile({
            name: 'natural_points',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:natural_points', 'format': 'image/png', 'date': date},
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });

    aeroway_points =
        new ol.layer.Tile({
            name: 'aeroway_points',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:aeroway_points', 'format': 'image/png', 'date': date},
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });

    craft_points =
        new ol.layer.Tile({
            name: 'craft_points',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:craft_points', 'format': 'image/png', 'date': date},
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });


    //// Polygons
    building_polygons =
        new ol.layer.Tile({
            name: 'building_polygons',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:building_polygons', 'format': 'image/png', 'date': date},
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });
    natural_polygons =
        new ol.layer.Tile({
            name: 'natural_polygons',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:natural_polygons', 'format': 'image/png', 'date': date},
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });
    military_polygons =
        new ol.layer.Tile({
            name: 'military_polygons',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:military_polygons', 'format': 'image/png', 'date': date},
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });
    waterway_polygons =
        new ol.layer.Tile({
            name: 'waterway_polygons',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:waterway_polygons', 'format': 'image/png', 'date': date},
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });
    geological_polygons =
        new ol.layer.Tile({
            name: 'geological_polygons',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:geological_polygons', 'format': 'image/png', 'date': date},
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });

    aeroway_polygons =
        new ol.layer.Tile({
            name: 'aeroway_polygons',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:aeroway_polygons', 'format': 'image/png', 'date': date},
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });

    emergency_polygons =
        new ol.layer.Tile({
            name: 'emergency_polygons',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:emergency_polygons', 'format': 'image/png', 'date': date},
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });

    landuse_brown =
        new ol.layer.Tile({
            name: 'landuse_brown',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:landuse_brown', 'format': 'image/png', 'date': date},
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });
    landuse_commercialetc =
        new ol.layer.Tile({
            name: 'landuse_commercialetc',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:landuse_commercialetc', 'format': 'image/png', 'date': date},
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });
    landuse_freegreenandwood =
        new ol.layer.Tile({
            name: 'landuse_freegreenandwood',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:landuse_freegreenandwood', 'format': 'image/png', 'date': date},
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });
    landuse_gardeningandfarm =
        new ol.layer.Tile({
            name: 'landuse_gardeningandfarm',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:landuse_gardeningandfarm', 'format': 'image/png', 'date': date},
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });
    landuse_grey =
        new ol.layer.Tile({
            name: 'landuse_grey',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:landuse_grey', 'format': 'image/png', 'date': date},
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });
    landuse_industrial =
        new ol.layer.Tile({
            name: 'landuse_industrial',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:landuse_industrial', 'format': 'image/png', 'date': date},
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });
    landuse_military =
        new ol.layer.Tile({
            name: 'landuse_military',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:landuse_military', 'format': 'image/png', 'date': date},
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });
    landuse_residentialetc =
        new ol.layer.Tile({
            name: 'landuse_residentialetc',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:landuse_residentaletc', 'format': 'image/png', 'date': date},
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });
    landuse_transport =
        new ol.layer.Tile({
            name: 'landuse_transport',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:landuse_transport', 'format': 'image/png', 'date': date},
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });
    landuse_water =
        new ol.layer.Tile({
            name: 'landuse_water',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:landuse_water', 'format': 'image/png', 'date': date},
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });

    //Polygon-Label

    building_polygons_label =
        new ol.layer.Tile({
            name: 'building_polygons_label',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:building_polygons_label', 'format': 'image/png', 'date': date},
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });
    natural_polygons_label =
        new ol.layer.Tile({
            name: 'natural_polygons_label',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:natural_polygons_label', 'format': 'image/png', 'date': date},
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });
    military_polygons_label =
        new ol.layer.Tile({
            name: 'military_polygons_label',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:military_polygons_label', 'format': 'image/png', 'date': date},
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });
    waterway_polygons_label =
        new ol.layer.Tile({
            name: 'waterway_polygons_label',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:waterway_polygons_label', 'format': 'image/png', 'date': date},
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });
    geological_polygons_label =
        new ol.layer.Tile({
            name: 'geological_polygons_label',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:geological_polygons_label', 'format': 'image/png', 'date': date},
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });

    aeroway_polygons_label =
        new ol.layer.Tile({
            name: 'aeroway_polygons_label',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:aeroway_polygons_label', 'format': 'image/png', 'date': date},
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });

    emergency_polygons_label =
        new ol.layer.Tile({
            name: 'emergency_polygons_label',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:emergency_polygons_label', 'format': 'image/png', 'date': date},
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });

    landuse_brown_label =
        new ol.layer.Tile({
            name: 'landuse_brown_label',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:landuse_brown_label', 'format': 'image/png', 'date': date},
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });
    landuse_commercialetc_label =
        new ol.layer.Tile({
            name: 'landuse_commercialetc_label',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:landuse_commercialetc_label', 'format': 'image/png', 'date': date},
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });
    landuse_freegreenandwood_label =
        new ol.layer.Tile({
            name: 'landuse_freegreenandwood_label',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {
                    'LAYERS': 'ohdm_t:landuse_freegreenandwood_label_label',
                    'format': 'image/png',
                    'date': date
                },
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });
    landuse_gardeningandfarm_label =
        new ol.layer.Tile({
            name: 'landuse_gardeningandfarm_label',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:landuse_gardeningandfarm_label', 'format': 'image/png', 'date': date},
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });
    landuse_grey_label =
        new ol.layer.Tile({
            name: 'landuse_grey_label',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:landuse_grey_label', 'format': 'image/png', 'date': date},
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });
    landuse_industrial_label =
        new ol.layer.Tile({
            name: 'landuse_industrial_label',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:landuse_industrial_label', 'format': 'image/png', 'date': date},
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });
    landuse_military_label =
        new ol.layer.Tile({
            name: 'landuse_military_label',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:landuse_military_label', 'format': 'image/png', 'date': date},
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });
    landuse_residentialetc_label =
        new ol.layer.Tile({
            name: 'landuse_residentialetc_label',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:landuse_residentaletc_label', 'format': 'image/png', 'date': date},
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });
    landuse_transport_label =
        new ol.layer.Tile({
            name: 'landuse_transport_label',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:landuse_transport_label', 'format': 'image/png', 'date': date},
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });
    landuse_water_label =
        new ol.layer.Tile({
            name: 'landuse_water_label',
            source: new ol.source.TileWMS({
                url: 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
                params: {'LAYERS': 'ohdm_t:landuse_water_label', 'format': 'image/png', 'date': date},
                serverType: 'geoserver',
                viewparams: mapdate
            })
        });

    var layerArray = [
        natural_polygons,
        military_polygons,
        waterway_polygons,
        geological_polygons,
        aeroway_polygons,
        emergency_polygons,

        landuse_brown,

        landuse_commercialetc,
        landuse_freegreenandwood,
        landuse_gardeningandfarm,
        landuse_grey,
        landuse_industrial,
        landuse_military,
        landuse_residentialetc,
        landuse_transport,
        landuse_water,

        building_polygons,

        highway_path_lines,
        highway_small_lines,
        highway_tertiary_lines,
        highway_huge_lines,
        highway_secondary_lines,
        highway_primary_lines,

        railway_lines,

        boundary_admin_2_lines,
        //	boundary_admin_3_lines,
        boundary_admin_4_lines,
        //	boundary_admin_5_lines,
        boundary_admin_6_lines,
        //	boundary_admin_7_lines,
        //	boundary_admin_8_lines,
        boundary_admin_9_lines,
        //	boundary_admin_10_lines,

        natural_polygons_label,
        military_polygons_label,
        waterway_polygons_label,
        geological_polygons_label,
        aeroway_polygons_label,
        emergency_polygons_label,

        landuse_brown_label,
        landuse_commercialetc_label,
        landuse_freegreenandwood_label,
        landuse_gardeningandfarm_label,
        landuse_grey,
        landuse_industrial_label,
        landuse_military_label,
        landuse_residentialetc_label,
        landuse_transport_label,
        landuse_water_label,

        building_polygons_label,


        //	shop_points,
        //	public_transport_points,
        //	natural_points,
        //	aeroway_points,
        //	craft_points,
    ]

    function changeSomething() {
        for (layer in layerArray) {
            //doSomething
            //e.g. change viewparams -> mapdate on runtime
        }

    }

    // group all layers above
    base_map_group_layer =
        new ol.layer.Group({
            name: 'Base Map',
            projection: ol.proj.get('EPSG:3857'),
            layers: [
                natural_polygons,
                military_polygons,
                waterway_polygons,
                geological_polygons,
                aeroway_polygons,
                emergency_polygons,

                landuse_brown,

                landuse_commercialetc,
                landuse_freegreenandwood,
                landuse_gardeningandfarm,
                landuse_grey,
                landuse_industrial,
                landuse_military,
                landuse_residentialetc,
                landuse_transport,
                landuse_water,

                building_polygons,

                highway_path_lines,
                highway_small_lines,
                highway_tertiary_lines,
                highway_huge_lines,
                highway_secondary_lines,
                highway_primary_lines,

                railway_lines,

                boundary_admin_2_lines,
                //	boundary_admin_3_lines,
                boundary_admin_4_lines,
                //	boundary_admin_5_lines,
                boundary_admin_6_lines,
                //	boundary_admin_7_lines,
                //	boundary_admin_8_lines,
                boundary_admin_9_lines,
                //	boundary_admin_10_lines,

                natural_polygons_label,
                military_polygons_label,
                waterway_polygons_label,
                geological_polygons_label,
                aeroway_polygons_label,
                emergency_polygons_label,

                landuse_brown_label,
                landuse_commercialetc_label,
                landuse_freegreenandwood_label,
                landuse_gardeningandfarm_label,
                landuse_grey,
                landuse_industrial_label,
                landuse_military_label,
                landuse_residentialetc_label,
                landuse_transport_label,
                landuse_water_label,

                building_polygons_label,


                //	shop_points,
                //	public_transport_points,
                //	natural_points,
                //	aeroway_points,
                //	craft_points,
            ]
        });

}
