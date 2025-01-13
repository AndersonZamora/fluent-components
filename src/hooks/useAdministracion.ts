import { useState } from 'react';
import { IFilter, IItemComboBaseDTO } from '../interfaces';
import { getComboPaises } from '../services';
import { documents, paises } from '../data';
import { getComboDocument } from '../services/pais-servivece';

export const useAdministracion = () => {


    const [comboPaises, setComboPaises] = useState<IItemComboBaseDTO[]>([]);
    const [comboTipoDocumento, setComboTipoDocumento] = useState<IItemComboBaseDTO[]>([]);

    const getPaises = (filter: IFilter) => {
        getComboPaises(filter)
            .then((response: any) => {
                if (response.status === 200) {
                    const comoboInterface = response.data.map((item: any) => {
                        return {
                            key: item.key,
                            text: item.Afganistan,
                        };
                    });
                    setComboPaises(comoboInterface);
                }
            })
            .catch(() => {
                const comoboInterface = paises.map((item: any) => {
                    return {
                        key: item.key,
                        text: item.text,
                    };
                });
                setComboPaises(comoboInterface);
            });
    }

    const getTipoDocument = () => {
        getComboDocument()
        .then((response: any) => {
            if (response.status === 200) {
                const comoboInterface = response.data.map((item: any) => {
                    return {
                        key: item.tipoDocumentoId,
                        text: item.tipoDocumentoNombre,
                    };
                });
                setComboTipoDocumento(comoboInterface);
            }
        })
        .catch(() => {
            const comoboInterface = documents.map((item: any) => {
                return {
                    key: item.tipoDocumentoId,
                    text: item.tipoDocumentoNombre,
                };
            });
            setComboTipoDocumento(comoboInterface);
        });
    }

    return {
        comboPaises,
        comboTipoDocumento,
        getPaises,
        getTipoDocument,
    }
}
