# traffic-flow-cv

- [traffic-flow-cv](#traffic-flow-cv)
  - [Description](#description)
    - [What?](#what)
    - [Why?](#why)
    - [How?](#how)
  - [Progress](#progress)
  - [Dev Setup](#dev-setup)
  - [TODOs](#todos)
  - [Progress Screenshot](#progress-screenshot)
  - [Resources](#resources)

## Description
### What?
This is my attempt to analyze, debug and provide scoped solutions to solve Chandigarh's traffic problems.

### Why?
In December 2018 I went back to my home city of Chandigarh, which has perhaps the most consistent grid layout in the country. Yet I noticed a sharp increase in traffic congestion at traffic lights and intersections. Inspite of having an unrestricted traffic flow inbetween the lights, the existence of congestion and slowdowns made me think about how I can fix this with a proposal (real-life PR?) to the city adminstration with least amount of infrastructure and organizational changes.

### How?
I am using p5.js ([wut?](https://www.youtube.com/watch?v=8j0UDiN7my4)) for visualizing the traffic, plan to use a yet undecided Computer Vision solution to get real-time traffic (or at least simulate), create some scenarios of how traffic should be managed (including existing implementation by Chandigarh UT administration) and propose solutions to make traffic flow intelligent (e.g., making traffic lights intelligent and not have fixed countdowns)

## Progress
**WIP: 5%**

Please check back later when I have committed enough stuff to care about.

## Dev Setup
- Option 1:
  - `python -m SimpleHTTPServer 5500`
- Option 2:
  - Open project in [VS Code](https://code.visualstudio.com/)
  - Use [VS Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
  - [OPTIONAL] [Chrome Debugger](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
  - [OPTIONAL] [p5.js VS Code Snippets](https://marketplace.visualstudio.com/items?itemName=acidic9.p5js-snippets)

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
4. [Chandigarh 2031 Master Plan](http://chandigarh.gov.in/cmp_2031.htm)
