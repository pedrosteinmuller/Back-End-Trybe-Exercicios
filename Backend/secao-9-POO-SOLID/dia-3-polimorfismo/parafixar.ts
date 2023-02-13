interface Character {
  name: string;
  specialMove: string;
}

interface DbCharacter extends Character {
  id: number;
}

const db: DbCharacter[] = [];

interface IModel {
  create: (character: Character) => Promise<DbCharacter>;
  update: (id: number, character: Character) => Promise<DbCharacter>;
  delete: (id: number) => Promise<boolean>;
  getAll: () => Promise<DbCharacter[]>;
  getById: (id: number) => Promise<DbCharacter>;
}

class LocalDbModel implements IModel {
  public create = async(character: Character) => {
    const getId = db.length > 0 ? db[db.length - 1].id : 0;
    const newChar = { id: getId + 1, ...character};
    db.push(newChar);
    return newChar
  }

  public findIndexById = (id: number) => {
    const index = db.findIndex((character) => character.id === id);
    if (index < 0) throw new Error('Character not found');
    return index;
  };

  public update = async (id: number, character: Character) => {
    const indexToUpdate = this.findIndexById(id);
    db[indexToUpdate] = { ...db[indexToUpdate], ...character };
    return db[indexToUpdate];
  };

  public delete = async (id: number) => {
    const indexToDelete = this.findIndexById(id);
    const deletedItem = db.splice(indexToDelete, 1);
    if (deletedItem.length > 0) return true;
    return false;
  };

  public getAll = async () => db;

  public getById = async (id: number) => {
    const indexToGet = this.findIndexById(id);
    return db[indexToGet];
  };
}

class CharacterService {
  constructor(readonly model: IModel) { }

  async create(character: Character) {
    const newCharacter = await this.model.create(character);
    return ({ status: 201, data: newCharacter });
  }

  async getAll() {
    const allCharacter = await this.model.getAll();
    return ({ status: 200, data: allCharacter });
  }

  async getById(id: number) {
    const idChar = await this.model.getById(id)
    return ({ status: 200, data: idChar });
  }

  async update(id: number, character: Character) {
    const updateCharacter = await this.model.update(id, character);
    return ({ status: 201, data: updateCharacter})
  }

  async delete(id: number) {
    const deleteCharacter = await this.model.delete(id);
    return ({ status: 200, data: deleteCharacter})
  }
}

class MockDbModel implements IModel {
  async create(character: Character) {
    console.log('character created');
    return { id: 1, name: 'Pedro', specialMove: 'Voar' };
  }

  async update(id: number, character: Character) {
    console.log('character updated');
    return { id: 1, name: 'Pedro Stein', specialMove: 'Ficar invisível' };
  }

  async delete(id: number) {
    console.log('character deleted');
    return true;
  }

  async getAll() {
    return [
      { id: 1, name: 'Nome Aleatorio', specialMove: 'Poder Aleatório' },
      { id: 2, name: 'Nome Aleatorio 2', specialMove: 'Poder Aleatório 2' },
    ];
  }

  async getById(id: number) {
    return { id: 1, name: 'Qualquer 1', specialMove: 'Qualquer 1' };
  }
}

const A = new CharacterService(new LocalDbModel());
A.getAll().then(console.log);

const B = new CharacterService(new MockDbModel());
B.getAll().then(console.log);
