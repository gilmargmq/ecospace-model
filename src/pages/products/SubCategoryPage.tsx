import { useParams } from "react-router-dom";

const SubCategoryPage = () => {
    const { categoryName, subCategoryName } = useParams()
    return (
        <div>
            <div className="h-[15vh] w-full relative">
                <img
                    className="w-full h-full object-cover"
                    alt='bg'
                    src='./sample-bg.jpg'
                />
                <div className='absolute inset-0 flex flex-col items-center text-center text-gray-600 justify-center space-y-4'>
                    <span className='text-4xl font-bold'>
                        {categoryName}
                    </span>
                    <span className='text-xl font-medium'>
                        {subCategoryName}
                    </span>
                </div>
            </div>
            <div className="bg-white flex flex-col items-center space-y-6 justify-center p-6">
                <span className='text-lg text-gray-600'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id nibh nisi. Nunc aliquam ullamcorper turpis.
                </span>
                <div className='w-3/5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-20 py-8'>
                    <div>
                        <div className="flex flex-col space-y-2">
                            <div className="h-60 w-60 relative self-center">
                                <img
                                    src='./square-img.jpg'
                                    alt='sample square img'
                                />
                            </div>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </span>
                            <span className='text-gray-400 font-medium'>
                                S/ Precio
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col space-y-2">
                            <div className="h-60 w-60 relative self-center">
                                <img
                                    src='./square-img.jpg'
                                    alt='sample square img'
                                />
                            </div>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </span>
                            <span className='text-gray-400 font-medium'>
                                S/ Precio
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col space-y-2">
                            <div className="h-60 w-60 relative self-center">
                                <img
                                    src='./square-img.jpg'
                                    alt='sample square img'
                                />
                            </div>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </span>
                            <span className='text-gray-400 font-medium'>
                                S/ Precio
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col space-y-2">
                            <div className="h-60 w-60 relative self-center">
                                <img
                                    src='./square-img.jpg'
                                    alt='sample square img'
                                />
                            </div>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </span>
                            <span className='text-gray-400 font-medium'>
                                S/ Precio
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col space-y-2">
                            <div className="h-60 w-60 relative self-center">
                                <img
                                    src='./square-img.jpg'
                                    alt='sample square img'
                                />
                            </div>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </span>
                            <span className='text-gray-400 font-medium'>
                                S/ Precio
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col space-y-2">
                            <div className="h-60 w-60 relative self-center">
                                <img
                                    src='./square-img.jpg'
                                    alt='sample square img'
                                />
                            </div>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </span>
                            <span className='text-gray-400 font-medium'>
                                S/ Precio
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col space-y-2">
                            <div className="h-60 w-60 relative self-center">
                                <img
                                    src='./square-img.jpg'
                                    alt='sample square img'
                                />
                            </div>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </span>
                            <span className='text-gray-400 font-medium'>
                                S/ Precio
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col space-y-2">
                            <div className="h-60 w-60 relative self-center">
                                <img
                                    src='./square-img.jpg'
                                    alt='sample square img'
                                />
                            </div>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </span>
                            <span className='text-gray-400 font-medium'>
                                S/ Precio
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col space-y-2">
                            <div className="h-60 w-60 relative self-center">
                                <img
                                    src='./square-img.jpg'
                                    alt='sample square img'
                                />
                            </div>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </span>
                            <span className='text-gray-400 font-medium'>
                                S/ Precio
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col space-y-2">
                            <div className="h-60 w-60 relative self-center">
                                <img
                                    src='./square-img.jpg'
                                    alt='sample square img'
                                />
                            </div>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </span>
                            <span className='text-gray-400 font-medium'>
                                S/ Precio
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SubCategoryPage