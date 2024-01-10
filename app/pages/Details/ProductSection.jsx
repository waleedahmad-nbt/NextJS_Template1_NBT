import { useEffect, useState } from 'react';
import Description from './Description';
import Information from './Information';
import Brand from './Brand';
import Rating from './Rating';
import Question from './Question';
import initAOS from '../../../utils/aos';

const ProductSection = () => {
    const [activeTab, setActiveTab] = useState('description');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    useEffect(() => {
        initAOS();
    }, []);

    return (
        <div className=''>


            <ul className='custom-Scroll flex flex-row gap-8 mb-3 lg:mb-7 border-b border-gray-200 overflow-x-auto whitespace-nowrap'>
                <li
                    className={`text-[#b3b3b3] font-semibold leading-6 text-lg active cursor-pointer hover:text-black duration-500 ${activeTab === 'description' ? 'text-black border-b-2 border-black' : ''
                        }`}
                    onClick={() => handleTabClick('description')}
                >
                    Description
                </li>
                <li
                    className={`text-[#b3b3b3] font-semibold leading-6 text-lg cursor-pointer hover:text-black duration-500 ${activeTab === 'additionalInfo' ? 'text-black border-b-2 border-black' : ''
                        }`}
                    onClick={() => handleTabClick('additionalInfo')}
                >
                    Additional Information
                </li>
                <li
                    className={`text-[#b3b3b3] font-semibold leading-6 text-lg cursor-pointer hover:text-black duration-500 ${activeTab === 'brand' ? 'text-black border-b-2 border-black' : ''
                        }`}
                    onClick={() => handleTabClick('brand')}
                >
                    About the brand
                </li>
                <li
                    className={`text-[#b3b3b3] font-semibold leading-6 text-lg cursor-pointer hover:text-black duration-500 ${activeTab === 'rating' ? 'text-black border-b-2 border-black' : ''
                        }`}
                    onClick={() => handleTabClick('rating')}
                >
                    Reviews (0)
                </li>
                <li
                    className={`text-[#b3b3b3] font-semibold leading-6 text-lg cursor-pointer hover:text-black duration-500 ${activeTab === 'question' ? 'text-black border-b-2 border-black' : ''
                        }`}
                    onClick={() => handleTabClick('question')}
                >
                    Questions
                </li>
            </ul>




            {activeTab === 'description' && <div
                data-aos="fade-up"
                data-aos-duration="700"><Description /></div>}
            {activeTab === 'additionalInfo' && (
                <div>
                    <Information />
                </div>
            )}
            {activeTab === 'brand' && (
                <div data-aos="fade-down"
                    data-aos-duration="1000"><Brand /></div>
            )}
            {activeTab === 'rating' && (
                <div data-aos="fade-zoom-in"
                    data-aos-easing="ease-in"
                    data-aos-delay="10"
                    data-aos-offset="0"><Rating /></div>
            )}
            {activeTab === 'question' && (
                <div data-aos="fade-zoom-in"
                    data-aos-easing="ease-in"
                    data-aos-delay="10"
                    data-aos-offset="0">
                    <Question />
                </div>
            )}
        </div>
    );
};

export default ProductSection;
