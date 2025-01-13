import { Caption1Strong, Combobox, Field, SelectionEvents, Option } from '@fluentui/react-components'
import { IItemComboBaseDTO } from '../../interfaces';


interface ITargetSelect {
    e: SelectionEvents;
    value: string | undefined;
    text: string | undefined;
}

interface Props {
    valueId: string;
    valueName: string;
    title: string;
    placeholder: string;
    disabled?:boolean;
    valueCombo: IItemComboBaseDTO[];
    handeOnChange: (value: string) => void;
    handleSelectionChange: (dat: ITargetSelect) => void;

}

export const ComboboxComponent = (dataInfo: Props) => {

    const { valueId, valueName, title, placeholder,disabled=false, valueCombo, handeOnChange, handleSelectionChange } = dataInfo;

    return (
        <Field
            validationState={!valueId ? 'error' : 'success'}
            validationMessage={!valueId ? `Campo ${title} es requerido` : 'Correcto'}
        >
            <Caption1Strong style={{ marginBottom: '2px' }}>{`Seleccione ${title}`} <span style={{ display: !valueId ? 'contents' : 'none', color: 'red' }}>*</span></Caption1Strong>
            <Combobox
                onChange={({ target }) => handeOnChange(target.value)}
                value={valueName || ''}
                name={valueId}
                selectedOptions={valueId ? [valueId] : []}
                defaultValue={valueId}
                disabled={disabled}
                placeholder={placeholder}
                onOptionSelect={(e, data) => {
                    handleSelectionChange({ e, value: data.optionValue, text: data.optionText })
                }}
                autoComplete='off'
            >
                {valueCombo.map((option) => (
                    <Option key={option.key} value={option.key}>
                        {option.text}
                    </Option>
                ))}
            </Combobox>
        </Field>
    )
}
