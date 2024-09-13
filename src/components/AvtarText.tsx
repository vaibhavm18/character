import React from 'react';

interface Props {
  heading: string;
  subText: string;
}

const AvatarText: React.FC<Props> = ({ heading, subText }) => {
  return (
    <div className='space-y-2'>
      <div className="flex items-center flex-shrink-0 space-x-4 bg-[#202024] hover:bg-[#2A2A2D] py-3 px-4 rounded-xl w-72">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
          <span className="text-gray-900 font-semibold text-lg">
            {heading.charAt(0)}
          </span>
        </div>
        <div>
          <h3 className="text-lg font-semibold">{heading}</h3>
          <p className="text-sm text-gray-400">{subText}</p>
        </div>
      </div>
      <div className="flex items-center flex-shrink-0 space-x-4 bg-[#202024] hover:bg-[#2A2A2D] py-3 px-4 rounded-xl w-72">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
          <span className="text-gray-900 font-semibold text-lg">
            {heading.charAt(0)}
          </span>
        </div>
        <div>
          <h3 className="text-lg font-semibold ">{heading}</h3>
          <p className="text-sm text-gray-400">{subText}</p>
        </div>
      </div>
    </div>
  );
};

export default AvatarText;