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
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl lg:ml-20 lg:mr-20 sm:ml-5 sm:mr-5">
                <figure className="w-full  h-[32rem] ">
                    <div className=" w-full h-full  ">

                        <img className="w-full h-full "
                            src={chef.chefPicture}
                            alt="" />
                    </div>
                </figure>
                <div className="card-body w-full lg:w-1/2 h-96">
                    <h2 className="card-title">{chef.chefName}</h2>
                    <p>{chef.bio}</p>
                    <p>Experience:{chef.yearsOfExperience} years</p>
                    <p>Number of Recipes:{chef.numberOfRecipes}</p>
                    <p>Likes:{chef.likes}</p>
                </div>
            </div>
            {/* Featured Recipes */}
            <h1 className="text-center text-2xl font-bold mt-6 mb-6">Featured Recipes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-20 ">
            {chef.recipes.map((recipe, index) => (
                <div key={index} className=" flex flex-col bg-white shadow-sm border border-slate-200  hover:bg-slate-300">
                    
                        <figure>
                            <img
                                src={chef.chefPicture}
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
                                <button onClick={()=>handleFavorite(recipe.recipeName)} className="btn btn-primary">Favorite</button>
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