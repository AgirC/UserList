import React from 'react';
import { TextInput } from '@mantine/core';
import './user-filter.scss';
import { useRecoilState } from 'recoil';
import { filterValueState } from '../../providers/recoil';


const UserFilter: React.FC<{ onFilterChange: Function }> = ({
  onFilterChange,
}: any) => {
  const [filterValue, setFilterValue] = useRecoilState(filterValueState);

  const handleInputChange = (e: any) => {
    const value = e.target.value;
    setFilterValue(e.currentTarget.value)
    onFilterChange(value);
  };

  return (
    <div className="user-filter">
      <TextInput
        size="md"
        radius="md"
        label="First/Last name:"
        placeholder="Type to filter..."
        onChange={handleInputChange}
        value={filterValue}
      />
    </div>
  );
};

export default UserFilter;
