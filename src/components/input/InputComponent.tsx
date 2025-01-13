import {
    Caption1Strong,
    Field,
    Input,
    InputOnChangeData,
    Slot,
} from '@fluentui/react-components';
import React, { useEffect, useState } from 'react';

interface IInputComponent {
    tresInputs?: boolean;
    disabled?: boolean;
    text?: string;
    defaultValue?: string;
    regex?: RegExp;
    placeholder?: string;
    required?: true | false;
    valid?: string;
    min?: string;
    max?: string;
    valueMax?: number;
    componentRef?: any;
    maxlength?: number;
    type?:
    | 'text'
    | 'email'
    | 'password'
    | 'search'
    | 'tel'
    | 'url'
    | 'date'
    | 'datetime-local'
    | 'month'
    | 'number'
    | 'time'
    | 'week'
    | 'color';
    onChange?: (ev: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => void;
    onInput?: () => void;
    icon?: Slot<"span">;
}

export const InputComponent = (props: IInputComponent) => {
    const [selectedColor, setSelectedColor] = useState('#000000');
    const [value, setValue] = useState<string>(props.defaultValue ?? '');
    const [alerta, setAlerta] = useState<string>(props.valid ?? '');

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newColor = event.target.value;

        setSelectedColor(newColor);
        if (props.onChange) {
            props.onChange(event, { value: newColor });
        }
    };
    useEffect(() => {
        if (props.defaultValue !== undefined) {
            setValue(props.defaultValue);
        }
    }, [props.defaultValue]);
    useEffect(() => {
        if (props.valid !== undefined && props.valid !== '') {
            setAlerta(props.valid);
        } else {
            setAlerta('');
        }
    }, [props.valid]);

    const onChangeAux = (ev: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => {
        const newValue = data.value;
        if (props.regex && !props.regex.test(newValue)) {
            setAlerta(props.valid ?? `El valor no es válido según el formato requerido.`);
        } else {
            setAlerta('');
        }

        if (props.valueMax) {
            if (newValue.length <= props.valueMax) {
                setValue(newValue);
            }
        } else if (ev !== undefined) {
            setValue(newValue);
        }
    };

    return (
        <>
            {props.type !== 'color' ? (
                <>
                    {props.required === true && props.required !== undefined ? (
                        <>
                            <div
                                style={{
                                    width: '100%',
                                    minWidth: '100px',
                                    marginTop: props.tresInputs ? '0px' : '20px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <Field
                                    validationState={
                                        alerta === ''
                                            ? value == undefined
                                                ? 'warning'
                                                : value !== '' && value != undefined
                                                    ? 'success'
                                                    : 'error'
                                            : 'error'
                                    }
                                    validationMessage={
                                        alerta === ''
                                            ? value == undefined
                                                ? 'Campo es requerido'
                                                : value !== '' && value != undefined
                                                    ? 'Correcto.'
                                                    : `El campo ${props.text} es requerido.`
                                            : alerta
                                    }
                                >
                                    {props.text ? (
                                        <Caption1Strong style={{ marginBottom: '2px' }}>{props.text}</Caption1Strong>
                                    ) : (
                                        []
                                    )}
                                    <Input
                                        maxLength={props.maxlength}
                                        ref={props.componentRef ?? null}
                                        value={value}
                                        min={props.min && props.min}
                                        max={props.max && props.max}
                                        type={props.type ?? 'text'}
                                        placeholder={props.placeholder}
                                        disabled={props.disabled ?? false}
                                        onChange={(e, data) => {
                                            if (props.onChange) {
                                                props.onChange(e, data);
                                                onChangeAux(e, data);
                                            }
                                        }}
                                        onInput={props.onInput}
                                        style={{
                                            width: props.tresInputs ? '95%' : '100%',
                                        }}
                                        autoComplete="off"
                                        contentAfter={props.icon}
                                    />
                                </Field>
                            </div>
                        </>
                    ) : (
                        <>
                            <div
                                style={{
                                    width: '100%',
                                    minWidth: '100px',
                                    marginTop: props.tresInputs ? '0px' : '20px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <Field
                                    validationState={alerta !== '' ? 'error' : 'none'}
                                    validationMessage={alerta !== '' ? alerta : ''}
                                >
                                    <Caption1Strong style={{ marginBottom: '2px' }}>{props.text}</Caption1Strong>
                                    <Input
                                        ref={props.componentRef ?? null}
                                        value={value}
                                        min={props.min && props.min}
                                        max={props.max && props.max}
                                        type={props.type ?? "text"}
                                        disabled={props.disabled ?? false}
                                        placeholder={props.placeholder}
                                        onChange={(e, data) => {
                                            if (props.onChange) {
                                                props.onChange(e, data);
                                                onChangeAux(e, data);
                                            }
                                        }}
                                        style={{
                                            width: props.tresInputs ? '95%' : '100%',
                                        }}
                                        autoComplete="off"
                                        contentAfter={props.icon}

                                    />
                                </Field>
                            </div>
                        </>
                    )}
                </>
            ) : (
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'end',
                        width: '100%',
                        marginTop: '20px',
                    }}
                >
                    <input type="color" value={selectedColor} onChange={handleColorChange} />
                    <div
                        style={{
                            width: '100%',
                            margin: '0px 5px',
                            minWidth: '100px',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Caption1Strong style={{ marginBottom: '2px' }}>{props.text}</Caption1Strong>
                        <Input
                            ref={props.componentRef ?? null}
                            placeholder={props.placeholder}
                            defaultValue={selectedColor}
                            onChange={e => handleColorChange(e)}
                            autoComplete="off"
                            min={props.min && props.min}
                            max={props.max && props.max}
                        />
                    </div>
                </div>
            )}
        </>
    );
};