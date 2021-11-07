const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data

  // try {
  //   const libraryCardData = await LibraryCard.findAll({
  //     include: [{ model: Reader }],
  //   });
  //   res.status(200).json(libraryCardData);
  // } catch (err) {
  //   res.status(500).json(err);
  // }

  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }

});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data

  // try {
  //   const libraryCardData = await LibraryCard.findByPk(req.params.id, {
  //     include: [{ model: Reader }],
  //   });

  //   if (!libraryCardData) {
  //     res.status(404).json({ message: 'No library card found with that id!' });
  //     return;
  //   }

  //   res.status(200).json(libraryCardData);
  // } catch (err) {
  //   res.status(500).json(err);
  // }

  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!tagData) {
      res.status(404).json({ message: 'No library card found with that id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }

});

router.post('/', async (req, res) => {
  // create a new tag

  // try {
  //   const locationData = await Location.create(req.body);
  //   res.status(200).json(locationData);
  // } catch (err) {
  //   res.status(400).json(err);
  // }

  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }

});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value

  // //Calls the update method on the Book model
  // const updatedBook = await Book.update(
  //   {
  //     // All the fields you can update and the data attached to the request body.
  //     title: req.body.title,
  //     author: req.body.author,
  //     isbn: req.body.isbn,
  //     pages: req.body.pages,
  //     edition: req.body.edition,
  //     is_paperback: req.body.is_paperback,
  //   },
  //   {
  //     // Gets a book based on the book_id given in the request parameters
  //     where: {
  //       book_id: req.params.book_id,
  //     },
  //   }

    const updatedTag = await Tag.update(
      {
        tag_name: req.body.tag_name
      },
      {
        where: {
          id: req.params.id
        },
      }
    );
    res.json(updatedTag);
});

router.delete('/:id',async (req, res) => {
  // delete on tag by its `id` value

  // try {
  //   const locationData = await Location.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   });

  //   if (!locationData) {
  //     res.status(404).json({ message: 'No location found with this id!' });
  //     return;
  //   }

  //   res.status(200).json(locationData);
  // } catch (err) {
  //   res.status(500).json(err);
  // }

  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!tagData) {
      res.status(404).json({ message: 'No location found with this id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;
