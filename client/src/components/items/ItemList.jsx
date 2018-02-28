import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../../actions/index';

class ItemList extends Component {
    componentDidMount() {
      // this.props.fetchData('http://599167402df2f40011e4929a.mockapi.io/items');
      this.props.fetchData('http://www.dnd5eapi.co/api/monsters/');

    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <ul>
              {/* {console.log(this.props.items['results'])} */}
                {this.props.items.map((item, index) => (
                    <li key={index}>
                        {item.label}{item.name}
                    </li>
                ))}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
