import React from 'react'
import foodRecipe from '../assets/foodRecipe.png'
import MainNavigation from '../components/MainNavigation'
import RecipeItems from '../components/RecipeItems'
import { useNavigate } from 'react-router-dom'
import InputForm from '../components/InputForm'
import Modal from '../components/Modal'


export default function Home() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = React.useState(false)
  const addRecipe = () => {
    let token = localStorage.getItem("token")
    if(token){
      navigate("/addRecipe")
    }else{
      setIsOpen(true)
    }
    
  }

  return (
    <>
      <section className="home">
        <div className="left">
          <h1>Food Recipe</h1>
          <h5>Discover, create, and share delicious recipes from around the world. Whether you're a beginner experimenting in the kitchen or a passionate home chef, this platform helps you explore new flavors, organize your favorite dishes, and bring your culinary ideas to life. Save recipes you love, learn step-by-step instructions, and turn everyday cooking into an enjoyable experience.</h5>
          <button onClick={addRecipe}>Share your recipe</button>
        </div>
        <div className="right">
          <img src={foodRecipe} alt="Food Recipe" width="320" height="300"/>
        </div>
      </section>
      <div className="bg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d4f6e8" fillOpacity="1" d="M0,32L40,64C80,96,160,160,240,192C320,224,400,224,480,192C560,160,640,96,720,106.7C800,117,880,203,960,240C1040,277,1120,267,1200,224C1280,181,1360,107,1400,69.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
      </div>
      { (isOpen) && <Modal onClose={() => setIsOpen(false)}><InputForm setIsOpen={()=>setIsOpen(false)}/></Modal> }

      <div className='recipe'>
        <RecipeItems/>
      </div>
    </>
  )
}
