const getHouses = (req, res, next) => {
  req.app
    .get("db")
    .get_houses()
    .then(response => {
      //   console.log(response);
      res.status(200).json(response);
    })
    .catch(response => {
      //   console.log(response);
      res.status(500).json("err");
    });
};
const createHouse = (req, res, next) => {
  console.log('hit the enpoint "/api/house" ');
  const { name, address, city, state, zip, img, mortgage, rent } = req.body;
  req.app
    .get("db")
    .create_house([name, address, city, state, zip, img, mortgage, rent])
    .then(response => res.status(200).json(response))
    .catch(error => console.log(error));
};
const deleteHouse = (req, res, next) => {
  console.log(req.params);
  const { id } = req.params;
  console.log(typeof id);
  req.app
    .get("db")
    .delete_house([id])
    .then(response => {
      //   console.log(response);
      res.status(200).json(response);
    })
    .catch(error => console.log(error));
};

module.exports = { getHouses, createHouse, deleteHouse };
