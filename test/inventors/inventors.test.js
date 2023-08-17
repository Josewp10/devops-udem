const chai = require('chai');
const expect = chai.expect;
const request = require('supertest'); // Install supertest as a development dependency
const {getInventors} = require('./inventors.data')

const app = require('../../scr/index'); // Import your Express app
const _inventors = require('../../scr/libs/inventors/routes/inventors'); // Import your _inventors module

describe('Route Tests', () => {
    it('should return inventors', async () => {
        _inventors.getInventors = async () => getInventors; // Mock the _inventors.getInventors function

        const response = await request(app).get('/inventors');
        expect(response.status).to.equal(200);
        expect(response.body.ok).to.be.true;
        expect(response.body.data).to.deep.equal(getInventors);
    });

    // Add more test cases for error handling, different scenarios, etc.
});
