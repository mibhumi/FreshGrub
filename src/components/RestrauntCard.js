import { IMG_CDN_URL } from "../Constant";

const RestrauntCard = ({name, cloudinaryImageId, lastMileTravelString, cuisines}) => {

    return (
        <div className="card">
            <img alt="logo" src={IMG_CDN_URL+ cloudinaryImageId}/>
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString} minutes</h4>
        </div>
    );

}

export default RestrauntCard;