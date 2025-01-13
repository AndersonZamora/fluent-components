import { useEffect, useState } from 'react'
import { ComboboxComponent, GridComtainer, GridItem, LayoutContainer } from '../../components'
import { SelectionEvents, Field, Caption1Strong, Input, Spinner, Tooltip, Button, useToastController, useId, Toast, ToastTitle, MessageBar, MessageBarBody, MessageBarTitle } from '@fluentui/react-components'
import { useAdministracion } from '../../hooks';
import { generos } from '../../data';
import {
    Search20Regular,
} from "@fluentui/react-icons";

type optionInput = "documentId" | "paisId" | "generoId"

interface IData {
    documentNombre: string;
    documentId: string;
    paisId: string;
    paisNombre: string;
    generoId: string;
    generoNombre: string;
    nroDOI: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    primerNombre: string;
    segundoNombre: string;
    nroEspaldar: string;
}

interface ITargetSelect {
    e: SelectionEvents;
    value: string | undefined;
    text: string | undefined;
    name: optionInput
}

interface ITargetInpunt {
    name: string;
    value: string;
}


interface IData {
    documentNombre: string;
    documentId: string;
    paisId: string;
    paisNombre: string;
    generoId: string;
    generoNombre: string;
    nroDOI: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    primerNombre: string;
    segundoNombre: string;
    nroEspaldar: string;
}

const dataForm: IData = {
    documentNombre: '',
    documentId: '',
    paisId: '',
    paisNombre: '',
    generoId: '',
    generoNombre: '',
    nroDOI: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    primerNombre: '',
    segundoNombre: '',
    nroEspaldar: '',
}

interface ISearchDoc {
    message: string;
    limit: number;
    loading: boolean;
    error: boolean;
}

const docSearch: ISearchDoc = {
    message: 'Esperando tipo de documento',
    limit: 0,
    loading: false,
    error: false,
}

interface IIfon {
    visita: 'Operativa' | 'Administrativa';
    isEdit: boolean;
}

export const PageForms = () => {

    const [ifonPanels, setIfonPanels] = useState<IIfon>({ visita: 'Administrativa', isEdit: false });
    const [isValid, setIsValid] = useState(false);
    const [forms, setForms] = useState<IData>(dataForm);
    const { getPaises, getTipoDocument, comboPaises, comboTipoDocumento } = useAdministracion();
    const [messageDoc, setMessageDoc] = useState<ISearchDoc>(docSearch);

    const handleSelectionChange = ({ e, name, value, text }: ITargetSelect) => {
        if (name === 'documentId') {
            setForms({ ...dataForm, segundoNombre: "", documentId: value || "", documentNombre: text || "", nroDOI: "" })
            return;
        }
        if (name === 'paisId') {
            setForms({ ...forms, paisId: value || "", paisNombre: text || "" })
        }
        if (name === 'generoId') {
            setForms({ ...forms, generoId: value || "", generoNombre: text || "" })
        }
    }

    const handleInputOnChange = ({ name, value }: ITargetInpunt) => {
        if (name === "nroDOI") {
            const numeros = forms.documentNombre === 'DNI' ? value.toUpperCase().replace(/[^\d]/g, "") : value.toUpperCase();
            const numerosLimitados = numeros.slice(0, messageDoc.limit);
            setForms({ ...forms, nroDOI: numerosLimitados })
        } else {
            const letras = value.toUpperCase().replace(/[^a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s]/g, "");
            setForms({ ...forms, [name]: letras })
        }
    }

    const handleTypeDoc = (datoAdjunto: string) => {
        switch (datoAdjunto) {
            case "DNI":
                setMessageDoc({ message: "Max. 8 digitos", limit: 8, loading: false, error: false });
                break;
            case "Carnet de Extranjería":
                setMessageDoc({ message: "Max. 16 digitos", limit: 16, loading: false, error: false });
                break;

            case "Pasaporte":
                setMessageDoc({ message: "Max. 12 digitos", limit: 12, loading: false, error: false });
                break;
            default:
                setMessageDoc({ message: "Esperando tipo de documento", limit: 0, loading: false, error: false });
                break;
        }
    }

    const handleSearchPerson = () => {
        setMessageDoc({ ...messageDoc, loading: true })

        setTimeout(() => {
            setMessageDoc({ ...messageDoc, loading: false, error: true })
            setTimeout(() => {
                setMessageDoc({ ...messageDoc, error: false })
            }, 3000)
        }, 2000);
    }


    const validateForm = (form: IData) => {
        return Object.entries(form).every(([key, value]) => {
            if (key === 'segundoNombre') {
                return true
            }

            if (key === 'nroEspaldar' && !validVisita) {
                return true
            }

            if (key === 'nroDOI') {
                return validNumer
            }

            return value.trim() !== '';
        });
    };

    useEffect(() => setIsValid(validateForm(forms)), [forms]);

    useEffect(() => {
        getPaises({ skip: 0, take: 50, search: "" }),
            getTipoDocument()
    }, [])

    useEffect(() => handleTypeDoc(forms.documentNombre), [forms.documentNombre])

    useEffect(() => {
        if (ifonPanels.isEdit) {
            setTimeout(() => {
                setForms({
                    ...forms,
                    paisId: "7c12f32b-e6d1-4b16-839f-b313d535d6b6",
                    paisNombre: "Afganistan",
                    documentId: "7c8a676e-52b2-46ea-b6fc-2c5afb2839d3",
                    documentNombre: "DNI"
                })
            }, 2000);
        } else {
            setForms({
                ...forms,
                paisId: "7c12f32b-e6d1-4b16-839f-b313d535d6b6",
                paisNombre: "Afganistan",
            })
        }
    }, [])

    const validNumer = (forms.nroDOI.length === messageDoc.limit);
    const docNacional = forms.documentNombre === "DNI";
    const validVisita = ifonPanels.visita === "Operativa";


    return (
        <LayoutContainer>
            <h1>Formulario <pre>{JSON.stringify(isValid, null, 2)}</pre> </h1>
            <GridComtainer gap='5px' md={2} lg={2}>
                <GridItem >
                    <ComboboxComponent
                        valueId={forms.documentId}
                        valueName={forms.documentNombre}
                        title={'Tipo de Documento'}
                        placeholder={'Seleccione documento'}
                        disabled={messageDoc.loading}
                        valueCombo={comboTipoDocumento}
                        handeOnChange={(value) => setForms({ ...forms, documentId: "", documentNombre: value, nroDOI: "" })}
                        handleSelectionChange={(data) => handleSelectionChange({ ...data, name: "documentId" })}
                    />
                </GridItem>
                <GridItem>
                    <div style={{ display: 'flex', width: '100%', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                        <Field
                            style={{ width: '100%' }}
                            validationState={(!forms.nroDOI || !validNumer) ? 'error' : 'success'}
                            validationMessage={(!forms.nroDOI || !validNumer) ? "Campo Número DOI es requerido" : 'Correcto'}
                        >
                            <Caption1Strong style={{ marginBottom: '2px' }}>Número de Documento de Identidad</Caption1Strong>
                            <Input
                                value={forms.nroDOI}
                                type={'text'}
                                placeholder={messageDoc.message}
                                disabled={!forms.documentId || messageDoc.loading}
                                name="nroDOI"
                                maxLength={messageDoc.limit}
                                onChange={({ target }) => handleInputOnChange({ name: target.name, value: target.value })}
                                autoComplete="off"
                            />
                        </Field>
                        {
                            (messageDoc.loading) ? (<div
                                style={{
                                    width: "7%",
                                    height: "2rem",
                                    marginTop: "15px"
                                }}
                            >
                                <Spinner size="tiny" />
                            </div>)
                                : forms.documentId &&
                                (
                                    <Tooltip withArrow content="Buscar" relationship="label">
                                        <Button
                                            appearance="subtle"
                                            icon={<Search20Regular />}
                                            disabled={!(validNumer)}
                                            size="medium"
                                            onClick={handleSearchPerson}
                                        />
                                    </Tooltip>
                                )
                        }
                    </div>
                    <div style={{ marginTop: "3px", width: "91.5%", display: messageDoc.error ? 'flex' : 'none' }}>
                        <MessageBar intent={"error"}>
                            <MessageBarBody>
                                <MessageBarTitle>El DNI</MessageBarTitle>
                                no existe
                            </MessageBarBody>
                        </MessageBar>
                    </div>
                </GridItem>
            </GridComtainer>
            <GridComtainer gap='5px' md={2} lg={2}>
                <GridItem>
                    <Field
                        style={{ width: '100%' }}
                        validationState={(!forms.apellidoPaterno) ? 'error' : 'success'}
                        validationMessage={(!forms.apellidoPaterno) ? "Campo Apellido paterno es requerido" : 'Correcto'}
                    >
                        <Caption1Strong style={{ marginBottom: '2px' }}>Apellido Paterno</Caption1Strong>
                        <Input
                            value={forms.apellidoPaterno}
                            type={'text'}
                            placeholder="Ingresar Apellido Paterno"
                            disabled={messageDoc.loading}
                            name="apellidoPaterno"
                            onChange={({ target }) => handleInputOnChange({ name: target.name, value: target.value })}
                            autoComplete="off"
                            readOnly={docNacional}
                        />
                    </Field>
                </GridItem>
                <GridItem>
                    <Field
                        style={{ width: '100%' }}
                        validationState={(!forms.apellidoMaterno) ? 'error' : 'success'}
                        validationMessage={(!forms.apellidoMaterno) ? "Campo Apellido Materno es requerido" : 'Correcto'}
                    >
                        <Caption1Strong style={{ marginBottom: '2px' }}>Apellido Materno</Caption1Strong>
                        <Input
                            value={forms.apellidoMaterno}
                            type={'text'}
                            placeholder="Ingresar Apellido Materno"
                            disabled={messageDoc.loading}
                            name="apellidoMaterno"
                            onChange={({ target }) => handleInputOnChange({ name: target.name, value: target.value })}
                            autoComplete="off"
                            readOnly={docNacional}
                        />
                    </Field>
                </GridItem>
            </GridComtainer>
            <GridComtainer gap='5px' md={2} lg={2}>
                <GridItem>
                    <Field
                        style={{ width: '100%' }}
                        validationState={(!forms.primerNombre) ? 'error' : 'success'}
                        validationMessage={(!forms.primerNombre) ? "Campo Primer Nombre es requerido" : 'Correcto'}
                    >
                        <Caption1Strong style={{ marginBottom: '2px' }}>Primer Nombre</Caption1Strong>
                        <Input
                            value={forms.primerNombre}
                            type={'text'}
                            placeholder="Ingresar Primer Nombre"
                            disabled={messageDoc.loading}
                            name="primerNombre"
                            onChange={({ target }) => handleInputOnChange({ name: target.name, value: target.value })}
                            autoComplete="off"
                            readOnly={docNacional}
                        />
                    </Field>
                </GridItem>
                <GridItem>
                    <Field
                        style={{ width: '100%' }}
                    >
                        <Caption1Strong style={{ marginBottom: '2px' }}>Otros Nombres</Caption1Strong>
                        <Input
                            value={forms.segundoNombre}
                            type={'text'}
                            placeholder="Ingresar Otros Nombres"
                            disabled={messageDoc.loading}
                            name="segundoNombre"
                            onChange={({ target }) => handleInputOnChange({ name: target.name, value: target.value })}
                            autoComplete="off"
                            readOnly={docNacional}
                        />
                    </Field>
                </GridItem>
            </GridComtainer>
            <GridComtainer gap='5px' md={2} lg={2}>
                <GridItem>
                    <ComboboxComponent
                        valueId={forms.generoId}
                        valueName={forms.generoNombre}
                        title={'Género'}
                        disabled={messageDoc.loading}
                        placeholder={'Seleccione el Género'}
                        valueCombo={generos}
                        handeOnChange={(value) => setForms({ ...forms, generoId: "", generoNombre: value })}
                        handleSelectionChange={(data) => handleSelectionChange({ ...data, name: "generoId" })}
                    />
                </GridItem>
                <GridItem>
                    <ComboboxComponent
                        valueId={forms.paisId}
                        valueName={forms.paisNombre}
                        title={'Nacionalidad'}
                        placeholder={'Seleccione Nacionalidad'}
                        valueCombo={comboPaises}
                        disabled={messageDoc.loading}
                        handeOnChange={(value) => setForms({ ...forms, paisId: "", paisNombre: value })}
                        handleSelectionChange={(data) => handleSelectionChange({ ...data, name: "paisId" })}
                    />
                </GridItem>
            </GridComtainer>
            <GridComtainer visible={ifonPanels.visita === 'Operativa' ? true : false} gap='5px' md={2} lg={2}>
                <Field
                    style={{ width: '100%' }}
                    validationState={(!forms.nroEspaldar) ? 'error' : 'success'}
                    validationMessage={(!forms.nroEspaldar) ? "Campo Nro. Espaldar es requerido" : 'Correcto'}
                >
                    <Caption1Strong style={{ marginBottom: '2px' }}>Nro de Espaldar</Caption1Strong>
                    <Input
                        value={forms.nroEspaldar}
                        type={'text'}
                        placeholder="Ingresar Nro de Espaldar"
                        disabled={messageDoc.loading}
                        name="nroEspaldar"
                        onChange={({ target }) => handleInputOnChange({ name: target.name, value: target.value })}
                        autoComplete="off"
                    />
                </Field>
            </GridComtainer>
        </LayoutContainer>
    )
}
