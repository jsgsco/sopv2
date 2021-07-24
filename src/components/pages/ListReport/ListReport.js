import { Helmet } from 'react-helmet';
import { usePanel } from '../../../context/PanelContext';
import { Content, Table, Row, Head, Hcell, Cell, Body, BtnLink } from '../../style/Tables'

const ListReport = () => {

    const { tableInfo } = usePanel()

    return !tableInfo ? null : (
        <Content>
            <Helmet>
                <title>Lista de Objetos</title>
            </Helmet>
            <Table>
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
                    {
                        tableInfo.map(info => (
                            <Row key={info.id}>
                                <Cell>{info.id}</Cell>
                                <Cell>{info.name}</Cell>
                                <Cell>{info.date}</Cell>
                                <Cell>{info.element}</Cell>
                                <Cell>{info.description}</Cell>
                                <Cell>{info.contact}</Cell>
                            </Row>
                        ))
                    }
                </Body>
            </Table>
                <BtnLink
                    to="/iniciar-sesion"
                >¿Eres administrador? ingresa ahora</BtnLink>
        </Content>
    );
}
 
export default ListReport;