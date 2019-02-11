# traffic-flow-cv
My attempts to analyze, debug and provide scoped solutions to solve Chandigarh's traffic problems

- [traffic-flow-cv](#traffic-flow-cv)
  - [Progress](#progress)
  - [Dev Setup](#dev-setup)
  - [TODOs](#todos)
  - [Progress Screenshot](#progress-screenshot)
  - [Resources](#resources)

## Progress
**WIP: 5%**

Please check back later when I have committed enough stuff to care about.

## Dev Setup
- Option 1:
  - `python -m SimpleHTTPServer 5500`
- Option 2:
  - Open project in [VS Code](https://code.visualstudio.com/)
  - Use [VS Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)

## TODOs
1. Create a visual mapping tool **(current)**
   1. ~~Learn and create a p5.js canvas with map overlay~~
   2. Learn to draw shapes and persist according to map zoom levels/tiles of only Chandigarh
   3. Persistent storage for shapes and tiles
   4. Simple on-screen toolbar for annotations
   5. Maybe automate the annotations based on road coordinates (how to get these coordinates for Chandigarh?)
2. Simulate traffic using traffic data source from somewhere and assume there is a CV system in real-life to get the count of cars at each traffic light
3. Maybe try to create a simple version of the CV tool
4. Use the mapping tool to create different traffic systems including the current one in Chandigarh
5. Propose solutions for each scenario
6. Draw comparisons and prepare economic and infrastructure feasibility report for Chandigarh UT administration

## Progress Screenshot

This is what it looks like now

![Alt text](/assets/images/1.png?raw=true "Progress Screenshot")

## Resources
1. https://p5js.org/examples/
2. https://mappa.js.org/docs/api-mappa.html
3. https://stackoverflow.com/questions/20322823/how-to-get-all-roads-around-a-given-location-in-openstreetmap
