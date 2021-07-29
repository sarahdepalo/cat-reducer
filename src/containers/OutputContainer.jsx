import Output from '../components/Output';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        activity: state.activity,
        name: state.name
    }
}

export default connect(mapStateToProps)(Output);