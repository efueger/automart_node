import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index';

import { validCarFixtures, invalidCarFixtures } from './fixtures/car';
import { users, cars } from '../datastore';

const { should, expect } = chai;
should();
chai.use(chaiHttp);
let userClaim;
let adminToken;
let ownerClaim;

describe('Create token for user', () => {
    it('Should create token after successful login', async () => {
        const res = await chai.request(app)
            .post('/api/v1/auth/login')
            .send({
                email: 'iknagod@gmail.com',
                password: 'jamespass'
            })
                expect(res).to.have.status(200);
                userClaim = res.body.data.token;
    });

    it('Should create token for admin after successful login', async () => {
        const res = await chai.request(app)
            .post('/api/v1/auth/login')
            .send({
                email: 'tayoka@gmail.com',
                password: 'tayoabdulabc'
            })
                expect(res).to.have.status(200);
                adminToken = res.body.data.token;
    });

    it('Should create token for admin after successful login', async () => {
        const res = await chai.request(app)
            .post('/api/v1/auth/login')
            .send({
                email: 'pecky@gmail.com',
                password: 'peckkesh123'
            })
                expect(res).to.have.status(200);
                ownerClaim = res.body.data.token;
    });
});


describe('Test for Cars routes', () => {
    describe('Test for postAd route', () => {
        it('should return 201 status and post ad', async () => {
            const newLength = cars.length + 1;
            const res = await chai.request(app)
            .post('/api/v1/car')
            .set('authorization', userClaim)
            .send(validCarFixtures[0])
            res.should.have.status(201);
            res.body.should.be.an('object');
            expect(res.body.status).to.equal(201);
            expect(res.body.data).to.be.a('object');
            expect(cars).to.have.length(newLength);
        });
        it('should return 201 status and post ad', async () => {
            const newLength = cars.length + 1;
            const res = await chai.request(app)
            .post('/api/v1/car')
            .set('authorization', userClaim)
            .send(validCarFixtures[1])
            res.should.have.status(201);
            res.body.should.be.an('object');
            expect(res.body.status).to.equal(201);
            expect(res.body.data).to.be.a('object');
            expect(cars).to.have.length(newLength);
        });
        //state
        it('should return 400 status code and not post ad', async () => {
            const res = await chai.request(app)
            .post('/api/v1/car')
            .set('authorization', userClaim)
            .send(invalidCarFixtures[0])
             res.should.have.status(400);
             res.body.should.be.an('object');
             expect(res.body.status).to.equal(400);
             expect(res.body.errors).to.be.a('object');
        });

        it('should return 400 status code and not post ad', async () => {
            const res = await chai.request(app)
            .post('/api/v1/car')
            .set('authorization', userClaim)
            .send(invalidCarFixtures[1])
             res.should.have.status(400);
             res.body.should.be.an('object');
             expect(res.body.status).to.equal(400);
             expect(res.body.errors).to.be.a('object');
        });
        //price
        it('should return 400 status code and not post ad', async () => {
            const res = await chai.request(app)
            .post('/api/v1/car')
            .set('authorization', userClaim)
            .send(invalidCarFixtures[2])
             res.should.have.status(400);
             res.body.should.be.an('object');
             expect(res.body.status).to.equal(400);
             expect(res.body.errors).to.be.a('object');
        });
        it('should return 400 status code and not post ad', async () => {
            const res = await chai.request(app)
            .post('/api/v1/car')
            .set('authorization', userClaim)
            .send(invalidCarFixtures[3])
             res.should.have.status(400);
             res.body.should.be.an('object');
             expect(res.body.status).to.equal(400);
             expect(res.body.errors).to.be.a('object');
        });
        //manufacturer
        it('should return 400 status code and not post ad', async () => {
            const res = await chai.request(app)
            .post('/api/v1/car')
            .set('authorization', userClaim)
            .send(invalidCarFixtures[4])
             res.should.have.status(400);
             res.body.should.be.an('object');
             expect(res.body.status).to.equal(400);
             expect(res.body.errors).to.be.a('object');
        });
        it('should return 400 status code and not post ad', async () => {
            const res = await chai.request(app)
            .post('/api/v1/car')
            .set('authorization', userClaim)
            .send(invalidCarFixtures[5])
             res.should.have.status(400);
             res.body.should.be.an('object');
             expect(res.body.status).to.equal(400);
             expect(res.body.errors).to.be.a('object');
        });
        //model
        it('should return 400 status code and not post ad', async () => {
            const res = await chai.request(app)
            .post('/api/v1/car')
            .set('authorization', userClaim)
            .send(invalidCarFixtures[6])
             res.should.have.status(400);
             res.body.should.be.an('object');
             expect(res.body.status).to.equal(400);
             expect(res.body.errors).to.be.a('object');
        });
        it('should return 400 status code and not post ad', async () => {
            const res = await chai.request(app)
            .post('/api/v1/car')
            .set('authorization', userClaim)
            .send(invalidCarFixtures[7])
             res.should.have.status(400);
             res.body.should.be.an('object');
             expect(res.body.status).to.equal(400);
             expect(res.body.errors).to.be.a('object');
        });
        //bodytype
        it('should return 400 status code and not post ad', async () => {
            const res = await chai.request(app)
            .post('/api/v1/car')
            .set('authorization', userClaim)
            .send(invalidCarFixtures[8])
             res.should.have.status(400);
             res.body.should.be.an('object');
             expect(res.body.status).to.equal(400);
             expect(res.body.errors).to.be.a('object');
        });
        it('should return 400 status code and not post ad', async () => {
            const res = await chai.request(app)
            .post('/api/v1/car')
            .set('authorization', userClaim)
            .send(invalidCarFixtures[9])
             res.should.have.status(400);
             res.body.should.be.an('object');
             expect(res.body.status).to.equal(400);
             expect(res.body.errors).to.be.a('object');
        });
        //imageurl
        it('should return 400 status code and not post ad', async () => {
            const res = await chai.request(app)
            .post('/api/v1/car')
            .set('authorization', userClaim)
            .send(invalidCarFixtures[10])
             res.should.have.status(400);
             res.body.should.be.an('object');
             expect(res.body.status).to.equal(400);
             expect(res.body.errors).to.be.a('object');
        });
    });

    describe('Test for getAdRoutes', () => {
        it('Should return 200 status code and serve a single Ad', async () => {
            const res = await chai.request(app)
            .get('/api/v1/car/1')
            res.should.have.status(200);
            res.body.should.be.an('object');
            expect(res.body.status).to.equal(200);
            expect(res.body.data).to.be.a('object');
        });

        it('Should return 404 status code and not serve a single Ad', async () => {
            const res = await chai.request(app)
            .get('/api/v1/car/qui')
            res.should.have.status(404);
            res.body.should.be.an('object');
            expect(res.body.status).to.equal(404);
            expect(res.body.error).to.equal('Car not found');
        });

        it('Should fetch all car ads n the db and return 200 status code', async () => {
            const res = await chai.request(app)
            .get('/api/v1/car')
            .set('authorization', adminToken)
            res.should.have.status(200);
            res.body.should.be.an('object');
            expect(res.body.status).to.equal(200);
            expect(res.body.data).to.be.an('array');
        });

        it('Should return 401 status code not serve all Ads for non-admin', async () => {
            const res = await chai.request(app)
            .get('/api/v1/car')
            .set('authorization', userClaim)
            res.should.have.status(401);
            res.body.should.be.an('object');
            expect(res.body.status).to.equal(401);
            expect(res.body.error).to.be.equal('Permission denied');
        });
    })

    describe('Test for PATCH endpoint', () => {
        it('Should allow owner update car ad status and return status code of 200', async () => {
            const res = await chai.request(app)
            .patch('/api/v1/car/2/status')
            .set('authorization', ownerClaim)
            res.should.have.status(200);
            res.body.should.be.an('object');
            expect(res.body.status).to.equal(200);
            expect(res.body.data).to.be.an('object');
        });
        it('Should not allow owner update car ad status and return status code of 422', async () => {
            const res = await chai.request(app)
            .patch('/api/v1/car/2/status')
            .set('authorization', ownerClaim)
            res.should.have.status(422);
            res.body.should.be.an('object');
            expect(res.body.status).to.equal(422);
            expect(res.body.error).to.be.equal('This ad has already been marked as sold');
        });
        it('Should allow owner update car ad price and return status code of 200', async () => {
            const res = await chai.request(app)
            .patch('/api/v1/car/2/price')
            .set('authorization', ownerClaim)
            .send({price: '3000000'})
            res.should.have.status(200);
            res.body.should.be.an('object');
            expect(res.body.status).to.equal(200);
            expect(res.body.data).to.be.an('object');
        });
        it('Should not allow owner update car ad price and return status code of 400', async () => {
            const res = await chai.request(app)
            .patch('/api/v1/car/2/price')
            .set('authorization', ownerClaim)
            .send({price: ''})
            res.should.have.status(400);
            res.body.should.be.an('object');
            expect(res.body.status).to.equal(400);
            expect(res.body.error).to.be.equal('Enter a price or retain the old price');
        });
    });

    describe('Test for DELETE endpoint', () => {
        it('Should allow admin delete a resource and return status code of 200', async () => {
            const res = await chai.request(app)
            .delete('/api/v1/car/3')
            .set('authorization', adminToken)
            res.should.have.status(200);
            res.body.should.be.an('object');
            expect(res.body.status).to.equal(200);
            expect(res.body.data).to.be.equal('Car Ad successfully deleted');
        });
    });
});

// Before hooks
// describe('Cars', () => {
//     before(async () => {
//         const response = await chai
//             .request(app)
//             .post('/api/v1/auth/login')
//             .send({
//                 email: '',
//                 password: 'pass'
//             });
//         adToken = response.body.data.token;


//         await chai
//             .request(app)
//             .post
//     });
// });


// describe('Create token for user', () => {
//     it('Should create token after successful login', async () => {
//         const res = await chai.request(app)
//             .post('/api/v1/auth/login')
//             .send({
//                 email: 'bbb',
//                 password: 'pass'
//             })
//         expect(res).to.have.status(200);
//         ownerClaim = res.body.data.token;
//     });
// });