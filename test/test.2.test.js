const request = require("supertest");

const app = require("../app");

describe("GET /test", function () {
  it("responds with json", function (done) {
    request(app).get("/test").expect(200, done);
  });
});
