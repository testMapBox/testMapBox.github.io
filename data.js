mapboxgl.accessToken = 'pk.eyJ1IjoidGhlZHlpbmdkcmFnb24iLCJhIjoiY2szNWN0MGsyMDI2OTNtdDR6Y25sMmZscCJ9.WN9pN7qbAj4MQdD7VzjODw';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10',
        center: [-73.927, 40.820],
        zoom: 12.22
    });

    var school = "https://raw.githubusercontent.com/testMapBox/testMapBox.github.io/main/school.json";
    var smallB = "https://raw.githubusercontent.com/testMapBox/testMapBox.github.io/main/smallB.json";
    var realE = "https://raw.githubusercontent.com/testMapBox/testMapBox.github.io/main/realE.json";
    var deli = "https://raw.githubusercontent.com/testMapBox/testMapBox.github.io/main/deli.json";

    map.on('load', () => {
        map.addSource('schools', {
            'type': 'geojson',
            'data': school
        });

        map.addSource('smallB', {
            'type': 'geojson',
            'data': smallB
        });

        map.addSource('realE', {
            'type': 'geojson',
            'data': realE
        });

        map.addSource('deli', {
            'type': 'geojson',
            'data': deli
        });

        // Add a layer showing the places.
        map.addLayer({
            'id': 'schools',
            'type': 'circle',
            'source': 'schools',
            'paint': {
                'circle-color': '#ff0000',
                'circle-radius': 3,
                'circle-stroke-width': 2,
                'circle-stroke-color': '#ffffff'
            }
        });

        map.addLayer({
            'id': 'smallB',
            'type': 'circle',
            'source': 'smallB',
            'paint': {
                'circle-color': '#008000',
                'circle-radius': 3,
                'circle-stroke-width': 2,
                'circle-stroke-color': '#ffffff'
            }
        });

        map.addLayer({
            'id': 'realE',
            'type': 'circle',
            'source': 'realE',
            'paint': {
                'circle-color': '#000080',
                'circle-radius': 3,
                'circle-stroke-width': 2,
                'circle-stroke-color': '#ffffff'
            }
        });

        map.addLayer({
            'id': 'deli',
            'type': 'circle',
            'source': 'deli',
            'paint': {
                'circle-color': '#000000',
                'circle-radius': 3,
                'circle-stroke-width': 2,
                'circle-stroke-color': '#ffffff'
            }
        });


        // Create a popup, but don't add it to the map yet.
        const popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false
        });

        map.on('mouseenter', 'schools', (e) => {
            // Change the cursor style as a UI indicator.
            map.getCanvas().style.cursor = 'pointer';

            // Copy coordinates array.
            const coordinates = e.features[0].geometry.coordinates.slice();
            const name = e.features[0].properties.name;
            const phone = e.features[0].properties.phone;
            const address = e.features[0].properties.address;
            const category = e.features[0].properties.category;


            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            // Populate the popup and set its coordinates
            // based on the feature found.
            popup.setLngLat(coordinates).setHTML(
                '<strong>' + name + '</strong>' +
                '<p><strong>Phone: </strong>' + phone + '</p>' + 
                '<p><strong>Address: </strong>' + address + '</p>' + 
                '<p><strong>Category: </strong>' + category + '</p>').addTo(map);
        });

        map.on('mouseleave', 'schools', () => {
            map.getCanvas().style.cursor = '';
            popup.remove();
        });

        map.on('mouseenter', 'smallB', (e) => {
            // Change the cursor style as a UI indicator.
            map.getCanvas().style.cursor = 'pointer';

            // Copy coordinates array.
            const coordinates = e.features[0].geometry.coordinates.slice();
            const name = e.features[0].properties.name;
            const phone = e.features[0].properties.phone;
            const address = e.features[0].properties.address;
            const category = e.features[0].properties.category;


            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            // Populate the popup and set its coordinates
            // based on the feature found.
            popup.setLngLat(coordinates).setHTML(
                '<strong>' + name + '</strong>' +
                '<p><strong>Phone: </strong>' + phone + '</p>' + 
                '<p><strong>Address: </strong>' + address + '</p>' + 
                '<p><strong>Category: </strong>' + category + '</p>').addTo(map);
        });

        map.on('mouseleave', 'smallB', () => {
            map.getCanvas().style.cursor = '';
            popup.remove();
        });

        map.on('mouseenter', 'realE', (e) => {
            // Change the cursor style as a UI indicator.
            map.getCanvas().style.cursor = 'pointer';

            // Copy coordinates array.
            const coordinates = e.features[0].geometry.coordinates.slice();
            const name = e.features[0].properties.name;
            const phone = e.features[0].properties.phone;
            const address = e.features[0].properties.address;
            const category = e.features[0].properties.category;


            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            // Populate the popup and set its coordinates
            // based on the feature found.
            popup.setLngLat(coordinates).setHTML(
                '<strong>' + name + '</strong>' +
                '<p><strong>Phone: </strong>' + phone + '</p>' + 
                '<p><strong>Address: </strong>' + address + '</p>' + 
                '<p><strong>Category: </strong>' + category + '</p>').addTo(map);
        });

        map.on('mouseleave', 'realE', () => {
            map.getCanvas().style.cursor = '';
            popup.remove();
        });

        map.on('mouseenter', 'deli', (e) => {
            // Change the cursor style as a UI indicator.
            map.getCanvas().style.cursor = 'pointer';

            // Copy coordinates array.
            const coordinates = e.features[0].geometry.coordinates.slice();
            const name = e.features[0].properties.name;
            const phone = e.features[0].properties.phone;
            const address = e.features[0].properties.address;
            const category = e.features[0].properties.category;


            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            // Populate the popup and set its coordinates
            // based on the feature found.
            popup.setLngLat(coordinates).setHTML(
                '<strong>' + name + '</strong>' +
                '<p><strong>Phone: </strong>' + phone + '</p>' + 
                '<p><strong>Address: </strong>' + address + '</p>' + 
                '<p><strong>Category: </strong>' + category + '</p>').addTo(map);
        });

        map.on('mouseleave', 'deli', () => {
            map.getCanvas().style.cursor = '';
            popup.remove();
        });
    });
