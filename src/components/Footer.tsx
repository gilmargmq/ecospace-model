
const Footer = () => {
    return (
        <div
            className="flex flex-col items-center justify-center bg-neutral-700 p-4 space-y-8">
            <img src='./logo.png' className="max-h-20" alt="Logo" />
            <div className="flex space-x-4">
                <img src='./icon.png' className="max-h-6" alt="icon" />
                <img src='./icon.png' className="max-h-6" alt="icon" />
                <img src='./icon.png' className="max-h-6" alt="icon" />
                <img src='./icon.png' className="max-h-6" alt="icon" />
            </div>
            <div className="grid grid-cols-4 gap-10 w-1/2 p-6">
                <div className="flex flex-col">
                    <span className="text-white uppercase text-lg font-semibold">
                        TITULO
                    </span>
                    <span className="text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id nibh nisi. Nunc aliquam ullamcorper turpis.
                    </span>
                </div>
                <div className="flex flex-col">
                    <span className="text-white uppercase text-lg font-semibold">
                        TITULO
                    </span>
                    <span className="text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id nibh nisi. Nunc aliquam ullamcorper turpis.
                    </span>
                </div>
                <div className="flex flex-col">
                    <span className="text-white uppercase text-lg font-semibold">
                        TITULO
                    </span>
                    <span className="text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id nibh nisi. Nunc aliquam ullamcorper turpis.
                    </span>
                </div>
                <div className="flex flex-col">
                    <span className="text-white uppercase text-lg font-semibold">
                        TITULO
                    </span>
                    <span className="text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id nibh nisi. Nunc aliquam ullamcorper turpis.
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Footer