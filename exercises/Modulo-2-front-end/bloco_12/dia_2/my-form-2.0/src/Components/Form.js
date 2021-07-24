// import React, { Component } from 'react';
// import Input from './Input'
// import estados from './Data'
// import '../App'

// class Form extends Component {
//   render() {
//     let active = true;
//     return (
//       <div>
//        <fieldset>
//           <Input 
//             maxLength='40'
//             value={this.state.nome}
//             required
//             name='nome'
//             onChange={this.handleClick}
//           />
//           <Input 
//             maxLength='50'
//             value={this.state.email}
//             required
//             name='email'
//             onChange={this.handleClick}
//           />
//           <Input 
//             maxLength='11'
//             value={this.state.cpf}
//             required
//             name='cpf'
//             onChange={this.handleClick}
//           />
//           <Input 
//             maxLength='200'
//             value={this.state.endereco}
//             required
//             name='endereco'
//             onChange={this.handleClick}
//           />
//           <Input 
//             maxLength='28'
//             value={this.state.cidade}
//             required
//             name='cidade'
//             onChange={this.handleClick}
//             onBlur={this.onBlur}
//           />
//           <select name='estados' required onChange={this.handleClick}>
//             {estados.map((state, index) => (<option key={ index }>{state}</option>))}
//           </select>
//           <Input 
//             value='casa'
//             required
//             name='house'
//             onChange={this.handleClick}
//             type='radio'
//           />
//           <Input 
//             value='apartamento'
//             required
//             name='house'
//             onChange={this.handleClick}
//             type='radio'
//           />
//         </fieldset>
//         <fieldset>
//           <textarea
//             maxLength='40'
//             required
//             value={this.state.cargo}
//             name='cargo'
//             onMouseEnter={() => {
//               if (active) {
//                 alert('Preencha com cuidado esta informação.');
//                 active = false;
//               }
//             }}
//             onChange={this.handleClick}
//           />
//           <textarea 
//             maxLength='500'
//             required
//             value={this.state.descricao}
//             name='descricao'
//             onChange={this.handleClick}
//           />
//         </fieldset>
//       </div>
//     )
//   }
// }

// export default Form;