
const Question = () => {
    return (
        <>
            <div className='container mx-auto m-10 mt-11'>
                <h2 className='font-semibold text-2xl'>Question & Answer</h2>
                <div className='flex flex-row justify-between mt-8'>
                    <div className='flex flex-row items-center gap-3'>

                        <p className='text-lg text-black'>0 Questions</p>
                    </div>

                    <button className='w-[150px] md:w-[200px] md:text-lg text-sm  text-black border-2 font-semibold h-12 mt-1 bg-transparent
                     rounded-full duration-500 hover:bg-black hover:text-white transform hover:scale-105'>
                        ASK A QUESTION
                    </button>
                </div>
                <hr className='mt-6' />
                <p className='mt-6 text-gray-700'>There are no question found..</p>
            </div>
        </>
    )
}

export default Question
