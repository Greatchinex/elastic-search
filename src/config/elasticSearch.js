import elasticsearch from "elasticsearch";

export const client = new elasticsearch.Client({
  host: "http://localhost:9200"
});
