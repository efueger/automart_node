import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../..';

import { validRegisterFixture, inValidRegisterFixture, inValidLoginFixture } from './fixtures/user';
import { users } from '../datastore';

const { should, expect } = chai;
should();

chai.use(chaiHttp);

const url = '/api/v1/auth/register';
const loginUrl = '/api/v1/auth/login';

describe('Test for user route', () => {
    describe('Test for register API', () => {
        it('Should return 201 status code and create new user', (done) => {
            const newLength = users.length + 1;
            chai.request(app)
                .post(url)
                .send(validRegisterFixture[0])
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.an('object');
                    expect(res.body.status).to.equal(201);
                    expect(res.body.data).to.be.a('object');
                    expect(users).to.have.length(newLength);
                    done();
                });
        });
        it('Should return 201 status code and create another user', (done) => {
            const newLength = users.length + 1;
            chai.request(app)
                .post(url)
                .send(validRegisterFixture[1])
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.an('object');
                    expect(res.body.status).to.equal(201);
                    expect(res.body.data).to.be.a('object');
                    expect(users).to.have.length(newLength);
                    done();
                });
        });

        /** it('Should return 201 status code and create admin user', async () => {
            const newLength = users.length + 1;
            const res = await chai.request(app)
            .post(url)
            .send(validRegisterFixture[2])
            res.should.have.status(201);
            res.body.should.be.an('object');
            expect(res.body.status).to.equal(201);
            expect(res.body.data).to.be.a('object');
            expect(users).to.have.length(newLength);
        });*/
        it('should return status code 400 and send error message for undefined/empty email', (done) => {
            chai
                .request(app)
                .post(url)
                .send(inValidRegisterFixture[0])
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status');
                    res.body.should.have.property('error');
                    expect(res.body.status).to.equal(400);
                    expect(res.body.error).to.be.an('object');
                    done();
                });
        });
        it('should return status code 400 and send error message for spaced email', (done) => {
            chai
                .request(app)
                .post(url)
                .send(inValidRegisterFixture[1])
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status');
                    res.body.should.have.property('error');
                    expect(res.body.status).to.equal(400);
                    expect(res.body.error).to.be.an('object');
                    done();
                });
        });
        it('should return status code 400 and send error message for invalid email format', (done) => {
            chai
                .request(app)
                .post(url)
                .send(inValidRegisterFixture[2])
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status');
                    res.body.should.have.property('error');
                    expect(res.body.status).to.equal(400);
                    expect(res.body.error).to.be.an('object');
                    done();
                });
        });
        it('should return status code 400 and send error message for existing email', (done) => {
            chai
                .request(app)
                .post(url)
                .send(inValidRegisterFixture[3])
                .end((err, res) => {
                    res.should.have.status(409);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status');
                    res.body.should.have.property('error');
                    expect(res.body.status).to.equal(409);
                    expect(res.body.error).to.equal('Email in use already');
                    done();
                });
        });
        // firstname
        it('should return status code 400 and send error message for undefined/empty firstname', (done) => {
            chai
                .request(app)
                .post(url)
                .send(inValidRegisterFixture[4])
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status');
                    res.body.should.have.property('error');
                    expect(res.body.status).to.equal(400);
                    expect(res.body.error).to.be.an('object');
                    done();
                });
        });
        it('should return status code 400 and send error message for spaced firstname', (done) => {
            chai
                .request(app)
                .post(url)
                .send(inValidRegisterFixture[5])
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status');
                    res.body.should.have.property('error');
                    expect(res.body.status).to.equal(400);
                    expect(res.body.error).to.be.an('object');
                    done();
                });
        });
        it('should return status code 400 and send error message for short firstname', (done) => {
            chai
                .request(app)
                .post(url)
                .send(inValidRegisterFixture[6])
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status');
                    res.body.should.have.property('error');
                    expect(res.body.status).to.equal(400);
                    expect(res.body.error).to.be.an('object');
                    done();
                });
        });
        // lastname
        it('should return status code 400 and send error message for undefined/empty lastname', (done) => {
            chai
                .request(app)
                .post(url)
                .send(inValidRegisterFixture[7])
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status');
                    res.body.should.have.property('error');
                    expect(res.body.status).to.equal(400);
                    expect(res.body.error).to.be.an('object');
                    done();
                });
        });
        it('should return status code 400 and send error message for spaced lastname', (done) => {
            chai
                .request(app)
                .post(url)
                .send(inValidRegisterFixture[8])
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status');
                    res.body.should.have.property('error');
                    expect(res.body.status).to.equal(400);
                    expect(res.body.error).to.be.an('object');
                    done();
                });
        });
        // Password
        it('should return status code 400 and send error message for undefined/empty password', (done) => {
            chai
                .request(app)
                .post(url)
                .send(inValidRegisterFixture[9])
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status');
                    res.body.should.have.property('error');
                    expect(res.body.status).to.equal(400);
                    expect(res.body.error).to.be.an('object');
                    done();
                });
        });
        it('should return status code 400 and send error message for short password length', (done) => {
            chai
                .request(app)
                .post(url)
                .send(inValidRegisterFixture[10])
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status');
                    res.body.should.have.property('error');
                    expect(res.body.status).to.equal(400);
                    expect(res.body.error).to.be.an('object');
                    done();
                });
        });
        it('should return status code 400 and send error message for unspecified address', (done) => {
            chai
                .request(app)
                .post(url)
                .send(inValidRegisterFixture[11])
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status');
                    res.body.should.have.property('error');
                    expect(res.body.status).to.equal(400);
                    expect(res.body.error).to.be.an('object');
                    done();
                });
        });

        describe('Test for login API', () => {
            it('Should return 200 status code and log user in when correctdetails are supplied', (done) => {
                const newLength = users.length;
                chai.request(app)
                    .post(loginUrl)
                    .send(validRegisterFixture[0])
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.an('object');
                        expect(res.body.status).to.equal(200);
                        expect(res.body.data).to.be.a('object');
                        expect(users).to.have.length(newLength);
                        done();
                    });
            });
            it('Should return 400 status code and error message when email is not supplied/empty', (done) => {
                chai.request(app)
                    .post(loginUrl)
                    .send(inValidLoginFixture[0])
                    .end((err, res) => {
                        res.should.have.status(400);
                        res.body.should.be.an('object');
                        res.body.should.have.property('status');
                        res.body.should.have.property('error');
                        expect(res.body.status).to.equal(400);
                        expect(res.body.error).to.be.an('object');
                        done();
                    });
            });
            it('Should return 401 status code and error message when email is not found in the db', (done) => {
                chai.request(app)
                    .post(loginUrl)
                    .send(inValidLoginFixture[1])
                    .end((err, res) => {
                        res.should.have.status(401);
                        res.body.should.be.an('object');
                        res.body.should.have.property('status');
                        res.body.should.have.property('error');
                        expect(res.body.status).to.equal(401);
                        expect(res.body.error).to.equal('Authentication failed');
                        done();
                    });
            });
            it('Should return 400 status code and error message when correct email is supplied but password is empty/undefined', (done) => {
                chai.request(app)
                    .post(loginUrl)
                    .send(inValidLoginFixture[2])
                    .end((err, res) => {
                        res.should.have.status(400);
                        res.body.should.be.an('object');
                        res.body.should.have.property('status');
                        res.body.should.have.property('error');
                        expect(res.body.status).to.equal(400);
                        expect(res.body.error).to.be.an('object');
                        done();
                    });
            });
            it('Should return 401 status code and error message when correct email is supplied but password is not found in the db', (done) => {
                chai.request(app)
                    .post(loginUrl)
                    .send(inValidLoginFixture[3])
                    .end((err, res) => {
                        res.should.have.status(401);
                        res.body.should.be.an('object');
                        res.body.should.have.property('status');
                        res.body.should.have.property('error');
                        expect(res.body.status).to.equal(401);
                        expect(res.body.error).to.equal('Incorrect login details');
                        done();
                    });
            });
        });
    });
});