import { useLocation } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ChefRecipes = () => {
    const location = useLocation();
    const { chef } = location.state || {};

    const handleFavorite=(recipeName)=>{
        toast.success(`${recipeName} is your favorite!`, {
            position: "top-right"
            
        });
    }
    return (
        // Chefs Details
        <div className="bg-custom-rgba">
            <div className="card lg:card-side bg-base-100 shadow-xl lg:ml-20 lg:mr-20 sm:ml-5 sm:mr-5">
                <figure className="w-full  h-[32rem] ">
                    <div className=" w-full h-full  ">

                        <img className="w-full h-full "
                            src={chef.chefPicture}
                            alt="" />
                    </div>
                </figure>
                <div className="card-body w-full lg:w-1/2 h-96">
                <div className="lg:mt-10">
                <h2 className="card-title  text-xl font-bold text-slate-700 uppercase lg:mb-4">{chef.chefName}</h2>
                    <p>{chef.bio}</p>
                    <p className="mt-4 " ><span className="text-sm font-bold  uppercase ">Experience: </span>{chef.yearsOfExperience} years</p>
                    <p ><span className="text-sm font-bold  uppercase">Number of Recipes: </span>{chef.numberOfRecipes}</p>
                    <p ><span className="text-sm font-bold  uppercase">Likes: </span>{chef.likes}</p>
                </div>
                   
                </div>
            </div>
            {/* Featured Recipes */}
            <h1 className="text-center text-2xl font-bold mt-6 mb-6">Featured Recipes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-20 sm:w-full">
            {chef.recipes.map((recipe, index) => (
                <div key={index} className=" flex flex-col bg-white shadow-sm border border-slate-200 ">
                    
                        <figure>
                            <img
                                src={recipe.recipePicture}
                                alt="" className="w-full h-64 " />
                        </figure>
                        <div className="card-body ">
                            <h2 className="card-title">{recipe.recipeName}</h2>
                            <p><strong>Ingredients:</strong></p>
                            <ul className="list-disc pl-5">
                                {recipe.ingredients.map((ingredient, id) =>
                                    <li key={id}>{ingredient}</li>)}

                            </ul>
                            <p><strong>Cooking Method:</strong> {recipe.cookingMethod}</p>
                            <p><strong>Rating:</strong> {recipe.rating}</p>
                            <div className="card-actions justify-center">
                                <button onClick={()=>handleFavorite(recipe.recipeName)} className="btn bg-custom-green text-white  hover:bg-green-800">Favorite</button>
                                <ToastContainer></ToastContainer>
                            </div>
                        </div>
                   

                </div>
            ))}
            </div>
            



        </div>
    );
};

export default ChefRecipes;