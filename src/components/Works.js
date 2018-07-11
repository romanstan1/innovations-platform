import React, {Component} from 'react';

const listOfWorks = [
  {
    title: 'Performance Ecomm App',
    description: 'A project to discover and build a performant Ecomm app',
    link: 'https://medium.com/'
  },
  {
    title: 'Progessive Web App',
    description: 'The PWA specsavers demo',
    link: 'https://medium.com/'
  },
  {
    title: 'Skills Network',
    description: 'A demo visualisation of company personel and skills',
    link: 'https://medium.com/'
  },
]

const Arrow = ({display}) =>
  <svg style={!display? {display: 'none'}:{}} width="24" height="24" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
  </svg>

class ListItem extends Component {
  state = {
    hover: false
  }

  onMouseOver = () => this.setState({hover: true })
  onMouseLeave = () => this.setState({hover: false })

  render() {
    const {item} = this.props
    return (
      <li onMouseLeave={this.onMouseLeave} onMouseOver={this.onMouseOver}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <Arrow display={this.state.hover}/>
        <a href={item.link} target="_blank"/>
      </li>
    )
  }
}


export default () =>
<div className='Works'>
  <ul>
    {
      listOfWorks.map(item => <ListItem item={item}/>)
    }
  </ul>
</div>

// {/* <ListItem></ListItem>
// <li>
//   <h3>Performance Ecomm App</h3>
//   <p>A project to discover and build a performant Ecomm app</p>
//   <a href=""/>
// </li>
//
// <li>
//   <h3>Progessive Web App</h3>
//   <p>The PWA specsavers demo</p>
//   <a href=""/>
// </li>
//
// <li>
//   <h3>Skills Network</h3>
//   <p>A demo visualisation of company personel and skills</p>
//   <a href=""/> */}
// </li>
