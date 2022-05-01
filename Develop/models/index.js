// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category ex: [Addidas Shoes belong to Shoe Category,  1Product:1Category]
Product.belongsTo(Category, {
  foreignKey: 'category_id'
})
// Categories have many Products ex [ Jacket Category => Summer ,spring ,winter 1 category: M Products ]
Category.hasMany(Product, {
  foreignKey: 'category_id'
}); 

// Products belongToMany Tags (through ProductTag) M : M [4shoes: 4tags]
Product.belongsToMany(Tag, {
  through: ProductTag, 
  foreignKey: 'product_id'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag, 
  foreignKey: 'tag_id'
}); 

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
