

const Chef = ({chef,handleViewRecipes}) => {
    const {chefPicture,chefName,yearsOfExperience,numberOfRecipes,likes}=chef;
    return (
        <div>
            
        <div className="flex flex-col bg-gray shadow-xl border border-slate-200 rounded-lg w-full mt-6 mb-8 hover:border-3 hover:border-gray-300">
            <div className="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
                <img className="w-full h-full object-cover" src={chefPicture} alt="profile-picture" />
            </div>
            <div className="p-6 text-center">
                <h4 className="mb-1 text-xl font-semibold text-slate-700 uppercase">
                    {chefName}
                </h4>
                <p
                    className="text-sm font-semibold text-slate-500 uppercase mt-3">
                    Experience: {yearsOfExperience} Years
                </p>
                <p
                    className="text-sm font-semibold text-slate-500 uppercase">
                    Recipes: {numberOfRecipes}
                </p>
                <p className="text-sm font-semibold text-slate-500 uppercase">Likes: {likes}</p>
            </div>
            <div className="flex justify-center p-6 pt-2 gap-7">
                <button onClick={()=>handleViewRecipes(chef)}className="bg-custom-green min-w-32  rounded-md  py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg  focus:shadow-none  hover:bg-green-800 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none font-bold" type="button">
                    View Recipes
                </button>
            </div>
        </div>
        </div>
        
        
        
    );
};

export default Chef;