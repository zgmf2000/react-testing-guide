import React, { PureComponent } from 'react';

import AccordionComponent from '../../components/accordion/Accordion';

class Accordion extends PureComponent {
    state = {
        items: [
            { title: 'Title', contents: 'Some Content' },
            { title: 'Another Title', contents: 'Another Content' }
        ]
    };

    render() {
        return (
            <AccordionComponent items={this.state.items} />
        );
    }
}

export default Accordion;
