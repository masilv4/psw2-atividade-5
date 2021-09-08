exports.getAllStudents = (req, res) => {
  res.json(
    [
      {
        id: 1,
        name: 'João da Silva'
      },
      {
        id: 2,
        name: 'Maria Joaquina'
      },
      {
        id: 3,
        name: 'Carlos Eduardo'
      },
      {
        id: 4,
        name: 'Anitta Garibaldi'
      },
      {
        id: 5,
        name: 'Luiz Marcos'
      }
    ]
  )
}