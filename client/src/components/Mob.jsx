import React from 'react';
import { Form, Message, Icon, Popup } from 'semantic-ui-react';
import * as StatusIcons from './icons';

export default ({ mob }) => {
    return (
        <Form style={{margin: "40px", width: "500px"}}>
            <Message size='massive'>
                <Message.Header>{mob.polutils_name}</Message.Header>
                <Message.List>
                    <Message.Item>{`!spawnmob ${mob.mobid}`}</Message.Item>
                    <Message.Item>{`!pos ${parseInt(mob.pos_x)} ${parseInt(mob.pos_y)} ${parseInt(mob.pos_z)} ${mob.mob_group.zoneid}`}</Message.Item>
                    <Message.Item>Weak:
                        {decodeWeakness(mob.mob_group.mob_pool.mob_family_system)}                                 
                    </Message.Item>
                    <Message.Item>Resistant:
                        {decodeResistance(mob.mob_group.mob_pool.mob_family_system)}         
                    </Message.Item>
                    <Message.Item>Immune:
                        {decodeImmunity(mob.mob_group.mob_pool.immunity, mob.mob_group.mob_pool.mob_family_system)}
                    </Message.Item>
                </Message.List>
            </Message>
        </Form>
    );
};

const IMMUNITY = {
    NONE: 0x00,
    SLEEP: 0x01,
    GRAVITY: 0x02,
    BIND: 0x04,
    STUN: 0x08,
    SILENCE: 0x10,  // 16
    PARALYZE: 0x20,  // 32
    BLIND: 0x40,  // 64
    SLOW: 0x80,  // 128
    POISON: 0x100, // 256
    ELEGY: 0x200, // 512
    REQUIEM: 0x400, // 1024
}
const decodeImmunity = (statusBitmask, familySystem) => {
    const immune = [];
    Object.keys(IMMUNITY).forEach( status => {
        if (IMMUNITY[status] & statusBitmask) {
            switch (status) {
                case "SLEEP":
                    immune.push(<StatusIcons.Sleep />);
                    break;
                case "GRAVITY":
                    immune.push(<StatusIcons.Gravity />);
                    break;
                case "BIND":
                    immune.push(<StatusIcons.Bind />);
                    break;
                case "STUN":
                    immune.push(<StatusIcons.Stun />);
                    break;
                case "SILENCE":
                    immune.push(<StatusIcons.Silence />);
                    break;
                case "PARALYZE":
                    immune.push(<StatusIcons.Paralyze />);
                    break;
                case "BLIND":
                    immune.push(<StatusIcons.Blind />);
                    break;
                case "SLOW":
                    immune.push(<StatusIcons.Slow />);
                    break;
                case "POISON":
                    immune.push(<StatusIcons.Poison />);
                    break;
                case "ELEGY":
                    immune.push(<StatusIcons.Elegy />);
                    break;
                case "REQUIEM":
                    immune.push(<StatusIcons.Requiem />);
                    break;
            }
        }
    });

    if (familySystem.Fire === 0) immune.push(<StatusIcons.Fire />);
    if (familySystem.Ice === 0) immune.push(<StatusIcons.Ice />);
    if (familySystem.Wind === 0) immune.push(<StatusIcons.Wind />);
    if (familySystem.Earth === 0) immune.push(<StatusIcons.Earth />);
    if (familySystem.Lightning === 0) immune.push(<StatusIcons.Lightning />);
    if (familySystem.Water === 0) immune.push(<StatusIcons.Water />);
    if (familySystem.Dark === 0) immune.push(<StatusIcons.Darkness />);
    if (familySystem.Light === 0) immune.push(<StatusIcons.Light />);
    return immune;
}

const decodeResistance = (familySystem) => {
    const resist = [];
    if (familySystem.Fire > 0 && familySystem.Fire < 1) resist.push(<StatusIcons.Fire />);
    if (familySystem.Ice > 0 && familySystem.Ice < 1) resist.push(<StatusIcons.Ice />);
    if (familySystem.Wind > 0 && familySystem.Wind < 1) resist.push(<StatusIcons.Wind />);
    if (familySystem.Earth > 0 && familySystem.Earth < 1) resist.push(<StatusIcons.Earth />);
    if (familySystem.Lightning > 0 && familySystem.Lightning < 1) resist.push(<StatusIcons.Lightning />);
    if (familySystem.Water > 0 && familySystem.Water < 1) resist.push(<StatusIcons.Water />);
    if (familySystem.Dark > 0 && familySystem.Dark < 1) resist.push(<StatusIcons.Darkness />);
    if (familySystem.Light > 0 && familySystem.Light < 1) resist.push(<StatusIcons.Light />);
    return resist;
}

const decodeWeakness = (familySystem) => {
    const weakness = [];
    if (familySystem.Fire > 1) weakness.push(<StatusIcons.Fire />);
    if (familySystem.Ice > 1) weakness.push(<StatusIcons.Ice />);
    if (familySystem.Wind > 1) weakness.push(<StatusIcons.Wind />);
    if (familySystem.Earth > 1) weakness.push(<StatusIcons.Earth />);
    if (familySystem.Lightning > 1) weakness.push(<StatusIcons.Lightning />);
    if (familySystem.Water > 1) weakness.push(<StatusIcons.Water />);
    if (familySystem.Dark > 1) weakness.push(<StatusIcons.Darkness />);
    if (familySystem.Light > 1) weakness.push(<StatusIcons.Light />);
    return weakness;
}