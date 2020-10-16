// Core
import React from 'react'
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
//     const pizzaKindsJSX = availableCategories.map(kind => (
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

export const Categories = React.memo(({ availableCategories }) => {
  const { activeKind, onSelectKind } = useCategories();

  const pizzaKindsJSX =
    availableCategories &&
    availableCategories.map((kind, index) => (
      <li
        className={activeKind === index ? 'active' : ''}
        onClick={() => {
          onSelectKind(index);
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
          className={activeKind === null ? 'active' : ''}
          onClick={() => {
            onSelectKind(null);
          }}
        >
          Все
        </li>
        {pizzaKindsJSX}
      </ul>
    </div>
  );
})
