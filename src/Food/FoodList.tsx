import { useState } from "react";
import {Food} from "../types/Food" 

function FoodList () {

    const [foodData, setFoodData] = useState<Food[]>([])
    const fetchFood = async () => {
        const response = await fetch('https://localhost:5001/food');
        const temp = await response.json();
        setFoodData(temp);
    }
    fetchFood()

    return (
        <>
            <div>
                <h4>The Best Food in the Marriott School</h4>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Event Name</th>
                        <th>Vendor</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {foodData.map((f) => (
                        <tr key={f.foodId}>
                            <td>{f.eventName}</td>
                            <td>{f.vendor}</td>
                            <td>{f.rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default FoodList;