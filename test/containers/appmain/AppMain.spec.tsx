import * as React from 'react';
import AppMain from '../../../src/containers/appmain/AppMain';
import { shallow } from '../../enzyme.setup';

it("should render initial app component", () => {

    const component = shallow(<AppMain />);
    console.log(component.debug())

});