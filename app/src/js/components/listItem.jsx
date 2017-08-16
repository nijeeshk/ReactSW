import React from 'react';

class ListItem extends React.Component {

    state = {
        expanded: false,
    };

    toggleExpanded = () => {
        let { expanded } = { ...this.state };
        expanded = !expanded;
        this.setState({ expanded });
    }

    render() {
        const { item } = this.props;
        return (
            <div className="list-item">
                <div className="name">
                    <div className="name-inner">
                        <img className="console" src={require('../../assets/images/Games_alt.png')} />
                        { item.name }&nbsp;&nbsp;&nbsp;<i>{ item.developer }</i>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListItem;
