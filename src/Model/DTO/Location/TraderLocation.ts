import { LocationT } from '../../../Model/DTO/Location/LocationT'
export interface TraderLocation extends LocationT {
    DateTime: Date;
}
//heredo de LocationT porque no necesito la fecha y hora para mostrar la ubicacion del cliente