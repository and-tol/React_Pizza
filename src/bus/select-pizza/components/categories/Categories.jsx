// Core
import React from 'react'
import PropTypes from 'prop-types'
//Config
import { availablePizzaKinds } from './availablePizzaKinds'
// Hooks
import { useCategories } from './hooks/useCategories'

// export class Categories extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       activeKind: null,
//     };
//   }

//   onSelectKind = index => {
//     this.setState({
//       activeKind: index,
//     });
//   };

//   render() {
//     const { handlePizzaKind } = this.props;
//     const pizzaKindsJSX = availablePizzaKinds.map(kind => (
//       <li
//         className={this.state.activeKind === index ? 'active' : ''}
//         onClick={() => this.onSelectKind(index)}
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

export const Categories = () => {
  const { activeKind, onSelectKind } = useCategories();

  const pizzaKindsJSX =
    availablePizzaKinds &&
    availablePizzaKinds.map((kind, index) => (
      <li
        className={activeKind === index ? 'active' : ''}
        onClick={() => onSelectKind(index)}
        key={kind}>
        {kind}
      </li>
    ));

  return (
    <div className='categories'>
      <ul>
        <li
          className={activeKind === null ? 'active' : ''}
          onClick={() => {
            onSelectKind(null);
          }}>
          Все
        </li>
        {pizzaKindsJSX}
      </ul>
    </div>
  );
};

Categories.propTypes = {
  handlePizzaKind: PropTypes.func,
};
