/**
 * Radial Gauge created and maintained by Mykhailo Stadnyk
 * 
 * GitHub Project: https://github.com/Mikhus/canvas-gauges
 * 
 * All gauge configuration and setting were generated using the following tutorial 
 * resources from the website listed below.
 * 
 * https://canvas-gauges.com/
 */

// Global Variables
const minVal = 40;
const maxVal = 80;
const dataplicityWormHoleAddress = 'https://intriguing-zebu-9373.dataplicity.io/';
var radialGaugeCanvasId = 'radial-gauge-canvas';

// Gauge Constructor
var gauge = new RadialGauge({
    renderTo: radialGaugeCanvasId,
    width: 300,
    height: 300,
    units: 'ºF',
    title: 'Condo Temperature',
    minValue: minVal,
    maxValue: maxVal,
    majorTicks: [
        '40', '45', '50', '55', '60', '65', '70', '75', '80'
    ],
    minorTicks: 2,
    strokeTicks: true,
    highlights: [
        { 'from': 40, 'to': 55, 'color': 'rgba(0,128,255,0.4)' },
        { 'from': 55, 'to': 70, 'color': 'rgba(153,76,0,.4)' },
        { 'from': 70, 'to': 80, 'color': 'rgba(255,0,0,.4)' }
    ],
    colorPlate: '#fff',
    borderShadowWidth: 0,
    borders: false,
    needleType: 'arrow',
    needleWidth: 2,
    needleCircleSize: 1,
    needleCircleOuter: true,
    needleCircleInner: false,
    animationRule: 'bounce',
    animationDuration: 500,
});

// Draw the gauge
gauge.draw();

// Add an event listener to the canvas object.
document.getElementById(radialGaugeCanvasId).addEventListener("click", updateGaugeVal)

// Dynamically updates the gauge value.
function updateGaugeVal() {
    // Randomly sets the value of the gauge. 
    // This is used for testing purposes.
    gauge.value = (Math.random() * (maxVal - minVal)) + minVal;

    // fetch(dataplicityWormHoleAddress)
    //     .then(res => res.json())
    //     .then((out) => {
    //         console.log('Output: ', out);
    // }).catch(err => console.error(err));
}