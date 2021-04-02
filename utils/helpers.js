module.exports = {
    render_map: (id) => {
        if (id == 1) {
            return `var map = L.map('map').setView([37.2723,-112.9564], 8);`
        } else if (id == 2) {
            return `var map = L.map('map').setView([34.9002,-111.8107], 8);`
        } else if (id == 3) {
            return `var map = L.map('map').setView([34.1494, -106.4110], 8);`
        } else if (id == 4) {
            return `var map = L.map('map').setView([35.6351, -83.4439], 8);`
        } else if (id == 5) {
            return `var map = L.map('map').setView([34.8195, -1117920], 8);`
        } else if (id == 6) {
            return `var map = L.map('map').setView([44.1608, -71.6450], 8);`
        } else if (id == 7) {
            return `var map = L.map('map').setView([37.62587, -112.16069], 8);`
        } else if (id == 8) {
            return `var map = L.map('map').setView([40.63225, -111.71871], 8);`
        } else if (id == 9) {
            return `var map = L.map('map').setView([48.39597, -122.18930], 8);`
        } else {
            return `var map = L.map('map').setView([38.7364, -109.5189], 8);`
        }
    }
}