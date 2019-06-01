import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index';

const { should, expect } = chai;
should();

chai.use(chaiHttp);

const url = '/balderdash';
const msg1 = 'Welcome to Automart automobile';
const msg2 = 'Sorry, page not found!';

describe('Test for index route', () => {
  describe('GET request to home page', () => {
    it('It should return the page', (done) => {
      chai.request(app)
        .get('/api/v1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          expect(res.body.data).to.equal(msg1);
          done();
        });
    });
  });
  it('It should return page not found', (done) => {
    chai.request(app)
      .get(url)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.a('object');
        expect(res.body.error).to.equal(msg2);
        done();
      });
  });
});