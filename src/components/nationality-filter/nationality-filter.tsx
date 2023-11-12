import React, { useState } from 'react';
import { MultiSelect } from '@mantine/core';
import { Button } from '@mantine/core';
import { NationalityConverter } from '../../enums/nationality-converser';
import './nationality-filter.scss';

const NationalityFilter: React.FC<{ onNationalityChange: Function }> = ({ onNationalityChange }) => {
  const [selectedNationalities, setSelectedNationalities] = useState<string[]>([]);

  const handleNationalityChange = (value: string[]) => {
    setSelectedNationalities(value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onNationalityChange(selectedNationalities);
  };
  
  const selectData = Object.entries(NationalityConverter).map(([value, label]) => ({
    value,
    label,
  })) as { value: string; label: string }[];

  return (
    <div className="nationality-filter">

      <form onSubmit={handleSubmit}>
        <MultiSelect
          size="md"
          radius="md"
          label="Filter by Nationalities:"
          placeholder="Pick value"
          value={selectedNationalities}
          data={selectData}
          onChange={handleNationalityChange}
          />
        <Button variant="filled" type="submit" className="apply-button">Apply Filter</Button>
      </form>
    </div>
  );
};

export default NationalityFilter;
