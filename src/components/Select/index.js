import Select from 'react-select';
import TYPE from '../../reducer/type';

import SelectStyle from './style';

const framework = [
  { label: 'Angular', value: 'angular', image: '/images/angular.png' },
  { label: 'React', value: 'react', image: '/images/react.png' },
  { label: 'Vue', value: 'vue', image: '/images/vue.png' },
];
/**
 *
 * @param {function} dispatch //function to update status
 * @param {string} library //selected framework
 * change the value of the framework to filter the news
 * @returns JSX.Element
 */
const SelectFramework = ({ dispatch, library }) => {
  const handleSelect = ({ value }) => {
    dispatch({
      type: TYPE.UPDATE_SELECT,
      payload: value,
    });
  };
  return (
    <SelectStyle>
      <Select
        options={framework}
        value={framework.filter((option) => option.value === library)}
        isSearchable={false}
        formatOptionLabel={(framework) => (
          <div className='framework-option'>
            <img
              src={framework.image}
              alt={framework.value}
              width='24px'
              height='24px'
            />
            <span>{framework.label}</span>
          </div>
        )}
        onChange={handleSelect}
      />
    </SelectStyle>
  );
};

export default SelectFramework;
