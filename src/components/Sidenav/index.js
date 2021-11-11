import { connect } from 'react-redux';
import SidenavComponent from './SidenavComponent';

//O método mapStateToProps transforma um trecho do estado da Store
//em uma prop utilizável pelo componente, com o nome newValue.
const mapStateToProps = store => ({
    newValue: store.newsState.newValue
});

//No momento de exportar o componente, precisamos fazer a sua conexão 
// através do método connect do React Redux
const SidenavConnected = connect(mapStateToProps)(SidenavComponent);

export { SidenavConnected as SidenavComponent }