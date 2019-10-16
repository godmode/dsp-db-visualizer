import React from 'react';
import { Card, Search, Input  } from 'semantic-ui-react';
import Mob from './Mob';

class Mobs extends React.Component {
    constructor(props) {
      super(props);
      this.state = { mobs: [] };
      this.calling = this.calling.bind(this);
      this.search = this.search.bind(this);
    }
  
    componentDidMount() {
      // this.calling();
    }
  
    async search(e) {
      const search = e.target.value || '';
      const response = await fetch(`http://localhost:3010?search=${search}&limit=50`);
      const result = await response.json();
      this.setState({ mobs: result.mobs });
    }
  
    async calling() {
      const response = await fetch('http://localhost:3010?limit=0');
      const result = await response.json();
      this.setState({ mobs: result.mobs });
    }

    render() {
        return (
            <div>
                <Input size='big' icon='search' style={{margin: "20px 0"}} 
                    placeholder='Search mobs'
                    onChange={this.search}
                />
                <Card.Group>
                    {this.state.mobs.map( mob => <Mob mob={mob} />)}
                </Card.Group>
            </div>
        )
    }
}

export default Mobs;