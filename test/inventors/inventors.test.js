const chai = require('chai');
const expect = chai.expect;
const request = require('supertest'); // Install supertest as a development dependency
const {getInventors,postInventor,putInventor,deleteInventor} = require('./inventors.data')

const app = require('../../scr/index'); // Import your Express app
const _inventors = require('../../scr/libs/inventors/routes/inventors'); // Import your _inventors module

describe('GET /inventors', () => {
    it('should return inventors', async () => {
        _inventors.getInventors = async () => getInventors; // Mock the _inventors.getInventors function

        const response = await request(app).get('/inventors');
        expect(response.status).to.equal(200);
        expect(response.body.ok).to.be.true;
        expect(response.body.data).to.deep.equal(getInventors);
    });
    // Add more test cases for error handling, different scenarios, etc.
});

describe('POST /inventors', () => {
    it('should create a new inventor', async () => {
        _inventors.createInventor = async () => getInventors; // Mock the _inventors.getInventors function

        const response = await request(app).post('/inventors').send(postInventor);
        expect(response.status).to.equal(201);
        expect(response.body.ok).to.be.true;
        expect(response.body.message).to.deep.equal("Inventor data saved");
    });
    // Add more test cases for error handling, different scenarios, etc.
});


describe('PUT /inventors', () => {
    it('should UPDATE a new inventor', async () => {
        _inventors.createInventor = async () => getInventors; // Mock the _inventors.getInventors function

        const response = await request(app).put('/inventors').send(putInventor);
        expect(response.status).to.equal(200);
        expect(response.body.ok).to.be.true;
        expect(response.body.message).to.deep.equal("Inventor data updated");
    });
    // Add more test cases for error handling, different scenarios, etc.
});


describe('DELETE /inventors', () => {
    it('should create a new inventor', async () => {
        _inventors.createInventor = async () => getInventors; // Mock the _inventors.getInventors function

        const response = await request(app).delete(`/inventors?id=${deleteInventor}`);
        expect(response.status).to.equal(200);
        expect(response.body.ok).to.be.true;
        expect(response.body.message).to.deep.equal("Inventor data deleted");
    });
    // Add more test cases for error handling, different scenarios, etc.
});


