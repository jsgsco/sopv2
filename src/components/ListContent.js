import { Helmet } from 'react-helmet';
import { usePanel } from '../context/PanelContext';
import { db } from '../firebase';
import { Content, Table, Row, Head, Hcell, Cell, Body, BtnAccion } from './style/Tables'


const ListContent = ({list, setList}) => {

    const { refreshInfo, setRefreshInfo, tableInfo } = usePanel()

    const deleteInfo = async (id) => {
        try {
            await db.collection('items').doc(id).delete()
            setRefreshInfo(!refreshInfo)
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
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
                        <Hcell>Accion</Hcell>
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
                                <Cell>
                                    <BtnAccion
                                        type="button"
                                        onClick={()=> deleteInfo(info.id)}
                                    >Eliminar</BtnAccion>
                                </Cell>
                            </Row>
                        ))
                    }
                </Body>
            </Table>
            <BtnAccion
                mt
                type="button"
                onClick={() => setList(!list)}
            >Volver a Registro de Objetos</BtnAccion>
        </Content>
     );
}
 
export default ListContent;