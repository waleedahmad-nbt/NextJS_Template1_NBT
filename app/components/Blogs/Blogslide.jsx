'use client';

const BlogSlide = ({ imageUrl, category, title }) => (
    <div className='flex flex-col w-full h-auto cursor-pointer overflow-hidden'>
      <div className='w-full h-full'>
        <img
          src={imageUrl}
          alt='Blog Post Image'
          className='transition-transform transform 
          hover:scale-105 duration-700 w-full h-full'
        />
      </div>
      <h4 className='text-xs mt-4 text-gray-800 hover:text-gray-500'>{category}</h4>
      <p className='text-lg font-semibold mt-2 text-ellipsis'>{title}</p>
    </div>
  );
  
  export default BlogSlide;
