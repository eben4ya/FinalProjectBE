let numbers = [];

// CRUD => Create, Read, Update, Delete

// Create
exports.createNumber = (req, res) => {
  const { num } = req.body;

  if (typeof num !== "number") {
    return res.status(400).json({
      error: "Invalid Input!",
    });
  }

  numbers.push(num);

  res.status(200).json({
    numbers,
  });
};

// READ

exports.getNumber = (req, res) => {
  res.status(200).json({
    numbers,
  });
};

// UPDATE

exports.updateNumber = (req, res) => {
  const { num, newNum } = req.body;

  if (typeof num !== "number" || typeof newNum !== "number") {
    return res.status(400).json({
      error: "Invalid Input!",
    });
  }

  const index = numbers.indexOf(num);

  if (index === -1) {
    return res.status(404).json({
      error: "Number not found!",
    });
  }

  numbers[index] = newNum;
  res.status(200).json({
    numbers,
  });
};

// DELETE

exports.deleteNumber = (req, res) => {
  const { num } = req.body;

  if (typeof num !== "number") {
    return res.status(400).json({
      error: "Invalid Input!",
    });
  }

  numbers = numbers.filter((n) => n !== num);
  res.status(200).json({
    numbers,
  });
};
