import { connect } from 'react-redux';
import { newsUpdated } from '../../redux/actions/index'
import Politica from './Politica';

const mapStateToProps = store => ({
    newValue: store.newsState.newValue
});

const mapDispatchToProps = dispatch => ({
    newsUpdated: (value) => dispatch(newsUpdated(value))
});

const PoliticaConnected = connect(mapStateToProps, mapDispatchToProps)(Politica);

export { PoliticaConnected as Politica }