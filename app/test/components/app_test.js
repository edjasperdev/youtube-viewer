import { renderComponent, expect } from './../test_helper';
import App from '../../scripts/components/App';

describe('App', () => {
  it ('has the class of "app-container"', () => {
    const component = renderComponent(App);

    expect(component).to.have.class('app-container');
    //it initiates yt search with 'feist'
    //it passes videoSearch to search bar
    //it renders SearchBar
    //it renders VideoDetail
    //it renders VideoList
    //it renders VideoListItem

  });
});

