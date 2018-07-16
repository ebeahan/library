let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('/GET home', () => {
    it('it should GET the home page', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
            res.should.have.status(200);
        done();
        });
    });
});
