import React from 'react';
import { Form, Message } from 'semantic-ui-react';

export default ({ mob }) => {
    return (
        <Form style={{margin: "40px", width: "400px"}}>
            <Message size='massive'>
                <Message.Header>{mob.mobname}</Message.Header>
                <Message.List>
                    <Message.Item>{`!pos ${parseInt(mob.pos_x)} ${parseInt(mob.pos_y)} ${parseInt(mob.pos_z)} ${mob.mob_group.zoneid}`}</Message.Item>
                </Message.List>
            </Message>
        </Form>
    );
};