import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const sample_products = [
    {
        name: 'Producto 1',
        price: 'Precio 1',
        image: './square-img.jpg',
    },
    {
        name: 'Producto 2',
        price: 'Precio 3',
        image: './square-img.jpg',
    },
    {
        name: 'Producto 3',
        price: 'Precio 3',
        image: './square-img.jpg',
    },
    {
        name: 'Producto 4',
        price: 'Precio 4',
        image: './square-img.jpg',
    },
    {
        name: 'Producto 5',
        price: 'Precio 5',
        image: './square-img.jpg',
    },
    {
        name: 'Producto 6',
        price: 'Precio 6',
        image: './square-img.jpg',
    },
    {
        name: 'Producto 7',
        price: 'Precio 7',
        image: './square-img.jpg',
    },
    {
        name: 'Producto 8',
        price: 'Precio 8',
        image: './square-img.jpg',
    },
    {
        name: 'Producto 9',
        price: 'Precio 9',
        image: './square-img.jpg',
    },
    {
        name: 'Producto 10',
        price: 'Precio 10',
        image: './square-img.jpg',
    },
]


const ProducerPage = () => {
    const { producerName } = useParams()
    return (
        <div>
            <div className="w-2/5 mx-auto flex flex-col p-10">
                <div className="h-[30vh] w-full relative overflow-hidden">
                    <img
                        className='h-full w-full object-cover'
                        src='./sample_img_1.jpg'
                        alt='sample img'
                    />
                </div>
                <span className="text-2xl font-semibold py-4 text-green-400">
                    {producerName}
                </span>
                <div className="text-justify py-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et tristique dolor. Cras finibus vestibulum nisl, id vehicula diam tincidunt ut. In feugiat euismod ante vitae iaculis. Nam tincidunt libero id aliquam consectetur. Aenean varius at risus eget consequat. Sed dui arcu, ultrices eget facilisis ac, efficitur non quam. Phasellus quis ligula lacinia, placerat ipsum ac, lobortis magna. Donec ultrices dui vitae laoreet maximus. Ut a mollis quam. Mauris tempus nec mauris sed eleifend. Sed at convallis lorem. Sed in vehicula tortor.

                    Curabitur consequat molestie libero, id ullamcorper odio vestibulum et. Phasellus vestibulum eleifend imperdiet. Donec eget auctor ligula. Nunc mattis enim et scelerisque sodales. Phasellus ultrices euismod ligula quis dignissim. Integer tortor justo, ultrices quis enim id, maximus egestas urna. Integer hendrerit congue efficitur. Pellentesque elementum massa arcu, vitae ullamcorper nisl condimentum nec. Aliquam erat felis, porttitor quis massa in, placerat pretium augue. Maecenas vulputate, odio eu bibendum sodales, dui sem varius libero, quis pellentesque nisi quam id purus. Donec pretium tincidunt lectus sollicitudin blandit. Cras lacinia, leo at posuere facilisis, augue eros tempus lorem, non congue lacus sem sed erat. In at ex tristique felis tristique consectetur. Phasellus luctus lectus id pulvinar vestibulum. Aliquam dolor libero, bibendum vitae consequat sit amet, ornare non odio.

                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec vitae vulputate metus. Nam dignissim sapien nibh, non egestas nunc feugiat et. In est velit, viverra sodales neque eget, scelerisque varius enim. Sed at elit at lorem blandit aliquam nec sed turpis. Phasellus ornare enim et elit tincidunt, in tempor nisl condimentum. Nulla ut ante consequat nisi porttitor elementum ac sed lectus. Etiam vitae urna eget urna volutpat tincidunt. Cras in mi vel risus hendrerit sodales id a nisi. In ut porttitor nisi. Maecenas efficitur rhoncus augue, quis porttitor justo consequat quis. Etiam ac nulla auctor, imperdiet urna nec, cursus lorem.
                </div>
                <Tabs>
                    <TabList>
                        <Tab>Productos</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 py-8'>
                                {
                                    sample_products.map((item, index) => (
                                        <div key={index}>
                                            <div className="flex flex-col space-y-2">
                                                <div className="h-auto w-full relative self-center">
                                                    <img
                                                        src='./square-img.jpg'
                                                        alt='sample square img'
                                                    />
                                                </div>
                                                <span>
                                                    {item.name}
                                                </span>
                                                <span className='text-gray-400 font-medium'>
                                                    S/{item.price}
                                                </span>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        </div>
    );
}

export default ProducerPage