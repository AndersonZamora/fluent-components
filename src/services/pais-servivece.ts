import { IFilter } from "../interfaces";
import { axiosAdministracion } from "./http-com";

let urlPais = "Pais";

export const getComboPaises = (filter: IFilter) => {
    if (filter.search == null || filter.search == undefined) {
      return axiosAdministracion.get(
        `${urlPais}/Combo?Skip=${filter.skip}&Take=${filter.take}`
      );
    }
    return axiosAdministracion.get(
      `${urlPais}/Combo?Skip=${filter.skip}&Take=${filter.take}&Search=${filter.search}`
    );
  };
  

export  const getComboDocument = () => {
    return axiosAdministracion.get(
      `TipoDocumentoIdentidadCustomer/TipoDocumentoIdentidadBambas`
    );
  };
