import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {googleMapsMarkerStyles} from './googleMapsMarkerStyles';
// import {googleMapsStyles} from './googleMapStyles';



const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.850657,
      lng: -139.872177
    },
    zoom: 5
  };

  render() {
    const exampleMapStyles = [
      {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
              {
                  color: "#eeeeee",
              },
          ],
      },
      {
          featureType: "poi",
          elementType: "labels.text",
          stylers: [
              {
                  visibility: "off",
              },
          ],
      },
      {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
              {
                  color: "#9e9e9e",
              },
          ],
      },
  ];

    const mapHeight = 101
    console.log(window.innerHeight, 'this is window innerheight')

    const googleMapsStyles = {
      height: `${mapHeight}vh`,
      width: "100vw"
    };

    return (
      // Important! Always set the container height explicitly
      <div style={googleMapsStyles}>
        <GoogleMapReact
          options={{
            styles: [
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#172539"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#23f0c9"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "all",
        "stylers": [
            {
                "color": "#14d190"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#152139"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#172942"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#08ecff"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 21
            },
            {
                "color": "#1e3c64"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#263f56"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#0f346f"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#223f5b"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#27455c"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#1e464a"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#31718f"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#10344f"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#163b5f"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#052429"
            },
            {
                "lightness": 17
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#55bbdd"
            },
            {
                "lightness": "0"
            },
            {
                "weight": "1.50"
            },
            {
                "visibility": "on"
            },
            {
                "saturation": "0"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#114a57"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#33a49f"
            },
            {
                "weight": "1.25"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#1a3456"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#4793c7"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#4dc69d"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
],
          disableDefaultUI: true,
          gestureHandling: "none",
          zoomControl: false
            
         }}
          bootstrapURLKeys={{ key: "AIzaSyADOuKrkVg_Q_yfkY5HlRLaszNV3PprZB4" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          disableDefaultUI={true}
          gestureHandling= "none"
          zoomControl= {false}
          // scrollWheel={false}
        >
          <div style={googleMapsMarkerStyles}
            lat={49.2827}
            lng={-123.1207}
            text="My Marker"
          ></div>
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;

// [
//   {
//       "stylers": [
//           {
//               "visibility": "on"
//           },
//           {
//               "saturation": -100
//           },
//           {
//               "gamma": 0.54
//           }
//       ]
//   },
//   {
//       "featureType": "road",
//       "elementType": "labels.icon",
//       "stylers": [
//           {
//               "visibility": "off"
//           }
//       ]
//   },
//   {
//       "featureType": "water",
//       "stylers": [
//           {
//               "color": "#4d4946"
//           }
//       ]
//   },
//   {
//       "featureType": "poi",
//       "elementType": "labels.icon",
//       "stylers": [
//           {
//               "visibility": "off"
//           }
//       ]
//   },
//   {
//       "featureType": "poi",
//       "elementType": "labels.text",
//       "stylers": [
//           {
//               "visibility": "simplified"
//           }
//       ]
//   },
//   {
//       "featureType": "road",
//       "elementType": "geometry.fill",
//       "stylers": [
//           {
//               "color": "#ffffff"
//           }
//       ]
//   },
//   {
//       "featureType": "road.local",
//       "elementType": "labels.text",
//       "stylers": [
//           {
//               "visibility": "simplified"
//           }
//       ]
//   },
//   {
//       "featureType": "water",
//       "elementType": "labels.text.fill",
//       "stylers": [
//           {
//               "color": "#ffffff"
//           }
//       ]
//   },
//   {
//       "featureType": "transit.line",
//       "elementType": "geometry",
//       "stylers": [
//           {
//               "gamma": 0.48
//           }
//       ]
//   },
//   {
//       "featureType": "transit.station",
//       "elementType": "labels.icon",
//       "stylers": [
//           {
//               "visibility": "off"
//           }
//       ]
//   },
//   {
//       "featureType": "road",
//       "elementType": "geometry.stroke",
//       "stylers": [
//           {
//               "gamma": 7.18
//           }
//       ]
//   }
// ]