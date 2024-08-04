import React from 'react';
import Image from 'next/image';
import nodataImage from '../../../public/images/nodatafound.jpg'
const Nodatafound: React.FC = () => {
  return (
    <div className="nodataFound">
      <div className="nodata__content">
        <Image src={nodataImage} alt="Loader" width={350} height={350} />
        <p><strong>No data Match</strong></p>
      </div>
    </div>
  );
};

export default Nodatafound;
