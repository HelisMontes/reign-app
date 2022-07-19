import Select from 'react-select';
import TYPE from '../../reducer/type';

import SelectStyle from './style';

const frameword = [
  { label: 'Angular', value: 'angular', image: '/images/angular.png' },
  { label: 'React', value: 'react', image: '/images/react.png' },
  { label: 'Vue', value: 'vue', image: '/images/vue.png' },
];

const SelectFrameword = ({ dispatch, library }) => {
  const handleSelect = ({ value }) => {
    dispatch({
      type: TYPE.UPDATE_SELECT,
      payload: value,
    });
  };
  return (
    <SelectStyle>
      <Select
        options={frameword}
        value={frameword.filter((option) => option.value === library)}
        isSearchable={false}
        formatOptionLabel={(frameword) => (
          <div className='frameword-option'>
            <img
              src={frameword.image}
              alt={frameword.value}
              width='24px'
              height='24px'
            />
            <span>{frameword.label}</span>
          </div>
        )}
        onChange={handleSelect}
      />
    </SelectStyle>
  );
};

export default SelectFrameword;
