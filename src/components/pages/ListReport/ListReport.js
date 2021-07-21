import { Table, TableRow, TableHead, Cell } from "../../style/ListReportStyle";

const ListReport = () => {
    return (
        <Table>
            <TableRow>
                <TableHead>Nombre Completo</TableHead>
                <TableHead>Fecha de perdida</TableHead>
                <TableHead>Elemento</TableHead>
                <TableHead>Descripcion</TableHead>
                <TableHead>Contacto</TableHead>
            </TableRow>
            <TableRow>
                <Cell>Jhon steven saavedra</Cell>
                <Cell>24/08/2021</Cell>
                <Cell>celular</Cell>
                <Cell>un celular rojo con funda negra y al prenderlo tiene un fondo de pantalla con tonalidades rojas</Cell>
                <Cell>121221212</Cell>
            </TableRow>
            <TableRow>
                <Cell>German Rodrigo Diaz Olarte</Cell>
                <Cell>15/09/2021</Cell>
                <Cell>maleta</Cell>
                <Cell>un celular rojo con funda negra y al prenderlo tiene un fondo de pantalla con tonalidades rojas</Cell>
                <Cell>121221212</Cell>
            </TableRow>
        </Table>
    );
}
 
export default ListReport;