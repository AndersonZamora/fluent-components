import { defaultDatePickerStrings } from "@fluentui/react-datepicker-compat";

export const onFormatDate = (date?: Date | null): string => {
  return !date
    ? ""
    : date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
};

export const formatDateToYearMonthDay = (dateString?: string): string => {
  if (!dateString) return "";

  const dateObject = new Date(dateString);
  const year = dateObject.getUTCFullYear();
  const month = (dateObject.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = dateObject.getUTCDate().toString().padStart(2, "0");

  return `${year},${month},${day}`;
};

export const getPrimerActaulDiaDelMes = (): { inicio: string; actual: string } => {
  const fecha = new Date();
  const inicio = onFormatDate(new Date(fecha.getFullYear(), fecha.getMonth(), 1));
  const actual = onFormatDate(fecha);
  
  return {
    inicio,
    actual
  }
}

export const getDiaActual = () => {

}

//input: new Date()  -----> output: "20/12/2024"
export const onFormatDatePicker = (date?: Date): string => {
  return !date
    ? ""
    : date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
};

export const _formatDate = (date: Date, format: string) => {
  let s = "";

  switch (format) {
    case ",":
      s = `${date.getFullYear()},${date.getMonth() + 1},${date.getDate()}`;
      break;
    case "/":
      s = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
      break;
    case "-":
      s = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      break;
    default:
      break;
  }

  return s;
};

export const _formatDateWithZero = (date: Date, format: string) => {
  let s = "";

  switch (format) {
    case ",":
      s = `${date.getFullYear()},${date.getMonth() + 1},${date.getDate()}`;
      break;
    case "/":
      s = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
      break;
    case "-":
      s = `${date.getFullYear()}-${date.getMonth() + 1 < 10
        ? "0" + date.getMonth() + 1
        : date.getMonth() + 1
        }-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;
      break;
    default:
      break;
  }

  return s;
};

export const infoDatePicker: any = {
  ...defaultDatePickerStrings,
  months: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octtubre",
    "Noviembre",
    "Diciembre",
  ],
  shortMonths: [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ],
  shortDays: ["D", "L", "M", "M", "J", "V", "S"],
  days: [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ],
  isRequiredErrorMessage: "Seleccione una fecha válida",
};
export const _formatDate_DDMMYY = (date?: Date): string => {
  return !date
    ? ""
    : (date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`) +
    "/" +
    (date.getMonth() + 1 > 9
      ? date.getMonth() + 1
      : `0${date.getMonth() + 1}`) +
    "/" +
    date.getFullYear();
};

//input: "25/01/1996"  -----> output: "1996/01/25"
export const parseDateFromString = (d: string) => {
  let part = d.split("/");

  let year = !isNaN(part[2] as any) ? parseInt(part[2] as any) : 0;
  let month = !isNaN(part[1] as any) ? parseInt(part[1] as any) : 0;
  let day = !isNaN(part[0] as any) ? parseInt(part[0] as any) : 0;
  return year + "/" + month + "/" + day;
};

export const parseDateFromStringWithScore = (d: string) => {
  let part = d.split("-");

  let year = !isNaN(part[2] as any) ? parseInt(part[2] as any) : 0;
  let month = !isNaN(part[1] as any) ? parseInt(part[1] as any) : 0;
  let day = !isNaN(part[0] as any) ? parseInt(part[0] as any) : 0;
  return year + "/" + month + "/" + day;
};

export const parseDateFromStringWithComa = (fecha: string): string => {
  // Convertir la cadena de fecha en formato "dd,mm,yyyy" a un objeto Date
  const partes = fecha.split(',');

  // Validar que la fecha tiene el formato correcto
  if (partes.length !== 3) {
    throw new Error('El formato de fecha debe ser dd,mm,yyyy');
  }

  const [dia, mes, anio] = partes.map(Number);

  // Crear un objeto Date (Nota: los meses en JavaScript comienzan desde 0, por eso restamos 1)
  const fechaDate = new Date(anio, mes - 1, dia);

  // Obtener el año en formato de dos dígitos
  const anioCorto = fechaDate.getFullYear().toString().slice(-2);

  // Formatear la fecha en formato "dd/mm/yy"
  const fechaFormateada = `${String(dia).padStart(2, '0')}/${String(mes).padStart(2, '0')}/${anioCorto}`;

  return fechaFormateada;
}

export const newParseDateFromString = (d: string) => {
  let part = d.split(",");
  let year = !isNaN(part[2] as any) ? parseInt(part[2] as any) : 0;
  let month = !isNaN(part[1] as any) ? parseInt(part[1] as any) : 0;
  let day = !isNaN(part[0] as any) ? parseInt(part[0] as any) : 0;

  return year + "/" + month + "/" + day;
};

//input:"2024-01-10"  -----> output: Date(year, month, day)
export const _parseDateFromString = (d: string, separacion: string = ",") => {
  let fecha = null;

  if (d === undefined) {
    return fecha;
  }
  let part = d?.split(separacion);

  if (part.length < 3) {
    return undefined;
  }

  let year = !isNaN(part[0] as any) ? parseInt(part[0] as any) : 0;
  let month = !isNaN(part[1] as any) ? parseInt(part[1] as any) - 1 : 0;
  let day = !isNaN(part[2] as any) ? parseInt(part[2] as any) : 0;

  fecha = new Date(year, month, day);

  return fecha;
};

export function formatDateString(inputString: string) {
  // Verificar si la cadena de entrada es válida
  if (typeof inputString !== "string") {
    return ""; // O podrías devolver un mensaje de error o lanzar una excepción aquí
  }

  // Dividir la cadena en día, mes y año
  const parts = inputString.split("-");

  // Verificar si la cadena tiene el formato correcto
  if (parts.length !== 3) {
    return ""; // O manejar el caso de error según sea necesario
  }

  // Formatear la cadena en el formato "dd/mm/yyyy"
  return `${parts[0]}/${parts[1]}/${parts[2]}`;
}

export function formatDate(inputString: string) {
  // Verificar si la cadena de entrada es válida
  if (typeof inputString !== "string") {
    return ""; // O podrías devolver un mensaje de error o lanzar una excepción aquí
  }

  // Dividir la cadena en día, mes y año
  const parts = inputString.split("/");

  // Verificar si la cadena tiene el formato correcto
  if (parts.length !== 3) {
    return ""; // O manejar el caso de error según sea necesario
  }

  // Formatear la cadena en el formato "yyyy-mm-dd"
  return `${parts[2]}-${parts[1]}-${parts[0]}`;
}

export const getFormattedTime = (date: Date | null): string => {
  if (!date) {
    return "";
  }
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};

export function parseStringToDate(inputString: string) {
  // Verificar si la cadena de entrada es válida
  if (!inputString || typeof inputString !== "string") {
    return null; // Devolver null si la cadena no es válida o es null
  }

  // Dividir la cadena en día, mes y año
  const parts = inputString.split("/");

  // Verificar si la cadena tiene el formato correcto
  if (parts.length !== 3) {
    return null; // Devolver null si el formato no es correcto
  }

  // Obtener los componentes de la fecha
  const day = parseInt(parts[0]);
  const month = parseInt(parts[1]) - 1; // Restar 1 al mes ya que los meses en JavaScript son base 0
  const year = parseInt(parts[2]);

  // Crear y devolver un objeto Date
  return new Date(year, month, day);
}

export function formatStringDate(inputString: string) {
  // Verificar si la cadena de entrada es válida
  if (typeof inputString !== "string") {
    return ""; // O podrías devolver un mensaje de error o lanzar una excepción aquí
  }

  // Dividir la cadena en fecha y hora, utilizando el carácter "T" como separador
  const datePart = inputString.split("T")[0];

  // Dividir la parte de la fecha en año, mes y día
  const parts = datePart.split("-");

  // Verificar si la cadena tiene el formato correcto
  if (parts.length !== 3) {
    return ""; // O manejar el caso de error según sea necesario
  }

  // Formatear la cadena en el formato "día/mes/año"
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

export const formatearFecha = (fecha: string) => {
  // Parsea la fecha en formato 'YYYY-MM-DD' a un objeto Date
  const date = new Date(fecha);
  // Obtiene el día, mes y año en formato UTC
  const day = date.getUTCDate().toString().padStart(2, "0");
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0"); // Se suma 1 al mes porque los meses van de 0 a 11 en JavaScript
  const year = date.getUTCFullYear();
  // Retorna la fecha formateada en el formato 'DD-MM-YYYY'
  return `${day}-${month}-${year}`;
};

//input: "1996-01-25"  -----> output: "25/1/2024"
export const reemplazarFormatDate = (d: string) => {
  let fecha = "";

  console.log("+++++++++++ fecha reeemplazada (1) +++++++++++++");
  console.log(d);

  if (d !== undefined && d !== null) {
    let part = d.split("-");

    //let part = d.replace("-", "/");

    let year = !isNaN(part[2] as any) ? parseInt(part[0] as any) : 0;
    let month = !isNaN(part[1] as any) ? parseInt(part[1] as any) : 0;
    let day = !isNaN(part[0] as any) ? parseInt(part[2] as any) : 0;

    //output: "25/1/1996"
    fecha = day + "/" + month + "/" + year;
  }

  return fecha;
};

// input: "1998-09-18"  -----> output: "1998/09/18"
export const formatDateToYearMonthDay5 = (dateString: string): string => {
  if (typeof dateString !== "string") {
    return ""; // Manejo de error para entradas no válidas
  }

  const parts = dateString.split("-");
  if (parts.length !== 3) {
    return ""; // Manejo de error para formato incorrecto
  }

  const year = parts[0];
  const month = parts[1];
  const day = parts[2];

  return `${year}/${month}/${day}`;
};

export const formatDateToYearMonthDay2 = (dateString: string): string => {
  if (typeof dateString !== "string") {
    return ""; // Manejo de error para entradas no válidas
  }

  const parts = dateString.split("/");
  if (parts.length !== 3) {
    return ""; // Manejo de error para formato incorrecto
  }

  const day = parts[0].padStart(2, "0");
  const month = parts[1].padStart(2, "0");
  const year = parts[2];

  return `${year}-${month}-${day}`;
};

export function formatDateWithCurrentTime(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}