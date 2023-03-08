// exercicio1

db.bios.find({ _id: 8 })

// exercicio2

db.bios.find({ _id: 8 }, { name: 1 })

// exercicio3

db.bios.find({ _id: 8 }, { name: 1, birth: 1, _id: 0 })

// exercicio4

db.bios.find({ "name.first": "John" }).pretty()

// exercicio5

db.bios.find().limit(3).pretty()

// exercicio6

db.bios.find().skip(5).limit(2)

// exercicio7

// usei o comando no terminal: docker exec -i bd3 mongoimport --db class --collection books --jsonArray < books.json
// em que: o comando mongoimport conseguiu importar 431 documentos com sucesso. Isso significa que os dados do arquivo books.json foram importados com êxito para a coleção books em seu banco de dados MongoDB, sendo possivel usar o shell do mongoDB para fazer consultas na colecao books.

db.books.countDocuments({})

// exercicio8

db.books.countDocuments(
  { status: "PUBLISH" }
)

// exercicio9

db.books.find(
  {},
  {
      _id: 0,
      title: 1,
      isbn: 1,
      pageCount: 1
  }
).limit(3).pretty()

// exercicio10

db.books.find(
  {
      status: "MEAP"
  },
  {
      title: 1,
      authors: 1,
      status: 1
  }
).skip(5).limit(10).pretty()