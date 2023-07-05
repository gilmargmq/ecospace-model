import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/react";

const sample_producers = [
    {
        name: 'Productor 1',
        description: 'Description 1',
        image: './sample_img_1.jpg',
        link: './#/productores/productor-1'
    },
    {
        name: 'Productor 2',
        description: 'Description 2',
        image: './sample_img_1.jpg',
        link: './#/productores/productor-2'
    },
    {
        name: 'Productor 3',
        description: 'Description 3',
        image: './sample_img_1.jpg',
        link: './#/productores/productor-3'
    },
    {
        name: 'Productor 4',
        description: 'Description 4',
        image: './sample_img_1.jpg',
        link: './#/productores/productor-4'
    },
    {
        name: 'Productor 5',
        description: 'Description 5',
        image: './sample_img_1.jpg',
        link: './#/productores/productor-5'
    },
    {
        name: 'Productor 6',
        description: 'Description 6',
        image: './sample_img_1.jpg',
        link: './#/productores/productor-6'
    },
    {
        name: 'Productor 7',
        description: 'Description 7',
        image: './sample_img_1.jpg',
        link: './#/productores/productor-7'
    },
    {
        name: 'Productor 8',
        description: 'Description 8',
        image: './sample_img_1.jpg',
        link: './#/productores/productor-8'
    },
    {
        name: 'Productor 9',
        description: 'Description 9',
        image: './sample_img_1.jpg',
        link: './#/productores/productor-9'
    },
    {
        name: 'Productor 10',
        description: 'Description 10',
        image: './sample_img_1.jpg',
        link: './#/productores/productor-10'
    },
]

const ProducersIndex = () => {
    return (
        <div>
            <div className="h-[10vh] w-full relative">
                <img
                    className="w-full h-full object-cover"
                    alt='bg'
                    src='./sample-bg.jpg'
                />
                <div className='absolute inset-0 flex flex-col items-center text-center justify-center space-y-4'>
                    <span className='text-4xl text-gray-600 font-bold'>
                        Productores
                    </span>
                </div>
            </div>
            <div className="bg-white flex flex-col items-center space-y-6 justify-center p-6">
                <div className='w-2/5 grid lg:grid-cols-2 md:grid-cols-1 gap-6 py-8'>
                    {
                        sample_producers.map((producer, index) => (
                            <div key={index}>
                                <div className="border shadow-md flex flex-col space-y-2">
                                    <div className="h-48 w-full relative overflow-hidden">
                                        <img
                                            className='h-full w-full object-cover'
                                            src={producer.image}
                                            alt='sample img'
                                        />
                                    </div>
                                    <a href={producer.link}>
                                        <div className="p-4 flex flex-col cursor-pointer">
                                            <span className="text-2xl font-medium text-green-400">
                                                {producer.name}
                                            </span>
                                            <span className="text-lg">
                                                {producer.description}
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
}

export default ProducersIndex