
const sample_entries = [
    {
        name: 'Entrada 1',
        description: 'Description 1',
        image: './sample_img_1.jpg',
        link: './#/blog/entrada-1'
    },
    {
        name: 'Entrada 2',
        description: 'Description 2',
        image: './sample_img_1.jpg',
        link: './#/blog/entrada-2'
    },
    {
        name: 'Entrada 3',
        description: 'Description 3',
        image: './sample_img_1.jpg',
        link: './#/blog/entrada-3'
    },
    {
        name: 'Entrada 4',
        description: 'Description 4',
        image: './sample_img_1.jpg',
        link: './#/blog/entrada-4'
    },
    {
        name: 'Entrada 5',
        description: 'Description 5',
        image: './sample_img_1.jpg',
        link: './#/blog/entrada-5'
    },
    {
        name: 'Entrada 6',
        description: 'Description 6',
        image: './sample_img_1.jpg',
        link: './#/blog/entrada-6'
    },
    {
        name: 'Entrada 7',
        description: 'Description 7',
        image: './sample_img_1.jpg',
        link: './#/blog/entrada-7'
    },
    {
        name: 'Entrada 8',
        description: 'Description 8',
        image: './sample_img_1.jpg',
        link: './#/blog/entrada-8'
    },
    {
        name: 'Entrada 9',
        description: 'Description 9',
        image: './sample_img_1.jpg',
        link: './#/blog/entrada-9'
    },
    {
        name: 'Entrada 10',
        description: 'Description 10',
        image: './sample_img_1.jpg',
        link: './#/blog/entrada-10'
    },
]

const BlogIndex = () => {
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
                        Blog
                    </span>
                </div>
            </div>
            <div className="bg-white flex flex-col items-center space-y-6 justify-center p-6">
                <div className='w-3/5 grid lg:grid-cols-3 md:grid-cols-2 gap-20 py-8'>
                    {
                        sample_entries.map((entry, index) => (
                            <div key={index}>
                                <div className="flex flex-col text-center space-y-2">
                                    <div className="h-40 w-full relative overflow-hidden">
                                        <a href={entry.link}>
                                            <img
                                                className='h-full w-full object-cover hover:scale-125 ease-in duration-500 cursor-pointer'
                                                src={entry.image}
                                                alt='sample img'
                                            />
                                        </a>
                                    </div>
                                    <a href={entry.link}>
                                        <span className="text-xl font-medium hover:text-green-600 cursor-pointer">
                                            {entry.name}
                                        </span>
                                    </a>
                                    <span>
                                        {entry.description}
                                    </span>
                                    <a href={entry.link}>
                                        <span className='text-gray-400 font-medium underline hover:text-black cursor-pointer'>
                                            Leer más
                                        </span>
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

export default BlogIndex