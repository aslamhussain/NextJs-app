// import React, { useState } from 'react';
// import Input from '../common/Input';

// interface SearchSectionProps {
//   onSearch: (searchTerm: string) => void;
// }

// const SearchSection: React.FC<SearchSectionProps> = ({ onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value);
//     onSearch(e.target.value);
//   };

//   return (
//     <div className="search-section">
//       <Input
//         type="text"
//         placeholder="Search course by name"
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//     </div>
//   );
// };

// export default SearchSection;


