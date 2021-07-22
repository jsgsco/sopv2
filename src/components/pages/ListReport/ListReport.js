import {Content, Table, Caption, Row, Head, Hcell, Cell, Body } from "../../style/ListReportStyle";

const ListReport = () => {
    return (
        <Content>
            <Table>
                <Caption>Lista de objetos</Caption>
                <Head>
                    <Row>
                        <Hcell>Id</Hcell>
                        <Hcell>Nombre Completo</Hcell>
                        <Hcell>Fecha de perdida</Hcell>
                        <Hcell>Elemento</Hcell>
                        <Hcell>Descripcion</Hcell>
                        <Hcell>Contacto</Hcell>
                    </Row>
                </Head>
                <Body>
                    <Row>
                        <Cell>1</Cell>
                        <Cell>Jhon steven saavedra</Cell>
                        <Cell>24/08/2021</Cell>
                        <Cell>celular</Cell>
                        <Cell>un celular rojo con funda negra y al prenderlo tiene un fondo de pantalla con tonalidades rojas</Cell>
                        <Cell>1222122122</Cell>
                    </Row>
                    <Row>
                        <Cell>2</Cell>
                        <Cell>German Rodrigo Diaz Olarte</Cell>
                        <Cell>15/09/2021</Cell>
                        <Cell>maleta</Cell>
                        <Cell>un celular rojo con funda negra y al prenderlo tiene un fondo de pantalla con tonalidades rojas</Cell>
                        <Cell>1222122122</Cell>
                    </Row>
                </Body>
            </Table>
        </Content>
    );
}
 
export default ListReport;