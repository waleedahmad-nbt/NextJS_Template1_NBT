import { useEffect, useState } from 'react';
import { MdOutlinePayments } from 'react-icons/md';
import initAOS from '../../../utils/aos';
import { GiNotebook } from "react-icons/gi";
import { PiHandCoins } from "react-icons/pi";

const FAQItem = ({ question, answer, isOpen, toggleOpen, isChecked, setChecked, icon: Icon }) => {
    useEffect(() => {
        initAOS();
    }, []);

    return (
        <div className="mb-4">
            <div
                className={`flex items-center justify-between w-full cursor-pointer border transition-all duration-300 ${isOpen ? 'border-b-0 rounded-b-none' : ''}`}
                onClick={() => {
                    toggleOpen();
                    setChecked(!isChecked);
                }}
            >
                <div className="flex items-center  h-[50px]">
                    <input
                        id={`radio-${question}`}
                        type="radio"
                        value=""
                        name="faq-radio"
                        className="w-4 h-4 bg-gray-100 border-gray-300 m-2"
                        checked={isChecked}
                        onChange={() => { }}
                    />
                    <p className="font-semibold">
                        {question}
                    </p>
                </div>
                <div className="flex items-center">
                    {Icon && <span className="text-gray-500 hover:text-gray-900 duration-300 text-3xl mr-4"><Icon /></span>}
                </div>
            </div>
            {isOpen && <p className="mt-2" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-sine">{answer}</p>}
        </div>
    );
};

const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [checkedIndex, setCheckedIndex] = useState(null);

    const faqData = [
        {
            question: 'Direct Bank Transfer',
            answer:
                'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.',
            icon: MdOutlinePayments,
        },
        {
            question: 'Check Payments',
            answer: 'Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode',
            icon: GiNotebook ,
        },
        {
            question: 'Cash on Delivery',
            answer: 'Pay with cash upon delivery.',
            icon: PiHandCoins ,
        },
    ];

    const toggleOpen = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="container mx-auto mt-8 p-4">
            {faqData.map((item, index) => (
                <FAQItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={index === openIndex}
                    toggleOpen={() => toggleOpen(index)}
                    isChecked={index === checkedIndex}
                    setChecked={() => setCheckedIndex(index)}
                    icon={item.icon}
                />
            ))}
        </div>
    );
};

export default FAQPage;
