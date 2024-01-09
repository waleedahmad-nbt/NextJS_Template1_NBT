import React,{ useState } from 'react';

const DropdownItem = ({ flagSrc, text, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative group">
      {/* Dropdown Toggle */}
      <div
        className="cursor-pointer flex items-center"
        onMouseEnter={handleToggle}
        onMouseLeave={handleToggle}
      >
        {flagSrc && <img src={flagSrc} alt="Flag" className="w-6 h-4 mt-1 object-fit" />}
        <span>{text}</span>
      </div>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="absolute bg-white z-10 mt-2 shadow-lg rounded-md p-2 min-w-max">
          {React.Children.map(children, (child) =>
            React.cloneElement(child, { onClick: handleItemClick })
          )}
        </div>
      )}
    </div>
  );
};

export default DropdownItem;
