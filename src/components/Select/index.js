import Select from 'react-select';
import useValidateData from '../../hook/useValidateData';
import TYPE from '../../reducer/type';

import SelectStyle from './style';

const frameword = [
  { label: 'Angular', value: 'angular', image: '/images/angular.png' },
  { label: 'React', value: 'react', image: '/images/react.png' },
  { label: 'Vue', value: 'vue', image: '/images/vue.png' },
];

const SelectFrameword = ({ dispatch, library }) => {
  const { loadMoreNews } = useValidateData();
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
      <button onClick={() => loadMoreFaves()}>Lobo</button>
    </SelectStyle>
  );
};

export default SelectFrameword;
