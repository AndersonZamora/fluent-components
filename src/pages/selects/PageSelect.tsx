//no pone el valor por defecto que se le asiga
import { useEffect, useState } from 'react'
import { GridComtainer, GridItem, LayoutContainer } from '../../components'
import { Combobox, makeStyles, Option, useTimeout } from '@fluentui/react-components';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles({
  root: {
    // Stack the label above the field with a gap
    display: "grid",
    gridTemplateRows: "repeat(1fr)",
    justifyItems: "start",
    gap: "2px",
    maxWidth: "400px",
  },
});


interface IDocument {
  documentId: string;
  documentNombre: string;
}

interface IFormatData {
  documentId: string;
  documentNombre: string;
}

const dataBlack:IFormatData = {
  documentId: '',
  documentNombre: ''
}

export const PageSelect = () => {

  const { register, handleSubmit,watch, setValue, formState: { errors } } = useForm<IFormatData>({
    defaultValues: {...dataBlack}
  })

  const [dataNew, setDataNew] = useState<IFormatData>({...dataBlack})

  const [options, setOptions] = useState<IDocument[]>([
    {
      documentId: '123',
      documentNombre: 'DNI',
    },
    {
      documentId: '3423',
      documentNombre: 'Pasaporte'
    },
    {
      documentId: '1344',
      documentNombre: 'Otros'
    },
  ])

  const handleOnSubmit = (data: IDocument) => {
    console.log(dataNew);
  }
  

  useEffect(() => {
    setTimeout(() => {
      setDataNew({
        documentId:"3423",
        documentNombre:"Pasaporte"
      })
      setValue('documentId', '3423');  // Actualiza el valor del formulario
      setValue('documentNombre', 'Pasaporte');
    }, 2000);
  }, [])
  

  const handleSelectionChange = (e:any, option: string | undefined) => {
    if(e.type == "change"){
      setDataNew({
        ...dataBlack,
        documentId: "",
        documentNombre:""
      })
    }

    if (option) {
      const selectedOption = options.find(opt => opt.documentId === option);
      if (selectedOption) {
        setDataNew({
          ...dataBlack,
          documentId: selectedOption.documentId,
          documentNombre:selectedOption.documentNombre
        })
        setValue("documentId",selectedOption.documentId)
        setValue("documentNombre",selectedOption.documentNombre)
      }
    }
  };

  return (
    <LayoutContainer>
      <form onSubmit={handleSubmit(handleOnSubmit)}>

        <pre>{JSON.stringify(dataNew,null,2)}</pre>
        <GridComtainer gap='5px'>
          <GridItem>
            <Combobox
              {
              ...register('documentId', {
                required: { value: true, message: "Documento requerido" }
              })
              }
              onChange={({target}) => setDataNew({...dataNew, documentId:"", documentNombre:target.value})}
              value={dataNew.documentNombre || ''}  //
              selectedOptions={dataNew.documentId ? [dataNew.documentId] : []}
              defaultValue={dataNew.documentId}
              placeholder="Seleccione documento"
              onOptionSelect={(e, data) => {
                console.log(data)
                handleSelectionChange(e,data.optionValue)
              }}
              autoComplete='off'
            >
              {options.map((option) => (
                <Option key={option.documentId} value={option.documentId}>
                  {option.documentNombre}
                </Option>
              ))}
            </Combobox>
            {(!dataNew.documentId) && <span style={{ color: 'red', }}>{"Documento requerido"}</span>}

          </GridItem>
        </GridComtainer>
        <button type='submit'>Registrar</button>
      </form>
    </LayoutContainer>
  )
}
