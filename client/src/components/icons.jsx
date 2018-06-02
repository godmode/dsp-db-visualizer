import React from 'react';
import { Popup, Icon } from 'semantic-ui-react';

// Status

export const Stun = () => {
    return (
        <Popup
            trigger={<Icon color='purple' name='power cord' />}
            content='Stun'
            basic
        />  
    );
};

export const Silence = () => {
    return (
        <Popup
            trigger={<Icon color='green' name='microphone slash' />}
            content='Silence'
            basic
        />  
    );
};

export const Sleep = () => {
    return (
        <Popup
            trigger={<Icon color='black' name='bed' />}
            content='Sleep'
            basic
        />  
    );
};

export const Gravity = () => {
    return (
        <Popup
            trigger={<Icon color='green' name='magnet' />}
            content='Gravity'
            basic
        />  
    );
};

export const Slow = () => {
    return (
        <Popup
            trigger={<Icon color='brown' name='hourglass three' />}
            content='Slow'
            basic
        />  
    );
};

export const Blind = () => {
    return (
        <Popup
            trigger={<Icon color='black' name='hide' />}
            content='Blind'
            basic
        />  
    );
};

export const Elegy = () => {
    return (
        <Popup
            trigger={<Icon color='brown' name='wait' />}
            content='Elegy'
            basic
        />  
    );
};

export const Bind = () => {
    return (
        <Popup
            trigger={<Icon color='blue' name='street view' />}
            content='Bind'
            basic
        />  
    );
};

export const Paralyze = () => {
    return (
        <Popup
            trigger={<Icon color='blue' name='handicap' />}
            content='Paralyze'
            basic
        />  
    );
};

export const Poison = () => {
    return (
        <Popup
            trigger={<Icon color='blue' name='medkit' />}
            content='Poison'
            basic
        />  
    );
};

export const Requiem = () => {
    return (
        <Popup
            trigger={<Icon color='green' name='ambulance' />}
            content='Requiem'
            basic
        />  
    );
};

// Elements

export const Fire = () => {
    return (
        <Popup
            trigger={<Icon color='red' name='fire' />}
            content='Fire'
            basic
        />  
    );
}

export const Ice = () => {
    return (
        <Popup
            trigger={<Icon color='blue' name='snowflake outline' />}
            content='Ice'
            basic
        />  
    );
}

export const Wind = () => {
    return (
        <Popup
            trigger={<Icon color='green' name='leaf' />}
            content='Wind'
            basic
        />  
    );
}

export const Earth = () => {
    return (
        <Popup
            trigger={<Icon color='brown' name='globe' />}
            content='Earth'
            basic
        />  
    );
}

export const Lightning = () => {
    return (
        <Popup
            trigger={<Icon color='purple' name='lightning' />}
            content='Lightning'
            basic
        />  
    );
}

export const Water = () => {
    return (
        <Popup
            trigger={<Icon color='blue' name='tint' />}
            content='Water'
            basic
        />  
    );
}

export const Darkness = () => {
    return (
        <Popup
            trigger={<Icon color='black' name='moon' />}
            content='Darkness'
            basic
        />  
    );
}

export const Light = () => {
    return (
        <Popup
            trigger={<Icon color='white' name='star outline' />}
            content='Light'
            basic
        />  
    );
}
