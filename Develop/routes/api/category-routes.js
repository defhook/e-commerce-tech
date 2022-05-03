const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: Product
  }).then(categoryData => { //success
    res.json(categoryData); 
  }).catch(error => //failure 
     {console.log("Sql error", error);}); 

});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
console.log("Category for id ", req.params.id)
 Category.findOne({ //success or error 
    where: {
      id: req.params.id
    }, 
    include: Product
  }).then(categoryData => { //success
    res.json(categoryData); 
  }).catch(error => //failure 
     {console.log("Sql error", error);}); 
});

router.post('/', (req, res) => {
  console.log("New Category Information", req.body);
  // create a new category
  Category.create(req.body)
  .then(result=>res.json(result))
  .catch(error => 
    {console.log("Error")})
});

router.put('/:id', (req, res) => {
  console.log("update Information", req.body, " for ", req.params.id);
  // update a category by its `id` value
   Category.update( req.body
     ,{where : {
    id: req.params.id
  }}).then(result => res.json(result))
  .catch(error => console.log(error));
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({where: {id: req.params.id}})
  .then(result => res.json(result))
  .catch(error => console.log(error));
});

module.exports = router;
