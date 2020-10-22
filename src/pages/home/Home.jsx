// Core
import React from 'react';
// import { connect } from 'react-redux';
// // Libraries
// import axios from 'axios';
// Components
import { Pizzas } from '../../bus/pizzas';
// Hooks
import { useHomeFetch } from '../hooks/useHomeFetch';
// // Actions
// import { pizzasActions } from '../../bus/pizzas/actions';
// import { store } from '../../init/store';

export const Home = () => {
  const { items } = useHomeFetch();

  return (
    <div className='content'>
      <Pizzas pizzas={items} />
    </div>
  );
};

// class Home extends React.Component {
//   componentDidMount() {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {
//       this.props.setPizzas(data.pizzas);
//     });
//   }

//   render() {
//     return (
//       <div className='content'>
//         <Pizzas pizzas={this.props.items} />
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     items: state.pizzas.items,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     setPizzas: items => dispatch(pizzasActions.setPizzas(items)),
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
