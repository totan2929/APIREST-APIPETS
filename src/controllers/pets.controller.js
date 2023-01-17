import { getConnection } from "./../database/database";
const getPets = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT id, nombre, stock, precio FROM medicamentos"
    );

    /* const result2 = await connection.query(
      "SELECT id, nombre, stock, precio FROM medicamentos"
    ); */
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getPets2 = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT id, nombre, stock, precio FROM concentrados"
    );

    /* const result2 = await connection.query(
      "SELECT id, nombre, stock, precio FROM medicamentos"
    ); */
    console.log(result);
    //console.log(result2);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
const addMedicamento = async (req, res) => {
  try {
    const { nombre, stock, precio } = req.body;
    if (nombre === undefined || stock === undefined || precio === undefined) {
      res.status(400).json({ message: "El producto no se pudo registrar" });
    }
    const medicamento = { nombre, stock, precio };
    const connection = await getConnection();
    const result = await connection.query(
      "INSERT INTO medicamentos SET ?",
      medicamento
    );
    res.json({ message: "El producto se registró" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const addConcentrado = async (req, res) => {
  try {
    const { nombre, stock, precio } = req.body;
    if (nombre === undefined || stock === undefined || precio === undefined) {
      res.status(400).json({ message: "El producto no se pudo registrar" });
    }
    const concentrado = { nombre, stock, precio };
    const connection = await getConnection();
    const result = await connection.query(
      "INSERT INTO concentrados SET ?",
      concentrado
    );
    res.json({ message: "El producto se registró" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getPets,
  getPets2,
  addMedicamento,
  addConcentrado,
};
