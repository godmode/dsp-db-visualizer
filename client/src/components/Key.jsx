import React from 'react';
import { List, Icon } from 'semantic-ui-react';

export default () => {
    return (
        <List>
            <List.Item>
                <Icon color='red' name='fire' />
                <List.Content>Fire</List.Content>
            </List.Item>
            <List.Item>
                <Icon color='blue' name='snowflake outline' />
                <List.Content>Ice</List.Content>
            </List.Item>
            <List.Item>
                <Icon color='green' name='leaf' />
                <List.Content>Wind</List.Content>
            </List.Item>
            <List.Item>
                <Icon color='brown' name='globe' />                        
                <List.Content>Earth</List.Content>
            </List.Item>
            <List.Item>
                <Icon color='purple' name='bolt' />
                <List.Content>Thunder</List.Content>
            </List.Item>
            <List.Item>
                <Icon color='blue' name='tint' />
                <List.Content>Water</List.Content>
            </List.Item>
            <List.Item>
                <Icon color='black' name='moon' />
                <List.Content>Darkness</List.Content>
            </List.Item>
            <List.Item>
                <Icon color='white' name='star outline' />  
                <List.Content>Light</List.Content>
            </List.Item>
        </List>
    );
};