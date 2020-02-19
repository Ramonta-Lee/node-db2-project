exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin: "VIN001",
          make: "Test1",
          model: "Test01",
          mileage: "1234",
          "transmission type": "Automatic",
          "title status": "Clean"
        },
        {
          vin: "VIN002",
          make: "Test2",
          model: "Test02",
          mileage: "12345",
          "transmission type": "Automatic",
          "title status": "Clean"
        },
        {
          vin: "VIN003",
          make: "Test3",
          model: "Test03",
          mileage: "123456",
          "transmission type": "Manual",
          "title status": "Salvage"
        },
        {
          vin: "VIN004",
          make: "Test4",
          model: "Test04",
          mileage: "1234567",
          "transmission type": "Automatic",
          "title status": "Wreck"
        }
      ]);
    });
};
