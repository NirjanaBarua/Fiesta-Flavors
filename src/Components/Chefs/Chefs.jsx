import { useContext, useEffect } from "react";
import { useState } from "react";
import Chef from "../Chef/Chef";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


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
        <div>
            <h1 className="text-center text-2xl font-bold mt-6">Our Chefs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-20">

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