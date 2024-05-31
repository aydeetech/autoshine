import interiorIcon from "../assets/interior-cleaning.svg";
import interiorMain from "../assets/interior-side.svg";
import exteriorIcon from "../assets/exterior-cleaning.svg";
import exteriorMain from "../assets/exterior-side.svg";
import tireIcon from "../assets/tire-cleaning.svg";
import tireMain from "../assets/tire-side.svg";
import waxIcon from "../assets/waxing-cleaning.svg";
import waxMain from "../assets/waxing-side.svg";
import polishingIcon from "../assets/exterior-cleaning.svg";
import polishingMain from "../assets/exterior-side.svg";

const Services = [
    {
        _id: 1,
        name: "Interior Cleaning",
        service_icon: interiorIcon,
        serviceMainImg: interiorMain,
        features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
        
    },
    {
        _id: 2,
        name: "Exterior Cleaning",
        service_icon: exteriorIcon,
        serviceMainImg: exteriorMain,
        features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
        style: "flex-row-reverse"
    },
    {
        _id: 3,
        name: "Tire Cleansing",
        service_icon: tireIcon,
        serviceMainImg: tireMain,
        features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"]
    },
    {
        _id: 4,
        name: "Car Waxing",
        service_icon: waxIcon,
        serviceMainImg: waxMain,
        features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
        style: "flex-row-reverse"
    },
    {
        _id: 5,
        name: "Car Polishing",
        service_icon: polishingIcon,
        serviceMainImg: polishingMain,
        features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"]
    },
    
]

export default Services