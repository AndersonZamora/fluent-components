import axios from "axios";

let andminstracionQas = "https://servicesqas.idslatam.com/Administracion/api/v1/";
let type = { "Content-type": "application/json" };

const axiosAdministracion = axios.create({
    baseURL: andminstracionQas,
    headers: type,
});


axiosAdministracion.interceptors.request.use(
    (config: any) => {
      if (config.headers) {
        let t = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjRDMTIzOEFGLUNBQUQtNEY2MC04NzRDLUQ4MkU5OEUwMzI3NiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImFkbWluLml4bUBpZHNsYXRhbS5jb20iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4uaXhtQGlkc2xhdGFtLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3N1cm5hbWUiOiJhZG1pbi5peG1AaWRzbGF0YW0uY29tIiwiYWxmYSI6ImE4OTM0YjljLTY5NDAtNDNiYS1iZTkxLTdmNzI1ZmQyZGZhNCIsImJldGEiOiI1ODA1Y2U3ZS0zZThiLTRlYWEtYTBiYi1kOWE4NTg1NGIzZDgiLCJGYWxjb24iOiIwMWVhY2Y5Ny1iZTg2LTQ5NDEtODYyMS1iMGJhZDRmNDQ2MjIiLCJNZWdhIjoiNTgwNWNlN2UtM2U4Yi00ZWFhLWEwYmItZDlhODU4NTRiM2Q4IiwiWmVybyI6ImE4OTM0YjljLTY5NDAtNDNiYS1iZTkxLTdmNzI1ZmQyZGZhNCIsIkJhbmRpY29vdCI6Ijc2OGQ4ZGRjLTE1ZjAtNDc4Zi05NzU2LWQ2MmE3OGZiYjI0YyIsIkN1ZW50YSI6IklYTSBQRVJVIFMuQS4iLCJDdXN0b21lciI6IklYTSBQRVJVIFMuQS4iLCJDb2RpZ29DdXN0b21lciI6IjIwIiwiR290aGFuIjoiYWRtaW4uaXhtQGlkc2xhdGFtLmNvbSIsIkRpeGl0IjoiIiwiUG9rZXIiOiIiLCJIYW5vaSI6IkNDQ0g2WTU0R0dMR0ZGWVJPSVoyRzRRU0xDMkZVT1ZKIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIkFkbWluIiwiY250ci5BZG1pbiIsIkNvbnRyYXRvcyIsInVzci5BZG1pbiIsIlJSSEgiLCJhc2lzLkFkbWluIl0sImV4cCI6MTczNjg3MzAwNywiaXNzIjoiaHR0cDovL3Rlc2VvLmlkc2xhdGFtLmNvbSIsImF1ZCI6Imh0dHA6Ly90ZXNlby5pZHNsYXRhbS5jb20ifQ.LwfvDSg116LeXZPqqHLAyThuNI7BvpdQ-O6_aIfUKko";
        config.headers['Authorization'] = `Bearer ${t}`;
      }
  
      return config;
    },
    (error: any) => {
      alert(error);
      return Promise.reject(error);
    }
  );

export {
    axiosAdministracion
}
//https://servicesqas.idslatam.com/Administracion/api/v1/Pais/Combo?Skip=0&Take=50&Search=
//https://servicesqas.idslatam.com/Administracion/api/v1/Pais/Combo?Skip=0&Take=50&Search=
//https://servicesqas.idslatam.com/Administracion/api/v1/TipoDocumentoIdentidadCustomer/TipoDocumentoIdentidadBambas