import React from 'react';
import { Form, Message, Icon, Popup, Accordion, Label, Container, List, Segment, Card, Image, Button } from 'semantic-ui-react';
import * as StatusIcons from './icons';

export default ({ mob }) => {

    const gmCommands = (
        <List>
            <List.Item icon='terminal' content={`!spawnmob ${mob.mobid}`} />
            <List.Item icon='terminal' content={`!pos ${parseInt(mob.pos_x)} ${parseInt(mob.pos_y)} ${parseInt(mob.pos_z)} ${mob.mob_group.zoneid}`} />
        </List>
    );

    const damageModifiers = (
        <Segment.Group>
            <Segment size='huge' color='green' content={decodeWeakness(mob.mob_group.mob_pool.mob_family_system)} />
            <Segment size='huge' color='yellow' content={decodeResistance(mob.mob_group.mob_pool.mob_family_system)} />
            <Segment size='huge' color='red' content={decodeImmunity(mob.mob_group.mob_pool.immunity, mob.mob_group.mob_pool.mob_family_system)} />
        </Segment.Group>
    );

    const elementalResists = (
        <Message>In Development</Message>
    );

    const drops = (
        <Message>
            <Message.List>
                {mob.mob_group.mob_droplists.map( drop => {
                    const name = drop.item_basic.name.split('_').map( word => {
                        return word.replace(word[0], word[0].toUpperCase());
                    }).join(' ');
                    let rate = (drop.itemRate / 1000) * 100;
                    rate = parseFloat(parseFloat(rate).toFixed(2)); 
                    return <Message.Item>{`${name}: ${rate}%`}</Message.Item>
                })}
            </Message.List>
        </Message>
    );

    const mobTypes = (
        <Segment size='huge'>
            {decodeMobtypes(mob.mob_group.mob_pool.mobType)}
        </Segment>
    );

    return (
        <Card style={{margin: "40px"}}>
            <Card.Content>
                <Image floated='right' size='mini' src='./mob.jpg' />
                <Card.Header>{mob.polutils_name}</Card.Header>
                <Card.Meta>{mob.mob_group.zone_setting.name.split('_').join(' ')}</Card.Meta>
                <Card.Description>
                    <Accordion
                        panels={[
                            {title: "Stats", content: {content: mobTypes, key: 'mob-types'} },
                            {title: "GM Commands", content: {content: gmCommands, key: 'gm-cmds'} },
                            {title: "Elemental Resistance", content: {content: elementalResists, key: 'ele-resist'} },                            
                            {title: "Damage Resistance", content: {content: damageModifiers, key: 'damage-mods'} },
                            {title: "Drops", content: {content: drops, key: 'drops'} }
                        ]}
                        styled
                    />
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='green' onClick={() => window.location.href = `http://localhost:3010?id=${mob.mobid}` }>DB Source</Button>
                    <Button basic color='red'>Edit</Button>
                </div>
            </Card.Content>
        </Card>
    );

    return (
        <Form style={{margin: "40px", width: "500px"}}>
            <Message size='massive'>
                <Message.Header>{mob.polutils_name}</Message.Header>
                <Message.List>
                     <Accordion
                        panels={[
                            {title: "GM Commands", content: {content: gmCommands, key: 'gm-commands'} },
                            {title: "Damage Modifiers", content: {content: damageModifiers, key: 'damage-mods'} }
                        ]}
                        styled
                    />
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
    const immune = ['Immune: '];
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
    if (familySystem.Slash === 0) immune.push(<StatusIcons.Slashing />);
    if (familySystem.Pierce === 0) immune.push(<StatusIcons.Piercing />);
    if (familySystem.H2H === 0) immune.push(<StatusIcons.H2H />);
    if (familySystem.Impact === 0) immune.push(<StatusIcons.Impact />);
    return immune;
}

const decodeResistance = (familySystem) => {
    const resist = ['Resistant: '];
    if (familySystem.Fire > 0 && familySystem.Fire < 1) resist.push(<StatusIcons.Fire />);
    if (familySystem.Ice > 0 && familySystem.Ice < 1) resist.push(<StatusIcons.Ice />);
    if (familySystem.Wind > 0 && familySystem.Wind < 1) resist.push(<StatusIcons.Wind />);
    if (familySystem.Earth > 0 && familySystem.Earth < 1) resist.push(<StatusIcons.Earth />);
    if (familySystem.Lightning > 0 && familySystem.Lightning < 1) resist.push(<StatusIcons.Lightning />);
    if (familySystem.Water > 0 && familySystem.Water < 1) resist.push(<StatusIcons.Water />);
    if (familySystem.Dark > 0 && familySystem.Dark < 1) resist.push(<StatusIcons.Darkness />);
    if (familySystem.Light > 0 && familySystem.Light < 1) resist.push(<StatusIcons.Light />);
    if (familySystem.Slash > 0 && familySystem.Slash < 1) resist.push(<StatusIcons.Slashing />);
    if (familySystem.Pierce > 0 && familySystem.Pierce < 1) resist.push(<StatusIcons.Piercing />);
    if (familySystem.H2H > 0 && familySystem.H2H < 1) resist.push(<StatusIcons.H2H />);
    if (familySystem.Impact > 0 && familySystem.Impact < 1) resist.push(<StatusIcons.Impact />);
    return resist;
}

const decodeWeakness = (familySystem) => {
    const weakness = ['Weak: '];
    if (familySystem.Fire > 1) weakness.push(<StatusIcons.Fire />);
    if (familySystem.Ice > 1) weakness.push(<StatusIcons.Ice />);
    if (familySystem.Wind > 1) weakness.push(<StatusIcons.Wind />);
    if (familySystem.Earth > 1) weakness.push(<StatusIcons.Earth />);
    if (familySystem.Lightning > 1) weakness.push(<StatusIcons.Lightning />);
    if (familySystem.Water > 1) weakness.push(<StatusIcons.Water />);
    if (familySystem.Dark > 1) weakness.push(<StatusIcons.Darkness />);
    if (familySystem.Light > 1) weakness.push(<StatusIcons.Light />);
    if (familySystem.Slash > 1) weakness.push(<StatusIcons.Slashing />);
    if (familySystem.Pierce > 1) weakness.push(<StatusIcons.Piercing />);
    if (familySystem.H2H > 1) weakness.push(<StatusIcons.H2H />);
    if (familySystem.Impact > 1) weakness.push(<StatusIcons.Impact />);
    return weakness;
}

const MOBTYPE = {
    NORMAL: 0x00,
    PCSPAWNED: 0x01,
    NOTORIOUS: 0x02,
    FISHED: 0x04,
    CALLED: 0x08,
    BATTLEFIELD: 0x10,  // 16
    EVENT: 0x20  // 32
};

const decodeMobtypes = (typeBitmask) => {
    const types = ['Mob Type: '];
    Object.keys(MOBTYPE).forEach( type => {
        if (MOBTYPE[type] & typeBitmask) {
            switch (type) {
                case "NORMAL":
                    types.push(<StatusIcons.Sleep />);
                    break;
                case "PCSPAWNED":
                    types.push(<StatusIcons.Gravity />);
                    break;
                case "NOTORIOUS":
                    types.push(<StatusIcons.NM />);
                    break;
                case "FISHED":
                    types.push(<StatusIcons.Stun />);
                    break;
                case "CALLED":
                    types.push(<StatusIcons.Silence />);
                    break;
                case "BATTLEFIELD":
                    types.push(<StatusIcons.Paralyze />);
                    break;
                case "EVENT":
                    types.push(<StatusIcons.Blind />);
                    break;
            }
        }
    });
    return types;
}