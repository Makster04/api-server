class Collection {
    constructor(model) {
      this.model = model;
    }
  
    async create(data) {
      return await this.model.create(data);
    }
  
    async read() {
      return await this.model.findAll();
    }
  
    async readOne(id) {
      return await this.model.findByPk(id);
    }
  
    async update(id, data) {
      await this.model.update(data, { where: { id } });
      return await this.model.findByPk(id);
    }
  
    async delete(id) {
      const deletedRecord = await this.model.findByPk(id);
      await this.model.destroy({ where: { id } });
      return deletedRecord;
    }
  }
  
  module.exports = Collection;
  
