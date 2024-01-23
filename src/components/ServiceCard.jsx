// eslint-disable-next-line react/prop-types
const ServiceCard = ({img,provider,service,description,price}) => {
    return <>
        <div className=" my-4 grid grid-rows-2 text-white border rounded-xl">
            <div className="">
                <img src={img} alt="card" className=" invert rounded-xl" />
            </div>
            <div className=" mt-4 mx-4">
                <div className=" grid grid-cols-2 text-md">
                    <div className="">{provider}</div>
                    <div className="">{price}</div>
                </div>
                <div className=" mt-2">
                    <h1 className=" text-xl font-bold">{service}</h1>
                    <p className=" text-md mt-2">{description}</p>
                </div>
            </div>
        </div>
    </>
};
export default ServiceCard;