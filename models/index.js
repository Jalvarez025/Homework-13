// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

// Book.belongsTo(Reader, {
//   foreignKey: 'reader_id',
// });

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products

// Reader.hasMany(Book, {
//   foreignKey: 'reader_id',
//   onDelete: 'CASCADE',
// });

Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

// Products belongToMany Tags (through ProductTag)

// Traveller.belongsToMany(Location, {
//   // Define the third table needed to store the foreign keys
//   through: {
//     model: Trip,
//     unique: false
//   },
//   // Define an alias for when data is retrieved
//   as: 'planned_trips'
// });

Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'tagged_products'
});

// Tags belongToMany Products (through ProductTag)

// Location.belongsToMany(Traveller, {
//   // Define the third table needed to store the foreign keys
//   through: {
//     model: Trip,
//     unique: false
//   },
//   // Define an alias for when data is retrieved
//   as: 'location_travellers'
// });

Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
