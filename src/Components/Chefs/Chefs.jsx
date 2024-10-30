import { useContext, useEffect } from "react";
import { useState } from "react";
import Chef from "../Chef/Chef";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import '../../App.css'


const Chefs = () => {
    const [chefs, setChefs] = useState([]);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('chefsdata.json')
            .then(res => res.json())
            .then(data => setChefs(data));
    }, [])
    const handleViewRecipes = (chef) => {
        if (user) {
            
            navigate(`/chef-recipes`, { state: { chef } });
        } else {
            
            navigate('/login', { state: { from: `/chef-recipes`, chef } });
        }
    }
    return (
        <div >
            <h2 className="text-center text-xl font-bold mt-6 font custom-font-size">Our Chefs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-20 sm:w-full">

                {chefs.map(chef => (
                    <Chef
                        key={chef.id}
                        chef={chef}
                        handleViewRecipes={handleViewRecipes}>

                    </Chef>
                ))}
            </div>
        </div>
    );
};

export default Chefs;