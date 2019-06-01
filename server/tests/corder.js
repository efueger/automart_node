import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index';

import { validOrderFixture, invalidOrderFixture } from './fixtures/order';
import { cars, orders } from '../datastore';

const { should, expect } = chai;
should();
chai.use(chaiHttp);

let userClaim;


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
});



describe('Test for Orders routes', () => {
    describe('Test for postOrder route', () => {
        it('Should return 201 status code and post order', async () => {
            const newLength = orders.length + 1;
            const res = await chai.request(app)
            .post('/api/v1/order')
            .set('authorization', userClaim)
            .send(validOrderFixture[0])
             res.should.have.status(201);
             res.body.should.be.an('object');
             expect(res.body.status).to.equal(201);
             expect(res.body.data).to.be.a('object');
             expect(orders).to.have.length(newLength);
        });
        it('Should return 400 status code and not post order', async () => {
            const res = await chai.request(app)
            .post('/api/v1/order')
            .set('authorization', userClaim)
            .send(invalidOrderFixture[0])
             res.should.have.status(400);
             res.body.should.be.an('object');
             expect(res.body.status).to.equal(400);
             expect(res.body.errors).to.be.a('object');
        });
        it('Should return 400 status code and not post order', async () => {
            const res = await chai.request(app)
            .post('/api/v1/order')
            .set('authorization', userClaim)
            .send(invalidOrderFixture[1])
             res.should.have.status(400);
             res.body.should.be.an('object');
             expect(res.body.status).to.equal(400);
             expect(res.body.errors).to.be.a('object');
        });
    });
});