import { useState } from 'react'
import { DateTimeComponent, GridComtainer, GridItem, LayoutContainer } from '../../components'
import { _formatDate, getPrimerActaulDiaDelMes } from '../../utils';
import { Button } from '@fluentui/react-components';

interface ISelectDate { inicio: string, fin: string }

export const PageDateTime = () => {

    const { actual, inicio } = getPrimerActaulDiaDelMes();

    const [fecha, setFecha] = useState<ISelectDate>({ inicio, fin: actual });

    const onChangeDate = (date: Date | null | undefined, nombre: string) => {
        if (!date) {
            return
        }

        if (date) {
            setFecha({ ...fecha, [nombre]: _formatDate(date, "/") })
        }
    }


    const handleDate = () => {
        console.log(fecha)
    }


    return (
        <LayoutContainer>
            <h1>Hola loco mundo</h1>
            <GridComtainer gap='5px'>
                <GridItem>
                    <DateTimeComponent
                        onSelectDate={(data) => onChangeDate(data, 'inicio')}
                        text={"Inicio"}
                        value={fecha.inicio}
                    />
                </GridItem>
                <GridItem>
                    <DateTimeComponent
                        onSelectDate={(data) => onChangeDate(data, 'fin')}
                        text={"Fin"}
                        value={fecha.fin}
                    />
                </GridItem>
            </GridComtainer>
        </LayoutContainer>
    )
}
