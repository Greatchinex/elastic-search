import { client } from "../../config/elasticSearch";

export default {
  getConstituency: async (req, res, next) => {
    try {
      const { constituency } = req.params;

      const body = {
        query: {
          match: {
            constituencies: constituency
          }
        }
      };

      const result = await client.search({
        index: "naija-constituencies",
        type: "naija-constituencies_list",
        body
      });

      res.status(200).json({ constituencies: result.hits.hits });
    } catch (err) {
      //   return res.status(500).json({ msg: err });
      throw err;
    }
  },

  getDistrict: async (req, res, next) => {
    try {
      const { district } = req.params;

      const body = {
        query: {
          match: {
            districts: district
          }
        }
      };

      const result = await client.search({
        index: "districts",
        type: "districts_list",
        body
      });

      res.status(200).json({ district: result.hits.hits });
    } catch (err) {
      throw err;
    }
  }
};
