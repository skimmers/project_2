module.exports = {
    render_map: (id) => {
        if (id == 1) {
            return `<script> var map = L.map('map').setView([37.2723,-112.9564], 10);
            mapLink = 
                '<a href="http://openstreetmap.org">OpenStreetMap</a>';
            L.tileLayer(
                'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; ' + mapLink + ' Contributors',
                maxZoom: 10,
                }).addTo(map); </script>`
        } else if (id == 2) {
            return `<script> var map = L.map('map').setView([34.9002,-111.8107], 10);
            mapLink = 
                '<a href="http://openstreetmap.org">OpenStreetMap</a>';
            L.tileLayer(
                'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; ' + mapLink + ' Contributors',
                maxZoom: 10,
                }).addTo(map); </script>`
        } else if (id == 3) {
            return `<script> var map = L.map('map').setView([34.1494, -106.4110], 10);
            mapLink = 
                '<a href="http://openstreetmap.org">OpenStreetMap</a>';
            L.tileLayer(
                'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; ' + mapLink + ' Contributors',
                maxZoom: 10,
                }).addTo(map); </script>`
        } else if (id == 4) {
            return `<script> var map = L.map('map').setView([35.6351, -83.4439], 15);
            mapLink = 
                '<a href="http://openstreetmap.org">OpenStreetMap</a>';
            L.tileLayer(
                'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; ' + mapLink + ' Contributors',
                maxZoom: 15,
                }).addTo(map); </script>`
        } else if (id == 5) {
            return `<script> var map = L.map('map').setView([34.8195, -1117920], 16);
            mapLink = 
                '<a href="http://openstreetmap.org">OpenStreetMap</a>';
            L.tileLayer(
                'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; ' + mapLink + ' Contributors',
                maxZoom: 16,
                }).addTo(map); </script>`
        } else if (id == 6) {
            return `<script> var map = L.map('map').setView([44.1608, -71.6450], 16);
            mapLink = 
                '<a href="http://openstreetmap.org">OpenStreetMap</a>';
            L.tileLayer(
                'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; ' + mapLink + ' Contributors',
                maxZoom: 16,
                }).addTo(map); </script>`
        } else if (id == 7) {
            return `<script> var map = L.map('map').setView([37.62587, -112.16069], 17);
            mapLink = 
                '<a href="http://openstreetmap.org">OpenStreetMap</a>';
            L.tileLayer(
                'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; ' + mapLink + ' Contributors',
                maxZoom: 17,
                }).addTo(map); </script>`
        } else if (id == 8) {
            return `<script> var map = L.map('map').setView([40.63225, -111.71871], 18);
            mapLink = 
                '<a href="http://openstreetmap.org">OpenStreetMap</a>';
            L.tileLayer(
                'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; ' + mapLink + ' Contributors',
                maxZoom: 18,
                }).addTo(map); </script>`
        } else if (id == 9) {
            return `<script> var map = L.map('map').setView([48.39597, -122.18930], 18);
            mapLink = 
                '<a href="http://openstreetmap.org">OpenStreetMap</a>';
            L.tileLayer(
                'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; ' + mapLink + ' Contributors',
                maxZoom: 18,
                }).addTo(map); </script>`
        } else {
            return `<script> var map = L.map('map').setView([38.7364, -109.5189], 16);
            mapLink = 
                '<a href="http://openstreetmap.org">OpenStreetMap</a>';
            L.tileLayer(
                'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; ' + mapLink + ' Contributors',
                maxZoom: 16,
                }).addTo(map); </script>`
        }
    }
}