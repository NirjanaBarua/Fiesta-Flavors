

const Chef = ({chef,handleViewRecipes}) => {
    const {chefPicture,chefName,yearsOfExperience,numberOfRecipes,likes}=chef;
    return (
        <div>
            
        <div className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-full mt-6 hover:bg-slate-300">
            <div className="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
                <img className="w-full h-full object-cover" src={chefPicture} alt="profile-picture" />
            </div>
            <div className="p-6 text-center">
                <h4 className="mb-1 text-xl font-semibold text-slate-800">
                    {chefName}
                </h4>
                <p
                    className="text-sm font-semibold text-slate-500 uppercase">
                    {yearsOfExperience}
                </p>
                <p className="text-base text-slate-600 mt-4 font-light ">
                    The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.
                </p>
            </div>
            <div className="flex justify-center p-6 pt-2 gap-7">
                <button onClick={()=>handleViewRecipes(chef)}className="min-w-32  rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                    View Recipes
                </button>
            </div>
        </div>
        </div>
        
        
        
    );
};

export default Chef;