import { useParams } from "react-router-dom";

const BlogEntry = () => {
    const { entryName } = useParams()
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
                        BLOG
                    </span>
                </div>
            </div>
            <div className="w-2/5 mx-auto flex flex-col items-center p-10">
                <div className="h-[25vh] w-full relative overflow-hidden">
                    <img
                        className='h-full w-full object-cover'
                        src='./sample_img_1.jpg'
                        alt='sample img'
                    />
                </div>
                <span className="text-2xl font-semibold p-4">
                    {entryName}
                </span>
                <div className="text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et tristique dolor. Cras finibus vestibulum nisl, id vehicula diam tincidunt ut. In feugiat euismod ante vitae iaculis. Nam tincidunt libero id aliquam consectetur. Aenean varius at risus eget consequat. Sed dui arcu, ultrices eget facilisis ac, efficitur non quam. Phasellus quis ligula lacinia, placerat ipsum ac, lobortis magna. Donec ultrices dui vitae laoreet maximus. Ut a mollis quam. Mauris tempus nec mauris sed eleifend. Sed at convallis lorem. Sed in vehicula tortor.

                    Curabitur consequat molestie libero, id ullamcorper odio vestibulum et. Phasellus vestibulum eleifend imperdiet. Donec eget auctor ligula. Nunc mattis enim et scelerisque sodales. Phasellus ultrices euismod ligula quis dignissim. Integer tortor justo, ultrices quis enim id, maximus egestas urna. Integer hendrerit congue efficitur. Pellentesque elementum massa arcu, vitae ullamcorper nisl condimentum nec. Aliquam erat felis, porttitor quis massa in, placerat pretium augue. Maecenas vulputate, odio eu bibendum sodales, dui sem varius libero, quis pellentesque nisi quam id purus. Donec pretium tincidunt lectus sollicitudin blandit. Cras lacinia, leo at posuere facilisis, augue eros tempus lorem, non congue lacus sem sed erat. In at ex tristique felis tristique consectetur. Phasellus luctus lectus id pulvinar vestibulum. Aliquam dolor libero, bibendum vitae consequat sit amet, ornare non odio.

                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec vitae vulputate metus. Nam dignissim sapien nibh, non egestas nunc feugiat et. In est velit, viverra sodales neque eget, scelerisque varius enim. Sed at elit at lorem blandit aliquam nec sed turpis. Phasellus ornare enim et elit tincidunt, in tempor nisl condimentum. Nulla ut ante consequat nisi porttitor elementum ac sed lectus. Etiam vitae urna eget urna volutpat tincidunt. Cras in mi vel risus hendrerit sodales id a nisi. In ut porttitor nisi. Maecenas efficitur rhoncus augue, quis porttitor justo consequat quis. Etiam ac nulla auctor, imperdiet urna nec, cursus lorem.

                    Pellentesque aliquam gravida fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget nisi commodo, bibendum mauris et, iaculis massa. Etiam condimentum suscipit elit, faucibus malesuada tellus venenatis ut. Aenean at lacinia nibh, sed elementum quam. Proin laoreet diam a odio ultrices, at dapibus arcu finibus. Quisque commodo dolor purus, sit amet pellentesque lorem lacinia nec. Maecenas dapibus iaculis risus, a blandit metus suscipit nec. In consequat laoreet lacus, lobortis aliquam leo gravida fermentum. Sed vitae lorem varius, ornare mauris quis, sagittis velit. Morbi porta volutpat neque, non condimentum nisi malesuada nec. Fusce orci mauris, elementum ac ex nec, hendrerit blandit magna. Vivamus ut facilisis purus. Mauris orci mi, venenatis sed mi id, luctus pretium lacus.

                    Aliquam aliquam turpis at urna laoreet tristique. Quisque non tempus libero. Aliquam sit amet finibus mi. Vivamus eget sapien fermentum, ultricies felis sit amet, venenatis libero. Proin in nisi est. Praesent maximus et odio vitae efficitur. Nunc erat erat, ullamcorper sit amet urna porta, tempus malesuada tellus. Nunc mattis sem vitae posuere laoreet. Curabitur urna massa, vehicula nec tellus eget, mollis fringilla magna. Nunc accumsan magna sit amet aliquet venenatis. Proin non mi sit amet massa auctor lacinia. Nullam eget lacus vitae ligula volutpat dapibus. Proin mollis dui nec magna tempus, quis pellentesque libero sagittis.

                    Integer non nibh hendrerit, blandit massa ac, accumsan dolor. Nullam massa mi, facilisis sed turpis id, pretium suscipit ligula. Proin iaculis vitae eros rhoncus placerat. Vivamus risus orci, porta in efficitur eu, vehicula fermentum tortor. Maecenas eu consequat sapien. Mauris nec dapibus neque, vitae tincidunt nulla. Proin convallis felis nisi, sed sagittis enim mollis ac. Etiam urna mauris, euismod vitae mi ut, bibendum feugiat dolor. Nullam id mattis felis. Sed a porttitor massa.

                    Integer ipsum velit, viverra eget suscipit et, scelerisque aliquam felis. Maecenas vestibulum, metus at gravida volutpat, dolor nulla laoreet ante, id aliquam ex tellus dapibus neque. Nulla non euismod lacus. Donec pretium at lectus a sodales. Nunc molestie ultricies eleifend. Quisque non pretium mi. Praesent id lacinia velit. Integer aliquam magna in arcu ornare laoreet. Pellentesque eu vulputate enim, sed sodales ligula. Vivamus interdum sit amet lectus a ultricies. Proin mauris tellus, sagittis a pretium dapibus, ultricies eu nulla. Vestibulum leo quam, tempus iaculis sapien pellentesque, sagittis vestibulum erat. Donec id dolor tempus, maximus magna ac, pellentesque mauris. Suspendisse sagittis diam ex, ut tincidunt risus euismod ullamcorper. Sed pulvinar euismod fermentum. Vivamus fermentum, nunc eget sodales ullamcorper, augue enim commodo erat, id porta velit purus at felis.

                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed interdum rutrum tempor. Morbi lobortis sapien ac purus pellentesque auctor. Praesent laoreet, dui eu efficitur laoreet, felis arcu molestie dolor, non aliquet erat magna id nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In a arcu et lacus vulputate consequat. Etiam a risus eu nisi efficitur scelerisque. Duis ut libero sem.

                    Vestibulum pellentesque, neque id laoreet venenatis, justo quam tincidunt neque, molestie faucibus magna quam in odio. Nulla in urna gravida, dapibus quam nec, lacinia mi. Fusce vulputate ex id nibh semper fringilla. Nunc consequat diam vitae turpis varius ultrices. Integer neque nunc, lacinia sit amet nulla quis, pellentesque pretium neque. Pellentesque sagittis dictum augue id scelerisque. Quisque efficitur nulla non semper luctus. Vivamus finibus odio in nisl faucibus ultricies.

                    In in fringilla dui. Fusce tristique venenatis pellentesque. Nullam pellentesque massa non augue rutrum, id mattis ipsum finibus. In erat sapien, malesuada et massa vitae, pharetra gravida elit. Aenean pharetra ipsum vitae molestie suscipit. Aenean tincidunt viverra efficitur. Donec posuere at orci eget tincidunt. Ut convallis nunc vel laoreet ullamcorper.
                </div>
            </div>
        </div>
    );
}

export default BlogEntry