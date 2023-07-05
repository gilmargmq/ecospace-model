import { FC } from 'react';
import { Box, Menu, MenuButton, MenuList, Portal, useDisclosure } from '@chakra-ui/react';

interface Props {
    page: any,
    isFirstRender: boolean,
}

const CustomMenu: FC<Props> = ({ page, isFirstRender }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (

        <Menu isOpen={isOpen} onClose={onClose} placement={isFirstRender ? 'bottom' : 'right-start'}>
            <Box p={2} onMouseEnter={onOpen} onMouseLeave={onClose} _hover={{ color: 'green.400' }}>
                <MenuButton
                    onClick={onOpen}
                    as={'a'}
                    href={`${page.link}`}
                >
                    {page.name}
                </MenuButton>
            </Box>
            {page.subCategories &&
                <Portal>
                    <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                        {page.subCategories.map((item: any) => (
                            <CustomMenu page={item} isFirstRender={false} />
                        ))}
                    </MenuList>

                </Portal>
            }
        </Menu>
    );
}

export default CustomMenu