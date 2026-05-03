const express = require('express');
const { getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe, upload} = require('../controller/recipecont');
const verifyToken = require('../middleware/auth');
const router = express.Router();



router.get('/', getRecipes); //GET ALL RECIPES
router.get('/:id', getRecipe); //GET A RECIPE BY ID
router.post('/',upload.single('file'),verifyToken,addRecipe); //CREATE A RECIPE
router.put('/:id',upload.single('file'), verifyToken, editRecipe); //EDIT A RECIPE
router.delete('/:id',deleteRecipe); //DELETE A RECIPE

module.exports = router;