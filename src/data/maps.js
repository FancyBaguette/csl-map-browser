// All data taken from https://skylines.country/
// Typed this all by hand :'(

// OBJECT TEMPLATE:
// {
//     name: "Black Woods",
//     map_type: "Boreal",
//     latitude: 66,
//     longitude: 98,
//     buildable_land_area: 69,
//     milestones: {
//     little_hamlet: 320,
//         worthy_village: 320,
//         tiny_town: 650,
//         boom_town: 1800,
//         busy_town: 3600,
//         big_town: 5500,
//         small_city: 7500,
//         big_city: 12000,
//         grand_city: 15000,
//         capital_city: 24000,
//         colossal_city: 34000,
//         metropolis: 48000,
//     },
//     highways: {
//         incoming: 4,
//             outgoing: 4,
//     },
//     rails: {
//         incoming: 4,
//             outgoing: 4,
//     },
//     ships: {
//         incoming: 1,
//             outgoing: 1,
//     },
//     airways: {
//         incoming: 4,
//             outgoing: 4,
//     },
//     resources: {
//         forestry: 18.5491,
//             fertile_land: 3.257774,
//             ore: 5.91077,
//             oil: 5.65507,
//             water: 21.7079,
//     },
//     atmospheric_events: {
//         daytime_rain: 15,
//             nighttime_rain: 20,
//             daytime_fog: 15,
//             nighttime_fog: 20,
//             northern_lights: 25,
//     },
//     temperatures: {
//         daytime: {
//             min: 10,
//                 max: 25,
//         },
//         nighttime: {
//             min: 1,
//                 max: 11,
//         },
//         rain: {
//             min: 5,
//                 max: 15,
//         },
//         fog: {
//             min: 5,
//                 max: 15,
//         },
//     },
// },

// !!! IMPORTANT !!!
// resources & atmospheric_events are PERCENTAGES
// temperatures are in CELSIUS
export default [
  {
    name: "Black Woods",
    map_type: "Boreal",
    latitude: 66,
    longitude: 98,
    buildable_land_area: 69,
    milestones: {
      little_hamlet: 320,
      worthy_village: 320,
      tiny_town: 650,
      boom_town: 1800,
      busy_town: 3600,
      big_town: 5500,
      small_city: 7500,
      big_city: 12000,
      grand_city: 15000,
      capital_city: 24000,
      colossal_city: 34000,
      metropolis: 48000,
    },
    highways: {
      incoming: 4,
      outgoing: 4,
    },
    rails: {
      incoming: 4,
      outgoing: 4,
    },
    ships: {
      incoming: 1,
      outgoing: 1,
    },
    airways: {
      incoming: 4,
      outgoing: 4,
    },
    resources: {
      forestry: 18.5491,
      fertile_land: 3.257774,
      ore: 5.91077,
      oil: 5.65507,
      water: 21.7079,
    },
    atmospheric_events: {
      daytime_rain: 15,
      nighttime_rain: 20,
      daytime_fog: 15,
      nighttime_fog: 20,
      northern_lights: 25,
    },
    temperatures: {
      daytime: {
        min: 10,
        max: 25,
      },
      nighttime: {
        min: 1,
        max: 11,
      },
      rain: {
        min: 5,
        max: 15,
      },
      fog: {
        min: 5,
        max: 15,
      },
    },
  },
];
