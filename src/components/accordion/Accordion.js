import React, { Fragment, PureComponent } from 'react'

class Accordion extends PureComponent {
    state = {
        openIndex: 0
    }
    
    setOpenIndex = openIndex => this.setState({openIndex})

    render() {
        const {openIndex} = this.state;
        return (
            <div>
            {this.props.items.map((item, index) => (
                <Fragment key={index}>
                    <button onClick={() => this.setOpenIndex(index)}>
                        {item.title}
                    </button>
                    {index === openIndex ? (
                        <div>
                            { item.contents }
                        </div>
                    ) : null}
                </Fragment>
            ))}
            </div>
        )
    }
}

export default Accordion;
