export default class Apod {
  static getDate() {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}
// {
//   "photos": [
//       {
//           "id": 102685,
//           "sol": 1004,
//           "camera": {
//               "id": 20,
//               "name": "FHAZ",
//               "rover_id": 5,
//               "full_name": "Front Hazard Avoidance Camera"
//           },
//           "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FLB_486615455EDR_F0481570FHAZ00323M_.JPG",
//           "earth_date": "2015-06-03",
//           "rover": {
//               "id": 5,
//               "name": "Curiosity",
//               "landing_date": "2012-08-06",
//               "launch_date": "2011-11-26",
//               "status": "active"
//           }
//       },
//       {
//           "id": 102686,
//           "sol": 1004,
//           "camera": {
//               "id": 20,
//               "name": "FHAZ",
//               "rover_id": 5,
//               "full_name": "Front Hazard Avoidance Camera"
//           },
//           "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FRB_486615455EDR_F0481570FHAZ00323M_.JPG",
//           "earth_date": "2015-06-03",
//           "rover": {
//               "id": 5,
//               "name": "Curiosity",
//               "landing_date": "2012-08-06",
//               "launch_date": "2011-11-26",
//               "status": "active"
//           }
//       },
//       {
//           "id": 102842,
//           "sol": 1004,
//           "camera": {
//               "id": 21,
//               "name": "RHAZ",
//               "rover_id": 5,
//               "full_name": "Rear Hazard Avoidance Camera"
//           },
//           "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/rcam/RLB_486615482EDR_F0481570RHAZ00323M_.JPG",
//           "earth_date": "2015-06-03",
//           "rover": {
//               "id": 5,
//               "name": "Curiosity",
//               "landing_date": "2012-08-06",
//               "launch_date": "2011-11-26",
//               "status": "active"
//           }
//       },
//       {
//           "id": 102843,
//           "sol": 1004,
//           "camera": {
//               "id": 21,
//               "name": "RHAZ",
//               "rover_id": 5,
//               "full_name": "Rear Hazard Avoidance Camera"
//           },
//           "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/rcam/RRB_486615482EDR_F0481570RHAZ00323M_.JPG",
//           "earth_date": "2015-06-03",
//           "rover": {
//               "id": 5,
//               "name": "Curiosity",
//               "landing_date": "2012-08-06",
//               "launch_date": "2011-11-26",
//               "status": "active"
//           }
//       }
//   ]
// }
