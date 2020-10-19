// Core
import React from 'react'
import PropTypes from 'prop-types'
// Hooks
import { useCategories } from '../../hooks/useCategories'

// export class Categories extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       activeKind: null,
//     };
//   }

//   onSelectCategory = index => {
//     this.setState({
//       activeKind: index,
//     });
//   };

//   render() {
//     const { handlePizzaKind } = this.props;
//     const pizzaKindsJSX = availableCategories.map(kind => (
//       <li
//         className={this.state.activeKind === index ? 'active' : ''}
//         onClick={() => this.onSelectCategory(index)}
//         key={kind}>
//         {kind}
//       </li>
//     ));

//     return (
//       <div className='categories'>
//         <ul>
//           <li>Все</li>
//           {pizzaKindsJSX}
//         </ul>
//       </div>
//     );
//   }
// }

export const Categories = React.memo(({ availableCategories }) => {
  const { activeCategory, onSelectCategory } = useCategories();

  const pizzaKindsJSX =
    availableCategories &&
    availableCategories.map((kind, index) => (
      <li
        className={activeCategory === index ? 'active' : ''}
        onClick={() => {
          onSelectCategory(index);
        }}
        key={kind}
      >
        {kind}
      </li>
    ));

  return (
    <div className='categories'>
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => {
            onSelectCategory(null);
          }}
        >
          Все
        </li>
        {pizzaKindsJSX}
      </ul>
    </div>
  );
})

Categories.propTypes = {
  availableCategories: PropTypes.array
};


Categories.defaultProps = {
  availableCategories: []
};