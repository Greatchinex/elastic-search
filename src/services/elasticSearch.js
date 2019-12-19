import { client } from "../config/elasticSearch";
import { constituency } from "../data/constituency";
import { districts } from "../data/district";

const constituence = [];
const district = [];

// ping the client to be sure Elasticsearch is up
client.ping(
  {
    requestTimeout: 30000
  },
  function(error) {
    // at this point, elastic search is down, please check your Elasticsearch service
    if (error) {
      console.error("Elasticsearch cluster is down!");
    } else {
      console.log("Everything is ok");
    }
  }
);

/*
  NOTE: If you want to perform any of the following operations just Uncomment d code. 
  Kibana and Elastic search has to be setup on your system first
*/

/* Create naija-constituencies index */
// client.indices.create(
//   {
//     index: "districts"
//   },
//   (err, res, status) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(res);
//       console.log(`New Index ${res}`);
//     }
//   }
// );

/* Create districts index */
// client.indices.create(
//   {
//     index: "naija-constituencies"
//   },
//   (err, res, status) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(res);
//       console.log(`New Index ${res}`);
//     }
//   }
// );

/* Populate the naija constituencies index */
// constituency.forEach(consti => {
//   constituence.push({
//     index: {
//       _index: "naija-constituencies",
//       _type: "naija-constituencies_list"
//     }
//   });
//   constituence.push(consti);
// });

// client.bulk({ body: constituence }, function(err, response) {
//   if (err) {
//     console.log("Failed Bulk operation", err);
//   } else {
//     console.log(constituency);
//   }
// });

/* Populate the districs index */
// districts.forEach(dist => {
//   district.push({
//     index: {
//       _index: "districts",
//       _type: "districts_list"
//     }
//   });
//   district.push(dist);
// });

// client.bulk({ body: district }, function(err, response) {
//   if (err) {
//     console.log("Failed Bulk operation", err);
//   } else {
//     console.log(districts);
//   }
// });
