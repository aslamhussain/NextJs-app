import React from 'react';
import Image from 'next/image';
import spinnerImage from '../../../public/images/spinner.gif'
const Loader: React.FC = () => {
  return (
    <div className="loaderWrapper flexProps item-center">
      <div>
        <Image src={spinnerImage} alt="Loader" width={200} height={200}/>
      </div>
    </div>
  );
};

export default Loader;
