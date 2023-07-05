
import { FC } from 'react';
import CustomMenu from './CustomMenu';

interface Props {
    isBarOpen: boolean,
}

const FixedNavbar: FC<Props> = ({ isBarOpen }) => {
    const pages = [
        {
            name: 'Categoría 1',
            link: './#/categoria-1',
            subCategories: [
                {
                    name: 'Categoría 1 - Sub categoría 1',
                    link: './#/categoria-1/sub-cat-1',
                    subCategories: [
                        {
                            name: 'Categoría 1 - Sub categoría 1 - 1',
                            link: './#/categoria-1/sub-cat-1/1',
                        },
                        {
                            name: 'Categoría 1 - Sub categoría 1 - 2',
                            link: './#/categoria-1/sub-cat-1/2',
                        },
                    ]
                },
                {
                    name: 'Categoría 1 - Sub categoría 2',
                    link: './#/categoria-1/sub-cat-2',
                    subCategories: [
                        {
                            name: 'Categoría 1 - Sub categoría 2 - 1',
                            link: './#/categoria-1/sub-cat-2/1',
                        },
                        {
                            name: 'Categoría 1 - Sub categoría 2 - 2',
                            link: './#/categoria-1/sub-cat-2/2',
                        },
                    ]
                },
                {
                    name: 'Categoría 1 - Sub categoría 3',
                    link: './#/categoria-1/sub-cat-3'
                },
            ]
        },
        {
            name: 'Categoría 2',
            link: './#/categoria-2',
            subCategories: [
                {
                    name: 'Categoría 2 - Sub categoría 1',
                    link: './#/categoria-2/sub-cat-1',
                    subCategories: [
                        {
                            name: 'Categoría 2 - Sub categoría 1 - 1',
                            link: './#/categoria-2/sub-cat-1/1',
                        },
                        {
                            name: 'Categoría 2 - Sub categoría 1 - 2',
                            link: './#/categoria-2/sub-cat-1/2',
                        },
                    ]
                },
                {
                    name: 'Categoría 2 - Sub categoría 2',
                    link: './#/categoria-2/sub-cat-2'
                },
                {
                    name: 'Categoría 2 - Sub categoría 3',
                    link: './#/categoria-2/sub-cat-3'
                },
            ]
        },
        {
            name: 'Categoria 3',
            link: './#/categoria-3'
        },
        {
            name: 'Blog',
            link: './#/blog'
        },
        {
            name: 'Productores',
            link: './#/productores'
        },
    ]

    return (
        <div className={`bg-white top-0 sticky z-50 space-y-4 md:space-y-0 space-x-0 md:space-x-4 w-full lg:flex-grow lg:flex md:items-center justify-center md:w-auto border-b-2 ${isBarOpen ? "block" : "hidden"}`}>
            {
                pages.map((page, index) => (
                    <CustomMenu key={index} page={page} isFirstRender={true}/>
                ))
            }
        </div>
    );
}

export default FixedNavbar