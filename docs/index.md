---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  # name: "*.geo.admin.ch"
  text: 'Welcome to the Tech Docs of geo.admin.ch'
  tagline: We provide web services and components to interact with the Federal Spatial Data Infrastructure (FSDI). The tech docs are dedicated to developers using these services.
  image:
    src: /swisstopo_map.png
    alt: Geoportal
  actions:
    - text: Get started
      link: /get-started/overview
    - theme: alt
      text: Getting help
      link: /page/get-help

features:
  - title: Explore Data
    details: Browse additional information about layers, including attributes and other metadata.
    link: /explore-data/get-layer-metadata
    icon: 🧭
  - title: Access Data
    details: Retrieve location-based features such as geometries, addresses and elevation.
    link: /access-data/identify-features
    icon: 🔎
  - title: Visualize Data
    details: Access map data (2D and 3D) for visualization in your application.
    icon: 👁
    link: /visualize-data/wms
  - title: Download Data
    details: Download entire datasets for exploration and analysis.
    icon: ⬇️
    link: /download-data/stac-api/overview
  - title: Map Viewer
    details: Integrate and customize map.geo.admin.ch as an interactive map in your webpage.
    icon: 🗺️
    link: /map-viewer/embed-in-an-iframe
---