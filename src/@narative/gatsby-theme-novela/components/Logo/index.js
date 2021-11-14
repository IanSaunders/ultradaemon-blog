import React from 'react';

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property vallue called `fill`. `fill` is useful 
 * when you want to change your logo depending on the theme you are on. 
 */
export default function Logo({ fill }) {
  return (
    <text x="0" y="0" style={{color:"#556d7c",fontSize:"1.5em", fontStyle: "normal", fontWeight: "normal", fill: "none", fillOpacity: "1", stroke: "#000000", strokeWidth: "1px", strokeLinecap: "butt", strokeLinejoin: "miter", strokeOpacity: "1",}}><tspan x="0" y="0" >UltraDaemon</tspan></text>
  );
}
