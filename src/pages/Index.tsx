
import { useEffect, useState } from 'react';

const sample_imgs = [
    './square-img.jpg',
    './square-img.jpg',
    './square-img.jpg',
    './square-img.jpg',
    './square-img.jpg',
    './square-img.jpg',
    './square-img.jpg',
    './square-img.jpg',
    './square-img.jpg',
    './square-img.jpg',
    './square-img.jpg',
    './square-img.jpg'
]

const Index = () => {
    const [curr, setCurr] = useState(0)

    const prev = () =>
        setCurr((curr) => (curr === 0 ? Math.trunc((sample_imgs.length - 1) / 5) : curr - 1))

    const next = () =>
        setCurr((curr) => (curr === Math.trunc((sample_imgs.length - 1) / 5) ? 0 : curr + 1))

    return (
        <div>
            <div className="h-[70vh] w-full relative bg-yellow-400">
                <div className='absolute inset-x-0 top-1/4 flex flex-col items-center text-center justify-center space-y-4'>
                    <span className='text-4xl text-black font-bold'>
                        TÍTULO
                    </span>
                    <span className='text-xl text-black font-medium'>
                        Sub título
                    </span>
                    <button className='text-white rounded-md py-1.5 px-6 border-2 text-lg font-semibold border-white'>
                        Ver más
                    </button>
                </div>
            </div>

            <div className='flex items-center justify-center space-x-10 p-14'>
                <div>
                    <div className="h-60 w-80 relative overflow-hidden">
                        <img
                            className='h-full object-cover hover:scale-125 ease-in duration-500'
                            src='./sample_img_1.jpg'
                            alt='sample img'
                        />
                    </div>
                </div>
                <div>
                    <div className="h-60 w-80 relative overflow-hidden">
                        <img
                            className='h-full object-cover hover:scale-125 ease-in duration-500'
                            src='./sample_img_1.jpg'
                            alt='sample img'
                        />
                    </div>
                </div>
                <div>
                    <div className="h-60 w-80 relative overflow-hidden">
                        <img
                            className='h-full object-cover hover:scale-125 ease-in duration-500'
                            src='./sample_img_1.jpg'
                            alt='sample img'
                        />
                    </div>
                </div>
            </div>

            <div className="w-3/4 overflow-hidden relative h-[40vh] mx-auto">
                <div
                    className="flex h-full transition-transform ease-out duration-500"
                    style={{ transform: `translateX(-${curr * (100 / sample_imgs.length * 5)}%)`, width: `${sample_imgs.length * 20}%` }}
                >
                    {sample_imgs.map(
                        (image: any, index) => {
                            return <div key={index} className={`h-full w-full flex flex-col items-center relative overflow-hidden`}>
                                <img
                                    className='w-60 h-60'
                                    alt={'sample'}
                                    src={image}
                                />
                                <span className='p-4'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </span>
                            </div>
                        }
                    )
                    }
                </div>
                <div className="text-gray-700 absolute inset-0 flex items-center justify-between p-4">
                    <button
                        onClick={prev}
                        className="flex items-center justify-center w-9 text-3xl font-bold rounded-full hover:bg-white hover:text-almoudBlack100"
                    >
                        {'<'}
                    </button>
                    <button
                        onClick={next}
                        className="flex items-center justify-center w-9 text-3xl font-bold rounded-full hover:bg-white hover:text-almoudBlack100"
                    >
                        {'>'}
                    </button>
                </div>
            </div>

            <div className="h-[30vh] w-full relative bg-cyan-500">
                <div className='absolute inset-x-0 top-1/4 flex flex-col items-center text-center justify-center space-y-4'>
                    <span className='text-xl text-white font-medium'>
                        Subscripción
                    </span>
                    <input className="text-white bg-transparent border-b-2 border-gray-300 p-1 mb-4 placeholder-white" placeholder='Ingrese su correo' />
                    <input className="text-white bg-transparent border-b-2 border-gray-300 p-1 mb-4 placeholder-white" placeholder='Ingrese su nombre' />
                    <button className='text-black bg-white rounded-sm py-1.5 px-10 font-medium '>
                        Enviar
                    </button>
                </div>
            </div>

            <div className="bg-white flex items-center justify-center p-10">
                <img src='./logo.png' className="max-h-20" alt="Logo" />
                <img src='./logo.png' className="max-h-20" alt="Logo" />
                <img src='./logo.png' className="max-h-20" alt="Logo" />
            </div>
        </div>
    );
}

export default Index