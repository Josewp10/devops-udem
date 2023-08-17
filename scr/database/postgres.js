const { Pool } = require('pg');
const config = require('config');
const dbConfig = config.get('DB');

class ServicePg {
  constructor() {
    this.pool = new Pool(dbConfig);
  }

  async executeSQL(sql, params) {
    try {
      const response = await this.pool.query(sql, params);
      return response.rows;
    } catch (error) {
      console.error('Error executing query:', error);
      throw error;
    }
  }

  async close() {
    await this.pool.end();
  }
}

module.exports = ServicePg;
